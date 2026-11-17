import React from 'react';

export const Slide2Roadmap: React.FC = () => {
  const harms = [
    {
      step: 1,
      num: '#01',
      title: 'Dễ bị nghiện kiến thức và tò mò về thế giới',
      humor: 'Gặp cái gì cũng hỏi "Tại sao?", tra cứu quên ăn quên ngủ đến tận nửa đêm!'
    },
    {
      step: 2,
      num: '#02',
      title: 'Khiến vốn từ tăng lên bất thường',
      humor: 'Dùng từ ngữ bay bổng đến mức bạn bè trò chuyện phải xin phụ đề dịch thuật!'
    },
    {
      step: 3,
      num: '#03',
      title: 'Làm trí tưởng tượng hoạt động quá mức',
      humor: 'Xem phim chuyển thể lúc nào cũng chê bai: "Sách gốc miêu tả hay hơn 100 lần"!'
    },
    {
      step: 4,
      num: '#04',
      title: 'Gây ra thói quen suy nghĩ sâu và phản biện',
      humor: 'Không ai dắt mũi lừa gạt bạn được nữa, làm mất đi sự "ngây thơ" thuở nào!'
    },
    {
      step: 5,
      num: '#05',
      title: 'Khiến bạn bình tĩnh, tập trung và sống tích cực',
      humor: 'Tước mất quyền được nổi giận, cáu kỉnh và ấm ức chính đáng với cuộc đời!'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="2"
      data-steps="6"
      id="slide-2"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#fef08a] text-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            TỔNG QUAN: 5 ĐIỀU NGUY HẠI HÀI HƯỚC
          </span>
        </div>
      </div>

      {/* Main Grid: Asymmetric Balance (8 Cols Left for Main & Sub Cards, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns: Main Card & 5 Sub Cards with BIG readable text */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3">
          
          {/* Card Chính (To, nổi bật với font lớn) */}
          <div className="comic-panel-yellow p-4 sm:p-5 rounded-2xl border-3 border-[#1f2937] shadow-[5px_5px_0px_#1f2937] relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-comic-fredoka font-black text-xs sm:text-sm uppercase bg-[#1f2937] text-white px-3 py-0.5 rounded-full">
                CARD CHÍNH • CHỦ ĐỀ TRỌNG TÂM
              </span>
              <span className="text-xs sm:text-sm font-comic-fredoka font-black text-amber-900">
                5 NHÁNH BIẾN CHỨNG
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight font-comic-fredoka">
              Tác Hại Của Việc Đọc Sách
            </h2>
          </div>

          {/* 5 Card Phụ (To, rõ ràng, chữ viết lần lượt chạy theo từng dòng) */}
          <div className="flex flex-col gap-2 pl-3 border-l-3 border-dashed border-[#1f2937]/40 ml-2">
            {harms.map((h) => (
              <div 
                key={h.step}
                data-step-card={h.step}
                className="step-card comic-panel py-2 px-3.5 flex items-start gap-3 cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
              >
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                  <span className="font-comic-fredoka font-black text-xs sm:text-sm md:text-base bg-[#fef08a] px-2.5 py-0.5 rounded border border-[#1f2937] text-[#111827]">
                    {h.num}
                  </span>
                </div>
                <div className="text-left text-sm sm:text-base md:text-lg font-bold text-[#1f2937] leading-snug ink-write-text">
                  <span className="font-comic-fredoka font-black text-[#b45309]">
                    {h.title}:
                  </span>{' '}
                  <span className="text-zinc-800">
                    {h.humor}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-yellow p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide2-claymation.webp"
                alt="5 Tác hại tổng quan - Nghiện kiến thức và chiếc ví mỏng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-lg sm:text-xl font-black text-[#111827] leading-snug">
                "Càng đọc nhiều, thế giới càng mở rộng... và chiếc ví càng mỏng đi!"
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
