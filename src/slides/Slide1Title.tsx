import React from 'react';

export const Slide1Title: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-6 py-4 md:px-10 md:py-5 font-comic-neue h-full justify-between" 
      data-slide="1"
      data-steps="3"
      id="slide-1"
    >
      {/* Top Newspaper Masthead */}
      <div className="flex justify-between items-center z-10 border-b-2 sm:border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">📰</span>
          <span className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base uppercase tracking-wider text-[#1f2937]">
            GÓC TRANH VUI CHỦ NHẬT • CHUYÊN ĐỀ ĐẶC BIỆT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] border-2 border-[#1f2937] px-3 py-0.5 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
            SỐ ĐẶC BIỆT: "TỰ HẠI NÃO"
          </span>
        </div>
      </div>

      {/* Main Slide Content: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-5 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & Humorous Blurb */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-2.5">
          
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#fee2e2] text-[#b91c1c] border-2 border-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] mb-1.5 rotate-[-1deg]">
              <span>⚠️</span>
              <span>CẢNH BÁO: CHẤT KÍCH THÍCH TRÍ TÒ MÒ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] leading-[1.05] font-comic-fredoka tracking-tight">
              Tác Hại Của <br />
              <span className="text-[#b45309] bg-[#fef08a] px-3.5 py-0.5 rounded-2xl border-3 border-[#1f2937] inline-block rotate-1 shadow-[4px_4px_0px_#1f2937] mt-1.5">
                Việc Đọc Sách!
              </span>
            </h1>

            {/* Cloud Thought Bubble */}
            <div className="cloud-bubble p-3 sm:p-4 mt-2.5 bg-white max-w-xl shadow-[3px_3px_0px_#1f2937]">
              <p className="text-sm sm:text-base font-bold text-[#374151] leading-relaxed font-comic-neue">
                "(Thực ra là ích lợi siêu to khổng lồ, nhưng hãy thử nhìn theo lối tư duy ngược hài hước để xem bạn đang 'tự hại' bản thân ra sao nhé!)"
              </p>
            </div>
          </div>

          {/* 3 Step-Reveal Feature Cards */}
          <div className="grid grid-cols-3 gap-2.5 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-2.5 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="text-xl sm:text-2xl">📉</div>
              <div className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base text-[#111827] mt-0.5">
                -68% STRESS
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-zinc-700">Trong 6 phút</div>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-2.5 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="text-xl sm:text-2xl">⏳</div>
              <div className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base text-[#111827] mt-0.5">
                +23 THÁNG
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-zinc-700">Tuổi thọ kéo dài</div>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-2.5 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="text-xl sm:text-2xl">🛡️</div>
              <div className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base text-[#111827] mt-0.5">
                MIỄN DỊCH
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-zinc-700">Kháng tin đồn nhảm</div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: 3D Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full comic-panel p-2.5 bg-white relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/theme-3-claymation-3d.webp"
                alt="Đất sét 3D Claymation: Nhân vật vác cuốn sách khổng lồ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="font-comic-hand text-base sm:text-lg text-[#1f2937] font-black">
                "Chỉ định đọc vài trang trước khi ngủ... ai ngờ sách 'nặng' quá?!" 🧸📚
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="h-2"></div>

    </div>
  );
};
