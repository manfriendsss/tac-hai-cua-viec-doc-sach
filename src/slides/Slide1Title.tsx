import React from 'react';

export const Slide1Title: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="1"
      data-steps="3"
      id="slide-1"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="font-comic-fredoka font-black text-sm sm:text-base uppercase tracking-wider text-[#1f2937]">
          BẢN TIN CẢNH BÁO ĐẶC BIỆT
        </span>
        <span className="bg-[#fef08a] border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
          SỐ NGUY HIỂM: ĐỌC SÁCH
        </span>
      </div>

      {/* Main Slide Content: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div>
            <div className="inline-flex items-center bg-[#fee2e2] text-[#b91c1c] border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] mb-2">
              CẢNH BÁO: MỘT THỨ RẤT NGUY HIỂM!
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111827] leading-[1.05] font-comic-fredoka tracking-tight">
              Tác Hại Của <br />
              <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block rotate-1 shadow-[5px_5px_0px_#1f2937] mt-2">
                Việc Đọc Sách!
              </span>
            </h1>

            <div className="speech-bubble p-4 mt-3 bg-white max-w-xl shadow-[4px_4px_0px_#1f2937]">
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#1f2937] leading-snug font-comic-neue">
                Một khi đã dính vào sách, bạn sẽ không bao giờ còn là một người bình thường nữa!
              </p>
            </div>
          </div>

          {/* 3 Step-Reveal Feature Cards */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-3.5 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-2xl sm:text-3xl text-red-600 pen-write-anim">
                -68%
              </div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1">
                Căng Thẳng
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-0.5">Não quá bình tĩnh</div>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-3.5 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-2xl sm:text-3xl text-blue-600 pen-write-anim">
                +2 NĂM
              </div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1">
                Tuổi Thọ
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-0.5">Tốn thêm tiền ăn</div>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-3.5 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-2xl sm:text-3xl text-emerald-700 pen-write-anim">
                100%
              </div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1">
                Thông Minh
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-0.5">Không ai lừa được</div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/theme-3-claymation-3d.webp"
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
