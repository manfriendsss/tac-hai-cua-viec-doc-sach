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
          <span className="bg-[#fef08a] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 02: TAM THỂ KHÍ CỤ
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            SÁCH GIẤY • E-INK • AUDIOBOOK
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-3">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            Ba Dạng Khí Cụ Dẫn Dắt "Mê Hoặc"
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#4b5563] mt-0.5">
            (Mỗi công cụ đều có một "chiêu trò" độc hại riêng khiến bạn đắm chìm quên cả lối về!)
          </p>
        </div>

        {/* Comic Strip Image Banner */}
        <div className="w-full comic-panel p-2.5 bg-white shadow-[4px_4px_0px_#1f2937]">
          <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
            <img
              src="/assets/sunday-3-mediums.webp"
              alt="Tranh truyện 3 khung: Sách giấy, Máy đọc sách, và Sách nói"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 3 Humorous Breakdown Step Cards with Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Medium 1 */}
          <div 
            id="s4-card-1"
            data-step-card="1"
            className="step-card comic-panel-yellow p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">📖</span>
                <span className="text-xs font-comic-fredoka font-black bg-white px-2.5 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                  CỔ ĐIỂN
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                SÁCH GIẤY TRUYỀN THỐNG
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Mùi giấy thơm gây mê hoặc. Tiếng lật sột soạt đê mê. Balo nhét 2 cuốn dày cộp nặng như tập tạ, gù cả cột sống!
              </p>
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm font-comic-fredoka font-black bg-white p-1.5 rounded-lg border border-[#1f2937] text-amber-800 shadow-[1px_1px_0px_#1f2937]">
              Sát thương vật lý: Nặng balo & gù lưng 🎒
            </div>
          </div>

          {/* Medium 2 */}
          <div 
            id="s4-card-2"
            data-step-card="2"
            className="step-card comic-panel-sky p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">📱</span>
                <span className="text-xs font-comic-fredoka font-black bg-white px-2.5 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                  CÔNG NGHỆ
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                MÁY ĐỌC SÁCH E-INK
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Nhét cả thư viện 10.000 cuốn vào túi quần. Màn hình mực điện tử êm như giấy thật. Nhưng tử huyệt là đang đọc đến trang hung thủ lộ mặt thì... HẾT PIN!
              </p>
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm font-comic-fredoka font-black bg-white p-1.5 rounded-lg border border-[#1f2937] text-blue-800 shadow-[1px_1px_0px_#1f2937]">
              Sát thương tâm lý: Sập nguồn bất ngờ 🪫
            </div>
          </div>

          {/* Medium 3 */}
          <div 
            id="s4-card-3"
            data-step-card="3"
            className="step-card comic-panel-mint p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">🎧</span>
                <span className="text-xs font-comic-fredoka font-black bg-white px-2.5 py-0.5 rounded-full border border-[#1f2937] shadow-[1px_1px_0px_#1f2937]">
                  RẢNH TAY
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827] mt-1.5">
                SÁCH NÓI AUDIOBOOK
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                Vừa rửa bát, chạy bộ vừa nạp tri thức êm ru. Rủi ro duy nhất là giọng đọc truyền cảm quá mức dễ khiến bạn ngủ quên giữa ban ngày!
              </p>
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm font-comic-fredoka font-black bg-white p-1.5 rounded-lg border border-[#1f2937] text-emerald-800 shadow-[1px_1px_0px_#1f2937]">
              Sát thương sinh học: Ru ngủ cực mạnh 😴
            </div>
          </div>

        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
