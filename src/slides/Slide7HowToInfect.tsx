import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHỈ ĐỌC THỨ MÌNH THÍCH',
      desc: 'Truyện tranh, trinh thám hay truyện cười. Đừng bao giờ ép mình đọc sách chán!',
      panelClass: 'comic-panel-yellow'
    },
    {
      num: '02',
      title: 'MỖI NGÀY ĐÚNG 5 TRANG',
      desc: 'Mục tiêu nhỏ xíu trước khi ngủ. Dễ đến mức bộ não không thể từ chối!',
      panelClass: 'comic-panel-sky'
    },
    {
      num: '03',
      title: 'QUY TẮC 50 TRANG ĐẦU',
      desc: 'Đọc 50 trang mà thấy chán? Gấp lại đổi cuốn khác ngay, không phải tiếc!',
      panelClass: 'comic-panel-coral'
    },
    {
      num: '04',
      title: 'ĐỌC LÀ ĐỂ THƯ GIÃN',
      desc: 'Góc ngồi êm ái, ly nước thơm. Đọc sách là để hưởng thụ, không phải đi thi!',
      panelClass: 'comic-panel-mint'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="7" 
      data-steps="4"
      id="slide-7"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#a7f3d0] text-emerald-900 px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 05: 4 MẸO DỄ ỢT
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 4 Steps */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              4 Mẹo Để "Dính Bẫy" Đọc Sách
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps.map((s, idx) => (
              <div 
                key={s.num}
                data-step-card={idx + 1}
                className={`step-card ${s.panelClass} p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]`}
              >
                <div>
                  <span className="font-comic-fredoka font-black text-xs sm:text-sm bg-white px-2.5 py-1 rounded-full border border-[#1f2937]">
                    BƯỚC {s.num}
                  </span>
                  <h3 className="font-comic-fredoka font-black text-base sm:text-lg text-[#111827] leading-tight mt-2 pen-write-anim">
                    {s.title}
                  </h3>
                  <p className="text-sm font-bold text-zinc-800 mt-1.5 leading-snug">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/slide7-claymation.webp"
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
