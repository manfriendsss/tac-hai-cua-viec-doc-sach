import React from 'react';

export const Slide1Title: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-6 py-4 md:px-10 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="1"
      data-steps="3"
      id="slide-1"
    >
      {/* Top Newspaper Masthead */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg uppercase tracking-wider text-[#1f2937]">
            GÓC TRANH VUI CHỦ NHẬT • CHUYÊN ĐỀ ĐẶC BIỆT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] border-2 border-[#1f2937] px-4 py-1 rounded-full text-xs sm:text-sm md:text-base font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
            SỐ ĐẶC BIỆT: "TỰ HẠI NÃO"
          </span>
        </div>
      </div>

      {/* Main Slide Content: Asymmetric Balance (7 Cols Left, 5 Cols Right) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & Big Stat Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
          
          <div>
            <div className="inline-flex items-center bg-[#fee2e2] text-[#b91c1c] border-2 border-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] mb-2.5 rotate-[-1deg]">
              <span>CẢNH BÁO: CHẤT KÍCH THÍCH TRÍ TÒ MÒ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111827] leading-[1.08] font-comic-fredoka tracking-tight">
              Tác Hại Của <br />
              <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block rotate-1 shadow-[5px_5px_0px_#1f2937] mt-2">
                Việc Đọc Sách!
              </span>
            </h1>
          </div>

          {/* 3 Step-Reveal Feature Cards with BIG text */}
          <div className="grid grid-cols-3 gap-3 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-3.5 sm:p-4 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-xl sm:text-2xl md:text-3xl text-[#111827] ink-write-text">
                -68% STRESS
              </div>
              <div className="text-xs sm:text-sm md:text-base font-black text-zinc-800 mt-1.5 ink-write-text">
                Trong 6 phút
              </div>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-3.5 sm:p-4 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-xl sm:text-2xl md:text-3xl text-[#111827] ink-write-text">
                +23 THÁNG
              </div>
              <div className="text-xs sm:text-sm md:text-base font-black text-zinc-800 mt-1.5 ink-write-text">
                Tuổi thọ kéo dài
              </div>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-3.5 sm:p-4 text-center cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-xl sm:text-2xl md:text-3xl text-[#111827] ink-write-text">
                MIỄN DỊCH
              </div>
              <div className="text-xs sm:text-sm md:text-base font-black text-zinc-800 mt-1.5 ink-write-text">
                Kháng tin nhảm
              </div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Hero Illustration */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full comic-panel p-3 bg-white relative rotate-1 shadow-[6px_6px_0px_#1f2937]">
            <div className="w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/theme-3-claymation-3d.webp"
                alt="Nhân vật vác cuốn sách khổng lồ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-lg sm:text-xl text-[#1f2937] font-black leading-snug">
                "Chỉ định đọc vài trang trước khi ngủ... ai ngờ sách 'nặng' quá?!"
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="h-2"></div>

    </div>
  );
};
