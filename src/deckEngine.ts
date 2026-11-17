// @ts-nocheck
// Interactive Deck Engine with 3D Book Page Flip & Pen Writing Reveals

export function initDeckEngine(): () => void {
  let currentSlide = 1;
  let currentStep = 0;
  let isPageFlipping = false;
  const totalSlides = 8;

  const slideTitles = [
    'Bìa: Tác Hại Của Việc Đọc Sách',
    'Lộ Trình: 5 Giai Đoạn Điều Tra',
    'Phần 01: Những Thống Kê Khó Đỡ',
    'Phần 02: Đặt Lên Bàn Cân 3 Công Cụ Gây Nghiện',
    'Phần 03: 7 "Tác Hại" Kinh Hoàng',
    'Phần 04: Vì Sao 90% Bỏ Cuộc Giữa Chừng?',
    'Phần 05: 4 Bước "Nhiễm Độc" Sách Đúng Cách',
    'Kết Luận: Lời Chúc Phúc Độc Địa & Q&A'
  ];

  const progressBar = document.getElementById('progress-bar');
  const counter = document.getElementById('counter');
  const titleDisplay = document.getElementById('current-slide-title');

  // ==========================================================================
  // HANDWRITING SYNCHRONIZATION ENGINE: Bút lông vũ và chữ chạy song song thật chậm
  // ==========================================================================
  let activeHandwriteRaf: number | null = null;
  let activeQuillEl: HTMLElement | null = null;
  let activeTextEl: HTMLElement | null = null;

  function stopCurrentHandwriting() {
    if (activeHandwriteRaf !== null) {
      cancelAnimationFrame(activeHandwriteRaf);
      activeHandwriteRaf = null;
    }
    if (activeQuillEl) {
      activeQuillEl.remove();
      activeQuillEl = null;
    }
    if (activeTextEl) {
      activeTextEl.style.clipPath = 'none';
      activeTextEl.style.opacity = '1';
      activeTextEl = null;
    }
  }

  function animateQuillHandwriting(container: HTMLElement) {
    stopCurrentHandwriting();

    const textEl = container.classList.contains('pen-write-anim')
      ? container
      : container.querySelector<HTMLElement>('.pen-write-anim');

    if (!textEl) return;

    activeTextEl = textEl;
    textEl.style.position = 'relative';
    textEl.style.opacity = '1';
    container.style.position = 'relative';

    // Support multi-line handwriting: detect <br> tags or existing .write-line elements
    let lineEls = Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
    if (lineEls.length === 0) {
      if (textEl.innerHTML.includes('<br>') || textEl.innerHTML.includes('<br/>')) {
        const parts = textEl.innerHTML.split(/<br\s*\/?>/i);
        textEl.innerHTML = parts
          .map(p => `<span class="write-line" style="display:block; position:relative;">${p.trim()}</span>`)
          .join('');
        lineEls = Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
      }
    }

    if (lineEls.length > 0) {
      lineEls.forEach(l => {
        l.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        l.style.opacity = '1';
      });
      textEl.style.clipPath = 'none';
    } else {
      textEl.style.display = 'inline-block';
      textEl.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
    }

    const quill = document.createElement('div');
    quill.className = 'active-quill-writer';
    quill.innerHTML = `
      <div class="quill-pen-img"></div>
      <div class="quill-nib-glow"></div>
    `;
    container.appendChild(quill);
    activeQuillEl = quill;

    // Wait 1 frame so layout measurements are accurate
    requestAnimationFrame(() => {
      if (activeTextEl !== textEl) return;

      const containerRect = container.getBoundingClientRect();
      const nibOffsetX = 5;
      const nibOffsetY = 48;

      interface LineInfo {
        el: HTMLElement;
        startX: number;
        width: number;
        baselineY: number;
        textLen: number;
      }

      const lines: LineInfo[] = [];

      if (lineEls.length > 0) {
        lineEls.forEach(l => {
          const r = l.getBoundingClientRect();
          lines.push({
            el: l,
            startX: r.left - containerRect.left,
            width: r.width,
            baselineY: (r.top - containerRect.top) + (r.height * 0.72),
            textLen: Math.max(1, (l.textContent || '').trim().length)
          });
        });
      } else {
        const textRect = textEl.getBoundingClientRect();
        if (textRect.width <= 0) {
          textEl.style.clipPath = 'none';
          quill.remove();
          return;
        }
        lines.push({
          el: textEl,
          startX: textRect.left - containerRect.left,
          width: textRect.width,
          baselineY: (textRect.top - containerRect.top) + (textRect.height * 0.72),
          textLen: Math.max(1, (textEl.textContent || '').trim().length)
        });
      }

      const totalChars = lines.reduce((acc, l) => acc + l.textLen, 0);

      // Tốc độ viết nhanh hơn 1.5 lần theo yêu cầu
      const duration = Math.max(1300, Math.min(2300, totalChars * 55));
      const startTime = performance.now();

      // Cumulative line progress thresholds
      let accum = 0;
      const thresholds = lines.map(l => {
        accum += l.textLen;
        return accum / totalChars;
      });

      function frame(now: number) {
        if (activeTextEl !== textEl) return;

        const elapsed = now - startTime;
        const overallProgress = Math.min(1, elapsed / duration);

        // Find which line is active
        let activeIdx = 0;
        while (activeIdx < lines.length - 1 && overallProgress >= thresholds[activeIdx]) {
          activeIdx++;
        }

        const prevThreshold = activeIdx === 0 ? 0 : thresholds[activeIdx - 1];
        const nextThreshold = thresholds[activeIdx];
        const lineFraction = Math.max(0, Math.min(1, (overallProgress - prevThreshold) / (nextThreshold - prevThreshold)));

        // Update clip-path of all lines
        lines.forEach((l, idx) => {
          if (idx < activeIdx) {
            l.el.style.clipPath = 'none';
          } else if (idx > activeIdx) {
            l.el.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
          } else {
            l.el.style.clipPath = `polygon(0 0, ${lineFraction * 100}% 0, ${lineFraction * 100}% 100%, 0 100%)`;
          }
        });

        // BÚT THEO DÒNG: khi chữ xuống dòng thì bút cũng chuyển xuống dòng đó
        const currLine = lines[activeIdx];
        const currentX = currLine.startX + lineFraction * currLine.width;
        const bobY = Math.sin(lineFraction * Math.PI * 18) * 2.2;
        const tilt = -14 + Math.cos(lineFraction * Math.PI * 16) * 3.5;

        quill.style.left = `${currentX - nibOffsetX}px`;
        quill.style.top = `${currLine.baselineY - nibOffsetY + bobY}px`;
        quill.style.transform = `rotate(${tilt}deg)`;
        quill.style.opacity = '1';

        if (overallProgress < 1) {
          activeHandwriteRaf = requestAnimationFrame(frame);
        } else {
          lines.forEach(l => {
            l.el.style.clipPath = 'none';
          });
          textEl.style.clipPath = 'none';

          quill.style.transition = 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
          quill.style.transform = 'translateY(-14px) rotate(-22deg) scale(0.92)';
          quill.style.opacity = '0';

          setTimeout(() => {
            if (quill.parentNode) quill.remove();
            if (activeQuillEl === quill) activeQuillEl = null;
          }, 500);

          activeHandwriteRaf = null;
          activeTextEl = null;
        }
      }

      activeHandwriteRaf = requestAnimationFrame(frame);
    });
  }

  function getSlideMaxSteps(slideEl: HTMLElement | null): number {
    if (!slideEl) return 0;
    const stepsAttr = slideEl.getAttribute('data-steps');
    return stepsAttr ? parseInt(stepsAttr, 10) : 0;
  }

  function getCurrentSlideEl(): HTMLElement | null {
    return document.querySelector(`.slide[data-slide="${currentSlide}"]`);
  }

  function updateStepVisuals(slideEl: HTMLElement | null) {
    if (!slideEl) return;
    slideEl.setAttribute('data-current-step', String(currentStep));

    let spotlightCardToAnimate: HTMLElement | null = null;

    // Handle universal step-cards
    const stepCards = Array.from(slideEl.querySelectorAll<HTMLElement>('[data-step-card]'));
    if (stepCards.length > 0) {
      const maxSteps = getSlideMaxSteps(slideEl);
      stepCards.forEach((card) => {
        const cardStep = parseInt(card.getAttribute('data-step-card') || '0', 10);
        card.classList.remove('step-hidden', 'step-spotlight', 'step-docked', 'step-dimmed');

        const penText = card.querySelector<HTMLElement>('.pen-write-anim');

        if (currentStep === 0) {
          card.classList.add('step-hidden');
          if (penText) {
            penText.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            penText.style.opacity = '0.2';
            penText.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
              l.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            });
          }
        } else if (cardStep === currentStep) {
          card.classList.add('step-spotlight');
          spotlightCardToAnimate = card;
        } else if (cardStep < currentStep) {
          card.classList.add('step-docked');
          if (penText) {
            penText.style.clipPath = 'none';
            penText.style.opacity = '1';
            penText.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
              l.style.clipPath = 'none';
            });
          }
        } else {
          card.classList.add('step-hidden');
          if (penText) {
            penText.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            penText.style.opacity = '0.2';
            penText.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
              l.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            });
          }
        }
      });
    }

    // Handle custom elements with data-step-reveal (e.g. Slide 6 Title at step 1)
    const stepReveals = Array.from(slideEl.querySelectorAll<HTMLElement>('[data-step-reveal]'));
    if (stepReveals.length > 0) {
      stepReveals.forEach((el) => {
        const revealStep = parseInt(el.getAttribute('data-step-reveal') || '0', 10);
        const penText = el.querySelector<HTMLElement>('.pen-write-anim') || (el.classList.contains('pen-write-anim') ? el : null);
        if (currentStep >= revealStep) {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
          el.style.pointerEvents = 'auto';
          if (currentStep === revealStep && penText) {
            spotlightCardToAnimate = el;
          } else if (penText) {
            penText.style.clipPath = 'none';
            penText.style.opacity = '1';
          }
        } else {
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
          if (penText) {
            penText.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
          }
        }
      });
    }

    if (spotlightCardToAnimate) {
      animateQuillHandwriting(spotlightCardToAnimate);
    } else {
      stopCurrentHandwriting();
    }
  }

  function updateUI() {
    // 1. Update progress bar
    if (progressBar) {
      const pct = totalSlides > 1 ? ((currentSlide - 1) / (totalSlides - 1)) * 100 : 100;
      progressBar.style.width = `${pct}%`;
    }

    // 2. Update counter text
    if (counter) {
      counter.textContent = `${currentSlide} / ${totalSlides}`;
    }

    // 3. Update title display
    if (titleDisplay && slideTitles[currentSlide - 1]) {
      titleDisplay.textContent = slideTitles[currentSlide - 1];
    }

    // 4. Update picker active state
    const pickerBtns = document.querySelectorAll('.slide-picker-btn');
    pickerBtns.forEach((btn) => {
      const target = parseInt(btn.getAttribute('data-slide-target') || '0', 10);
      if (target === currentSlide) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 5. Update step visuals
    const currentSlideEl = getCurrentSlideEl();
    updateStepVisuals(currentSlideEl);

    // 6. Update browser URL hash
    window.location.hash = `slide-${currentSlide}`;

    // 7. Update book corner peel buttons (Inspired by book_page_flip)
    const cornerPrev = document.getElementById('book-corner-prev-btn');
    const cornerNext = document.getElementById('book-corner-next-btn');
    if (cornerPrev) {
      cornerPrev.style.display = currentSlide > 1 ? 'block' : 'none';
    }
    if (cornerNext) {
      cornerNext.style.display = currentSlide < totalSlides ? 'block' : 'none';
    }
  }

  function goToSlide(n: number, direction?: 'forward' | 'backward') {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    if (n === currentSlide) return;
    if (isPageFlipping) return;

    stopCurrentHandwriting();

    const oldSlideNum = currentSlide;
    const targetSlideNum = n;
    const dir = direction || (targetSlideNum > oldSlideNum ? 'forward' : 'backward');

    const oldSlideEl = document.querySelector(`.slide[data-slide="${oldSlideNum}"]`);
    const newSlideEl = document.querySelector(`.slide[data-slide="${targetSlideNum}"]`);

    currentSlide = targetSlideNum;
    currentStep = 0;
    isPageFlipping = true;

    if (oldSlideEl && newSlideEl) {
      // Clean previous flip classes
      document.querySelectorAll('.slide').forEach((s) => {
        s.classList.remove(
          'page-flip-exit-forward',
          'page-flip-enter-forward',
          'page-flip-exit-backward',
          'page-flip-enter-backward'
        );
      });

      if (dir === 'forward') {
        oldSlideEl.classList.add('page-flip-exit-forward');
        newSlideEl.classList.add('page-flip-enter-forward', 'active');
      } else {
        oldSlideEl.classList.add('page-flip-exit-backward');
        newSlideEl.classList.add('page-flip-enter-backward', 'active');
      }

      setTimeout(() => {
        document.querySelectorAll('.slide').forEach((s) => {
          const sNum = parseInt(s.getAttribute('data-slide') || '0', 10);
          s.classList.remove(
            'page-flip-exit-forward',
            'page-flip-enter-forward',
            'page-flip-exit-backward',
            'page-flip-enter-backward'
          );
          if (sNum === currentSlide) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
        isPageFlipping = false;
      }, 840);
    } else {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide) => {
        const slideNum = parseInt(slide.getAttribute('data-slide') || '0', 10);
        if (slideNum === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      isPageFlipping = false;
    }

    updateUI();
  }

  function nextSlide() {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1, 'forward');
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1, 'backward');
    }
  }

  function nextStepOrSlide() {
    const slideEl = getCurrentSlideEl();
    const maxSteps = getSlideMaxSteps(slideEl);

    if (currentStep < maxSteps) {
      currentStep++;
      updateStepVisuals(slideEl);
    } else {
      nextSlide();
    }
  }

  function prevStepOrSlide() {
    const slideEl = getCurrentSlideEl();

    if (currentStep > 0) {
      currentStep--;
      updateStepVisuals(slideEl);
    } else {
      prevSlide();
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  function toggleSlidePicker(e?: Event) {
    if (e) e.stopPropagation();
    const picker = document.getElementById('slide-picker');
    if (picker) {
      picker.classList.toggle('active');
    }
  }

  function closeSlidePicker(e?: Event) {
    if (e) e.stopPropagation();
    const picker = document.getElementById('slide-picker');
    if (picker) {
      picker.classList.remove('active');
    }
  }

  // Bind globals for inline onclick attributes
  window.jumpToSlide = (n: number, e?: Event) => {
    if (e) e.stopPropagation();
    goToSlide(n);
    closeSlidePicker();
  };
  window.goToSlide = goToSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.nextStepOrSlide = nextStepOrSlide;
  window.prevStepOrSlide = prevStepOrSlide;
  window.toggleFullscreen = toggleFullscreen;
  window.toggleSlidePicker = toggleSlidePicker;
  window.closeSlidePicker = closeSlidePicker;
  window.setSlideStep = (step: number) => {
    currentStep = step;
    updateStepVisuals(getCurrentSlideEl());
  };

  // Keyboard controls
  const handleKeyDown = (e: KeyboardEvent) => {
    if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'Enter':
        e.preventDefault();
        nextStepOrSlide();
        break;
      case 'ArrowLeft':
      case 'Backspace':
        e.preventDefault();
        prevStepOrSlide();
        break;
      case 'PageDown':
      case 'ArrowDown':
      case 'l':
      case 'j':
        e.preventDefault();
        nextSlide();
        break;
      case 'PageUp':
      case 'ArrowUp':
      case 'h':
      case 'k':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(1);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        closeSlidePicker();
        break;
      default:
        break;
    }
  };

  // Close popover when clicking anywhere else & handle card click
  const handleDocClick = (e: MouseEvent) => {
    const picker = document.getElementById('slide-picker');
    const counterBtn = document.getElementById('counter');
    if (picker && !picker.contains(e.target as Node) && e.target !== counterBtn) {
      closeSlidePicker();
    }

    // Direct card click support (Spotlight / Toggle)
    const cardTarget = (e.target as HTMLElement).closest<HTMLElement>('[data-step-card]');
    if (cardTarget) {
      const slideEl = getCurrentSlideEl();
      if (slideEl && slideEl.contains(cardTarget)) {
        const cardStep = parseInt(cardTarget.getAttribute('data-step-card') || '0', 10);
        const maxSteps = getSlideMaxSteps(slideEl);
        if (currentStep === cardStep) {
          currentStep = maxSteps;
        } else {
          currentStep = cardStep;
        }
        updateStepVisuals(slideEl);
      }
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleDocClick);

  // Attach antique manuscript leaf-back to each slide (Verso face for 3D page flip)
  const bookBackQuotes = [
    '"Sách là chất gây nghiện nguy hiểm nhất lịch sử nhân loại."',
    '"Lộ trình 30 phút vạch trần cơn ác mộng đọc sách."',
    '"Mua sách và đọc sách là hai bộ môn thể thao độc lập."',
    '"Vác 2 cuốn sách giấy chẳng khác nào tập tạ miễn phí."',
    '"Người đọc sách không bao giờ ăn trộm, và kẻ trộm không bao giờ đọc sách."',
    '"Đọc sách đến trang thứ 3, não tự động ngắt cầu dao quá tải."',
    '"Quy tắc 5 trang: Thực hiện cú lừa thế kỷ với chính não bộ."',
    '"Chúc bạn sớm mắc bệnh đọc sách và không bao giờ chữa khỏi!"'
  ];

  document.querySelectorAll<HTMLElement>('.slide').forEach((slide) => {
    if (!slide.querySelector('.slide-leaf-back')) {
      const slideNum = parseInt(slide.getAttribute('data-slide') || '1', 10);
      const quote = bookBackQuotes[slideNum - 1] || bookBackQuotes[0];
      const leafBack = document.createElement('div');
      leafBack.className = 'slide-leaf-back';
      leafBack.innerHTML = `
        <div class="leaf-back-inner">
          <div class="leaf-back-grain"></div>
          <div class="leaf-back-ornament">❧ ❖ ☙</div>
          <div class="leaf-back-header">KỶ YẾU ĐIỀU TRA ĐẶC BIỆT</div>
          <div class="leaf-back-title">TÁC HẠI CỦA VIỆC ĐỌC SÁCH</div>
          <div class="leaf-back-quote">${quote}</div>
          <div class="leaf-back-page-num">— MẶT SAU TRANG ${slideNum} / ${totalSlides} —</div>
        </div>
      `;
      slide.appendChild(leafBack);
    }
  });

  // Drag / Swipe Gestures on Slides (Natural Page Turn Drag)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, .clickable-counter, .slide-picker-popover, .step-card, .book-corner-peel')) {
      return;
    }
    touchStartX = e.clientX;
    touchStartY = e.clientY;
    touchStartTime = performance.now();
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (touchStartTime === 0) return;
    const dx = e.clientX - touchStartX;
    const dy = e.clientY - touchStartY;
    const dt = performance.now() - touchStartTime;
    touchStartTime = 0;

    // Horizontal swipe threshold: 60px within 800ms
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 800) {
      if (dx < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const slidesWrapper = document.querySelector('.slides-wrapper');
  if (slidesWrapper) {
    slidesWrapper.addEventListener('pointerdown', handlePointerDown as EventListener);
    window.addEventListener('pointerup', handlePointerUp as EventListener);
  }

  // Read URL hash on initial load
  const hash = window.location.hash;
  const match = hash.match(/slide-(\d+)/);
  if (match && match[1]) {
    const target = parseInt(match[1], 10);
    if (target >= 1 && target <= totalSlides) {
      currentSlide = target;
    }
  }

  // Initial draw: set active slide without animation
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    const slideNum = parseInt(slide.getAttribute('data-slide') || '0', 10);
    if (slideNum === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  updateUI();

  return () => {
    stopCurrentHandwriting();
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleDocClick);
    if (slidesWrapper) {
      slidesWrapper.removeEventListener('pointerdown', handlePointerDown as EventListener);
    }
    window.removeEventListener('pointerup', handlePointerUp as EventListener);
  };
}
