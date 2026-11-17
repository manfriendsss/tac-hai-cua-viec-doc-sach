import React from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const allHarms = [
    {
      id: 1,
      title: 'MẤT QUYỀN TIN SÁI CỔ',
      desc: 'Bộ lọc phản biện bén nhạy, nghe gì cũng đòi bằng chứng xác thực. Quá tỉnh táo để bị dắt mũi!'
    },
    {
      id: 2,
      title: 'ẢO TƯỞNG THỜI GIAN',
      desc: 'Bảo đọc nốt chương rồi ngủ, chớp mắt chim đã hót và đã 4:30 sáng. Mắt gấu trúc nhưng tâm hồn thỏa mãn!'
    },
    {
      id: 3,
      title: 'TRÍ TƯỞNG TƯỢNG PHÓNG ĐẠI',
      desc: 'Xem phim chuyển thể liên tục chê bai truyện gốc miêu tả sâu sắc hơn nhiều. Trí tưởng tượng não bộ vượt xa kỹ xảo phim rạp!'
    },
    {
      id: 4,
      title: 'NGHIỆN TỪ VỰNG DỊ THƯỜNG',
      desc: 'Nói chuyện thường ngày nhưng chêm thuật ngữ triết học sâu sắc khiến bạn bè chung quanh phải xin phụ đề!'
    },
    {
      id: 5,
      title: 'VIÊM VÍ CẤP TÍNH (TSUNDOKU)',
      desc: 'Tốc độ mua sách nhanh gấp 10 lần tốc độ đọc. Mua về xếp thành tháp phong thủy bằng giấy quanh phòng!'
    },
    {
      id: 6,
      title: 'CHIẾM TOILET THÀNH PHÒNG VIP',
      desc: 'Cầm sách vào toilet định đọc 3 phút, hồi hộp đọc 45 phút bước ra chân tê rần mất cảm giác!'
    },
    {
      id: 7,
      title: 'BÌNH THẢN ĐẾN MỨC "ĐÁNG GHÉT"',
      desc: 'Drama mạng nổ ra dữ dội, bạn thản nhiên nhìn nhận tính hai mặt của vấn đề, miễn nhiễm mọi sự kích động!'
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
          <span className="bg-[#fee2e2] text-[#b91c1c] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 03: HỒ SƠ 7 BIẾN CHỨNG
          </span>
        </div>
      </div>

      {/* Main Grid: Asymmetric Balance (8 Cols Left for 7 Sequential Cards, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns: Title & 7 Harms with BIG font */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-2.5">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              7 Biến Chứng Khi Lỡ "Nhiễm Độc" Sách Quá Sâu
            </h2>
          </div>

          {/* 7 Sequential Cards with Large Typography */}
          <div className="flex flex-col gap-2">
            {allHarms.map((h) => (
              <div
                key={h.id}
                id={`s5-harm-${h.id}`}
                data-step-card={h.id}
                className="step-card comic-panel py-2 px-3.5 flex items-start gap-3 cursor-pointer rounded-xl border-2 sm:border-2.5 border-[#1f2937]"
              >
                <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
                  <span className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base bg-[#fef08a] px-2.5 py-0.5 rounded border border-[#1f2937] text-[#111827]">
                    #{String(h.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-left text-sm sm:text-base md:text-lg font-bold text-[#1f2937] leading-snug ink-write-text">
                  <span className="font-comic-fredoka font-black text-[#b45309]">
                    {h.title}:
                  </span>{' '}
                  <span className="text-zinc-800">
                    {h.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-coral p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide5-claymation.webp"
                alt="7 Biến chứng khi nghiện sách"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#111827] leading-snug">
                "Càng lún sâu vào trang sách, nhân cách càng biến đổi khó lường!"
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