import React from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const harms = [
    {
      id: 1,
      title: 'NGỦ QUÁ KỸ',
      desc: 'Mở sách vài trang là ngủ say sưa, không còn thời gian thức đêm xem phim.'
    },
    {
      id: 2,
      title: 'BIẾT QUÁ NHIỀU THỨ',
      desc: 'Nghe tin đồn là thấy vô lý ngay, không ai lừa được bạn nữa.'
    },
    {
      id: 3,
      title: 'DÙNG TOÀN TỪ LẠ',
      desc: 'Nói chuyện quá hoa mỹ, cãi nhau thì không ai nói lại bạn.'
    },
    {
      id: 4,
      title: 'TƯỞNG TƯỢNG PHIM 4K',
      desc: 'Trong đầu tự chiếu phim bom tấn, xem phim rạp lúc nào cũng thấy chê.'
    },
    {
      id: 5,
      title: 'VIÊM MÀNG TÚI',
      desc: 'Mua sách tốn tiền, mua thêm kệ sách và suốt ngày phải đi lau bụi.'
    },
    {
      id: 6,
      title: 'KHÔNG THỂ LÀM KẺ TRỘM',
      desc: 'Người đọc sách quá lương thiện, bị cấm cửa vĩnh viễn khỏi hội trộm cắp.'
    },
    {
      id: 7,
      title: 'TRỐN TRONG NHÀ VỆ SINH',
      desc: 'Cầm sách vào toilet ngồi đọc cả tiếng, người nhà đứng ngoài gõ cửa kêu cứu.'
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
        <span className="bg-[#fee2e2] text-[#b91c1c] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 03: 7 TÁC HẠI KỲ LẠ
        </span>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Title & 7 Harms */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-2.5">
          
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
              7 Rắc Rối Khi Lỡ Nghiện Sách
            </h2>
          </div>

          {/* 7 Clean Compact Step Cards with Big Readable Typography */}
          <div className="flex flex-col gap-1.5 max-h-[390px] overflow-y-auto pr-1">
            {harms.map((h) => (
              <div
                key={h.id}
                data-step-card={h.id}
                className="step-card comic-panel py-2 px-3 flex items-center justify-between cursor-pointer rounded-xl border-2 sm:border-3 border-[#1f2937]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-comic-fredoka font-black text-xs sm:text-sm bg-[#fef08a] px-2.5 py-0.5 rounded border border-[#1f2937] text-[#111827] flex-shrink-0">
                    #{h.id.toString().padStart(2, '0')}
                  </span>
                  <div className="text-left">
                    <div className="font-comic-fredoka font-black text-sm sm:text-base text-[#111827] leading-tight pen-write-anim">
                      {h.title}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-700 leading-snug mt-0.5">
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
                src="/assets/slide5-claymation.webp"
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
