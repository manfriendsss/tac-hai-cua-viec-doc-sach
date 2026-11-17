import React from 'react';

export const Slide8Conclusion: React.FC = () => {
  return (
    <div 
      className="slide dossier-paper text-[#1c1917] px-8 py-5 md:px-12 md:py-6 font-typewriter h-full justify-between" 
      data-slide="8" 
      data-steps="3"
      id="slide-8"
    >
      {/* Top Secret Header */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1c1917] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-dossier-code text-sm sm:text-base font-bold tracking-wider text-[#1c1917]">
            KẾT LUẬN ĐIỀU TRA: LỜI CHÚC ĐỘC ĐỊA & HỎI ĐÁP
          </span>
        </div>
        <div className="stamp-top-secret text-xs sm:text-sm">
          CASE CLOSED // VỤ ÁN KHÉP LẠI
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7 Columns: Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3.5">
          
          <div className="inline-block self-start">
            <span className="dossier-tag bg-[#b91c1c] text-white text-xs sm:text-sm font-bold">
              KẾT LUẬN CUỐI CÙNG • LỜI CHÚC PHÚC ĐỘC ĐỊA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141413] leading-tight font-dossier-title uppercase">
            Chúc Bạn Sớm Mắc Bệnh Đọc Sách <br />
            <span className="text-[#b91c1c] bg-[#fef3c7] px-3.5 py-1 rounded border-2 border-[#1c1917] inline-block shadow-md mt-2">
              Và Không Bao Giờ Chữa Khỏi!
            </span>
          </h2>

          {/* Confidential Case Quote Memo */}
          <div className="dossier-card p-4 sm:p-5 bg-[#fbf5e8] border-2 border-[#1c1917] shadow-md relative">
            <div className="dossier-paperclip"></div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#1c1917] leading-relaxed font-typewriter italic">
              "Đọc sách thực sự rất nguy hiểm. Bởi vì nó sẽ giết chết phiên bản cũ kỹ của ngày hôm qua để nhào nặn nên một phiên bản mới sâu sắc hơn, hài hước hơn, thấu cảm hơn và bản lĩnh hơn của chính bạn!"
            </p>
            <div className="mt-2.5 pt-2 border-t border-[#1c1917]/20 flex justify-between items-center text-xs font-dossier-code text-[#78716c]">
              <span>TRÍCH BIÊN BẢN GIÁM ĐỊNH TÂM THỨC</span>
              <span className="text-[#b91c1c] font-bold">XÁC THỰC: 100%</span>
            </div>
          </div>

          {/* 3 Step Action Cards */}
          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            
            <div 
              data-step-card="1"
              className="step-card dossier-card p-3 flex-1 flex flex-col items-center justify-center text-center cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="font-dossier-code font-bold text-xs text-[#b45309] uppercase">#01 • ĐIỀU TRẦN</span>
              <span className="font-dossier-title font-bold text-sm sm:text-base md:text-lg text-[#141413] mt-1 pen-write-anim">
                Hỏi & Đáp (Q&A)
              </span>
            </div>

            <div 
              data-step-card="2"
              className="step-card dossier-card p-3 flex-1 flex flex-col items-center justify-center text-center cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="font-dossier-code font-bold text-xs text-[#b91c1c] uppercase">#02 • LỜI NGUYỀN</span>
              <span className="font-dossier-title font-bold text-sm sm:text-base md:text-lg text-[#141413] mt-1 pen-write-anim">
                Lời Chúc Độc Địa
              </span>
            </div>

            <div 
              data-step-card="3"
              className="step-card dossier-card p-3 flex-1 flex flex-col items-center justify-center text-center cursor-pointer border-2 border-[#1c1917]"
            >
              <span className="font-dossier-code font-bold text-xs text-[#15803d] uppercase">#03 • HÀNH ĐỘNG</span>
              <span className="font-dossier-title font-bold text-sm sm:text-base md:text-lg text-[#141413] mt-1 pen-write-anim">
                Thử Thách 5 Trang
              </span>
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
                HỒ SƠ TỔNG KẾT
              </span>
              <span className="stamp-top-secret text-xs">
                CASE CLOSED
              </span>
            </div>

            {/* True 3:4 Uncropped Image Frame */}
            <div className="w-full aspect-[3/4] max-h-[400px] rounded border border-[#1c1917] overflow-hidden relative bg-[#1c1917]">
              <img
                src="/assets/slide8-claymation.webp"
                alt="Case Closed Illustration"
                className="w-full h-full object-contain filter contrast-105"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="stamp-top-secret stamp-slam-anim text-sm sm:text-base rotate-[-12deg] bg-[#fef2f2]/95 shadow-2xl px-4 py-1.5 border-2 border-[#b91c1c] text-[#b91c1c] font-black">
                  VỤ ÁN HOÀN TẤT // CASE CLOSED
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
