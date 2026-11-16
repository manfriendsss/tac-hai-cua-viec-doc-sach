import React from 'react';

export const Slide10WhyQuit: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="10">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fef08a] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          PHẦN 04: LỐI THOÁT HIỂM
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 10 / 12</span>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-4">
        
        <div className="text-center">
          <span className="bg-[#dcfce7] text-emerald-900 border-2 border-[#1f2937] px-3 py-1 rounded-full text-xs font-comic-fredoka font-bold shadow-[2px_2px_0px_#1f2937]">
            TIN VUI CHO ĐA SỐ MỌI NGƯỜI
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111827] font-comic-fredoka mt-2">
            Vì Sao 90% Chúng Ta "Thoát Nạn" Thành Công?
          </h2>
          <p className="text-xs sm:text-sm font-bold text-zinc-600 mt-1">
            (Đừng quá lo lắng, bộ não có cơ chế tự vệ siêu mạnh để bạn không bị 'nghiện' sách!)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="comic-panel-yellow p-4 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-1">😴</div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827]">
                THUỐC NGỦ TỰ NHIÊN
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Mở sách ra đọc đến dòng thứ 4, mắt tự động díp lại, đầu gật gù như bổ củi. Sách chính là liệu pháp trị mất ngủ an toàn và tiết kiệm nhất trần đời!
              </p>
            </div>
            <div className="mt-3 text-[11px] font-comic-fredoka font-bold text-amber-800 bg-white/80 p-1.5 rounded-lg border border-[#1f2937] text-center">
              Cơ chế tự ngắt: Bảo vệ mắt 💤
            </div>
          </div>

          <div className="comic-panel-coral p-4 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-1">📱</div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827]">
                SỨC HÚT CỦA REELS & TIKTOK
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Đọc một trang sách mất 2 phút mà không có nhạc nền hay hiệu ứng chuyển cảnh. Trong khi đó quẹt 3 video ngắn dopamine tràn ngập não bộ tức thì!
              </p>
            </div>
            <div className="mt-3 text-[11px] font-comic-fredoka font-bold text-red-800 bg-white/80 p-1.5 rounded-lg border border-[#1f2937] text-center">
              Dopamine nhanh thắng thế! ⚡
            </div>
          </div>

          <div className="comic-panel-mint p-4 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-1">📸</div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827]">
                MUA VỀ ĐỂ CHỤP ẢNH SỐNG ẢO
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Chụp ảnh cuốn sách bên ly cà phê đăng story kèm caption sâu sắc, nhận 200 likes rồi... gấp sách lại cất lên kệ. Mục tiêu trí thức đã hoàn thành 100%!
              </p>
            </div>
            <div className="mt-3 text-[11px] font-comic-fredoka font-bold text-emerald-800 bg-white/80 p-1.5 rounded-lg border border-[#1f2937] text-center">
              Hài lòng xã hội: Không tốn nơ-ron! ✨
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-1.5">
        <span className="font-comic-fredoka">CƠ CHẾ PHÒNG VỆ CỦA NÃO BỘ</span>
        <span>NHẤN 👉 NẾU BẠN VẪN MUỐN DŨNG CẢM "DÍNH BẪY"</span>
      </div>

    </div>
  );
};
