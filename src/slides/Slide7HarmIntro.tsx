import React from 'react';

export const Slide7HarmIntro: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="7">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fee2e2] text-[#b91c1c] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 03: 7 BIẾN CHỨNG ĐÁNG SỢ
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 07 / 12</span>
      </div>

      {/* Center Narrative */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center z-10 flex flex-col items-center gap-4">
        
        <div className="inline-block bg-[#fef08a] border-2 border-[#1f2937] px-4 py-1 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937] rotate-[-1deg]">
          ⚠️ HỒ SƠ BIẾN CHỨNG
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111827] leading-tight font-comic-fredoka max-w-3xl">
          Khi Bạn Lỡ <br />
          <span className="text-[#b91c1c] bg-[#fee2e2] px-3 py-0.5 rounded-2xl border-2 border-[#1f2937] inline-block mt-1">
            "Nhiễm Độc" Sách Quá Sâu!
          </span>
        </h2>

        <div className="cloud-bubble p-5 max-w-2xl bg-white text-left mt-2">
          <p className="text-sm md:text-base font-bold text-[#374151] leading-relaxed">
            "Không chỉ đơn giản là đọc vài con chữ, thói quen đọc sách lâu năm sẽ âm thầm biến đổi tư duy, xáo trộn đồng hồ sinh học, làm mỏng ví tiền và thay đổi hoàn toàn cách bạn tương tác với thế giới xung quanh!"
          </p>
        </div>

        {/* 2 Big Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-2">
          <div className="comic-panel-yellow p-4 text-center">
            <span className="text-2xl">🧠</span>
            <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1">
              4 BIẾN CHỨNG NÃO BỘ & TƯ DUY
            </div>
            <div className="text-xs font-bold text-zinc-600 mt-0.5">Mất ngủ, đa nghi khoa học, trí tưởng tượng bay màu</div>
          </div>
          <div className="comic-panel-coral p-4 text-center">
            <span className="text-2xl">💸</span>
            <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] mt-1">
              3 BIẾN CHỨNG ĐỜI SỐNG & TÀI CHÍNH
            </div>
            <div className="text-xs font-bold text-zinc-600 mt-0.5">Viêm màng túi, đóng đô trong toilet, mất quyền cáu bực</div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">HỒ SƠ BỆNH ÁN NGƯỜI ĐỌC SÁCH</span>
        <span>NHẤN 👉 ĐỂ XEM CHI TIẾT 4 BIẾN CHỨNG NÃO BỘ</span>
      </div>

    </div>
  );
};
