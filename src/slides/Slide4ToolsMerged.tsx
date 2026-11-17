import React from 'react';

export const Slide4ToolsMerged: React.FC = () => {
  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="4" 
      data-steps="3"
      id="slide-4"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            HỒ SƠ GIÁM ĐỊNH #02: ĐẶT LÊN BÀN CÂN 3 VŨ KHÍ PHÁT TÁN
          </span>
        </div>
        <div className="stamp-classified text-xs sm:text-sm">
          CLASSIFIED // 3 ĐỊNH DẠNG NGUY HIỂM
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Dossier Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight uppercase">
              Đặt Lên Bàn Cân 3 Vũ Khí Gây Nghiện
            </h2>
          </div>

          {/* 3 Step Cards with Synchronized 2-Line Titles & Large Font */}
          <div className="flex flex-col gap-3">
            
            {/* Medium 1: Sách giấy */}
            <div 
              data-step-card="1"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#b45309] text-white">
                  VŨ KHÍ #01 • SÁCH GIẤY
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Mùi giấy gây ảo giác, <br /> vác tạ nặng trong balo
              </h3>
            </div>

            {/* Medium 2: E-Reader */}
            <div 
              data-step-card="2"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#0369a1] text-white">
                  VŨ KHÍ #02 • EBOOK
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Cả thư viện 200 gram, <br /> hết pin đúng đoạn cao trào
              </h3>
            </div>

            {/* Medium 3: Audiobook */}
            <div 
              data-step-card="3"
              className="step-card dossier-card p-4 sm:p-4.5 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
            >
              <div>
                <span className="dossier-tag text-xs font-bold bg-[#15803d] text-white">
                  VŨ KHÍ #03 • SÁCH NÓI
                </span>
              </div>
              <h3 className="font-dossier-title font-bold text-lg sm:text-xl md:text-2xl text-[#141413] mt-2 leading-snug pen-write-anim">
                Liều thuốc mê cực mạnh <br /> khi rửa bát và lái xe
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
                GIÁM ĐỊNH TANG VẬT #03
              </span>
              <span className="stamp-top-secret text-xs">
                TOP SECRET
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide4-claymation.webp"
                alt="3 Mediums Tangible Evidence"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  3 VŨ KHÍ PHÁT TÁN
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
