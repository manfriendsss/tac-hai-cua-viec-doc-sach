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
          <span className="bg-[#fde047] text-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            EPILOGUE • LỜI CHÚC PHÚC CUỐI CÙNG
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm md:text-base font-bold text-zinc-600 hidden sm:inline">
            TỔNG KẾT & GIAO LƯU
          </span>
        </div>
      </div>

      {/* Main Content: Asymmetric Balance (8 Cols Left, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns with BIG Typography */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3.5">
          
          <div>
            <div className="inline-block bg-[#fee2e2] text-red-800 border-2 border-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] rotate-[-1deg] mb-2">
              CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH BÀI THUYẾT TRÌNH!
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] leading-tight font-comic-fredoka">
              Chúc Bạn Tiếp Tục <br />
              <span className="text-[#b45309] bg-[#fef08a] px-4 py-1 rounded-2xl border-3 border-[#1f2937] inline-block shadow-[4px_4px_0px_#1f2937] mt-2">
                "Tự Hại" Bản Thân Mỗi Ngày!
              </span>
            </h2>
          </div>

          {/* Thought Bubble with Big Font */}
          <div className="cloud-bubble p-4 sm:p-5 bg-white shadow-[4px_4px_0px_#1f2937]">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#1f2937] leading-relaxed font-comic-neue ink-write-text">
              "Đọc sách có thể khiến bạn mất quyền được nông nổi, tước mất cơ hội được tin sái cổ vào những điều nhảm nhí, và ép bạn phải sống thông thái, bình tĩnh hơn... Nhưng đó chính là điều tuyệt vời nhất bạn có thể làm cho chính mình!"
            </p>
            <div className="mt-2.5 text-xs sm:text-sm font-comic-hand font-black text-zinc-600">
              — Trích Lời Khuyên Từ Báo Tranh Vui Cuối Tuần
            </div>
          </div>

          {/* 3 Step Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-3 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg text-[#111827] ink-write-text">
                Giao Lưu & Hỏi Đáp
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Phần Q&A mở</div>
            </div>

            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-3 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg text-[#111827] ink-write-text">
                Mời Một Tách Cà Phê
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Kết nối giao lưu</div>
            </div>

            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-3 text-center cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
            >
              <div className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg text-[#111827] ink-write-text">
                Lan Tỏa Đến Bạn Bè
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Chia sẻ tri thức</div>
            </div>

          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-sky p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide8-claymation.webp"
                alt="Lời chúc phúc cho người đọc sách"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#111827] leading-snug">
                "Hãy tiếp tục nuôi dưỡng trí tò mò mỗi ngày!"
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