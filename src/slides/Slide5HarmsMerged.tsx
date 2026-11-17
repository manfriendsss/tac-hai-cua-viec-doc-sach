import React from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const harms = [
    { id: 1, title: 'Ngủ quá sâu, ngủ hoài không tỉnh' },
    { id: 2, title: 'Tăng hiểu biết vượt mức cho phép' },
    { id: 3, title: 'Không thể dùng hết vốn từ vựng' },
    { id: 4, title: 'Duy trì trí tưởng tượng quá phong phú' },
    { id: 5, title: 'Phá hoại tài chính và thời gian' },
    { id: 6, title: 'Mất đi cơ hội trở thành kẻ trộm' },
    { id: 7, title: 'Không ngừng đi vệ sinh' }
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] font-dossier-title leading-tight uppercase pen-write-anim">
              7 Tác Hại Khó Lường
            </h2>
          </div>

          {/* 7 Clean Compact Dossier Cards without Arbitrary Line Breaks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            {harms.map((h, idx) => (
              <div
                key={h.id}
                data-step-card={h.id}
                className={`step-card dossier-card py-3.5 px-4 flex items-center gap-3.5 cursor-pointer border-2 border-[#1c1917] ${
                  idx === 6 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="dossier-tag text-xs sm:text-sm bg-[#1c1917] text-[#e6dcc8] flex-shrink-0 font-bold font-dossier-code px-2.5 py-0.5">
                  #{h.id.toString().padStart(2, '0')}
                </span>
                <div className="text-left min-w-0 flex-1">
                  <div className="font-dossier-title font-bold text-base sm:text-lg md:text-xl text-[#b91c1c] leading-snug pen-write-anim">
                    {h.title}
                  </div>
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
                BẢN VẼ GIẢI PHẪU
              </span>
              <span className="stamp-top-secret text-xs">
                CONFIDENTIAL
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[420px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide5-claymation.webp"
                alt="Brain Anatomy & Harms Illustration"
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
