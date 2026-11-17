import React from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const harms = [
    { id: 1, title: 'Ngủ quá sâu, <br /> ngủ hoài không tỉnh' },
    { id: 2, title: 'Tăng hiểu biết <br /> vượt mức cho phép' },
    { id: 3, title: 'Không thể dùng hết <br /> vốn từ vựng tích lũy' },
    { id: 4, title: 'Duy trì trí tưởng tượng <br /> quá phong phú' },
    { id: 5, title: 'Phá hoại tài chính <br /> và quỹ thời gian' },
    { id: 6, title: 'Mất đi cơ hội <br /> trở thành kẻ trộm' },
    { id: 7, title: 'Không ngừng <br /> đi vào nhà vệ sinh' }
  ];

  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="5" 
      data-steps="7"
      id="slide-5"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            HỒ SƠ BẰNG CHỨNG #03: 7 TÁC HẠI KINH HOÀNG
          </span>
        </div>
        <div className="stamp-top-secret text-xs sm:text-sm">
          TOP SECRET // TRỌNG TÂM VỤ ÁN
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 7 Harms in a clean 2-column layout */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight uppercase">
              7 Tác Hại Khó Lường Của Việc Đọc Sách
            </h2>
          </div>

          {/* 7 Clean Compact Dossier Cards with Synchronized 2-Line Titles & Large Font */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
            {harms.map((h, idx) => (
              <div
                key={h.id}
                data-step-card={h.id}
                className={`step-card dossier-card py-2.5 px-3 flex items-center gap-3 cursor-pointer border-2 border-[#1c1917] ${
                  idx === 6 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="dossier-tag text-xs bg-[#1c1917] text-[#e6dcc8] flex-shrink-0 font-bold font-dossier-code">
                  #{h.id.toString().padStart(2, '0')}
                </span>
                <div className="text-left min-w-0">
                  <div 
                    className="font-dossier-title font-bold text-sm sm:text-base md:text-lg text-[#b91c1c] leading-snug pen-write-anim"
                    dangerouslySetInnerHTML={{ __html: h.title }}
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
                GIẢI PHẪU BIẾN CHỨNG
              </span>
              <span className="stamp-classified text-xs">
                AUTOPSY
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide5-claymation.webp"
                alt="Brain Anatomy Evidence"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  BIẾN ĐỔI NÃO BỘ CẤP ĐỘ 5
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
