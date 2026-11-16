import React from 'react';

export const Slide8HarmMind: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="8">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fef08a] text-[#1f2937] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          BIẾN CHỨNG NÃO BỘ (1 - 4)
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 08 / 12</span>
      </div>

      {/* Main 2x2 Grid */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-3">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka">
            4 Biến Chứng Tâm Thần & Não Bộ Hài Hước
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          
          {/* Harm 1 */}
          <div className="comic-panel-yellow p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">🧐</span>
                <span className="font-comic-fredoka font-bold text-xs bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 01
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-1.5">
                MẤT QUYỀN ĐƯỢC TIN SÁI CỔ
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Bộ lọc tư duy phản biện hoạt động quá nhạy. Nghe bất kỳ tin đồn hay quảng cáo nào cũng tự động hỏi: "Bằng chứng ở đâu? Dữ liệu mẫu bao nhiêu người?" làm mọi người ngán ngẩm!
              </p>
            </div>
            <div className="mt-2 text-[11px] font-comic-hand font-bold text-amber-800">
              👉 Bạn trở nên quá tỉnh táo để bị dắt mũi!
            </div>
          </div>

          {/* Harm 2 */}
          <div className="comic-panel-sky p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">⏰</span>
                <span className="font-comic-fredoka font-bold text-xs bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 02
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-1.5">
                ẢO TƯỞNG THỜI GIAN NGHIÊM TRỌNG
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Lời nói dối kinh điển nhất trần gian: "Đọc nốt chương này rồi đi ngủ!". Và rồi chớp mắt một cái, chim đã hót líu lo ngoài cửa sổ và đồng hồ chỉ 4:30 sáng!
              </p>
            </div>
            <div className="mt-2 text-[11px] font-comic-hand font-bold text-blue-800">
              👉 Mắt thâm quầng như gấu trúc nhưng tâm hồn thỏa mãn!
            </div>
          </div>

          {/* Harm 3 */}
          <div className="comic-panel-mint p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">🎬</span>
                <span className="font-comic-fredoka font-bold text-xs bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 03
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-1.5">
                TRÍ TƯỞNG TƯỢNG PHÓNG ĐẠI
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Đi xem phim chuyển thể bom tấn Hollywood cùng bạn bè, nhưng 10 phút lại thốt lên: "Đoạn này trong truyện miêu tả tâm lý sâu sắc hơn nhiều, đạo diễn cắt xén hết rồi!".
              </p>
            </div>
            <div className="mt-2 text-[11px] font-comic-hand font-bold text-emerald-800">
              👉 Não bạn tự dựng đồ họa CGI đẹp hơn cả rạp chiếu phim!
            </div>
          </div>

          {/* Harm 4 */}
          <div className="comic-panel-coral p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">🗣️</span>
                <span className="font-comic-fredoka font-bold text-xs bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 04
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-1.5">
                "NGHIỆN" VỐN TỪ VỰNG DỊ THƯỜNG
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-1 leading-relaxed">
                Nói chuyện đời thường nhưng vô thức chêm vào các thuật ngữ triết học, tâm lý học và từ Hán-Việt cổ điển, khiến đám bạn phải đồng thanh bảo: "Nói tiếng người giùm cái!".
              </p>
            </div>
            <div className="mt-2 text-[11px] font-comic-hand font-bold text-red-800">
              👉 Vốn từ phong phú biến bạn thành 'từ điển sống'!
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-1.5">
        <span className="font-comic-fredoka">4 CĂN BỆNH TRẦM KHA</span>
        <span>NHẤN 👉 ĐỂ XEM BIẾN CHỨNG VÍ TIỀN & ĐỜI SỐNG</span>
      </div>

    </div>
  );
};
