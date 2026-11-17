import React from 'react';

export const Slide6WhyQuit: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="6" 
      data-steps="4"
      id="slide-6"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fef08a] text-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 04: LỐI THOÁT HIỂM
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm md:text-base font-bold text-zinc-600 hidden sm:inline">
            CƠ CHẾ TỰ VỆ CỦA BỘ NÃO
          </span>
        </div>
      </div>

      {/* Main Content: Asymmetric Balance (8 Cols Left for Title & 3 Cards, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns: Banner, Animated Title & 3 Sequential Cards with BIG Font */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3.5">
          
          <div>
            {/* Ban đầu hiện ra là Tin Vui (Step 0) */}
            <div className="inline-block bg-[#dcfce7] text-emerald-900 border-2 border-[#1f2937] px-4 py-1.5 rounded-full text-sm sm:text-base font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937] mb-2">
              TIN VUI CHO ĐA SỐ MỌI NGƯỜI
            </div>

            {/* Ấn phím mũi tên lần 1 (Step 1): Hiện ra 90% chúng ta đã thoát nạn thành công */}
            <div 
              data-step-card="1"
              className="step-card slide-6-title-step"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight ink-write-text">
                90% Chúng Ta Đã Thoát Nạn Thành Công!
              </h2>
            </div>
          </div>

          {/* Sau đó ấn phím mũi tên thì 3 card lần lượt hiện ra (Steps 2, 3, 4) */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1 (Step 2) */}
            <div 
              data-step-card="2"
              className="step-card comic-panel-yellow p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937]">
                    LỐI THOÁT #01
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-amber-900">
                    CƠ CHẾ TỰ NGẮT
                  </span>
                </div>
                <h3 className="font-comic-fredoka font-black text-lg sm:text-xl md:text-2xl text-[#111827] mt-1.5">
                  Thuốc Ngủ Tự Nhiên
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1 leading-relaxed ink-write-text">
                  Mở sách đọc đến dòng thứ 4, mắt tự động díp lại, đầu gật gù như bổ củi. Sách chính là liệu pháp trị mất ngủ an toàn và tiết kiệm nhất trần đời!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black text-amber-800 bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-center">
                Bảo vệ mắt an toàn tuyệt đối
              </div>
            </div>

            {/* Card 2 (Step 3) */}
            <div 
              data-step-card="3"
              className="step-card comic-panel-coral p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937]">
                    LỐI THOÁT #02
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-red-900">
                    DOPAMINE NGẮN
                  </span>
                </div>
                <h3 className="font-comic-fredoka font-black text-lg sm:text-xl md:text-2xl text-[#111827] mt-1.5">
                  Ma Lực TikTok & Reels
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1 leading-relaxed ink-write-text">
                  Video 15 giây dồn dập dopamine kích thích não bộ liên tục. Sự kiên nhẫn đọc 300 trang sách lập tức bay màu trước những cú lướt ngón tay vô tận!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black text-red-800 bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-center">
                Cám dỗ công nghệ: Thua đứt 15 giây lướt
              </div>
            </div>

            {/* Card 3 (Step 4) */}
            <div 
              data-step-card="4"
              className="step-card comic-panel-sky p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937]">
                    LỐI THOÁT #03
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-blue-900">
                    ẢO TƯỞNG CHECK-IN
                  </span>
                </div>
                <h3 className="font-comic-fredoka font-black text-lg sm:text-xl md:text-2xl text-[#111827] mt-1.5">
                  Cái Bẫy "Sống Ảo"
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1 leading-relaxed ink-write-text">
                  Mua sách xịn, ghé quán cà phê chill, canh ánh sáng vàng, chụp 100 tấm ảnh đăng story sống ảo... rồi cất sách vào túi lướt mạng xã hội tiếp!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black text-blue-800 bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-center">
                Thoát nạn ngoạn mục: Đọc bằng camera
              </div>
            </div>

          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-yellow p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide6-claymation.webp"
                alt="Lối thoát hiểm - Bộ não tự vệ khỏi việc đọc sách"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#111827] leading-snug">
                "Đừng lo, bộ não luôn có cơ chế tự vệ siêu mạnh để cứu bạn khỏi sách!"
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