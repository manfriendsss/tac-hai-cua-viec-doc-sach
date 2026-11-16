import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHỌN SÁCH MÌNH THÍCH',
      desc: 'Đừng ép đọc self-help khô khan chỉ vì người khác khen. Bắt đầu từ trinh thám, manga, hay tiểu thuyết cuốn hút!',
      punch: '👉 Miễn là có chữ và bạn thấy vui!',
      panelClass: 'comic-panel-yellow'
    },
    {
      num: '02',
      title: 'MICRO-HABIT: 5 PHÚT MỖI NGÀY',
      desc: 'Chỉ đọc đúng 2-3 trang trước khi ngủ hoặc khi uống cà phê sáng. Dễ đến mức bộ não không thể từ chối!',
      punch: '👉 Tích tiểu thành đại: 1 năm 12 cuốn!',
      panelClass: 'comic-panel-sky'
    },
    {
      num: '03',
      title: 'BUÔNG BỎ SÁCH DỞ',
      desc: 'Đọc 50 trang mà không thấy hợp? Mạnh dạn gấp sách lại đổi cuốn khác. Đời quá ngắn để ép đọc sách chán!',
      punch: '👉 Đọc là tận hưởng, không phải đi thi!',
      panelClass: 'comic-panel-coral'
    },
    {
      num: '04',
      title: 'RITUAL THƯ GIÃN',
      desc: 'Pha 1 tách cà phê thơm, bật playlist nhạc Lofi không lời, tìm một góc êm ái. Biến việc đọc thành giờ phút chữa lành xa xỉ!',
      punch: '👉 Trải nghiệm nghiện ngập thư thái!',
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
          <span className="bg-[#a7f3d0] text-emerald-900 px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 05: HƯỚNG DẪN "TỰ HẠI" BẢN THÂN
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            CHIẾN LƯỢC NHIỄM ĐỘC BỀN VỮNG
          </span>
        </div>
      </div>

      {/* Main Content: 4 Steps */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-4">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-600 mt-1">
            (Cách để bạn rơi vào 'bẫy tri thức' mà không bị áp lực hay bỏ cuộc giữa chừng)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div 
              key={s.num}
              data-step-card={idx + 1}
              className={`step-card ${s.panelClass} p-5 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]`}
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-2">
                  {s.num}
                </div>
                <h3 className="font-comic-fredoka font-black text-sm sm:text-base md:text-lg text-[#111827] leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 text-xs sm:text-sm font-comic-hand font-black text-zinc-800 bg-white/90 p-1.5 rounded-lg border border-[#1f2937]">
                {s.punch}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
