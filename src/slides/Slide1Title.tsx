import React from 'react';
import { motion } from 'framer-motion';

export const Slide1Title: React.FC = () => {
  return (
    <div className="slide active bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="1">
      
      {/* Top Newspaper Masthead */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📰</span>
          <span className="font-comic-fredoka font-bold text-xs md:text-sm uppercase tracking-wider text-[#1f2937]">
            GÓC TRANH VUI CHỦ NHẬT • BÁO CUỐI TUẦN
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] border-2 border-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937]">
            SỐ ĐẶC BIỆT: "TỰ HẠI NÃO"
          </span>
        </div>
      </div>

      {/* Main Slide Content: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & Humorous Blurb */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
          
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#fee2e2] text-[#b91c1c] border-2 border-[#1f2937] px-3 py-1 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937] mb-2 rotate-[-1deg]">
              <span>⚠️</span>
              <span>CẢNH BÁO: CHẤT KÍCH THÍCH TRÍ TÒ MÒ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] font-comic-fredoka tracking-tight">
              Tác Hại Của <br />
              <span className="text-[#b45309] bg-[#fef08a] px-3 py-0.5 rounded-2xl border-3 border-[#1f2937] inline-block rotate-1 shadow-[4px_4px_0px_#1f2937] mt-1">
                Việc Đọc Sách!
              </span>
            </h1>

            {/* Cloud Thought Bubble */}
            <div className="cloud-bubble p-4 mt-4 bg-white max-w-lg">
              <p className="text-sm md:text-base font-bold text-[#374151] leading-relaxed font-comic-neue">
                "(Thực ra là ích lợi siêu to khổng lồ, nhưng hãy thử nhìn theo lối tư duy ngược hài hước để xem bạn đang 'tự hại' bản thân ra sao nhé!)"
              </p>
            </div>
          </div>

          {/* Quick 3 Mini Pills */}
          <div className="grid grid-cols-3 gap-2.5 mt-1">
            <div className="comic-panel-yellow p-2.5 text-center">
              <div className="text-lg">📉</div>
              <div className="font-comic-fredoka font-bold text-xs text-[#111827]">-68% STRESS</div>
              <div className="text-[10px] font-bold text-zinc-600">Trong 6 phút</div>
            </div>
            <div className="comic-panel-sky p-2.5 text-center">
              <div className="text-lg">⏳</div>
              <div className="font-comic-fredoka font-bold text-xs text-[#111827]">+23 THÁNG</div>
              <div className="text-[10px] font-bold text-zinc-600">Tuổi thọ kéo dài</div>
            </div>
            <div className="comic-panel-mint p-2.5 text-center">
              <div className="text-lg">🛡️</div>
              <div className="font-comic-fredoka font-bold text-xs text-[#111827]">MIỄN DỊCH</div>
              <div className="text-[10px] font-bold text-zinc-600">Kháng tin đồn nhảm</div>
            </div>
          </div>

        </div>

        {/* Right 5 Columns: Sunday Comic Strip Illustration */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full comic-panel p-3 bg-white relative rotate-1">
            <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/sunday-books-cat.webp"
                alt="Tranh vui báo chủ nhật: Sách, cà phê và chú mèo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-lg text-[#1f2937] font-bold">
                "Chỉ định đọc 5 phút trước khi ngủ... ai ngờ đã 4 giờ sáng?!" ☕📖
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">TRANG BÌA • CHUYÊN ĐỀ ĐẶC BIỆT</span>
        <span className="font-comic-neue font-bold">BẤM PHÍM MŨI TÊN HOẶC NÚT ĐỂ TIẾP TỤC 👉</span>
      </div>

    </div>
  );
};
