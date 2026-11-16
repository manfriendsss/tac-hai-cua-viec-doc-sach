import React from 'react';

export const Slide3StatsIntro: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="3">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#e0f2fe] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 01: ĐIỀU TRA KHOA HỌC
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 03 / 12</span>
      </div>

      {/* Center Narrative */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center z-10 flex flex-col items-center gap-4">
        
        <div className="inline-block bg-[#fef08a] border-3 border-[#1f2937] px-4 py-1 rounded-2xl text-xs sm:text-sm font-comic-fredoka font-bold shadow-[3px_3px_0px_#1f2937] rotate-[-1deg]">
          🔬 CÁC NHÀ KHOA HỌC NÓI GÌ?
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111827] leading-tight font-comic-fredoka max-w-3xl">
          Khi Khoa Học Bắt Đầu <br />
          <span className="text-[#b45309] underline decoration-[#f59e0b] decoration-wavy">
            "Vạch Mặt" Kẻ Đọc Sách!
          </span>
        </h2>

        <div className="cloud-bubble p-5 max-w-2xl bg-white text-left mt-2">
          <p className="text-sm md:text-base font-bold text-[#374151] leading-relaxed">
            "Đại học Sussex (Anh) và Đại học Yale (Mỹ) đã bỏ ra hàng chục năm nghiên cứu não bộ con người. Kết quả mang lại một sự thật 'đau lòng': Đọc sách nguy hiểm hơn chúng ta tưởng rất nhiều — nó âm thầm cải tổ não bộ, triệt tiêu căng thẳng và kéo dài tuổi thọ của bạn!"
          </p>
        </div>

        {/* 2 Teaser Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-2">
          <div className="comic-panel-coral p-3 text-center">
            <span className="font-comic-fredoka font-bold text-xs text-red-700 uppercase">THÍ NGHIỆM SUSSEX</span>
            <div className="text-xl font-comic-fredoka font-black text-[#111827]">6 PHÚT THẦN TỐC</div>
            <div className="text-xs font-bold text-zinc-600">Đánh sập nhịp tim căng thẳng</div>
          </div>
          <div className="comic-panel-sky p-3 text-center">
            <span className="font-comic-fredoka font-bold text-xs text-blue-700 uppercase">NGHIÊN CỨU YALE 12 NĂM</span>
            <div className="text-xl font-comic-fredoka font-black text-[#111827]">+23 THÁNG CUỘC ĐỜI</div>
            <div className="text-xs font-bold text-zinc-600">Buộc bạn phải sống lâu hơn</div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">HỒ SƠ GIẢM ĐỊNH NÃO BỘ</span>
        <span>NHẤN 👉 ĐỂ XEM CHI TIẾT SỐ LIỆU</span>
      </div>

    </div>
  );
};
