import React, { useState } from 'react';

export const Slide3StatsMerged: React.FC = () => {
  // Step spotlight state (supports keyboard step motion and direct click)
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (cardNum: number) => {
    setActiveCard(prev => prev === cardNum ? null : cardNum);
  };

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] p-5 md:p-8 font-comic-neue" 
      data-slide="3" 
      data-steps="2"
      id="slide-3"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1.5">
        <div className="flex items-center gap-2">
          <span className="bg-[#e0f2fe] text-[#1f2937] px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 01: ĐIỀU TRA KHOA HỌC
          </span>
          <span className="font-comic-fredoka text-xs font-bold text-zinc-600 hidden sm:inline">
            SUSSEX & YALE UNIVERSITY
          </span>
        </div>
        <div className="text-xs font-comic-fredoka font-bold text-zinc-500">
          TRANG 03 / 08
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-3">
        
        {/* Header & Humorous Blurb */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka leading-tight">
            Hai Con Số "Bất Thường" Vạch Mặt Kẻ Đọc Sách
          </h2>
          <p className="text-[11px] sm:text-xs font-bold text-[#4b5563] mt-0.5">
            (Khi bạn đọc sách, cơ thể tự động phản bội lại mọi cơn bực tức thường ngày)
          </p>
        </div>

        {/* 2 Big Interactive Stat Cards with Spotlight Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Sussex */}
          <div 
            id="s3-card-1"
            onClick={() => toggleCard(1)}
            className={`comic-panel-coral p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-300 ${
              activeCard === 1 
                ? 'scale-[1.03] ring-4 ring-amber-400 shadow-[8px_8px_0px_#1f2937] z-20' 
                : activeCard === 2 
                  ? 'opacity-60 scale-[0.98]' 
                  : 'hover:scale-[1.01]'
            }`}
            title="Bấm để phóng to hoặc bấm phím cách để xem bước tiếp theo"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-comic-fredoka font-bold text-red-800 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded border border-[#1f2937]">
                  ĐẠI HỌC SUSSEX (ANH QUỐC)
                </span>
                <div className="text-5xl sm:text-6xl font-black font-comic-fredoka text-red-600 leading-none mt-1.5">
                  -68%
                </div>
                <div className="text-sm sm:text-base font-comic-fredoka font-bold text-[#111827] mt-0.5">
                  MỨC ĐỘ STRESS TAN BIẾN NGAY LẬP TỨC
                </div>
              </div>
              <span className="bg-red-600 text-white font-comic-fredoka font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-[#1f2937] rotate-6 shadow-[2px_2px_0px_#1f2937]">
                CHỈ 6 PHÚT! ⏱️
              </span>
            </div>

            <div className="mt-3 bg-white/95 p-2.5 rounded-xl border-2 border-[#1f2937]">
              <p className="text-xs font-bold text-zinc-700 leading-relaxed">
                <span className="text-red-700 font-extrabold">Cơ chế:</span> Nhịp tim tự động chậm lại, cơ bắp giãn nở. Đọc sách giảm căng thẳng vượt trội hơn cả đi bộ (100% vs 68%), nghe nhạc (61%), hay uống trà (54%).
              </p>
              <div className="mt-1.5 text-[11px] font-comic-hand font-bold text-red-800 border-t border-dashed border-red-200 pt-1">
                👉 "Nguy hại": Tước mất quyền được nổi giận, cáu kỉnh chính đáng với đồng nghiệp!
              </div>
            </div>
          </div>

          {/* Card 2: Yale */}
          <div 
            id="s3-card-2"
            onClick={() => toggleCard(2)}
            className={`comic-panel-sky p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-300 ${
              activeCard === 2 
                ? 'scale-[1.03] ring-4 ring-amber-400 shadow-[8px_8px_0px_#1f2937] z-20' 
                : activeCard === 1 
                  ? 'opacity-60 scale-[0.98]' 
                  : 'hover:scale-[1.01]'
            }`}
            title="Bấm để phóng to hoặc bấm phím cách để xem bước tiếp theo"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-comic-fredoka font-bold text-blue-800 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded border border-[#1f2937]">
                  ĐẠI HỌC YALE (HOA KỲ)
                </span>
                <div className="text-5xl sm:text-6xl font-black font-comic-fredoka text-blue-600 leading-none mt-1.5">
                  +23 THÁNG
                </div>
                <div className="text-sm sm:text-base font-comic-fredoka font-bold text-[#111827] mt-0.5">
                  TUỔI THỌ TRUNG BÌNH KÉO DÀI THÊM
                </div>
              </div>
              <span className="bg-blue-600 text-white font-comic-fredoka font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-[#1f2937] rotate-[-6deg] shadow-[2px_2px_0px_#1f2937]">
                THEO DÕI 12 NĂM 🔬
              </span>
            </div>

            <div className="mt-3 bg-white/95 p-2.5 rounded-xl border-2 border-[#1f2937]">
              <p className="text-xs font-bold text-zinc-700 leading-relaxed">
                <span className="text-blue-700 font-extrabold">Cơ chế:</span> Khảo sát trên 3.635 người: Người duy trì thói quen đọc sách 3.5 giờ/tuần sống lâu hơn trung bình 2 năm so với người không đọc sách.
              </p>
              <div className="mt-1.5 text-[11px] font-comic-hand font-bold text-blue-800 border-t border-dashed border-blue-200 pt-1">
                👉 "Nguy hại": Bạn buộc phải tiếp tục làm việc, kiếm tiền và đối mặt cuộc đời thêm 700 ngày!
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Insight Pill */}
        <div className="comic-panel-yellow py-1.5 px-4 text-center">
          <span className="text-xs font-comic-fredoka font-bold text-[#111827]">
            💡 KẾT LUẬN KHOA HỌC: Đọc sách là phương pháp tự nhiên duy nhất vừa triệt hạ stress vừa gia hạn thời gian sống!
          </span>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-1">
        <span className="font-comic-fredoka">BẤM VÀO THẺ HOẶC PHÍM → ĐỂ SPOTLIGHT</span>
        <span>NHẤN 👉 ĐỂ SANG PHẦN 2: TAM THỂ KHÍ CỤ</span>
      </div>

    </div>
  );
};
