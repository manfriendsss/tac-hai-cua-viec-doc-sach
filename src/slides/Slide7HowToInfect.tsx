import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  const steps = [
    {
      num: '01',
      color: '#b45309',
      title: 'Đánh lừa bộ não <br /> bằng quy tắc 5 trang'
    },
    {
      num: '02',
      color: '#0369a1',
      title: 'Thưởng thức tráng miệng <br /> trước khi ăn món chính'
    },
    {
      num: '03',
      color: '#b91c1c',
      title: 'Đặc quyền từ bỏ <br /> sau khi đọc 50 trang'
    },
    {
      num: '04',
      color: '#15803d',
      title: 'Biến tri thức thành vũ khí <br /> cho cuộc trò chuyện'
    }
  ];

  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="7" 
      data-steps="4"
      id="slide-7"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            CẨM NANG ĐIỆP VIÊN #05: 4 BƯỚC NHIỄM ĐỘC SÁCH ĐÚNG CÁCH
          </span>
        </div>
        <div className="stamp-classified text-xs sm:text-sm">
          CLASSIFIED // BÍ KÍP CHO NHỮNG KẺ LIỀU LĨNH
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 4 Steps Grid (No Scrollbar!) */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <div className="inline-block">
              <span className="dossier-tag bg-[#b91c1c] text-white text-xs sm:text-sm font-bold">
                QUY TRÌNH THÂM NHẬP HỆ THẦN KINH • 4 GIAI ĐOẠN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight mt-1 uppercase">
              4 Bước Nhiễm Độc Sách Đúng Cách
            </h2>
          </div>

          {/* 4 Clean Step Cards with Synchronized 2-Line Titles & Large Font */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            {steps.map((s, idx) => (
              <div 
                key={s.num}
                data-step-card={idx + 1}
                className="step-card dossier-card p-4 flex flex-col justify-center cursor-pointer border-2 border-[#1c1917]"
              >
                <div>
                  <span 
                    className="dossier-tag text-xs text-white font-bold"
                    style={{ backgroundColor: s.color }}
                  >
                    BƯỚC {s.num}
                  </span>
                  <h3 
                    className="font-dossier-title font-bold text-base sm:text-lg md:text-xl text-[#141413] leading-snug mt-2.5 pen-write-anim"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
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
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide7-claymation.webp"
                alt="Tactical Operation Illustration"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  QUY TRÌNH 4 BƯỚC
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
