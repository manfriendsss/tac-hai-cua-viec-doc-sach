import React from 'react';

export const Slide5ToolsIntro: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="5">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fde047] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 02: TAM THỂ KHÍ CỤ
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 05 / 12</span>
      </div>

      {/* Center Narrative */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center z-10 flex flex-col items-center gap-4">
        
        <div className="inline-block bg-white border-2 border-[#1f2937] px-4 py-1 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937] rotate-1">
          ⚙️ CÔNG CỤ DẪN DẮT MÊ HOẶC
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111827] leading-tight font-comic-fredoka max-w-3xl">
          Ba Dạng Khí Cụ <br />
          <span className="text-[#b45309] bg-[#fef08a] px-3 py-0.5 rounded-2xl border-2 border-[#1f2937] inline-block mt-1">
            "Tự Hại" Bản Thân
          </span>
        </h2>

        <div className="cloud-bubble p-5 max-w-2xl bg-white text-left mt-2">
          <p className="text-sm md:text-base font-bold text-[#374151] leading-relaxed">
            "Dù là trang sách giấy truyền thống sột soạt, chiếc màn hình E-Ink tí hon mang cả thư viện, hay giọng đọc êm ru của sách nói bên tai — mỗi hình thức đều có một 'chiêu trò' độc hại riêng khiến bạn đắm chìm quên cả lối về!"
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <div className="comic-panel-yellow px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">📖</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Sách Giấy Truyền Thống</span>
          </div>
          <div className="comic-panel-sky px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Máy Đọc Sách E-Ink</span>
          </div>
          <div className="comic-panel-mint px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">🎧</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Sách Nói Audiobook</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">PHÂN TÍCH ĐỊNH DẠNG ĐỌC</span>
        <span>NHẤN 👉 ĐỂ XEM TRANH 3 KHUNG SO SÁNH</span>
      </div>

    </div>
  );
};
