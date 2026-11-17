import React from 'react';

export const Slide6WhyQuit: React.FC = () => {
  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="6" 
      data-steps="4"
      id="slide-6"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            HỒ SƠ GIẢI MÃ #04: VÌ SAO 90% BỎ CUỘC GIỮA CHỪNG?
          </span>
        </div>
        <div className="stamp-classified text-xs sm:text-sm">
          CLASSIFIED // LỐI THOÁT 90% NHÂN LOẠI
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Dossier Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            {/* Step 0: Tin vui */}
            <div className="inline-block">
              <span className="dossier-tag bg-[#15803d] text-white text-xs sm:text-sm font-bold">
                TIN VUI ĐIỀU TRA: 90% NHÂN LOẠI ĐÃ MAY MẮN THOÁT NẠN!
              </span>
            </div>

            {/* Step 1: Tiêu đề chính reveal */}
            <div 
              data-step-reveal="1"
              style={{ opacity: 0, visibility: 'hidden', transition: 'all 0.35s ease' }}
              className="mt-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight pen-write-anim uppercase">
                Vì Sao 90% Người Đọc Bỏ Cuộc Giữa Chừng?
              </h2>
            </div>
          </div>

          {/* 3 Step Cards with Synchronized 2-Line Titles & Large Font */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1 (Step 2) */}
            <div 
              data-step-card="2"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#b45309] text-white">
                  NGUYÊN NHÂN 01 • LÀM MÀU TRÍ THỨC
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Hội chứng mua sách <br /> để làm màu trí thức
              </h3>
            </div>

            {/* Card 2 (Step 3) */}
            <div 
              data-step-card="3"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#b91c1c] text-white">
                  NGUYÊN NHÂN 02 • BẪY DOPAMINE
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Thất bại thảm hại <br /> trước video ngắn 15 giây
              </h3>
            </div>

            {/* Card 3 (Step 4) */}
            <div 
              data-step-card="4"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#0369a1] text-white">
                  NGUYÊN NHÂN 03 • ÉP BUỘC BẢN THÂN
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Tự biến bản thân <br /> thành nô lệ của trang sách
              </h3>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Classified Evidence Board (True 3:4 Aspect Ratio, Zero Crop) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="dossier-card evidence-photo-frame p-2.5 sm:p-3 rotate-1 max-w-[320px] w-full bg-[#fbf5e8] border-2 border-[#1c1917] shadow-xl relative">
            <div className="dossier-paperclip"></div>
            
            {/* Clean Header: Minimal Text, Larger Font */}
            <div className="flex justify-between items-center border-b border-[#1c1917]/30 pb-1.5 mb-2 px-1">
              <span className="font-dossier-code text-sm font-bold text-[#1c1917] tracking-wider">
                HIỆN TRƯỜNG TỘI PHẠM
              </span>
              <span className="stamp-top-secret text-xs">
                TOP SECRET
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide6-claymation.webp"
                alt="Case Scene Surveillance"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  90% THOÁT NẠN // BẪY 15S
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-2"></div>

    </div>
  );
};
