// @ts-nocheck
// Interactive Deck Engine with Step Motion & Spotlight Transitions
// Inspired by Thuyết trình cà phê engine

export function initDeckEngine(): () => void {
  let currentSlide = 1;
  let currentStep = 0;
  const totalSlides = 8;

  const slideTitles = [
    'Bìa: Tác Hại Của Việc Đọc Sách',
    'Tổng Quan: 5 Tác Hại Hài Hước',
    'Phần 01: Khoa Học Vạch Mặt (-68% Stress & +23 Tháng & Tsundoku)',
    'Phần 02: Tam Thể Khí Cụ (Sách Giấy, E-Reader & Sách Nói)',
    'Phần 03: 7 Biến Chứng Khi Lỡ "Nhiễm Độc" Sách Quá Sâu',
    'Phần 04: Vì Sao 90% Thoát Nạn Thành Công?',
    'Phần 05: 4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững',
    'Epilogue: Lời Chúc Phúc Cho Người Đọc Sách & Q&A'
  ];

  const progressBar = document.getElementById('progress-bar');
  const counter = document.getElementById('counter');
  const titleDisplay = document.getElementById('current-slide-title');

  function getSlideMaxSteps(slideEl: HTMLElement | null): number {
    if (!slideEl) return 0;
    const stepsAttr = slideEl.getAttribute('data-steps');
    return stepsAttr ? parseInt(stepsAttr, 10) : 0;
  }

  function getCurrentSlideEl(): HTMLElement | null {
    return document.querySelector(`.slide[data-slide="${currentSlide}"]`);
  }

  let activeTypewriterTimer: any = null;
  let activeTypewriterCleanups: (() => void)[] = [];

  function cancelActiveTypewriter() {
    if (activeTypewriterTimer) {
      clearInterval(activeTypewriterTimer);
      activeTypewriterTimer = null;
    }
    if (activeTypewriterCleanups.length > 0) {
      activeTypewriterCleanups.forEach((fn) => fn());
      activeTypewriterCleanups = [];
    }
  }

  function startTypewriterForCard(card: HTMLElement) {
    cancelActiveTypewriter();

    const writeEls = Array.from(card.querySelectorAll<HTMLElement>('.ink-write-text'));
    if (writeEls.length === 0) return;

    const items = writeEls.map((el) => {
      let fullHtml = el.getAttribute('data-full-html');
      if (!fullHtml) {
        fullHtml = el.innerHTML;
        el.setAttribute('data-full-html', fullHtml);
      }

      let segments: { tag: string; className: string; text: string }[] = [];
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length > 0) {
        segments = children.map((c) => ({
          tag: c.tagName.toLowerCase(),
          className: c.className,
          text: c.textContent || ''
        }));
      } else {
        segments = [{
          tag: 'span',
          className: '',
          text: el.textContent || ''
        }];
      }

      const totalLen = segments.reduce((acc, s) => acc + s.text.length, 0);

      activeTypewriterCleanups.push(() => {
        el.innerHTML = fullHtml!;
      });

      el.innerHTML = '';

      return {
        el,
        fullHtml,
        segments,
        totalLen
      };
    });

    let currentItemIdx = 0;
    let currentCharCount = 0;

    activeTypewriterTimer = setInterval(() => {
      if (currentItemIdx >= items.length) {
        cancelActiveTypewriter();
        return;
      }

      const item = items[currentItemIdx];
      currentCharCount += 1;

      if (currentCharCount <= item.totalLen) {
        let remaining = currentCharCount;
        let html = '';
        for (const seg of item.segments) {
          if (remaining <= 0) break;
          const len = seg.text.length;
          if (remaining >= len) {
            html += `<${seg.tag} class="${seg.className}">${seg.text}</${seg.tag}>`;
            remaining -= len;
          } else {
            const part = seg.text.slice(0, remaining);
            html += `<${seg.tag} class="${seg.className}">${part}</${seg.tag}>`;
            remaining = 0;
            break;
          }
        }
        item.el.innerHTML = html + `<span class="writing-quill-cursor"></span>`;
      } else {
        const quill = item.el.querySelector('.writing-quill-cursor');
        if (quill) {
          quill.classList.add('quill-lifting');
        }
        setTimeout(() => {
          item.el.innerHTML = item.fullHtml;
        }, 280);

        currentItemIdx++;
        currentCharCount = 0;
      }
    }, 32);
  }

  function updateStepVisuals(slideEl: HTMLElement | null) {
    if (!slideEl) return;
    slideEl.setAttribute('data-current-step', String(currentStep));

    const slideNum = parseInt(slideEl.getAttribute('data-slide') || '0', 10);

    // Universal step-card reveal handler
    const stepCards = Array.from(slideEl.querySelectorAll<HTMLElement>('[data-step-card]'));
    let spotlightCard: HTMLElement | null = null;

    if (stepCards.length > 0) {
      stepCards.forEach((card) => {
        const cardStep = parseInt(card.getAttribute('data-step-card') || '0', 10);
        card.classList.remove('step-hidden', 'step-spotlight', 'step-docked', 'step-dimmed', 'step-all-revealed');

        if (currentStep === 0) {
          // Step 0: All step-cards hidden initially
          card.classList.add('step-hidden');
          card.querySelectorAll<HTMLElement>('.ink-write-text').forEach((el) => {
            const fullHtml = el.getAttribute('data-full-html');
            if (fullHtml) el.innerHTML = fullHtml;
          });
        } else if (slideNum === 2 && currentStep === 6) {
          // Slide 2 Step 6: All main and sub cards reveal together!
          card.classList.add('step-all-revealed');
          card.querySelectorAll<HTMLElement>('.ink-write-text').forEach((el) => {
            const fullHtml = el.getAttribute('data-full-html');
            if (fullHtml) el.innerHTML = fullHtml;
          });
        } else if (cardStep === currentStep) {
          // Current step: In spotlight with quill writing effect!
          card.classList.add('step-spotlight');
          spotlightCard = card;
        } else if (cardStep < currentStep) {
          // Previous steps: Docked, staying solid as background
          card.classList.add('step-docked');
          card.querySelectorAll<HTMLElement>('.ink-write-text').forEach((el) => {
            const fullHtml = el.getAttribute('data-full-html');
            if (fullHtml) el.innerHTML = fullHtml;
          });
        } else {
          // Future steps: Hidden
          card.classList.add('step-hidden');
        }
      });
    }

    if (spotlightCard) {
      startTypewriterForCard(spotlightCard);
    } else {
      cancelActiveTypewriter();
    }
  }

  let isFlipping = false;

  function updateUI() {
    // 1. Update slides visibility
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      const slideNum = parseInt(slide.getAttribute('data-slide') || '0', 10);
      slide.classList.remove('page-flip-forward-out', 'page-flip-forward-in', 'page-flip-backward-out', 'page-flip-backward-in');
      if (slideNum === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 2. Update progress bar
    if (progressBar) {
      const pct = totalSlides > 1 ? ((currentSlide - 1) / (totalSlides - 1)) * 100 : 100;
      progressBar.style.width = `${pct}%`;
    }

    // 3. Update counter text
    if (counter) {
      counter.textContent = `${currentSlide} / ${totalSlides}`;
    }

    // 4. Update title display
    if (titleDisplay && slideTitles[currentSlide - 1]) {
      titleDisplay.textContent = slideTitles[currentSlide - 1];
    }

    // 5. Update picker active state
    const pickerBtns = document.querySelectorAll('.slide-picker-btn');
    pickerBtns.forEach((btn) => {
      const target = parseInt(btn.getAttribute('data-slide-target') || '0', 10);
      if (target === currentSlide) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 6. Update step visuals
    const currentSlideEl = getCurrentSlideEl();
    updateStepVisuals(currentSlideEl);

    // 7. Update browser URL hash
    window.location.hash = `slide-${currentSlide}`;
  }

  function goToSlide(n: number) {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    if (n === currentSlide || isFlipping) return;

    cancelActiveTypewriter();

    const oldSlide = currentSlide;
    const direction = n > oldSlide ? 'forward' : 'backward';
    const oldSlideEl = getCurrentSlideEl();

    currentSlide = n;
    currentStep = 0;
    const newSlideEl = getCurrentSlideEl();

    if (oldSlideEl && newSlideEl) {
      isFlipping = true;

      // Clean up previous transition classes
      document.querySelectorAll('.slide').forEach((s) => {
        s.classList.remove('page-flip-forward-out', 'page-flip-forward-in', 'page-flip-backward-out', 'page-flip-backward-in');
      });

      if (direction === 'forward') {
        oldSlideEl.classList.add('page-flip-forward-out');
        newSlideEl.classList.add('active', 'page-flip-forward-in');
      } else {
        oldSlideEl.classList.add('page-flip-backward-out');
        newSlideEl.classList.add('active', 'page-flip-backward-in');
      }

      // Update progress & labels immediately
      if (progressBar) {
        const pct = totalSlides > 1 ? ((currentSlide - 1) / (totalSlides - 1)) * 100 : 100;
        progressBar.style.width = `${pct}%`;
      }
      if (counter) {
        counter.textContent = `${currentSlide} / ${totalSlides}`;
      }
      if (titleDisplay && slideTitles[currentSlide - 1]) {
        titleDisplay.textContent = slideTitles[currentSlide - 1];
      }
      const pickerBtns = document.querySelectorAll('.slide-picker-btn');
      pickerBtns.forEach((btn) => {
        const target = parseInt(btn.getAttribute('data-slide-target') || '0', 10);
        if (target === currentSlide) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      updateStepVisuals(newSlideEl);
      window.location.hash = `slide-${currentSlide}`;

      // Complete page-flip animation after 1250ms
      setTimeout(() => {
        if (oldSlideEl) {
          oldSlideEl.classList.remove('active', 'page-flip-forward-out', 'page-flip-backward-out');
        }
        if (newSlideEl) {
          newSlideEl.classList.remove('page-flip-forward-in', 'page-flip-backward-in');
        }
        isFlipping = false;
      }, 1250);
    } else {
      updateUI();
    }
  }

  function nextSlide() {
    if (currentSlide < totalSlides && !isFlipping) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 1 && !isFlipping) {
      goToSlide(currentSlide - 1);
    }
  }

  function nextStepOrSlide() {
    if (isFlipping) return;
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
    if (isFlipping) return;
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
          // Toggle all cards docked for full overview
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

  // Read URL hash on initial load
  const hash = window.location.hash;
  const match = hash.match(/slide-(\d+)/);
  if (match && match[1]) {
    const target = parseInt(match[1], 10);
    if (target >= 1 && target <= totalSlides) {
      currentSlide = target;
    }
  }

  // Initial draw
  updateUI();

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleDocClick);
  };
}
