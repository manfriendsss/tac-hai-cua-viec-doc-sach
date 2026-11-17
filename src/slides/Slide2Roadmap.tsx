import React from 'react';

export const Slide2Roadmap: React.FC = () => {
  const stages = [
    {
      step: 1,
      num: '#01',
      title: 'Những Con Số Thống Kê Rùng Rợn',
      desc: 'Bằng chứng khoa học khó đỡ về hội nghiện sách'
    },
    {
      step: 2,
      num: '#02',
      title: 'Đặt Lên Bàn Cân 3 Vũ Khí Phát Tán',
      desc: 'Sách giấy, Ebook (Máy đọc sách) và Sách nói'
    },
    {
      step: 3,
      num: '#03',
      title: 'Công Bố 7 Tác Hại Kinh Hoàng',
      desc: 'Biến chất từ đại não cho tới... nhà vệ sinh'
    },
    {
      step: 4,
      num: '#04',
      title: 'Vì Sao 90% May Mắn Thoát Nạn?',
      desc: 'Giải mã hội chứng bỏ cuộc giữa chừng'
    },
    {
      step: 5,
      num: '#05',
      title: '4 Bước Nhiễm Độc Sách Bài Bản',
      desc: 'Dành cho những ai liều lĩnh muốn dấn thân'
    }
  ];

  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="2" 
      data-steps="5"
      id="slide-2"
    >
      {/* Top Secret Header Strip */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            KẾ HOẠCH ĐIỀU TRA: 30 PHÚT SINH TỬ
          </span>
        </div>
        <div className="stamp-classified text-xs sm:text-sm">
          CLASSIFIED // 5 GIAI ĐOẠN ĐIỀU TRA
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Header & 5 Stages */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-2.5">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] leading-tight font-dossier-title uppercase">
              5 Giai Đoạn Vạch Trần Cơn Ác Mộng
            </h2>
          </div>

          {/* 5 Compact Dossier Step Cards (Larger Typography) */}
          <div className="flex flex-col gap-2 mt-1">
            {stages.map((s) => (
              <div 
                key={s.step}
                data-step-card={s.step}
                className="step-card dossier-card py-2.5 px-3.5 flex items-center justify-between cursor-pointer border-2 border-[#1c1917]"
              >
                <div className="flex items-center gap-3">
                  <span className="dossier-tag text-xs bg-[#1c1917] text-[#e6dcc8] flex-shrink-0 font-bold">
                    {s.num}
                  </span>
                  <div className="text-left">
                    <div className="font-dossier-title font-bold text-base sm:text-lg md:text-xl text-[#b91c1c] leading-tight pen-write-anim">
                      {s.title}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#57534e] mt-0.5 font-typewriter">
                      {s.desc}
                    </div>
                  </div>
                </div>
                <div className="stamp-seal-dot hidden sm:flex"></div>
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
                SƠ ĐỒ PHÁ ÁN
              </span>
              <span className="stamp-classified text-xs">
                CLASSIFIED
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide2-claymation.webp"
                alt="Case Timeline Evidence"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  5 GIAI ĐOẠN ĐIỀU TRA
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
