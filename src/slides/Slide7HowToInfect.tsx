import React from 'react';

export const Slide7HowToInfect: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-5 md:p-8 font-comic-neue" data-slide="7" id="slide-7">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1.5">
        <span className="bg-[#a7f3d0] text-emerald-900 px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 05: HƯỚNG DẪN "TỰ HẠI" BẢN THÂN
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 07 / 08</span>
      </div>

      {/* Main Content: 4 Steps */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-3">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka">
            4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững
          </h2>
          <p className="text-[11px] sm:text-xs font-bold text-zinc-600 mt-0.5">
            (Cách để bạn rơi vào 'bẫy tri thức' mà không bị áp lực hay bỏ cuộc giữa chừng)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Step 1 */}
          <div className="comic-panel-yellow p-3.5 flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-xs text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-1.5">
                01
              </div>
              <h3 className="font-comic-fredoka font-black text-xs sm:text-sm text-[#111827]">
                CHỌN SÁCH MÌNH THÍCH
              </h3>
              <p className="text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                Đừng đọc sách self-help khô khan chỉ vì người khác khen. Bắt đầu từ trinh thám, comic, hay tiểu thuyết cuốn hút!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-amber-800">
              👉 Miễn là có chữ và bạn thấy vui!
            </div>
          </div>

          {/* Step 2 */}
          <div className="comic-panel-sky p-3.5 flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-xs text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-1.5">
                02
              </div>
              <h3 className="font-comic-fredoka font-black text-xs sm:text-sm text-[#111827]">
                MICRO-HABIT: 10 TRANG
              </h3>
              <p className="text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                Mục tiêu nhỏ đến mức không thể thất bại: Chỉ 10 trang mỗi ngày trước khi ngủ. 1 năm đã đọc xong 12 cuốn sách dày!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-blue-800">
              👉 Đều đặn quan trọng hơn tốc độ!
            </div>
          </div>

          {/* Step 3 */}
          <div className="comic-panel-mint p-3.5 flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-xs text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-1.5">
                03
              </div>
              <h3 className="font-comic-fredoka font-black text-xs sm:text-sm text-[#111827]">
                CHO PHÉP BỎ DỞ
              </h3>
              <p className="text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                Nếu đọc qua 50 trang mà thấy cuốn sách quá chán ngắt, hãy can đảm đóng lại và chuyển cuốn khác. Đời quá ngắn để đọc sách dở!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-emerald-800">
              👉 Không có gì phải thấy tội lỗi!
            </div>
          </div>

          {/* Step 4 */}
          <div className="comic-panel-coral p-3.5 flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-xs text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-1.5">
                04
              </div>
              <h3 className="font-comic-fredoka font-black text-xs sm:text-sm text-[#111827]">
                TẠO RITUAL ÊM ÁI
              </h3>
              <p className="text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                Pha tách cà phê thơm hoặc trà nóng, tìm góc ghế êm ái, bật nhạc lofi không lời và tận hưởng chuyến du hành tâm trí.
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-red-800">
              👉 Biến đọc sách thành niềm vui!
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-1">
        <span className="font-comic-fredoka">KẾ HOẠCH HÀNH ĐỘNG 4 BƯỚC</span>
        <span>NHẤN 👉 ĐỂ SANG TRANG KẾT LUẬN & GIAO LƯU</span>
      </div>

    </div>
  );
};
