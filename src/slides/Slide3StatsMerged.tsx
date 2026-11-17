import React from 'react';

export const Slide3StatsMerged: React.FC = () => {
  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] px-8 py-5 md:px-12 md:py-6 font-comic-neue h-full justify-between" 
      data-slide="3" 
      data-steps="3"
      id="slide-3"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#e0f2fe] text-[#1f2937] px-4 py-1 rounded-full text-sm sm:text-base font-comic-fredoka font-black border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 01: ĐIỀU TRA KHOA HỌC
          </span>
        </div>
      </div>

      {/* Main Container: Asymmetric Balance (8 Cols Left for 3 Big Cards, 4 Cols Right for Image) */}
      <div className="my-auto grid grid-cols-12 gap-7 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 8 Columns: Title & 3 Scientific Fact Cards with BIG Text */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka leading-tight">
              Ba Bằng Chứng Khoa Học Vạch Mặt Kẻ Đọc Sách
            </h2>
          </div>

          {/* 3 Step Cards with large readable typography */}
          <div className="flex flex-col gap-3">
            
            {/* Card 1: -68% Stress */}
            <div 
              id="s3-card-1"
              data-step-card="1"
              className="step-card comic-panel-coral p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black font-comic-fredoka text-red-600 leading-none">
                    -68%
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827]">
                    MỨC ĐỘ CĂNG THẲNG TAN BIẾN NGAY LẬP TỨC
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg font-bold text-zinc-800 leading-relaxed ink-write-text">
                Nhịp tim tự động chậm lại, cơ bắp giãn nở. Đọc sách giảm căng thẳng vượt trội hơn cả đi bộ, nghe nhạc hay uống trà nóng.
                <div className="mt-1.5 font-comic-hand font-black text-red-800 text-base sm:text-lg">
                  "Nguy hại": Tước mất quyền được nổi giận, cáu kỉnh chính đáng với đồng nghiệp!
                </div>
              </div>
            </div>

            {/* Card 2: +23 Tháng */}
            <div 
              id="s3-card-2"
              data-step-card="2"
              className="step-card comic-panel-sky p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black font-comic-fredoka text-blue-600 leading-none">
                    +23 THÁNG
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827]">
                    TUỔI THỌ TRUNG BÌNH KÉO DÀI THÊM
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg font-bold text-zinc-800 leading-relaxed ink-write-text">
                Duy trì thói quen đọc sách mỗi ngày giúp tế bào não bộ trẻ hóa và kéo dài tuổi thọ trung bình thêm gần 2 năm.
                <div className="mt-1.5 font-comic-hand font-black text-blue-800 text-base sm:text-lg">
                  "Nguy hại": Bạn buộc phải tiếp tục thức dậy đi làm, kiếm tiền và đối mặt cuộc đời thêm 700 ngày!
                </div>
              </div>
            </div>

            {/* Card 3: Tsundoku */}
            <div 
              id="s3-card-3"
              data-step-card="3"
              className="step-card comic-panel-yellow p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer rounded-2xl border-3 border-[#1f2937]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black font-comic-fredoka text-amber-700 leading-none">
                    MUA 10 ĐỌC 1
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-comic-fredoka font-black text-[#111827]">
                    HỘI CHỨNG MUA SÁCH TÍCH TRỮ (TSUNDOKU)
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg font-bold text-zinc-800 leading-relaxed ink-write-text">
                Hành vi mua sách chất đống như núi nhưng không đọc hết. Sự thật phũ phàng: Mua sách và đọc sách là hai sở thích hoàn toàn độc lập!
                <div className="mt-1.5 font-comic-hand font-black text-amber-900 text-base sm:text-lg">
                  "Nguy hại": Tạo tháp phong thủy bằng sách quanh phòng và gây viêm màng túi cấp tính!
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right 4 Columns: Claymation Hero Illustration */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full comic-panel-sky p-3.5 rounded-3xl border-3 border-[#1f2937] relative rotate-1 shadow-[5px_5px_0px_#1f2937]">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1f2937] bg-[#fdfcf7] flex items-center justify-center">
              <img
                src="/assets/slide3-claymation.webp"
                alt="Khoa học chứng minh tác hại của việc đọc sách"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="font-comic-hand text-base sm:text-lg font-black text-[#1f2937] leading-snug">
                "Đọc sách: Phương pháp tự nhiên vừa triệt hạ stress vừa gia hạn thời gian sống!"
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