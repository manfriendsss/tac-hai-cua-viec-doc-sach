// @ts-nocheck
// Interactive Deck Engine with 3D Book Page Flip & Pen Writing Reveals

export function initDeckEngine(): () => void {
  let currentSlide = 1;
  let currentStep = 0;
  let isPageFlipping = false;
  const totalSlides = 8;

  const slideTitles = [
    'Bìa: Tác Hại Của Việc Đọc Sách',
    'Tổng Quan: 5 Nội Dung Chính',
    'Phần 01: 3 Con Số Đáng Sợ',
    'Phần 02: 3 Cách Đọc Sách Nguy Hiểm',
    'Phần 03: 7 Rắc Rối Khi Lỡ Nghiện Sách',
    'Phần 04: Vì Sao 90% Thoát Nạn Thành Công?',
    'Phần 05: 4 Mẹo Dễ Ợt Để Nghiện Đọc Sách',
    'Epilogue: Lời Chúc Cho Người Nghiện Sách & Q&A'
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

  function updateStepVisuals(slideEl: HTMLElement | null) {
    if (!slideEl) return;
    slideEl.setAttribute('data-current-step', String(currentStep));

    // Handle universal step-cards
    const stepCards = Array.from(slideEl.querySelectorAll<HTMLElement>('[data-step-card]'));
    if (stepCards.length > 0) {
      const maxSteps = getSlideMaxSteps(slideEl);
      stepCards.forEach((card) => {
        const cardStep = parseInt(card.getAttribute('data-step-card') || '0', 10);
        card.classList.remove('step-hidden', 'step-spotlight', 'step-docked', 'step-dimmed');

        if (currentStep === 0) {
          card.classList.add('step-hidden');
        } else if (currentStep === maxSteps && currentSlide === 2) {
          // Slide 2 Step 6: All sub-cards displayed together with main card!
          card.classList.add('step-docked');
        } else if (cardStep === currentStep) {
          card.classList.add('step-spotlight');
        } else if (cardStep < currentStep) {
          card.classList.add('step-docked');
        } else {
          card.classList.add('step-hidden');
        }
      });
    }

    // Handle custom elements with data-step-reveal (e.g. Slide 6 Title at step 1)
    const stepReveals = Array.from(slideEl.querySelectorAll<HTMLElement>('[data-step-reveal]'));
    if (stepReveals.length > 0) {
      stepReveals.forEach((el) => {
        const revealStep = parseInt(el.getAttribute('data-step-reveal') || '0', 10);
        if (currentStep >= revealStep) {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
          el.style.pointerEvents = 'auto';
        } else {
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
        }
      });
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
  }

  function goToSlide(n: number, direction?: 'forward' | 'backward') {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    if (n === currentSlide) return;
    if (isPageFlipping) return;

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
      }, 740);
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
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleDocClick);
  };
}
