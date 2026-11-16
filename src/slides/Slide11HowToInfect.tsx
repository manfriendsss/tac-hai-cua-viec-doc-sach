import React from 'react';

export const Slide11HowToInfect: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="11">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#a7f3d0] text-emerald-900 px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 05: HƯỚNG DẪN "TỰ HẠI" BẢN THÂN
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 11 / 12</span>
      </div>

      {/* Main Content: 4 Steps */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-3">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka">
            4 Bước "Nhiễm Độc" Sách Nhẹ Nhàng & Bền Vững
          </h2>
          <p className="text-xs sm:text-sm font-bold text-zinc-600 mt-1">
            (Cách để bạn rơi vào 'bẫy tri thức' mà không bị áp lực hay bỏ cuộc giữa chừng)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Step 1 */}
          <div className="comic-panel-yellow p-4 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-2">
                01
              </div>
              <h3 className="font-comic-fredoka font-black text-sm text-[#111827]">
                CHỌN SÁCH MÌNH THÍCH
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1.5 leading-relaxed">
                Đừng đọc sách self-help khô khan chỉ vì người khác khen. Hãy bắt đầu từ truyện trinh thám, comic, hay tiểu thuyết cuốn hút!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-amber-800">
              👉 Miễn là có chữ và bạn thấy vui!
            </div>
          </div>

          {/* Step 2 */}
          <div className="comic-panel-sky p-4 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-2">
                02
              </div>
              <h3 className="font-comic-fredoka font-black text-sm text-[#111827]">
                MICRO-HABIT: 10 TRANG
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1.5 leading-relaxed">
                Mục tiêu nhỏ đến mức không thể thất bại: Chỉ 10 trang mỗi ngày trước khi đi ngủ. 1 năm bạn đã đọc xong 12 cuốn sách dày!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-blue-800">
              👉 Đều đặn quan trọng hơn tốc độ!
            </div>
          </div>

          {/* Step 3 */}
          <div className="comic-panel-mint p-4 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-2">
                03
              </div>
              <h3 className="font-comic-fredoka font-black text-sm text-[#111827]">
                CHO PHÉP BỎ DỞ
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1.5 leading-relaxed">
                Nếu đọc qua 50 trang mà thấy cuốn sách quá chán ngắt, hãy can đảm đóng lại và chuyển cuốn khác. Đời quá ngắn để đọc sách dở!
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-emerald-800">
              👉 Không có gì phải thấy tội lỗi!
            </div>
          </div>

          {/* Step 4 */}
          <div className="comic-panel-coral p-4 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1f2937] flex items-center justify-center font-comic-fredoka font-black text-sm text-[#111827] shadow-[2px_2px_0px_#1f2937] mb-2">
                04
              </div>
              <h3 className="font-comic-fredoka font-black text-sm text-[#111827]">
                TẠO RITUAL ÊM ÁI
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1.5 leading-relaxed">
                Pha một tách cà phê thơm hoặc trà nóng, tìm một góc ghế êm ái, bật nhạc lofi không lời và tận hưởng chuyến du hành tâm trí.
              </p>
            </div>
            <div className="mt-2 text-[10px] font-comic-hand font-bold text-red-800">
              👉 Biến đọc sách thành niềm vui!
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-1.5">
        <span className="font-comic-fredoka">KẾ HOẠCH HÀNH ĐỘNG 4 BƯỚC</span>
        <span>NHẤN 👉 ĐỂ SANG TRANG KẾT LUẬN & GIAO LƯU</span>
      </div>

    </div>
  );
};
