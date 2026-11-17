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
        <span className="bg-[#fef08a] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 04: LỐI THOÁT HIỂM
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            {/* Ban đầu hiện ra là Tin vui (Step 0) */}
            <div className="inline-block bg-[#dcfce7] text-emerald-900 border-2 border-[#1f2937] px-4 py-1.5 rounded-full text-sm sm:text-base font-comic-fredoka font-black shadow-[3px_3px_0px_#1f2937]">
              TIN VUI CHO MỌI NGƯỜI!
            </div>

            {/* Bước 1 ấn mũi tên thì hiện ra 90% chúng ta đã thoát nạn thành công */}
            <div 
              data-step-reveal="1"
              style={{ opacity: 0, visibility: 'hidden', transition: 'all 0.35s ease' }}
              className="mt-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight pen-write-anim">
                Vì Sao 90% Chúng Ta Thoát Nạn Thành Công?
              </h2>
            </div>
          </div>

          {/* Sau đó ấn phím mũi tên thì 3 card lần lượt hiện ra (Steps 2, 3, 4) */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1 (Step 2) */}
            <div 
              data-step-card="2"
              className="step-card comic-panel-yellow p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-xs sm:text-sm text-amber-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #01 • BUỒN NGỦ
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-900 font-comic-fredoka">Thuốc Ngủ Tự Nhiên</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5 pen-write-anim">
                Mở Sách Là Buồn Ngủ Ngay
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Đọc được 3 dòng là mi mắt tự động díp lại, ngủ ngon lành như uống thuốc an thần!
              </p>
            </div>

            {/* Card 2 (Step 3) */}
            <div 
              data-step-card="3"
              className="step-card comic-panel-coral p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-xs sm:text-sm text-red-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #02 • CÁM DỖ
                </span>
                <span className="text-xs sm:text-sm font-bold text-red-900 font-comic-fredoka">Video Ngắn 15 Giây</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5 pen-write-anim">
                Điện Thoại Vui Hơn Sách Nhiều
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Xem video 15 giây vừa nhanh vừa vui, lướt ngón tay là quên luôn cuốn sách!
              </p>
            </div>

            {/* Card 3 (Step 4) */}
            <div 
              data-step-card="4"
              className="step-card comic-panel-sky p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-xs sm:text-sm text-blue-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #03 • ÁP LỰC
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-900 font-comic-fredoka">Cố Quá Thành Quá Cố</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5 pen-write-anim">
                Ép Mình Đọc Toàn Sách Khó
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Nghĩ rằng mua sách là phải nuốt trọn từ đầu đến cuối, biến việc đọc thành đi thi rồi bỏ cuộc!
              </p>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/slide6-claymation.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="h-4"></div>

    </div>
  );
};
