import React from 'react';

export const Slide6WhyQuit: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="6" 
      data-steps="3"
      id="slide-6"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fef08a] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 04: LỐI THOÁT HIỂM
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            CƠ CHẾ TỰ VỆ CỦA BỘ NÃO
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-4">
        
        <div className="text-center">
          <span className="bg-[#dcfce7] text-emerald-900 border-2 border-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black shadow-[2px_2px_0px_#1f2937]">
            TIN VUI CHO ĐA SỐ MỌI NGƯỜI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka mt-2 leading-tight">
            Vì Sao 90% Chúng Ta "Thoát Nạn" Thành Công?
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-600 mt-1">
            (Đừng quá lo lắng, bộ não có cơ chế tự vệ siêu mạnh để bạn không bị 'nghiện' sách!)
          </p>
        </div>

        {/* 3 Humorous Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1 */}
          <div 
            data-step-card="1"
            className="step-card comic-panel-yellow p-5 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="text-3xl sm:text-4xl mb-2">😴</div>
              <h3 className="font-comic-fredoka font-black text-base sm:text-lg md:text-xl text-[#111827]">
                THUỐC NGỦ TỰ NHIÊN
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Mở sách đọc đến dòng thứ 4, mắt tự động díp lại, đầu gật gù như bổ củi. Sách chính là liệu pháp trị mất ngủ an toàn và tiết kiệm nhất trần đời!
              </p>
            </div>
            <div className="mt-4 text-xs sm:text-sm font-comic-fredoka font-black text-amber-800 bg-white p-2 rounded-xl border border-[#1f2937] text-center shadow-[1px_1px_0px_#1f2937]">
              Cơ chế tự ngắt: Bảo vệ mắt an toàn 💤
            </div>
          </div>

          {/* Card 2 */}
          <div 
            data-step-card="2"
            className="step-card comic-panel-coral p-5 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="text-3xl sm:text-4xl mb-2">📱</div>
              <h3 className="font-comic-fredoka font-black text-base sm:text-lg md:text-xl text-[#111827]">
                MA LỰC TIKTOK & REELS
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Video 15 giây dồn dập dopamine kích thích não bộ liên tục. Sự kiên nhẫn đọc 300 trang sách lập tức bay màu trước những cú lướt ngón tay vô tận!
              </p>
            </div>
            <div className="mt-4 text-xs sm:text-sm font-comic-fredoka font-black text-red-800 bg-white p-2 rounded-xl border border-[#1f2937] text-center shadow-[1px_1px_0px_#1f2937]">
              Cám dỗ công nghệ: Thua đứt 15 giây lướt ⚡
            </div>
          </div>

          {/* Card 3 */}
          <div 
            data-step-card="3"
            className="step-card comic-panel-sky p-5 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="text-3xl sm:text-4xl mb-2">📸</div>
              <h3 className="font-comic-fredoka font-black text-base sm:text-lg md:text-xl text-[#111827]">
                CÁI BẪY "SỐNG ẢO"
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Mua sách xịn, ghé quán cà phê chill, canh ánh sáng vàng, chụp 100 tấm ảnh đăng story sống ảo... rồi cất sách vào túi lướt Facebook tiếp!
              </p>
            </div>
            <div className="mt-4 text-xs sm:text-sm font-comic-fredoka font-black text-blue-800 bg-white p-2 rounded-xl border border-[#1f2937] text-center shadow-[1px_1px_0px_#1f2937]">
              Thoát nạn ngoạn mục: Đọc bằng camera 📷
            </div>
          </div>

        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
