import React from 'react';

export const Slide8Conclusion: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="8" id="slide-8">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1.5">
        <span className="bg-[#fde047] text-[#1f2937] px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          EPILOGUE • LỜI CHÚC PHÚC CUỐI CÙNG
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 08 / 08</span>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-4xl mx-auto w-full z-10 flex flex-col items-center text-center gap-3.5">
        
        <div className="inline-block bg-[#fee2e2] text-red-800 border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937] rotate-[-2deg]">
          🎉 CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH BÀI THUYẾT TRÌNH!
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight font-comic-fredoka">
          Chúc Bạn Tiếp Tục <br />
          <span className="text-[#b45309] bg-[#fef08a] px-3.5 py-0.5 rounded-2xl border-3 border-[#1f2937] inline-block shadow-[4px_4px_0px_#1f2937] mt-1">
            "Tự Hại" Bản Thân Mỗi Ngày!
          </span>
        </h2>

        {/* Big Cloud Bubble */}
        <div className="cloud-bubble p-5 max-w-2xl bg-white shadow-[4px_4px_0px_#1f2937]">
          <p className="text-sm sm:text-base font-bold text-[#1f2937] leading-relaxed">
            "Đọc sách có thể khiến bạn mất quyền được nông nổi, tước mất cơ hội được tin sái cổ vào những điều nhảm nhí, và ép bạn phải sống thông thái, bình tĩnh hơn... Nhưng đó chính là điều tuyệt vời nhất bạn có thể làm cho chính mình!"
          </p>
          <div className="mt-2 text-xs font-comic-hand font-bold text-zinc-600">
            — Trích Lời Khuyên Hài Hước Từ Báo Tranh Vui Cuối Tuần ☕📖
          </div>
        </div>

        {/* 3 Interaction Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-1">
          <div className="comic-panel-yellow px-3.5 py-1.5 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-lg">💬</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Giao Lưu & Hỏi Đáp (Q&A)</span>
          </div>
          <div className="comic-panel-sky px-3.5 py-1.5 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-lg">☕</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Mời Tác Giả Một Tách Cà Phê</span>
          </div>
          <div className="comic-panel-mint px-3.5 py-1.5 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-lg">📚</span>
            <span className="font-comic-fredoka font-bold text-xs sm:text-sm">Chia Sẻ Cuốn Sách Bạn Mê Nhất</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-1">
        <span className="font-comic-fredoka">CẢM ƠN QUÝ KHÁN GIẢ ĐÃ LẮNG NGHE!</span>
        <button
          onClick={() => {
            if (typeof (window as any).goToSlide === 'function') {
              (window as any).goToSlide(1);
            }
          }}
          className="bg-white border-2 border-[#1f2937] px-2.5 py-0.5 rounded-lg font-comic-fredoka font-bold text-[#111827] shadow-[2px_2px_0px_#1f2937] hover:bg-yellow-100 transition-all text-xs"
        >
          🔄 QUAY LẠI TRANG ĐẦU
        </button>
      </div>

    </div>
  );
};
