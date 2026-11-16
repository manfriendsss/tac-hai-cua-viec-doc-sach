// @ts-nocheck
// Interactive Deck Engine with Step Motion & Spotlight Transitions
// Inspired by Thuyết trình cà phê engine

export function initDeckEngine(): () => void {
  let currentSlide = 1;
  let currentStep = 0;
  const totalSlides = 8;

  const slideTitles = [
    'Bìa: Tác Hại Của Việc Đọc Sách (Tranh Vui Cuối Tuần)',
    'Tổng Quan: 5 Tác Hại Hài Hước (Chuẩn Slide Mẫu)',
    'Phần 01: Khoa Học Vạch Trần (-68% Stress & +23 Tháng)',
    'Phần 02: Tam Thể Khí Cụ (Sách Giấy, E-Reader & Sách Nói)',
    'Phần 03: 7 Biến Chứng Khi Lỡ "Nghiện" Sách Quá Sâu',
    'Phần 04: Vì Sao 90% Thoát Nạn Nhờ Bỏ Cuộc?',
    'Phần 05: 4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững',
    'Epilogue: Lời Chúc Phúc Cho Người Nghiện Sách & Q&A'
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

    // Handle slide-specific step animations
    if (currentSlide === 3) {
      // Slide 3: Sussex & Yale Cards Spotlight
      const c1 = document.getElementById('s3-card-1');
      const c2 = document.getElementById('s3-card-2');
      if (c1 && c2) {
        if (currentStep === 1) {
          c1.classList.add('spotlight-active');
          c2.classList.remove('spotlight-active');
          c1.style.transform = 'scale(1.03)';
          c1.style.boxShadow = '8px 8px 0px #1f2937';
          c2.style.opacity = '0.6';
          c2.style.transform = 'scale(0.98)';
        } else if (currentStep === 2) {
          c1.classList.remove('spotlight-active');
          c2.classList.add('spotlight-active');
          c2.style.transform = 'scale(1.03)';
          c2.style.boxShadow = '8px 8px 0px #1f2937';
          c1.style.opacity = '0.6';
          c1.style.transform = 'scale(0.98)';
        } else {
          c1.classList.remove('spotlight-active');
          c2.classList.remove('spotlight-active');
          c1.style.transform = '';
          c1.style.boxShadow = '';
          c1.style.opacity = '';
          c2.style.transform = '';
          c2.style.boxShadow = '';
          c2.style.opacity = '';
        }
      }
    } else if (currentSlide === 4) {
      // Slide 4: 3 Mediums Cards
      const cards = [
        document.getElementById('s4-card-1'),
        document.getElementById('s4-card-2'),
        document.getElementById('s4-card-3')
      ];
      cards.forEach((card, idx) => {
        if (!card) return;
        if (currentStep === idx + 1) {
          card.style.transform = 'scale(1.04)';
          card.style.boxShadow = '7px 7px 0px #1f2937';
          card.style.opacity = '1';
        } else if (currentStep > 0) {
          card.style.transform = 'scale(0.98)';
          card.style.boxShadow = '';
          card.style.opacity = '0.65';
        } else {
          card.style.transform = '';
          card.style.boxShadow = '';
          card.style.opacity = '';
        }
      });
    } else if (currentSlide === 5) {
      // Slide 5: 7 Harms Highlight
      if (currentStep >= 1 && currentStep <= 7) {
        const targetHarm = document.getElementById(`s5-harm-${currentStep}`);
        if (targetHarm) {
          targetHarm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          targetHarm.classList.add('spotlight-active');
        }
      }
    }
  }

  function updateUI() {
    // 1. Update slides visibility
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      const slideNum = parseInt(slide.getAttribute('data-slide') || '0', 10);
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
    currentSlide = n;
    currentStep = 0;
    updateUI();
  }

  function nextSlide() {
    if (currentSlide < totalSlides) {
      currentSlide++;
      currentStep = 0;
      updateUI();
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      currentSlide--;
      currentStep = 0;
      updateUI();
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

  // Close popover when clicking anywhere else
  const handleDocClick = (e: MouseEvent) => {
    const picker = document.getElementById('slide-picker');
    const counterBtn = document.getElementById('counter');
    if (picker && !picker.contains(e.target as Node) && e.target !== counterBtn) {
      closeSlidePicker();
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
