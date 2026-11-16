import React from 'react';

export const Slide4StatsDetails: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="4">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fef08a] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          HAI CON SỐ "BẤT THƯỜNG"
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 04 / 12</span>
      </div>

      {/* Main Grid: 2 Big Stat Cards */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10">
        
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka">
            Bằng Chứng Khoa Học Không Thể Chối Cãi
          </h2>
          <p className="text-xs sm:text-sm font-bold text-zinc-600 mt-1">
            (Khi bạn đọc sách, cơ thể tự động phản bội lại mọi cơn bực tức thường ngày)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Sussex */}
          <div className="comic-panel-coral p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-red-600 text-white font-comic-fredoka font-bold text-xs px-2.5 py-1 rounded-full border border-[#1f2937] rotate-6 shadow-[2px_2px_0px_#1f2937]">
              CHỈ 6 PHÚT!
            </div>

            <div>
              <span className="text-xs font-comic-fredoka font-bold text-red-800 uppercase tracking-wider">
                ĐẠI HỌC SUSSEX (ANH QUỐC)
              </span>
              <div className="text-6xl sm:text-7xl font-black font-comic-fredoka text-red-600 leading-none mt-2">
                -68%
              </div>
              <div className="text-base font-comic-fredoka font-bold text-[#111827] mt-1">
                MỨC ĐỘ STRESS TAN BIẾN NGAY LẬP TỨC
              </div>
            </div>

            <div className="mt-4 bg-white/90 p-3 rounded-xl border-2 border-[#1f2937]">
              <p className="text-xs font-bold text-zinc-700 leading-relaxed">
                So sánh thú vị: Đọc sách giảm stress tốt hơn đi bộ (100% vs 68%), nghe nhạc (61%), hay uống trà (54%). "Nguy hiểm" ở chỗ: Nó làm bạn bình tâm đến mức không thể kiếm cớ gây sự với đồng nghiệp!
              </p>
            </div>
          </div>

          {/* Card 2: Yale */}
          <div className="comic-panel-sky p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-blue-600 text-white font-comic-fredoka font-bold text-xs px-2.5 py-1 rounded-full border border-[#1f2937] rotate-[-6deg] shadow-[2px_2px_0px_#1f2937]">
              THEO DÕI 12 NĂM
            </div>

            <div>
              <span className="text-xs font-comic-fredoka font-bold text-blue-800 uppercase tracking-wider">
                ĐẠI HỌC YALE (HOA KỲ)
              </span>
              <div className="text-6xl sm:text-7xl font-black font-comic-fredoka text-blue-600 leading-none mt-2">
                +23 THÁNG
              </div>
              <div className="text-base font-comic-fredoka font-bold text-[#111827] mt-1">
                TUỔI THỌ TRUNG BÌNH KÉO DÀI THÊM
              </div>
            </div>

            <div className="mt-4 bg-white/90 p-3 rounded-xl border-2 border-[#1f2937]">
              <p className="text-xs font-bold text-zinc-700 leading-relaxed">
                Người duy trì thói quen đọc 3.5 giờ/tuần sống lâu hơn gần 2 năm so với người không đọc. "Hại" vô cùng: Bạn sẽ phải tiếp tục làm việc, trả tiền điện nước và chịu đựng thế giới thêm 700 ngày!
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">NGUỒN DỮ LIỆU: SUSSEX & YALE UNIVERSITY</span>
        <span>NHẤN 👉 ĐỂ SANG PHẦN TIẾP THEO</span>
      </div>

    </div>
  );
};
