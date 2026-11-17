import React from 'react';

export const Slide8Conclusion: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="8" 
      data-steps="3"
      id="slide-8"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fde047] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          TỔNG KẾT & GIAO LƯU
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div className="inline-block self-start bg-[#fee2e2] text-red-800 border-2 border-[#1f2937] px-4 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
            LỜI CHÚC CUỐI CÙNG
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight font-comic-fredoka">
            Chúc Bạn Tiếp Tục <br />
            <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block shadow-[5px_5px_0px_#1f2937] mt-2">
              "Tự Hại" Bản Thân Mỗi Ngày!
            </span>
          </h2>

          <div className="speech-bubble p-4 sm:p-5 bg-white shadow-[4px_4px_0px_#1f2937]">
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#1f2937] leading-snug">
              Đọc sách sẽ giết chết con người lười biếng cũ kỹ của bạn, để tạo ra một phiên bản thông minh và bản lĩnh hơn nhiều lần!
            </p>
          </div>

          {/* 3 Step Action Cards */}
          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-3.5 flex-1 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <span className="font-comic-fredoka font-black text-xs text-amber-900 uppercase">#01</span>
              <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1 pen-write-anim">
                Hỏi & Đáp (Q&A)
              </span>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-3.5 flex-1 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <span className="font-comic-fredoka font-black text-xs text-blue-900 uppercase">#02</span>
              <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1 pen-write-anim">
                Gợi Ý Sách Hay
              </span>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-3.5 flex-1 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <span className="font-comic-fredoka font-black text-xs text-emerald-900 uppercase">#03</span>
              <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1 pen-write-anim">
                Lan Tỏa Sách
              </span>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/slide8-claymation.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="h-4"></div>

    </div>
  );
};
