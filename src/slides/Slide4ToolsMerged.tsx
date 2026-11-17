import React from 'react';

export const Slide4ToolsMerged: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="4" 
      data-steps="3"
      id="slide-4"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fef08a] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 02: 3 CÁCH ĐỌC SÁCH
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 3 Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              3 Cách Đọc Sách Nguy Hiểm
            </h2>
          </div>

          {/* 3 Step Cards */}
          <div className="flex flex-col gap-3">
            
            {/* Medium 1: Sách giấy */}
            <div 
              data-step-card="1"
              className="step-card comic-panel-yellow p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-sm text-amber-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #01 • SÁCH GIẤY
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-900 font-comic-fredoka">Nặng Balo & Gù Lưng</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-2 pen-write-anim">
                Mùi Giấy Quá Thơm, Balo Quá Nặng
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Tiếng lật sách rất sướng tai. Nhưng nhét 2 cuốn dày cộp vào cặp thì nặng như đi tập tạ!
              </p>
            </div>

            {/* Medium 2: E-Reader */}
            <div 
              data-step-card="2"
              className="step-card comic-panel-sky p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-sm text-blue-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #02 • MÁY ĐỌC SÁCH
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-900 font-comic-fredoka">Hết Pin Lúc Gay Cấn</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-2 pen-write-anim">
                Cả Thư Viện Trong Túi Quần
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Rất nhẹ và tiện lợi. Nhưng ác mộng lớn nhất là sập nguồn đúng trang hung thủ lộ mặt!
              </p>
            </div>

            {/* Medium 3: Audiobook */}
            <div 
              data-step-card="3"
              className="step-card comic-panel-mint p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <span className="font-comic-fredoka font-black text-sm text-emerald-900 bg-white px-3 py-1 rounded-full border border-[#1f2937]">
                  #03 • SÁCH NÓI
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-900 font-comic-fredoka">Thuốc Ngủ Cực Mạnh</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-2 pen-write-anim">
                Vừa Nghe Vừa Làm Việc Nhà
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1 leading-snug">
                Rất tiện khi rửa bát, lái xe. Nhưng giọng đọc quá ngọt ngào dễ làm bạn ngủ gật lúc nào không hay!
              </p>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Reserved Space for Illustration (No Text Captions) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="illustration-canvas-panel relative rotate-1">
            <div className="illustration-canvas-inner">
              <img
                src="/assets/slide4-claymation.webp"
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
