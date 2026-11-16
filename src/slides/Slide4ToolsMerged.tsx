import React, { useState } from 'react';

export const Slide4ToolsMerged: React.FC = () => {
  const [selectedMedium, setSelectedMedium] = useState<number | null>(null);

  const toggleMedium = (idx: number) => {
    setSelectedMedium(prev => prev === idx ? null : idx);
  };

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] p-4 md:p-6 font-comic-neue" 
      data-slide="4" 
      data-steps="3"
      id="slide-4"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1">
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] text-[#1f2937] px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 02: TAM THỂ KHÍ CỤ
          </span>
          <span className="font-comic-fredoka text-xs font-bold text-zinc-600 hidden sm:inline">
            SÁCH GIẤY • E-INK • AUDIOBOOK
          </span>
        </div>
        <div className="text-xs font-comic-fredoka font-bold text-zinc-500">
          TRANG 04 / 08
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-2.5">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            Ba Dạng Khí Cụ Dẫn Dắt "Mê Hoặc"
          </h2>
          <p className="text-[11px] sm:text-xs font-bold text-[#4b5563]">
            (Mỗi công cụ đều có một "chiêu trò" độc hại riêng khiến bạn đắm chìm quên cả lối về!)
          </p>
        </div>

        {/* Comic Strip Image Banner */}
        <div className="w-full comic-panel p-2 bg-white">
          <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
            <img
              src="/assets/sunday-3-mediums.webp"
              alt="Tranh truyện 3 khung: Sách giấy, Máy đọc sách, và Sách nói"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 3 Humorous Breakdown Cards with Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Medium 1 */}
          <div 
            id="s4-card-1"
            onClick={() => toggleMedium(1)}
            className={`comic-panel-yellow p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedMedium === 1 
                ? 'scale-[1.03] ring-4 ring-amber-400 shadow-[6px_6px_0px_#1f2937] z-20' 
                : selectedMedium !== null 
                  ? 'opacity-65' 
                  : 'hover:scale-[1.01]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">📖</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  CỔ ĐIỂN
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-comic-fredoka font-black text-[#111827] mt-0.5">
                SÁCH GIẤY TRUYỀN THỐNG
              </h3>
              <p className="text-[11px] sm:text-xs font-bold text-zinc-700 mt-1 leading-snug">
                Mùi giấy thơm gây mê hoặc. Tiếng lật sột soạt đê mê. Balo nhét 2 cuốn dày cộp nặng như tập tạ, gù cả cột sống!
              </p>
            </div>
            <div className="mt-2 text-center text-[10px] sm:text-[11px] font-comic-fredoka font-bold bg-white/90 p-1 rounded-lg border border-[#1f2937] text-amber-800">
              Sát thương vật lý: Nặng balo 🎒
            </div>
          </div>

          {/* Medium 2 */}
          <div 
            id="s4-card-2"
            onClick={() => toggleMedium(2)}
            className={`comic-panel-sky p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedMedium === 2 
                ? 'scale-[1.03] ring-4 ring-amber-400 shadow-[6px_6px_0px_#1f2937] z-20' 
                : selectedMedium !== null 
                  ? 'opacity-65' 
                  : 'hover:scale-[1.01]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">📱</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  CÔNG NGHỆ
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-comic-fredoka font-black text-[#111827] mt-0.5">
                MÁY ĐỌC SÁCH E-INK
              </h3>
              <p className="text-[11px] sm:text-xs font-bold text-zinc-700 mt-1 leading-snug">
                Nhét cả thư viện 10.000 cuốn vào túi quần. Màn hình mực điện tử êm như giấy thật. Nhưng tử huyệt là đang đọc đến trang hung thủ lộ mặt thì... HẾT PIN!
              </p>
            </div>
            <div className="mt-2 text-center text-[10px] sm:text-[11px] font-comic-fredoka font-bold bg-white/90 p-1 rounded-lg border border-[#1f2937] text-blue-800">
              Sát thương tâm lý: Sập nguồn 🪫
            </div>
          </div>

          {/* Medium 3 */}
          <div 
            id="s4-card-3"
            onClick={() => toggleMedium(3)}
            className={`comic-panel-mint p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedMedium === 3 
                ? 'scale-[1.03] ring-4 ring-amber-400 shadow-[6px_6px_0px_#1f2937] z-20' 
                : selectedMedium !== null 
                  ? 'opacity-65' 
                  : 'hover:scale-[1.01]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">🎧</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  RẢNH TAY
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-comic-fredoka font-black text-[#111827] mt-0.5">
                SÁCH NÓI AUDIOBOOK
              </h3>
              <p className="text-[11px] sm:text-xs font-bold text-zinc-700 mt-1 leading-snug">
                Vừa rửa bát, chạy bộ vừa nạp tri thức êm ru. Rủi ro duy nhất là giọng đọc truyền cảm quá mức dễ khiến bạn ngủ quên giữa ban ngày!
              </p>
            </div>
            <div className="mt-2 text-center text-[10px] sm:text-[11px] font-comic-fredoka font-bold bg-white/90 p-1 rounded-lg border border-[#1f2937] text-emerald-800">
              Sát thương sinh học: Ru ngủ 😴
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-1">
        <span className="font-comic-fredoka">BẤM VÀO TỪNG KHÍ CỤ ĐỂ XEM ĐẶC ĐIỂM</span>
        <span>NHẤN 👉 ĐỂ SANG 7 BIẾN CHỨNG TRẦM KHA</span>
      </div>

    </div>
  );
};
