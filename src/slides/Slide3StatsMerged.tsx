import React from 'react';

export const Slide3StatsMerged: React.FC = () => {
  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="3" 
      data-steps="3"
      id="slide-3"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            HỒ SƠ BẰNG CHỨNG #01: NHỮNG CON SỐ BIẾT NÓI
          </span>
        </div>
        <div className="stamp-top-secret text-xs sm:text-sm">
          TOP SECRET // GIÁM ĐỊNH KHOA HỌC
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Large Dossier Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight uppercase">
              3 Con Số Thống Kê Khó Đỡ
            </h2>
          </div>

          {/* 3 Clean Dossier Cards with Synchronized 2-Line Titles & Large Font */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1: Bị tước quyền được căng thẳng */}
            <div 
              data-step-card="1"
              className="step-card dossier-card p-4 sm:p-5 flex items-center gap-5 cursor-pointer border-2 border-[#1c1917]"
            >
              <div className="font-dossier-title font-bold text-4xl sm:text-5xl md:text-6xl text-[#b91c1c] flex-shrink-0 leading-none">
                -68%
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#141413] font-dossier-title leading-snug pen-write-anim">
                  Bị tước quyền <br /> được căng thẳng
                </h3>
              </div>
            </div>

            {/* Card 2: Tsundoku */}
            <div 
              data-step-card="2"
              className="step-card dossier-card p-4 sm:p-5 flex items-center gap-5 cursor-pointer border-2 border-[#1c1917]"
            >
              <div className="font-dossier-title font-bold text-2xl sm:text-3xl md:text-4xl text-[#b45309] flex-shrink-0 leading-tight text-center bg-[#fef3c7] px-3 py-1.5 rounded border border-[#1c1917]">
                TSUN<br/>DOKU
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#141413] font-dossier-title leading-snug pen-write-anim">
                  Hội chứng nghiện mua <br /> những cuốn sách không đọc
                </h3>
              </div>
            </div>

            {/* Card 3: Bắt buộc sống thêm 2 năm */}
            <div 
              data-step-card="3"
              className="step-card dossier-card p-4 sm:p-5 flex items-center gap-5 cursor-pointer border-2 border-[#1c1917]"
            >
              <div className="font-dossier-title font-bold text-4xl sm:text-5xl md:text-6xl text-[#0369a1] flex-shrink-0 leading-none">
                +2 NĂM
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#141413] font-dossier-title leading-snug pen-write-anim">
                  Bắt buộc phải sống <br /> thêm 2 năm tuổi thọ
                </h3>
              </div>
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
                BÁO CÁO Y HỌC
              </span>
              <span className="stamp-verified text-xs">
                VERIFIED
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide3-claymation.webp"
                alt="Medical Brain Evidence"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  -68% STRESS
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
