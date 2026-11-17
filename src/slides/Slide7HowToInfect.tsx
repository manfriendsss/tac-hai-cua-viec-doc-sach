import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHỌN SÁCH MÌNH THÍCH',
      desc: 'Đừng ép đọc self-help khô khan chỉ vì người khác khen. Bắt đầu từ trinh thám, manga, hay truyện tranh lôi cuốn!',
      punch: 'Miễn là có chữ và bạn thấy hào hứng!',
      panelClass: 'comic-panel-yellow'
    },
    {
      num: '02',
      title: 'MICRO-HABIT: 5 PHÚT MỖI NGÀY',
      desc: 'Chỉ đọc đúng 2-3 trang trước khi ngủ hoặc khi uống cà phê sáng. Dễ đến mức bộ não không thể từ chối!',
      punch: 'Tích tiểu thành đại: 1 năm 12 cuốn!',
      panelClass: 'comic-panel-sky'
    },
    {
      num: '03',
      title: 'BUÔNG BỎ SÁCH DỞ',
      desc: 'Đọc 50 trang mà không thấy hợp? Mạnh dạn gấp sách lại đổi cuốn khác. Đời quá ngắn để ép đọc sách chán!',
      punch: 'Đọc là tận hưởng, không phải đi thi!',
      panelClass: 'comic-panel-coral'
    },
    {
      num: '04',
      title: 'RITUAL THƯ GIÃN',
      desc: 'Pha 1 tách trà ấm, bật playlist nhạc không lời, tìm một góc êm ái. Biến việc đọc thành giờ phút chữa lành xa xỉ!',
      punch: 'Trải nghiệm thư thái không áp lực!',
      panelClass: 'comic-panel-mint'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="7" 
      data-steps="4"
      id="slide-7"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#a7f3d0] text-emerald-900 px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 05: HƯỚNG DẪN "TỰ HẠI" BẢN THÂN
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm md:text-base font-bold text-zinc-600 hidden sm:inline">
            CHIẾN LƯỢC NHIỄM ĐỘC BỀN VỮNG
          </span>
        </div>
      </div>

      {/* Main Content: Asymmetric Balance (8 Cols Left for 4 Steps, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns: Title & 4 Sequential Step Cards with BIG font */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps.map((s, idx) => (
              <div 
                key={s.num}
                data-step-card={idx + 1}
                className={`step-card ${s.panelClass} p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-2 sm:border-3 border-[#1f2937]`}
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[1px_1px_0px_#1f2937] mb-2">
                    {s.num}
                  </div>
                  <h3 className="font-comic-fredoka font-black text-base sm:text-lg md:text-xl text-[#111827] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-zinc-800 mt-1.5 leading-relaxed ink-write-text">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-2 text-xs sm:text-sm font-comic-hand font-black text-zinc-800 bg-white/90 p-1 rounded border border-[#1f2937]">
                  {s.punch}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-mint p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide7-claymation.webp"
                alt="4 Bước nhiễm độc bền vững"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#111827] leading-snug">
                "Đọc là hành trình tự do tận hưởng, không phải cuộc thi áp lực!"
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