import React from 'react';

export const Slide2Roadmap: React.FC = () => {
  const harms = [
    {
      step: 1,
      num: '#01',
      title: 'Não hoạt động quá mạnh',
      desc: 'Cái gì cũng hỏi "Tại sao?", tò mò ngày đêm không ngủ.'
    },
    {
      step: 2,
      num: '#02',
      title: 'Dùng toàn từ ngữ lạ',
      desc: 'Nói chuyện quá hoa mỹ khiến bạn bè tưởng người ngoài hành tinh.'
    },
    {
      step: 3,
      num: '#03',
      title: 'Tưởng tượng mất kiểm soát',
      desc: 'Trong đầu tự chiếu phim bom tấn, xem phim rạp thấy chán.'
    },
    {
      step: 4,
      num: '#04',
      title: 'Quá thông minh, không ai lừa được',
      desc: 'Nhìn đâu cũng thấy lỗ hổng logic, mất đi sự ngây thơ.'
    },
    {
      step: 5,
      num: '#05',
      title: 'Lúc nào cũng quá bình tĩnh',
      desc: 'Mất luôn quyền được nổi giận và cáu gắt với cuộc đời.'
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
        <span className="bg-[#fef08a] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          KẾ HOẠCH BÀI NÓI: 5 NỘI DUNG CHÍNH
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Main Card & 5 Sub-cards */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          
          {/* CARD CHÍNH (TO, NỔI BẬT LÀM CHỦ ĐỀ) */}
          <div className="comic-panel-yellow p-4 sm:p-5 rounded-2xl border-3 border-[#1f2937] shadow-[6px_6px_0px_#1f2937]">
            <span className="font-comic-fredoka font-black text-xs sm:text-sm uppercase bg-white px-3 py-1 rounded-full border border-[#1f2937] text-amber-900 shadow-[2px_2px_0px_#1f2937]">
              CHỦ ĐỀ CHÍNH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-tight font-comic-fredoka mt-2">
              Tác Hại Của Việc Đọc Sách
            </h2>
          </div>

          {/* 5 CARD PHỤ (PHỤ THUỘC CHO CARD CHÍNH - CHỮ TO, NGẮN GỌN) */}
          <div className="flex flex-col gap-2 pl-3 border-l-4 border-dashed border-amber-400 mt-1">
            {harms.map((h) => (
              <div 
                key={h.step}
                data-step-card={h.step}
                className="step-card comic-panel py-2.5 px-3.5 flex items-center justify-between cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="font-comic-fredoka font-black text-xs sm:text-sm bg-[#fef08a] px-2.5 py-1 rounded border border-[#1f2937] text-[#111827] flex-shrink-0">
                    {h.num}
                  </span>
                  <div className="text-left">
                    <div className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg text-[#b45309] leading-snug pen-write-anim">
                      {h.title}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-0.5">
                      {h.desc}
                    </div>
                  </div>
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
                src="/assets/slide2-claymation.webp"
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
