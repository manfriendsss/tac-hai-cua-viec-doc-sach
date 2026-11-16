import React from 'react';

export const Slide1Title: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-6 md:px-12 md:py-8 font-comic-neue h-full justify-between" 
      data-slide="1"
      data-steps="3"
      id="slide-1"
    >
      {/* Top Newspaper Masthead */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl sm:text-3xl">📰</span>
          <span className="font-comic-fredoka font-black text-sm md:text-base uppercase tracking-wider text-[#1f2937]">
            GÓC TRANH VUI CHỦ NHẬT • CHUYÊN ĐỀ ĐẶC BIỆT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
            SỐ ĐẶC BIỆT: "TỰ HẠI NÃO"
          </span>
        </div>
      </div>

      {/* Main Slide Content: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & Humorous Blurb */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fee2e2] text-[#b91c1c] border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] mb-2 rotate-[-1deg]">
              <span>⚠️</span>
              <span>CẢNH BÁO: CHẤT KÍCH THÍCH TRÍ TÒ MÒ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] font-comic-fredoka tracking-tight">
              Tác Hại Của <br />
              <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block rotate-1 shadow-[4px_4px_0px_#1f2937] mt-2">
                Việc Đọc Sách!
              </span>
            </h1>

            {/* Cloud Thought Bubble */}
            <div className="cloud-bubble p-4 sm:p-5 mt-4 bg-white max-w-xl shadow-[4px_4px_0px_#1f2937]">
              <p className="text-base sm:text-lg font-bold text-[#374151] leading-relaxed font-comic-neue">
                "(Thực ra là ích lợi siêu to khổng lồ, nhưng hãy thử nhìn theo lối tư duy ngược hài hước để xem bạn đang 'tự hại' bản thân ra sao nhé!)"
              </p>
            </div>
          </div>

          {/* 3 Step-Reveal Feature Cards */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-3 text-center cursor-pointer"
            >
              <div className="text-2xl">📉</div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-0.5">
                -68% STRESS
              </div>
              <div className="text-xs font-bold text-zinc-700 mt-0.5">Trong 6 phút</div>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-3 text-center cursor-pointer"
            >
              <div className="text-2xl">⏳</div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-0.5">
                +23 THÁNG
              </div>
              <div className="text-xs font-bold text-zinc-700 mt-0.5">Tuổi thọ kéo dài</div>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-3 text-center cursor-pointer"
            >
              <div className="text-2xl">🛡️</div>
              <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-0.5">
                MIỄN DỊCH
              </div>
              <div className="text-xs font-bold text-zinc-700 mt-0.5">Kháng tin đồn nhảm</div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Sunday Comic Strip Illustration */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full comic-panel p-3 bg-white relative rotate-1">
            <div className="w-full h-60 sm:h-72 rounded-xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/sunday-books-cat.webp"
                alt="Tranh vui báo chủ nhật: Sách, cà phê và chú mèo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-comic-hand text-lg sm:text-xl text-[#1f2937] font-black">
                "Chỉ định đọc 5 phút trước khi ngủ... ai ngờ đã 4 giờ sáng?!" ☕📖
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
