import React from 'react';

export const Slide3StatsMerged: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="3" 
      data-steps="3"
      id="slide-3"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#e0f2fe] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 01: 3 CON SỐ ĐÁNG SỢ
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Large Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              3 Con Số Đáng Sợ
            </h2>
          </div>

          {/* 3 Large, Clean, Punchy Cards */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1: -68% Stress */}
            <div 
              data-step-card="1"
              className="step-card comic-panel-coral p-4 flex items-center gap-4 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-4xl sm:text-5xl text-red-600 flex-shrink-0 leading-none">
                -68%
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] pen-write-anim">
                  Giảm Cực Nhiều Căng Thẳng
                </h3>
                <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                  Não quá bình tĩnh. Sếp mắng bạn vẫn cười, tắc đường vẫn vui vẻ!
                </p>
              </div>
            </div>

            {/* Card 2: Tsundoku */}
            <div 
              data-step-card="2"
              className="step-card comic-panel-yellow p-4 flex items-center gap-4 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-2xl sm:text-3xl text-amber-800 flex-shrink-0 leading-tight text-center bg-white px-2.5 py-1.5 rounded-xl border-2 border-[#1f2937]">
                TSUN<br/>DOKU
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] pen-write-anim">
                  Mua Sách Nhưng Không Đọc
                </h3>
                <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                  Mua cả núi sách về ngắm. Mua sách và đọc sách là hai sở thích khác nhau!
                </p>
              </div>
            </div>

            {/* Card 3: +2 Years */}
            <div 
              data-step-card="3"
              className="step-card comic-panel-sky p-4 flex items-center gap-4 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-4xl sm:text-5xl text-blue-600 flex-shrink-0 leading-none">
                +2 NĂM
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] pen-write-anim">
                  Sống Lâu Hơn 2 Năm
                </h3>
                <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                  Hậu quả là tốn thêm 2 năm tiền ăn, tiền điện thoại và tiền đi làm!
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/slide3-claymation.webp"
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
