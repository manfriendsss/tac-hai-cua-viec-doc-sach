import React, { useState } from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const [activeHarm, setActiveHarm] = useState<number | null>(null);

  const toggleHarm = (id: number) => {
    setActiveHarm(prev => prev === id ? null : id);
  };

  const mindHarms = [
    {
      id: 1,
      icon: '🧐',
      title: 'MẤT QUYỀN TIN SÁI CỔ',
      desc: 'Bộ lọc phản biện quá nhạy, nghe gì cũng hỏi "Bằng chứng đâu?" khiến mọi người ngán ngẩm!',
      punch: 'Quá tỉnh táo để bị dắt mũi!'
    },
    {
      id: 2,
      icon: '⏰',
      title: 'ẢO TƯỞNG THỜI GIAN',
      desc: 'Bảo "đọc nốt chương rồi ngủ", chớp mắt một cái chim đã hót và đồng hồ chỉ 4:30 sáng!',
      punch: 'Mắt gấu trúc nhưng tâm hồn thỏa mãn!'
    },
    {
      id: 3,
      icon: '🎬',
      title: 'TRÍ TƯỞNG TƯỢNG PHÓNG ĐẠI',
      desc: 'Xem phim chuyển thể 10 phút lại thốt lên: "Trong truyện miêu tả tâm lý sâu sắc hơn nhiều!".',
      punch: 'Não tự dựng CGI 4K đẹp hơn rạp phim!'
    },
    {
      id: 4,
      icon: '🗣️',
      title: '"NGHIỆN" TỪ VỰNG DỊ THƯỜNG',
      desc: 'Nói chuyện đời thường nhưng chêm thuật ngữ triết học làm bạn bè bảo "Nói tiếng người giùm!".',
      punch: 'Từ điển sống gây hoang mang bạn bè!'
    }
  ];

  const lifeHarms = [
    {
      id: 5,
      icon: '💸',
      title: 'TSUNDOKU (VIÊM VÍ CẤP TÍNH)',
      desc: 'Tốc độ mua sách nhanh gấp 10 lần đọc. Mua về xếp thành tháp phong thủy từ sàn lên nóc tủ!',
      punch: '"Mua sách là mua hy vọng tri thức!" 📚'
    },
    {
      id: 6,
      icon: '🚽',
      title: 'CHIẾM DỤNG TOILET THÀNH PHÒNG VIP',
      desc: 'Cầm sách vào toilet "3 phút", hồi hộp quá ngồi lì 45 phút. Bước ra với đôi chân tê rần!',
      punch: 'Phòng đọc VIP yên tĩnh nhất trần đời! ✨'
    },
    {
      id: 7,
      icon: '🧘',
      title: 'BÌNH THẢN ĐẾN MỨC "ĐÁNG GHÉT"',
      desc: 'Khi drama mạng xã hội bùng nổ, bạn lại thản nhiên bảo: "Mọi việc đều có tính hai mặt".',
      punch: 'Trạng thái Zen vô cực: Miễn nhiễm drama! 🌊'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-5 py-2.5 font-comic-neue" 
      data-slide="5" 
      data-steps="7"
      id="slide-5"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1">
        <div className="flex items-center gap-2">
          <span className="bg-[#fee2e2] text-[#b91c1c] px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 03: HỒ SƠ 7 BIẾN CHỨNG
          </span>
          <span className="font-comic-fredoka text-xs font-bold text-zinc-600 hidden sm:inline">
            4 NÃO BỘ & TƯ DUY • 3 ĐỜI SỐNG & VÍ TIỀN
          </span>
        </div>
        <div className="text-xs font-comic-fredoka font-bold text-zinc-500">
          TRANG 05 / 08
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-1.5">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-[#111827] font-comic-fredoka leading-tight">
            7 Biến Chứng Đáng Sợ Khi Lỡ "Nhiễm Độc" Sách Quá Sâu
          </h2>
          <p className="text-[10px] sm:text-[11px] font-bold text-[#4b5563]">
            (Bấm vào từng biến chứng để xem lời bình 'tác hại' dí dỏm)
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
          
          {/* Left Column: 4 Mind Harms (6 Cols) */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-bold text-[11px] uppercase text-amber-900 bg-[#fef08a] px-2 py-0.5 rounded border border-[#1f2937]">
                🧠 4 BIẾN CHỨNG NÃO BỘ & TƯ DUY
              </span>
              <span className="text-[9px] font-bold text-zinc-500">#01 - #04</span>
            </div>

            <div className="flex flex-col gap-1">
              {mindHarms.map((h) => {
                const isSelected = activeHarm === h.id;
                return (
                  <div
                    key={h.id}
                    id={`s5-harm-${h.id}`}
                    onClick={() => toggleHarm(h.id)}
                    className={`comic-panel py-1 px-2.5 flex items-center justify-between cursor-pointer transition-all duration-150 ${
                      isSelected 
                        ? 'bg-[#fef9c3] ring-2 ring-amber-400 shadow-[4px_4px_0px_#1f2937] scale-[1.01]' 
                        : 'bg-white hover:bg-yellow-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg flex-shrink-0">{h.icon}</span>
                      <div className="text-left">
                        <div className="font-comic-fredoka font-bold text-[11px] sm:text-xs text-[#111827] leading-none">
                          <span className="text-amber-800 font-black mr-1">#{h.id}</span>
                          {h.title}
                        </div>
                        <div className="text-[10px] font-bold text-zinc-600 leading-tight mt-0.5 line-clamp-1">
                          {h.desc}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-comic-hand font-bold text-amber-900 flex-shrink-0 ml-2 hidden sm:inline">
                      👉 {h.punch}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3 Life Harms (6 Cols) */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-bold text-[11px] uppercase text-red-900 bg-[#fee2e2] px-2 py-0.5 rounded border border-[#1f2937]">
                💸 3 BIẾN CHỨNG ĐỜI SỐNG & VÍ TIỀN
              </span>
              <span className="text-[9px] font-bold text-zinc-500">#05 - #07</span>
            </div>

            <div className="flex flex-col gap-1">
              {lifeHarms.map((h) => {
                const isSelected = activeHarm === h.id;
                return (
                  <div
                    key={h.id}
                    id={`s5-harm-${h.id}`}
                    onClick={() => toggleHarm(h.id)}
                    className={`comic-panel py-1 px-2.5 flex items-center justify-between cursor-pointer transition-all duration-150 ${
                      isSelected 
                        ? 'bg-[#fee2e2] ring-2 ring-red-400 shadow-[4px_4px_0px_#1f2937] scale-[1.01]' 
                        : 'bg-white hover:bg-rose-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg flex-shrink-0">{h.icon}</span>
                      <div className="text-left">
                        <div className="font-comic-fredoka font-bold text-[11px] sm:text-xs text-[#111827] leading-none">
                          <span className="text-red-700 font-black mr-1">#{h.id}</span>
                          {h.title}
                        </div>
                        <div className="text-[10px] font-bold text-zinc-600 leading-tight mt-0.5 line-clamp-1">
                          {h.desc}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-comic-hand font-bold text-red-900 flex-shrink-0 ml-2 hidden sm:inline">
                      👉 {h.punch}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Selected Harm Spotlight Expansion Box */}
        {activeHarm && (
          <div className="bg-white border-2 border-[#1f2937] p-2 rounded-xl shadow-[3px_3px_0px_#1f2937] text-center mt-0.5 animate-fadeIn">
            <span className="text-xs font-comic-fredoka font-black text-amber-900">
              Chi tiết #{activeHarm}:
            </span>{' '}
            <span className="text-xs font-bold text-[#1f2937]">
              {[...mindHarms, ...lifeHarms].find(x => x.id === activeHarm)?.desc}
            </span>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-0.5">
        <span className="font-comic-fredoka">BẤM VÀO BIẾN CHỨNG ĐỂ XEM LỜI BÌNH</span>
        <span>NHẤN 👉 ĐỂ SANG PHẦN 4: VÌ SAO 90% THOÁT NẠN?</span>
      </div>

    </div>
  );
};
