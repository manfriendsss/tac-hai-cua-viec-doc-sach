import React from 'react';

export const Slide1Title: React.FC = () => {
  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="1"
      data-steps="3"
      id="slide-1"
    >
      {/* Top Secret Header Strip */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            FILE NO: #BOOK-994-X // CỤC ĐIỀU TRA MẬT VỤ TRI THỨC
          </span>
        </div>
        <div className="stamp-top-secret text-xs sm:text-sm">
          TOP SECRET // CẢNH BÁO NGUY HIỂM
        </div>
      </div>

      {/* Main Slide Content: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Case Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="dossier-tag bg-[#b91c1c] text-white text-xs sm:text-sm font-bold">
                BÁO ĐỘNG ĐỎ // CẤP ĐỘ 5
              </span>
              <span className="font-dossier-code text-xs sm:text-sm font-bold text-[#57534e]">
                CHẤT GÂY NGHIỆN HỢP PHÁP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#141413] leading-[1.08] font-dossier-title tracking-tight uppercase">
              TÁC HẠI CỦA <br />
              <span className="text-[#b91c1c] underline decoration-[#b91c1c] decoration-4 inline-block mt-1">
                VIỆC ĐỌC SÁCH!
              </span>
            </h1>

            <p className="font-dossier-code text-sm sm:text-base font-bold text-[#b91c1c] mt-2 uppercase tracking-wide">
              Lời Cảnh Báo Cho Những Kẻ Thích Đua Đòi Trí Thức
            </p>

            <div className="dossier-card p-3.5 sm:p-4 mt-2 max-w-xl border-l-4 border-l-[#b91c1c]">
              <div className="dossier-paperclip"></div>
              <p className="text-sm sm:text-base font-bold text-[#292524] leading-relaxed font-typewriter">
                Một chất cấm không cần tiêm chích, len lỏi qua đôi mắt tấn công đại não, làm biến dạng hoàn toàn nhân cách... Thủ phạm không ai khác chính là: <strong className="text-[#b91c1c] font-black">ĐỌC SÁCH!</strong>
              </p>
            </div>
          </div>

          {/* 3 Step-Reveal Feature Cards */}
          <div className="grid grid-cols-3 gap-2.5 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card dossier-card p-3 text-left cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="dossier-tag text-xs font-bold">CHỈ SỐ #01</span>
              <div className="font-dossier-title font-bold text-lg sm:text-xl text-[#b91c1c] pen-write-anim mt-1">
                -68% Stress
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#57534e] mt-1 leading-snug">
                Hệ thần kinh tê liệt <br /> trong sự bình yên
              </div>
            </div>

            <div 
              data-step-card="2"
              className="step-card dossier-card p-3 text-left cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="dossier-tag text-xs font-bold bg-[#0369a1] text-white">CHỈ SỐ #02</span>
              <div className="font-dossier-title font-bold text-lg sm:text-xl text-[#0369a1] pen-write-anim mt-1">
                +2 Năm Thọ
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#57534e] mt-1 leading-snug">
                Tốn thêm 2 năm <br /> tiền ăn và đóng thuế
              </div>
            </div>

            <div 
              data-step-card="3"
              className="step-card dossier-card p-3 text-left cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="dossier-tag text-xs font-bold bg-[#15803d] text-white">CHỈ SỐ #03</span>
              <div className="font-dossier-title font-bold text-lg sm:text-xl text-[#15803d] pen-write-anim mt-1">
                100% Quá Tải
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#57534e] mt-1 leading-snug">
                Mất sạch ngây thơ, <br /> cô độc giữa đám đông
              </div>
            </div>

          </div>

        </div>

        {/* Right 5 Columns: Classified Evidence Board (True 3:4 Aspect Ratio, Zero Crop) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <div className="dossier-card evidence-photo-frame p-2.5 sm:p-3 rotate-1 max-w-[320px] w-full bg-[#fbf5e8] border-2 border-[#1c1917] shadow-xl relative">
            <div className="dossier-paperclip"></div>
            
            {/* Clean Header: Minimal Text, Larger Font */}
            <div className="flex justify-between items-center border-b border-[#1c1917]/30 pb-1.5 mb-2 px-1">
              <span className="font-dossier-code text-sm font-bold text-[#1c1917] tracking-wider">
                TANG VẬT #01
              </span>
              <span className="stamp-top-secret text-xs">
                TOP SECRET
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide1-claymation.webp"
                alt="Classified Evidence: Agent Forrest Gump"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                <div className="stamp-top-secret text-xs font-bold stamp-slam-anim bg-[#fef2f2]/95 px-3 py-1 shadow-md border-2 border-[#b91c1c] text-[#b91c1c]">
                  ĐẶC VỤ FORREST GUMP
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-2"></div>

    </div>
  );
};
