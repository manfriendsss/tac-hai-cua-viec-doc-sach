import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  const steps = [
    {
      num: '01',
      topic: 'CHIẾN THUẬT 5 TRANG',
      color: '#b91c1c'
    },
    {
      num: '02',
      topic: 'MÓN TRÁNG MIỆNG TRƯỚC MÓN CHÍNH',
      color: '#b45309'
    },
    {
      num: '03',
      topic: 'QUY TẮC 50 TRANG',
      color: '#0369a1'
    },
    {
      num: '04',
      topic: 'VŨ KHÍ GIAO TIẾP',
      color: '#15803d'
    }
  ];

  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="7" 
      data-steps="4"
      id="slide-7"
    >
      {/* Top Secret Header Strip */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            CẨM NANG ĐIỀU TRA: QUY TRÌNH THÂM NHẬP HỆ THẦN KINH
          </span>
        </div>
        <div className="stamp-classified text-xs sm:text-sm">
          CLASSIFIED // BÍ KÍP CHO NHỮNG KẺ LIỀU LĨNH
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 4 Steps Grid (No Scrollbar!) */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight uppercase pen-write-anim">
              4 Bước Nhiễm Độc Sách
            </h2>
          </div>

          {/* 4 Clean Step Cards with Only Main Content - Prominent & Punchy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-1 flex-1">
            {steps.map((s, idx) => (
              <div 
                key={s.num}
                data-step-card={idx + 1}
                className="step-card dossier-card p-5 flex items-center gap-3.5 cursor-pointer border-2 border-[#1c1917] min-h-[110px]"
              >
                <span 
                  className="dossier-tag text-xs sm:text-sm text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: s.color }}
                >
                  BƯỚC {s.num}
                </span>
                <div 
                  className="font-dossier-title font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide pen-write-anim text-left leading-snug flex-1"
                  style={{ color: s.color }}
                >
                  {s.topic}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 5 Columns: Classified Evidence Board (True 3:4 Aspect Ratio, Zero Crop) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="dossier-card evidence-photo-frame p-2.5 sm:p-3 rotate-1 max-w-[320px] w-full bg-[#fbf5e8] border-2 border-[#1c1917] shadow-xl relative">
            <div className="dossier-paperclip"></div>
            
            {/* Clean Header: Minimal Text, Larger Font */}
            <div className="flex justify-between items-center border-b border-[#1c1917]/30 pb-1.5 mb-2 px-1">
              <span className="font-dossier-code text-sm font-bold text-[#1c1917] tracking-wider">
                HỒ SƠ TÁC CHIẾN
              </span>
              <span className="stamp-top-secret text-xs">
                TOP SECRET
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[420px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide7-claymation.webp"
                alt="Tactical Operation Illustration"
                className="w-full h-full object-contain filter contrast-105"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="h-2"></div>
    </div>
  );
};
