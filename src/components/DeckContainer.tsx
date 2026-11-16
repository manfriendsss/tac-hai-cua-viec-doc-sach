import React from 'react';
import { Slide1Title } from '../slides/Slide1Title';
import { Slide2Roadmap } from '../slides/Slide2Roadmap';
import { Slide3StatsIntro } from '../slides/Slide3StatsIntro';
import { Slide4StatsDetails } from '../slides/Slide4StatsDetails';
import { Slide5ToolsIntro } from '../slides/Slide5ToolsIntro';
import { Slide6ToolsCompare } from '../slides/Slide6ToolsCompare';
import { Slide7HarmIntro } from '../slides/Slide7HarmIntro';
import { Slide8HarmMind } from '../slides/Slide8HarmMind';
import { Slide9HarmLife } from '../slides/Slide9HarmLife';
import { Slide10WhyQuit } from '../slides/Slide10WhyQuit';
import { Slide11HowToInfect } from '../slides/Slide11HowToInfect';
import { Slide12Conclusion } from '../slides/Slide12Conclusion';

export const DeckContainer: React.FC = () => {
  const slideTitles = [
    { n: 1, title: 'Bìa: Phá Vỡ Tỉ Lệ Vàng Vitruvius' },
    { n: 2, title: 'Lộ Trình: 5 Quy Luật Hình Học Cảnh Tỉnh' },
    { n: 3, title: 'Phần 01: Khảo Cứu Hình Học Sussex & Yale' },
    { n: 4, title: 'Hai Quy Luật Tỉ Lệ Gây Hoang Mang (-68% & +2 Năm)' },
    { n: 5, title: 'Phần 02: Tam Thể Khí Cụ Làm Lệch Trục' },
    { n: 6, title: 'Đặt Lên Bàn Cân 3 Khí Cụ Đọc Sách' },
    { n: 7, title: 'Phần 03: 7 Biến Chứng Phá Vỡ Hình Thể' },
    { n: 8, title: 'Biến Chứng Tâm Thần & Não Bộ (1-4)' },
    { n: 9, title: 'Biến Chứng Đời Sống, Tài Chính & Toilet (5-7)' },
    { n: 10, title: 'Phần 04: Vì Sao 90% Thoát Nạn Nhờ Bỏ Cuộc?' },
    { n: 11, title: 'Phần 05: 4 Bước Nhiễm Độc Sách Đúng Cách' },
    { n: 12, title: 'Epilogus: Lời Chúc Phúc Độc Địa & Vấn Đáp' }
  ];

  return (
    <div id="deck-container">
      
      {/* 16:9 Aspect Constraint Viewport */}
      <div className="deck-viewport">
        
        {/* Top Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill" id="progress-bar"></div>
        </div>

        {/* Floating Codex Sanguine Badge */}
        <div className="deck-top-badge" title="Da Vinci #3: Codex Sanguine">
          <span>⭕</span>
          <span>CODEX SANGUINE • VITRUVIUS 1490</span>
        </div>

        {/* 12 Slides */}
        <div className="slides-wrapper">
          <Slide1Title />
          <Slide2Roadmap />
          <Slide3StatsIntro />
          <Slide4StatsDetails />
          <Slide5ToolsIntro />
          <Slide6ToolsCompare />
          <Slide7HarmIntro />
          <Slide8HarmMind />
          <Slide9HarmLife />
          <Slide10WhyQuit />
          <Slide11HowToInfect />
          <Slide12Conclusion />
        </div>

        {/* Bottom Control Bar */}
        <div className="control-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            
            {/* Prev Slide */}
            <button
              id="prev-slide-btn"
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof (window as any).prevSlide === 'function') {
                  (window as any).prevSlide();
                }
              }}
              title="Lùi slide (Mũi tên trái / ArrowLeft)"
            >
              <svg viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Slide */}
            <button
              id="next-slide-btn"
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof (window as any).nextSlide === 'function') {
                  (window as any).nextSlide();
                }
              }}
              title="Tiếp theo (Mũi tên phải / Phím cách)"
            >
              <svg viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Interactive Slide Counter with Popover Picker */}
            <div className="slide-counter-wrapper">
              <span
                className="clickable-counter"
                id="counter"
                onClick={(e) => {
                  if (typeof (window as any).toggleSlidePicker === 'function') {
                    (window as any).toggleSlidePicker(e);
                  }
                }}
                title="Bấm để chuyển nhanh tới slide bất kỳ"
              >
                1 / 12
              </span>

              {/* Popover Grid */}
              <div
                className="slide-picker-popover"
                id="slide-picker"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="slide-picker-header">
                  <span className="slide-picker-title">Chuyển Đến Slide (1 - 12)</span>
                  <button
                    className="slide-picker-close"
                    onClick={(e) => {
                      if (typeof (window as any).closeSlidePicker === 'function') {
                        (window as any).closeSlidePicker(e);
                      }
                    }}
                    title="Đóng"
                  >
                    ✕
                  </button>
                </div>

                <div className="slide-picker-grid">
                  {slideTitles.map((s) => (
                    <button
                      key={s.n}
                      className="slide-picker-btn"
                      data-slide-target={s.n}
                      onClick={(e) => {
                        if (typeof (window as any).jumpToSlide === 'function') {
                          (window as any).jumpToSlide(s.n, e);
                        }
                      }}
                      title={s.title}
                    >
                      {s.n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Fullscreen Button */}
          <div>
            <button
              id="fullscreen-btn"
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof (window as any).toggleFullscreen === 'function') {
                  (window as any).toggleFullscreen();
                }
              }}
              title="Toàn màn hình (Phím F)"
            >
              <svg viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
