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
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fef08a] text-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 02: TAM THỂ KHÍ CỤ
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm md:text-base font-bold text-zinc-600 hidden sm:inline">
            SÁCH GIẤY • E-INK • AUDIOBOOK
          </span>
        </div>
      </div>

      {/* Main Content: Asymmetric Balance (7.5 Cols Left for Cards, 4.5 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7.5 Columns: Title & 3 Sequential Tool Cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              Ba Dạng Khí Cụ Dẫn Dắt "Mê Hoặc"
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            
            {/* Medium 1: Sách Giấy */}
            <div 
              id="s4-card-1"
              data-step-card="1"
              className="step-card comic-panel-yellow p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                    KHÍ CỤ #01 • CỔ ĐIỂN
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-amber-900">
                    SÁCH GIẤY
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                  Sách Giấy Truyền Thống
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1.5 leading-relaxed ink-write-text">
                  Mùi giấy thơm gây mê hoặc, tiếng lật trang sột soạt đê mê. Balo nhét 2 cuốn dày cộp nặng như tập tạ, gù cả cột sống!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-amber-800">
                Sát thương vật lý: Nặng balo và gù lưng
              </div>
            </div>

            {/* Medium 2: E-Ink */}
            <div 
              id="s4-card-2"
              data-step-card="2"
              className="step-card comic-panel-sky p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                    KHÍ CỤ #02 • CÔNG NGHỆ
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-blue-900">
                    E-READER
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                  Máy Đọc Sách E-Ink
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1.5 leading-relaxed ink-write-text">
                  Nhét cả thư viện 10.000 cuốn vào túi áo. Màn hình mực điện tử êm như giấy thật. Nhưng tử huyệt là đang đọc đến đoạn hung thủ lộ mặt thì hết pin!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-blue-800">
                Sát thương tâm lý: Sập nguồn bất ngờ
              </div>
            </div>

            {/* Medium 3: Audiobook */}
            <div 
              id="s4-card-3"
              data-step-card="3"
              className="step-card comic-panel-mint p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black bg-white px-3 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                    KHÍ CỤ #03 • RẢNH TAY
                  </span>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-emerald-900">
                    AUDIOBOOK
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                  Sách Nói Audiobook
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-800 mt-1.5 leading-relaxed ink-write-text">
                  Vừa rửa bát, chạy bộ vừa nạp tri thức êm ru. Rủi ro duy nhất là giọng đọc truyền cảm quá mức dễ khiến bạn ngủ quên giữa ban ngày!
                </p>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-fredoka font-black bg-white/90 p-1.5 rounded-lg border border-[#1f2937] text-emerald-800">
                Sát thương sinh học: Ru ngủ cực mạnh
              </div>
            </div>

          </div>

        </div>

        {/* Right 4.5 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-mint p-3.5 rounded-3xl border-3 border-[#1f2937] shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide4-claymation.webp"
                alt="Tam thể khí cụ - Sách giấy, Máy đọc sách và Sách nói"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#1f2937] leading-snug">
                "Mỗi công cụ đều có một sức lôi cuốn riêng khó lòng dứt ra!"
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};