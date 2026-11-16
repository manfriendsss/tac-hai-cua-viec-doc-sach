import React from 'react';

export const Slide3StatsMerged: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="3" 
      data-steps="2"
      id="slide-3"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#e0f2fe] text-[#1f2937] px-3.5 py-1 rounded-full text-xs sm:text-sm font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 01: ĐIỀU TRA KHOA HỌC
          </span>
          <span className="font-comic-fredoka text-xs sm:text-sm font-bold text-zinc-600 hidden sm:inline">
            SUSSEX & YALE UNIVERSITY
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-4">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            Hai Con Số "Bất Thường" Vạch Mặt Kẻ Đọc Sách
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#4b5563] mt-1 font-comic-neue">
            (Khi bạn đọc sách, cơ thể tự động phản bội lại mọi cơn bực tức thường ngày)
          </p>
        </div>

        {/* 2 Big Step Cards with Spotlight Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 1: Sussex */}
          <div 
            id="s3-card-1"
            data-step-card="1"
            className="step-card comic-panel-coral p-5 md:p-6 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-red-800 uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                    ĐẠI HỌC SUSSEX (ANH QUỐC)
                  </span>
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black font-comic-fredoka text-red-600 leading-none mt-2">
                    -68%
                  </div>
                  <div className="text-base sm:text-lg font-comic-fredoka font-black text-[#111827] mt-1">
                    MỨC ĐỘ STRESS TAN BIẾN NGAY LẬP TỨC
                  </div>
                </div>
                <span className="bg-red-600 text-white font-comic-fredoka font-black text-xs sm:text-sm px-3 py-1 rounded-full border border-[#1f2937] rotate-6 shadow-[2px_2px_0px_#1f2937]">
                  CHỈ 6 PHÚT! ⏱️
                </span>
              </div>

              <div className="mt-4 bg-white p-3.5 rounded-xl border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 leading-relaxed">
                  <span className="text-red-700 font-black">Cơ chế:</span> Nhịp tim tự động chậm lại, cơ bắp giãn nở. Đọc sách giảm căng thẳng vượt trội hơn cả đi bộ (100% vs 68%), nghe nhạc (61%), hay uống trà (54%).
                </p>
                <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-hand font-black text-red-800 border-t border-dashed border-red-200 pt-1.5">
                  👉 "Nguy hại": Tước mất quyền được nổi giận, cáu kỉnh chính đáng với đồng nghiệp!
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Yale */}
          <div 
            id="s3-card-2"
            data-step-card="2"
            className="step-card comic-panel-sky p-5 md:p-6 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs sm:text-sm font-comic-fredoka font-black text-blue-800 uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                    ĐẠI HỌC YALE (HOA KỲ)
                  </span>
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black font-comic-fredoka text-blue-600 leading-none mt-2">
                    +23 THÁNG
                  </div>
                  <div className="text-base sm:text-lg font-comic-fredoka font-black text-[#111827] mt-1">
                    TUỔI THỌ TRUNG BÌNH KÉO DÀI THÊM
                  </div>
                </div>
                <span className="bg-blue-600 text-white font-comic-fredoka font-black text-xs sm:text-sm px-3 py-1 rounded-full border border-[#1f2937] rotate-[-6deg] shadow-[2px_2px_0px_#1f2937]">
                  THEO DÕI 12 NĂM 🔬
                </span>
              </div>

              <div className="mt-4 bg-white p-3.5 rounded-xl border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
                <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-700 leading-relaxed">
                  <span className="text-blue-700 font-black">Cơ chế:</span> Khảo sát trên 3.635 người: Người duy trì thói quen đọc sách 3.5 giờ/tuần sống lâu hơn trung bình gần 2 năm so với người không đọc sách.
                </p>
                <div className="mt-2 text-xs sm:text-sm md:text-base font-comic-hand font-black text-blue-800 border-t border-dashed border-blue-200 pt-1.5">
                  👉 "Nguy hại": Bạn buộc phải tiếp tục làm việc, kiếm tiền và đối mặt cuộc đời thêm 700 ngày!
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Insight Pill */}
        <div className="comic-panel-yellow py-2 px-5 text-center rounded-xl border-2 border-[#1f2937] shadow-[3px_3px_0px_#1f2937]">
          <span className="text-xs sm:text-sm md:text-base font-comic-fredoka font-black text-[#111827]">
            💡 KẾT LUẬN KHOA HỌC: Đọc sách là phương pháp tự nhiên duy nhất vừa triệt hạ stress vừa gia hạn thời gian sống!
          </span>
        </div>

      </div>

      {/* Clean Bottom Anchor Spacer */}
      <div className="h-6"></div>

    </div>
  );
};
