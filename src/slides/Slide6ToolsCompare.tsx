import React from 'react';

export const Slide6ToolsCompare: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="6">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fef08a] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          TRANH TRUYỆN 3 KHUNG: SO SÁNH KHÍ CỤ
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 06 / 12</span>
      </div>

      {/* Main Content: Illustration + 3 Cards */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-3">
        
        {/* Top Comic Strip Image Banner */}
        <div className="w-full comic-panel p-2.5 bg-white">
          <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
            <img
              src="/assets/sunday-3-mediums.webp"
              alt="Tranh truyện 3 khung: Sách giấy, Máy đọc sách, và Sách nói"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 3 Humorous Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Medium 1 */}
          <div className="comic-panel-yellow p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">📖</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  CỔ ĐIỂN
                </span>
              </div>
              <h3 className="text-base font-comic-fredoka font-black text-[#111827] mt-1">
                SÁCH GIẤY TRUYỀN THỐNG
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Mùi giấy thơm gây mê hoặc. Tiếng lật sột soạt gây nghiện. Điểm trừ duy nhất là nhét 2 cuốn dày cộp vào balo nặng như tập tạ, gù cả cột sống!
              </p>
            </div>
            <div className="mt-2 text-center text-[11px] font-comic-fredoka font-bold bg-white/80 p-1 rounded-lg border border-[#1f2937] text-amber-800">
              Sát thương vật lý: Nặng balo 🎒
            </div>
          </div>

          {/* Medium 2 */}
          <div className="comic-panel-sky p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">📱</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  CÔNG NGHỆ
                </span>
              </div>
              <h3 className="text-base font-comic-fredoka font-black text-[#111827] mt-1">
                MÁY ĐỌC SÁCH E-INK
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Nhét cả thư viện 10.000 cuốn vào túi quần. Màn hình mực điện tử êm như giấy thật. Nhưng tử huyệt là đang đọc đến trang hung thủ lộ mặt thì... HẾT PIN!
              </p>
            </div>
            <div className="mt-2 text-center text-[11px] font-comic-fredoka font-bold bg-white/80 p-1 rounded-lg border border-[#1f2937] text-blue-800">
              Sát thương tâm lý: Sập nguồn 🪫
            </div>
          </div>

          {/* Medium 3 */}
          <div className="comic-panel-mint p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">🎧</span>
                <span className="text-[10px] font-comic-fredoka font-bold bg-white px-2 py-0.5 rounded-full border border-[#1f2937]">
                  RẢNH TAY
                </span>
              </div>
              <h3 className="text-base font-comic-fredoka font-black text-[#111827] mt-1">
                SÁCH NÓI AUDIOBOOK
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Vừa rửa bát, chạy bộ vừa nạp tri thức êm ru. Cực kỳ tiện lợi. Rủi ro duy nhất là giọng đọc truyền cảm quá mức dễ khiến bạn ngủ quên giữa ban ngày!
              </p>
            </div>
            <div className="mt-2 text-center text-[11px] font-comic-fredoka font-bold bg-white/80 p-1 rounded-lg border border-[#1f2937] text-emerald-800">
              Sát thương sinh học: Ru ngủ 😴
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-1.5">
        <span className="font-comic-fredoka">MỖI NGƯỜI MỘT LỰA CHỌN</span>
        <span>NHẤN 👉 ĐỂ KHÁM PHÁ CÁC BIẾN CHỨNG</span>
      </div>

    </div>
  );
};
