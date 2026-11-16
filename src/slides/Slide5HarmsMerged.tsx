import React from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const mindHarms = [
    {
      id: 1,
      icon: '🧐',
      title: 'MẤT QUYỀN TIN SÁI CỔ',
      desc: 'Bộ lọc phản biện quá bén, nghe gì cũng đòi "Bằng chứng đâu?".',
      punch: 'Quá tỉnh táo để bị dắt mũi!'
    },
    {
      id: 2,
      icon: '⏰',
      title: 'ẢO TƯỞNG THỜI GIAN',
      desc: 'Bảo "đọc nốt chương rồi ngủ", chớp mắt chim đã hót và đã 4:30 sáng!',
      punch: 'Mắt gấu trúc tâm hồn thỏa mãn!'
    },
    {
      id: 3,
      icon: '🎬',
      title: 'TRÍ TƯỞNG TƯỢNG PHÓNG ĐẠI',
      desc: 'Xem phim chuyển thể liên tục chê bai: "Truyện miêu tả sâu sắc hơn nhiều!".',
      punch: 'CGI não bộ đẹp hơn phim rạp!'
    },
    {
      id: 4,
      icon: '🗣️',
      title: '"NGHIỆN" TỪ VỰNG DỊ THƯỜNG',
      desc: 'Nói chuyện thường ngày nhưng chêm thuật ngữ triết học làm bạn bè xin phụ đề!',
      punch: 'Từ điển sống gây hoang mang!'
    }
  ];

  const lifeHarms = [
    {
      id: 5,
      icon: '💸',
      title: 'TSUNDOKU (VIÊM VÍ CẤP TÍNH)',
      desc: 'Tốc độ mua sách nhanh gấp 10 lần đọc. Mua về xếp thành tháp phong thủy!',
      punch: 'Mua sách là mua hy vọng tri thức! 📚'
    },
    {
      id: 6,
      icon: '🚽',
      title: 'CHIẾM TOILET THÀNH PHÒNG VIP',
      desc: 'Cầm sách vào toilet "3 phút", hồi hộp đọc 45 phút bước ra chân tê rần!',
      punch: 'Phòng VIP yên tĩnh nhất trần đời! ✨'
    },
    {
      id: 7,
      icon: '🧘',
      title: 'BÌNH THẢN ĐẾN MỨC "ĐÁNG GHÉT"',
      desc: 'Drama mạng nổ ra, bạn thản nhiên bảo: "Mọi việc đều có tính hai mặt".',
      punch: 'Trạng thái Zen vô cực: Miễn nhiễm drama! 🌊'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="5" 
      data-steps="7"
      id="slide-5"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fee2e2] text-[#b91c1c] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 03: HỒ SƠ 7 BIẾN CHỨNG
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            4 NÃO BỘ & TƯ DUY • 3 ĐỜI SỐNG & VÍ TIỀN
          </span>
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-3">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            7 Biến Chứng Khi Lỡ "Nhiễm Độc" Sách Quá Sâu
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#4b5563] mt-0.5">
            (Những hội chứng kỳ lạ mà người nghiện sách nào cũng âm thầm mắc phải!)
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: 4 Mind Harms (6 Cols) */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-black text-xs sm:text-sm uppercase text-amber-900 bg-[#fef08a] px-3 py-1 rounded-lg border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                🧠 NÃO BỘ & TƯ DUY (#01 - #04)
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {mindHarms.map((h) => (
                <div
                  key={h.id}
                  id={`s5-harm-${h.id}`}
                  data-step-card={h.id}
                  className="step-card comic-panel py-2 px-3.5 flex items-center justify-between cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{h.icon}</span>
                    <div className="text-left">
                      <div className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base text-[#111827] leading-tight">
                        <span className="text-amber-800 mr-1.5">#{h.id}</span>
                        {h.title}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-600 leading-snug mt-0.5">
                        {h.desc}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-comic-hand font-black text-amber-900 flex-shrink-0 ml-2 hidden lg:inline">
                    👉 {h.punch}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Life Harms (6 Cols) */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-black text-xs sm:text-sm uppercase text-red-900 bg-[#fee2e2] px-3 py-1 rounded-lg border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                💸 ĐỜI SỐNG & VÍ TIỀN (#05 - #07)
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {lifeHarms.map((h) => (
                <div
                  key={h.id}
                  id={`s5-harm-${h.id}`}
                  data-step-card={h.id}
                  className="step-card comic-panel py-2 px-3.5 flex items-center justify-between cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{h.icon}</span>
                    <div className="text-left">
                      <div className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base text-[#111827] leading-tight">
                        <span className="text-red-700 mr-1.5">#{h.id}</span>
                        {h.title}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-600 leading-snug mt-0.5">
                        {h.desc}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-comic-hand font-black text-red-900 flex-shrink-0 ml-2 hidden lg:inline">
                    👉 {h.punch}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
