// @ts-nocheck
// Interactive Deck Engine for Da Vinci Codex Slide Presentation

export function initDeckEngine(): () => void {
  let currentSlide = 1;
  const totalSlides = 12;

  const progressBar = document.getElementById('progress-bar');
  const counter = document.getElementById('counter');

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

    // 5. Update browser URL hash
    window.location.hash = `slide-${currentSlide}`;
  }

  function goToSlide(n: number) {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    currentSlide = n;
    updateUI();
  }

  function nextSlide() {
    if (currentSlide < totalSlides) {
      currentSlide++;
      updateUI();
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      currentSlide--;
      updateUI();
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
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.toggleFullscreen = toggleFullscreen;
  window.toggleSlidePicker = toggleSlidePicker;
  window.closeSlidePicker = closeSlidePicker;

  // Keyboard controls
  const handleKeyDown = (e: KeyboardEvent) => {
    // If input is focused, don't hijack
    if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
      case 'Enter':
      case 'l':
      case 'j':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
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
    }
  };

  // Close picker on outside click
  const handleDocumentClick = (e: MouseEvent) => {
    const picker = document.getElementById('slide-picker');
    const counterEl = document.getElementById('counter');
    if (picker && !picker.contains(e.target as Node) && e.target !== counterEl) {
      picker.classList.remove('active');
    }
  };

  // Read initial hash if present
  const hash = window.location.hash;
  const match = hash.match(/slide-(\d+)/);
  if (match) {
    const parsed = parseInt(match[1], 10);
    if (parsed >= 1 && parsed <= totalSlides) {
      currentSlide = parsed;
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleDocumentClick);

  // Initial render
  setTimeout(updateUI, 50);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleDocumentClick);
  };
}
