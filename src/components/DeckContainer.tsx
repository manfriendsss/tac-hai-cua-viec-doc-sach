import React from 'react';
import { Slide1Title } from '../slides/Slide1Title';
import { Slide2Roadmap } from '../slides/Slide2Roadmap';
import { Slide3StatsMerged } from '../slides/Slide3StatsMerged';
import { Slide4ToolsMerged } from '../slides/Slide4ToolsMerged';
import { Slide5HarmsMerged } from '../slides/Slide5HarmsMerged';
import { Slide6WhyQuit } from '../slides/Slide6WhyQuit';
import { Slide7HowToInfect } from '../slides/Slide7HowToInfect';
import { Slide8Conclusion } from '../slides/Slide8Conclusion';

export const DeckContainer: React.FC = () => {
  const slideTitles = [
    { n: 1, title: 'Bìa: Tác Hại Của Việc Đọc Sách (Tranh Vui Cuối Tuần)' },
    { n: 2, title: 'Tổng Quan: 5 Tác Hại Hài Hước (Chuẩn Slide Mẫu)' },
    { n: 3, title: 'Phần 01: Khoa Học Vạch Trần (-68% Stress & +23 Tháng)' },
    { n: 4, title: 'Phần 02: Tam Thể Khí Cụ (Sách Giấy, E-Reader & Sách Nói)' },
    { n: 5, title: 'Phần 03: 7 Biến Chứng Khi Lỡ "Nghiện" Sách Quá Sâu' },
    { n: 6, title: 'Phần 04: Vì Sao 90% Thoát Nạn Nhờ Bỏ Cuộc?' },
    { n: 7, title: 'Phần 05: 4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững' },
    { n: 8, title: 'Epilogue: Lời Chúc Phúc Cho Người Nghiện Sách & Q&A' }
  ];

  return (
    <div id="deck-container">
      
      {/* 16:9 Aspect Constraint Viewport */}
      <div className="deck-viewport">
        
        {/* Top Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill" id="progress-bar"></div>
        </div>

        {/* Floating Sunday Newspaper Strip Badge */}
        <div className="deck-top-badge" title="Sunday Newspaper Strip • Báo Tranh Vui Cuối Tuần">
          <span>📰</span>
          <span>TRANH VUI CHỦ NHẬT • TƯ DUY NGƯỢC</span>
        </div>

        {/* 8 Merged Slides */}
        <div className="slides-wrapper">
          <Slide1Title />
          <Slide2Roadmap />
          <Slide3StatsMerged />
          <Slide4ToolsMerged />
          <Slide5HarmsMerged />
          <Slide6WhyQuit />
          <Slide7HowToInfect />
          <Slide8Conclusion />
        </div>

        {/* Bottom Control Bar */}
        <div className="control-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* Prev Slide / Step */}
            <button
              id="prev-slide-btn"
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof (window as any).prevStepOrSlide === 'function') {
                  (window as any).prevStepOrSlide();
                } else if (typeof (window as any).prevSlide === 'function') {
                  (window as any).prevSlide();
                }
              }}
              title="Lùi (Mũi tên trái / ArrowLeft)"
            >
              <svg viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Slide / Step */}
            <button
              id="next-slide-btn"
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof (window as any).nextStepOrSlide === 'function') {
                  (window as any).nextStepOrSlide();
                } else if (typeof (window as any).nextSlide === 'function') {
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
                1 / 8
              </span>

              {/* Popover Grid */}
              <div
                className="slide-picker-popover"
                id="slide-picker"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="slide-picker-header">
                  <span className="slide-picker-title">Chuyển Đến Slide (1 - 8)</span>
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

                <div className="slide-picker-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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

            {/* Current Slide Title Display */}
            <div className="slide-title-display hidden md:inline">
              <span id="current-slide-title">Bìa: Tác Hại Của Việc Đọc Sách</span>
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
