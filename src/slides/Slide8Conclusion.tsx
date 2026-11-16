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
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fde047] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            EPILOGUE • LỜI CHÚC PHÚC CUỐI CÙNG
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            TỔNG KẾT & GIAO LƯU
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-4xl mx-auto w-full z-10 flex flex-col items-center text-center gap-4">
        
        <div className="inline-block bg-[#fee2e2] text-red-800 border-2 border-[#1f2937] px-4 py-1.5 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] rotate-[-2deg]">
          🎉 CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH BÀI THUYẾT TRÌNH!
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight font-comic-fredoka">
          Chúc Bạn Tiếp Tục <br />
          <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block shadow-[4px_4px_0px_#1f2937] mt-2">
            "Tự Hại" Bản Thân Mỗi Ngày!
          </span>
        </h2>

        {/* Big Cloud Bubble */}
        <div className="cloud-bubble p-5 sm:p-6 max-w-2xl bg-white shadow-[5px_5px_0px_#1f2937]">
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#1f2937] leading-relaxed">
            "Đọc sách có thể khiến bạn mất quyền được nông nổi, tước mất cơ hội được tin sái cổ vào những điều nhảm nhí, và ép bạn phải sống thông thái, bình tĩnh hơn... Nhưng đó chính là điều tuyệt vời nhất bạn có thể làm cho chính mình!"
          </p>
          <div className="mt-3 text-xs sm:text-sm font-comic-hand font-black text-zinc-600">
            — Trích Lời Khuyên Hài Hước Từ Báo Tranh Vui Cuối Tuần ☕📖
          </div>
        </div>

        {/* 3 Step Action Cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          
          <div 
            data-step-card="1"
            className="step-card comic-panel-yellow px-5 py-3 flex items-center gap-3 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <span className="text-2xl">💬</span>
            <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827]">
              Giao Lưu & Hỏi Đáp (Q&A)
            </span>
          </div>

          <div 
            data-step-card="2"
            className="step-card comic-panel-sky px-5 py-3 flex items-center gap-3 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <span className="text-2xl">☕</span>
            <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827]">
              Mời Tác Giả Một Tách Cà Phê
            </span>
          </div>

          <div 
            data-step-card="3"
            className="step-card comic-panel-mint px-5 py-3 flex items-center gap-3 cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <span className="text-2xl">📚</span>
            <span className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827]">
              Lan Tỏa Sách Đến Bạn Bè
            </span>
          </div>

        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
