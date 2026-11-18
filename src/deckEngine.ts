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
      activeTextEl.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
        l.style.clipPath = 'none';
        l.style.opacity = '1';
      });
      activeTextEl = null;
    }
  }

  // Ensures text is divided into isolated lines (.write-line inside .write-line-row)
  // so that each line reveals strictly left-to-right, top line first, bottom line second.
  function prepareTextLines(textEl: HTMLElement): HTMLElement[] {
    let existingLines = Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
    if (existingLines.length > 0) {
      existingLines.forEach(l => {
        if (!l.parentElement?.classList.contains('write-line-row')) {
          const row = document.createElement('div');
          row.className = 'write-line-row';
          l.parentElement?.insertBefore(row, l);
          row.appendChild(l);
        }
      });
      return existingLines;
    }

    const rawHtml = textEl.getAttribute('data-raw-content') || textEl.innerHTML;
    if (!textEl.hasAttribute('data-raw-content')) {
      textEl.setAttribute('data-raw-content', rawHtml);
    }

    // Explicit <br>
    if (/<br\s*\/?>/i.test(rawHtml)) {
      const parts = rawHtml.split(/<br\s*\/?>/i);
      textEl.innerHTML = parts
        .map(p => `<div class="write-line-row"><span class="write-line">${p.trim()}</span></div>`)
        .join('');
      return Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
    }

    // Dynamic word-level wrapping measurement
    const words = (textEl.textContent || '').trim().split(/\s+/).filter(Boolean);
    if (words.length <= 1) {
      textEl.innerHTML = `<div class="write-line-row"><span class="write-line">${textEl.innerHTML.trim()}</span></div>`;
      return Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
    }

    textEl.innerHTML = words.map((w, i) => `<span data-measure-w="${i}" style="display:inline-block;">${w}</span> `).join('');
    const wordSpans = Array.from(textEl.querySelectorAll<HTMLElement>('[data-measure-w]'));

    const lineGroups: string[][] = [];
    let currentGroup: string[] = [];
    let lastTop = -99999;

    wordSpans.forEach(sp => {
      const top = Math.round(sp.getBoundingClientRect().top);
      if (Math.abs(top - lastTop) > 6) {
        if (currentGroup.length > 0) {
          lineGroups.push(currentGroup);
        }
        currentGroup = [sp.textContent || ''];
        lastTop = top;
      } else {
        currentGroup.push(sp.textContent || '');
      }
    });
    if (currentGroup.length > 0) {
      lineGroups.push(currentGroup);
    }

    textEl.innerHTML = lineGroups.map(grp => 
      `<div class="write-line-row"><span class="write-line">${grp.join(' ')}</span></div>`
    ).join('');

    return Array.from(textEl.querySelectorAll<HTMLElement>('.write-line'));
  }

  function animateQuillHandwriting(container: HTMLElement) {
    stopCurrentHandwriting();

    // 1. Animated number counter (e.g. Slide 3 Card 1: -68%)
    const counterEl = container.querySelector<HTMLElement>('[data-counter-target]');
    if (counterEl) {
      const targetStr = counterEl.getAttribute('data-counter-target') || '-68%';
      const isNegative = targetStr.startsWith('-');
      const targetNum = parseInt(targetStr.replace(/[^0-9]/g, ''), 10) || 68;
      const countDuration = 950;
      const countStart = performance.now();
      function countFrame(now: number) {
        const elapsed = now - countStart;
        const p = Math.min(1, elapsed / countDuration);
        const ease = 1 - Math.pow(1 - p, 3);
        const currentVal = Math.round(targetNum * ease);
        counterEl.textContent = `${isNegative ? '-' : ''}${currentVal}%`;
        if (p < 1) {
          requestAnimationFrame(countFrame);
        } else {
          counterEl.textContent = targetStr;
        }
      }
      requestAnimationFrame(countFrame);
    }

    // 2. Quill Handwriting Animation
    const textEl = container.classList.contains('pen-write-anim')
      ? container
      : container.querySelector<HTMLElement>('.pen-write-anim');

    if (!textEl) return;

    activeTextEl = textEl;
    textEl.style.position = 'relative';
    textEl.style.opacity = '1';

    // Measure font size for proportional quill scaling
    const compStyle = window.getComputedStyle(textEl);
    const fontSize = parseFloat(compStyle.fontSize) || 24;
    const scaleRatio = Math.max(0.65, Math.min(2.5, fontSize / 28));

    // Ensure all lines are isolated as .write-line spans so each line reveals strictly left-to-right
    const lineEls = prepareTextLines(textEl);

    lineEls.forEach(l => {
      l.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
      l.style.opacity = '1';
    });
    textEl.style.clipPath = 'none';

    const quill = document.createElement('div');
    quill.className = 'active-quill-writer';
    quill.innerHTML = `
      <div class="quill-pen-img"></div>
      <div class="quill-nib-glow"></div>
    `;
    textEl.appendChild(quill);
    activeQuillEl = quill;

    // Wait 1 frame so layout measurements are accurate
    requestAnimationFrame(() => {
      if (activeTextEl !== textEl) return;

      const textRect = textEl.getBoundingClientRect();
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
      lineEls.forEach(l => {
        const range = document.createRange();
        range.selectNodeContents(l);
        const r = range.getBoundingClientRect();
        const rect = (r.width > 0 && r.height > 0) ? r : l.getBoundingClientRect();

        lines.push({
          el: l,
          startX: rect.left - textRect.left,
          width: Math.max(10, rect.width),
          baselineY: (rect.top - textRect.top) + (rect.height * 0.72),
          textLen: Math.max(1, (l.textContent || '').trim().length)
        });
      });

      if (lines.length === 0) {
        textEl.style.clipPath = 'none';
        quill.remove();
        return;
      }

      // Check whether this element is a slide title or card content
      const isSlideTitle = 
        Boolean(textEl.closest('h1, h2, [data-slide-title], .slide-1-title-col, .slide-8-title-col')) &&
        !Boolean(textEl.closest('[data-step-card], .step-card'));

      // Check for Slide 1 dramatic pause (fast line 1, hesitate pause, punchy line 2)
      const hasDramaticPause = 
        textEl.getAttribute('data-pause-between-lines') === 'true' || 
        textEl.closest('[data-pause-between-lines="true"]') !== null;

      const totalChars = lines.reduce((acc, l) => acc + l.textLen, 0);

      // Card text speed: ~32ms per char
      // Slide title runs 2x slower: exactly 64ms per char (chạy chậm x2)
      const cardMsPerChar = 32;
      const titleMsPerChar = cardMsPerChar * 2;
      const msPerChar = isSlideTitle ? titleMsPerChar : cardMsPerChar;

      let totalWritingTime = totalChars * msPerChar;
      if (isSlideTitle) {
        totalWritingTime = Math.max(1400, Math.min(3800, totalWritingTime));
      } else {
        totalWritingTime = Math.max(700, Math.min(1800, totalWritingTime));
      }

      const returnDuration = isSlideTitle ? 180 : 120;
      const dramaticPauseDuration = 650;

      interface LineSchedule {
        lineIdx: number;
        writeStart: number;
        writeEnd: number;
        returnEnd?: number;
      }

      const schedule: LineSchedule[] = [];
      let schedTime = 0;

      for (let i = 0; i < lines.length; i++) {
        const lineWriteDuration = (lines[i].textLen / totalChars) * totalWritingTime;
        const writeStart = schedTime;
        const writeEnd = schedTime + lineWriteDuration;
        schedTime = writeEnd;

        let returnEnd: number | undefined = undefined;
        if (i < lines.length - 1) {
          const isDramaticPauseLine = hasDramaticPause && i === 0;
          const retDuration = isDramaticPauseLine ? dramaticPauseDuration : returnDuration;
          returnEnd = schedTime + retDuration;
          schedTime = returnEnd;
        }

        schedule.push({
          lineIdx: i,
          writeStart,
          writeEnd,
          returnEnd
        });
      }

      const totalDuration = schedTime;
      const startTime = performance.now();

      function frame(now: number) {
        if (activeTextEl !== textEl) return;

        const elapsed = now - startTime;

        if (elapsed >= totalDuration) {
          lines.forEach(l => {
            l.el.style.clipPath = 'none';
            l.el.style.opacity = '1';
          });
          textEl.style.clipPath = 'none';
          textEl.style.opacity = '1';

          quill.style.transition = 'all 0.4s ease';
          quill.style.transform = `translateY(-14px) scale(${scaleRatio * 0.9}) rotate(-22deg)`;
          quill.style.opacity = '0';

          setTimeout(() => {
            if (quill.parentNode) quill.remove();
            if (activeQuillEl === quill) activeQuillEl = null;
          }, 450);

          activeHandwriteRaf = null;
          activeTextEl = null;

          // If on Slide 1 and finished writing, trigger sequential stamps!
          if (hasDramaticPause || (currentSlide === 1 && currentStep === 1)) {
            triggerSlide1StampsAnimation();
          }
          return;
        }

        for (let i = 0; i < schedule.length; i++) {
          const seg = schedule[i];

          if (elapsed < seg.writeStart) {
            lines[i].el.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
          } else if (elapsed <= seg.writeEnd) {
            // Line i is actively being written: lines before it are full, lines after it are hidden
            for (let p = 0; p < i; p++) {
              lines[p].el.style.clipPath = 'none';
            }
            for (let f = i + 1; f < lines.length; f++) {
              lines[f].el.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            }

            const lineFraction = Math.max(0, Math.min(1, (elapsed - seg.writeStart) / (seg.writeEnd - seg.writeStart)));
            lines[i].el.style.clipPath = `polygon(0 0, ${lineFraction * 100}% 0, ${lineFraction * 100}% 100%, 0 100%)`;

            // Bút theo dòng: ngòi bút lướt chính xác theo từng chữ từ trái qua phải
            const currLine = lines[i];
            const currentX = currLine.startX + lineFraction * currLine.width;
            const bobY = Math.sin(lineFraction * Math.PI * 16) * 1.8;
            const tilt = -14 + Math.cos(lineFraction * Math.PI * 14) * 3;

            quill.style.left = `${currentX - nibOffsetX}px`;
            quill.style.top = `${currLine.baselineY - nibOffsetY + bobY}px`;
            quill.style.transform = `scale(${scaleRatio}) rotate(${tilt}deg)`;
            quill.style.opacity = '1';
            break;

          } else if (seg.returnEnd && elapsed <= seg.returnEnd) {
            // Carriage return or pause between Line i and Line i+1
            for (let p = 0; p <= i; p++) {
              lines[p].el.style.clipPath = 'none';
            }
            for (let f = i + 1; f < lines.length; f++) {
              lines[f].el.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            }

            const p = (elapsed - seg.writeEnd) / (seg.returnEnd - seg.writeEnd);
            const currLine = lines[i];
            const nextLine = lines[i + 1];

            if (hasDramaticPause && i === 0) {
              const hoverBob = Math.sin(p * Math.PI * 8) * 3 - 3;
              const hoverTilt = -18 + Math.sin(p * Math.PI * 6) * 4;
              const endX = currLine.startX + currLine.width;
              quill.style.left = `${endX - nibOffsetX}px`;
              quill.style.top = `${currLine.baselineY - nibOffsetY + hoverBob}px`;
              quill.style.transform = `scale(${scaleRatio}) rotate(${hoverTilt}deg)`;
            } else {
              const ease = 0.5 - 0.5 * Math.cos(p * Math.PI);
              const endX = currLine.startX + currLine.width;
              const startNextX = nextLine.startX;
              const currentX = endX * (1 - ease) + startNextX * ease;
              const currentY = currLine.baselineY * (1 - ease) + nextLine.baselineY * ease;
              const liftY = -12 * Math.sin(p * Math.PI);
              const tilt = -14 - 10 * Math.sin(p * Math.PI);

              quill.style.left = `${currentX - nibOffsetX}px`;
              quill.style.top = `${currentY - nibOffsetY + liftY}px`;
              quill.style.transform = `scale(${scaleRatio}) rotate(${tilt}deg)`;
            }
            quill.style.opacity = '1';
            break;
          }
        }

        activeHandwriteRaf = requestAnimationFrame(frame);
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

    if (isPageFlipping) {
      return;
    }

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
            const rawContent = penText.getAttribute('data-raw-content');
            if (rawContent) {
              penText.innerHTML = rawContent;
            }
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

    // Handle custom elements with data-step-reveal (e.g. Slide 1 and Slide 8 Spotlight Titles at step 1)
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
            penText.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
              l.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            });
          }
        }
      });
    }

    // Step 0: For Slides 2..7, animate the main slide title on initial slide arrival
    if (currentStep === 0) {
      if (currentSlide >= 2 && currentSlide <= 7) {
        const slideTitleEl = slideEl.querySelector<HTMLElement>('h1.pen-write-anim, h2.pen-write-anim, [data-slide-title].pen-write-anim');
        if (slideTitleEl && !spotlightCardToAnimate) {
          spotlightCardToAnimate = slideTitleEl;
        }
      }
    } else {
      // Ensure slide titles outside cards and outside the active spotlight element remain completely visible
      const slideTitles = slideEl.querySelectorAll<HTMLElement>('h1.pen-write-anim, h2.pen-write-anim, [data-slide-title].pen-write-anim');
      slideTitles.forEach(t => {
        if (spotlightCardToAnimate && (spotlightCardToAnimate === t || spotlightCardToAnimate.contains(t))) {
          return;
        }
        if (!t.closest('[data-step-card], .step-card')) {
          t.style.clipPath = 'none';
          t.style.opacity = '1';
          t.querySelectorAll<HTMLElement>('.write-line').forEach(l => {
            l.style.clipPath = 'none';
            l.style.opacity = '1';
          });
        }
      });
    }

    if (spotlightCardToAnimate) {
      animateQuillHandwriting(spotlightCardToAnimate);
    } else {
      stopCurrentHandwriting();
    }
  }

  function playStampAudioThud() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // 1. Bass impact (rubber membrane thud)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.16);

      gain.gain.setValueAtTime(0.65, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);

      // 2. Paper noise friction
      const bufferSize = Math.floor(ctx.sampleRate * 0.08);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      noise.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {
      // Audio autoplay gracefully handled
    }
  }

  function triggerSlide1StampsAnimation() {
    const stamp1 = document.getElementById('slide1Stamp1');
    const stamp2 = document.getElementById('slide1Stamp2');
    const slide1 = document.getElementById('slide-1');
    if (!stamp1 || !stamp2) return;

    // Reset stamps
    stamp1.classList.remove('animate-stamp-realistic');
    stamp2.classList.remove('animate-stamp-realistic');
    stamp1.style.opacity = '0';
    stamp2.style.opacity = '0';

    // Stamp 1: HỒ SƠ TỐI MẬT (slams first)
    setTimeout(() => {
      const endAngle1 = (Math.random() * 4 - 8).toFixed(1); // -8deg to -4deg
      const startAngle1 = (parseFloat(endAngle1) - 10).toFixed(1);
      const midAngle1 = (parseFloat(endAngle1) + 2).toFixed(1);

      stamp1.style.setProperty('--start-rot', `${startAngle1}deg`);
      stamp1.style.setProperty('--mid-rot', `${midAngle1}deg`);
      stamp1.style.setProperty('--end-rot', `${endAngle1}deg`);
      void stamp1.offsetWidth;
      stamp1.classList.add('animate-stamp-realistic');
      stamp1.style.opacity = '1';

      if (slide1) {
        slide1.classList.remove('animate-shake');
        setTimeout(() => {
          void slide1.offsetWidth;
          slide1.classList.add('animate-shake');
          playStampAudioThud();
        }, 200);
      }
    }, 120);

    // Stamp 2: LƯU HÀNH NỘI BỘ (slams 450ms after stamp 1)
    setTimeout(() => {
      const endAngle2 = (Math.random() * 4 + 4).toFixed(1); // +4deg to +8deg
      const startAngle2 = (parseFloat(endAngle2) - 10).toFixed(1);
      const midAngle2 = (parseFloat(endAngle2) + 2).toFixed(1);

      stamp2.style.setProperty('--start-rot', `${startAngle2}deg`);
      stamp2.style.setProperty('--mid-rot', `${midAngle2}deg`);
      stamp2.style.setProperty('--end-rot', `${endAngle2}deg`);
      void stamp2.offsetWidth;
      stamp2.classList.add('animate-stamp-realistic');
      stamp2.style.opacity = '1';

      if (slide1) {
        slide1.classList.remove('animate-shake');
        setTimeout(() => {
          void slide1.offsetWidth;
          slide1.classList.add('animate-shake');
          playStampAudioThud();
        }, 200);
      }
    }, 580);
  }

  function triggerSlide8StampAnimation() {
    const stampEl = document.getElementById('caseClosedStampElement');
    const slide8 = document.getElementById('slide-8');
    if (!stampEl) return;

    // Natural, authoritative stamp angle placed at top-right, strictly clear of character holding board
    const endAngle = -10;
    const startAngle = -20;
    const midAngle = -8;

    stampEl.style.setProperty('--start-rot', `${startAngle}deg`);
    stampEl.style.setProperty('--mid-rot', `${midAngle}deg`);
    stampEl.style.setProperty('--end-rot', `${endAngle}deg`);

    // Reset and trigger stamp slam animation
    stampEl.classList.remove('animate-stamp-realistic');
    void stampEl.offsetWidth;
    stampEl.classList.add('animate-stamp-realistic');

    // Trigger full screen/slide shake at impact time (~210ms) - identical to Slide 1
    if (slide8) {
      slide8.classList.remove('animate-shake');
      setTimeout(() => {
        void slide8.offsetWidth;
        slide8.classList.add('animate-shake');
        playStampAudioThud();
      }, 210);
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

    if (currentSlide === 8 && currentStep === 0) {
      setTimeout(triggerSlide8StampAnimation, 120);
    }

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
        if (currentSlide === 8 && currentStep === 0) {
          triggerSlide8StampAnimation();
        }
        updateStepVisuals(getCurrentSlideEl());
      }, 860);
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
