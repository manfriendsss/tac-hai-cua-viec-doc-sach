import React from 'react';

export const Slide2Roadmap: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-8 md:p-12 font-comic-neue" data-slide="2">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#fef08a] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            TỔNG QUAN 5 ĐIỀU NGUY HẠI
          </span>
          <span className="font-comic-fredoka text-xs font-bold text-zinc-600">
            CHUYÊN MỤC TRANH VUI CUỐI TUẦN
          </span>
        </div>
        <div className="text-xs font-comic-fredoka font-bold text-zinc-500">
          TRANG 02 / 12
        </div>
      </div>

      {/* Main Grid: Exact replica of user reference image layout */}
      <div className="my-auto grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left 7.5 Columns: Title, Subtitle & 5 Humorous Bullets */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-none font-comic-fredoka">
              Tác hại của việc đọc sách
            </h2>
            <p className="text-xs md:text-sm font-bold text-[#4b5563] italic mt-1 font-comic-neue">
              (Thực ra là ích lợi, nhưng nhìn theo lối tư duy ngược hài hước)
            </p>
          </div>

          {/* 5 Humorous Bullets */}
          <div className="flex flex-col gap-2 mt-2">
            
            <div className="comic-panel p-2.5 flex items-center gap-3">
              <span className="text-xl">🌟</span>
              <div className="text-xs md:text-sm font-bold text-[#1f2937]">
                <span className="font-comic-fredoka font-bold text-[#b45309] text-sm md:text-base">
                  Dễ bị nghiện kiến thức và tò mò về thế giới:
                </span>{' '}
                Gặp cái gì cũng hỏi "Tại sao?", tra cứu đến tận nửa đêm!
              </div>
            </div>

            <div className="comic-panel p-2.5 flex items-center gap-3">
              <span className="text-xl">🌟</span>
              <div className="text-xs md:text-sm font-bold text-[#1f2937]">
                <span className="font-comic-fredoka font-bold text-[#b45309] text-sm md:text-base">
                  Khiến vốn từ tăng lên bất thường:
                </span>{' '}
                Dùng từ ngữ bay bổng đến mức bạn bè phải xin phụ đề dịch thuật!
              </div>
            </div>

            <div className="comic-panel p-2.5 flex items-center gap-3">
              <span className="text-xl">🌟</span>
              <div className="text-xs md:text-sm font-bold text-[#1f2937]">
                <span className="font-comic-fredoka font-bold text-[#b45309] text-sm md:text-base">
                  Làm trí tưởng tượng hoạt động quá mức:
                </span>{' '}
                Xem phim chuyển thể lúc nào cũng chê "sách hay hơn phim 100 lần"!
              </div>
            </div>

            <div className="comic-panel p-2.5 flex items-center gap-3">
              <span className="text-xl">🌟</span>
              <div className="text-xs md:text-sm font-bold text-[#1f2937]">
                <span className="font-comic-fredoka font-bold text-[#b45309] text-sm md:text-base">
                  Gây ra thói quen suy nghĩ sâu và phản biện:
                </span>{' '}
                Không ai dắt mũi được bạn nữa, làm mất đi sự "ngây thơ" thuở nào!
              </div>
            </div>

            <div className="comic-panel p-2.5 flex items-center gap-3">
              <span className="text-xl">🌟</span>
              <div className="text-xs md:text-sm font-bold text-[#1f2937]">
                <span className="font-comic-fredoka font-bold text-[#b45309] text-sm md:text-base">
                  Khiến bạn bình tĩnh, tập trung và sống tích cực:
                </span>{' '}
                Tước mất quyền được nổi giận, cáu kỉnh chính đáng với cuộc đời!
              </div>
            </div>

          </div>

        </div>

        {/* Right 4.5 Columns: Antique Books & Quill in Sunday Comic Strip Panel */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center">
          <div className="w-full comic-panel-yellow p-4 relative rotate-1">
            <div className="w-full h-52 bg-white rounded-xl border-2 border-[#1f2937] overflow-hidden flex items-center justify-center">
              <img
                src="/assets/books_quill_crop.webp"
                alt="Chồng sách và lông ngỗng cổ điển"
                className="w-full h-full object-contain filter contrast-110"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-comic-hand text-base font-bold text-[#1f2937]">
                "Càng đọc nhiều, thế giới càng mở rộng... và chiếc ví càng mỏng đi!" ☕📚
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-2">
        <span className="font-comic-fredoka">BÁO CÁO TOÀN CẢNH • GÓC NHÌN NGƯỢC HÀI HƯỚC</span>
        <span>NHẤN 👉 HOẶC SPACE ĐỂ TIẾP TỤC</span>
      </div>

    </div>
  );
};
