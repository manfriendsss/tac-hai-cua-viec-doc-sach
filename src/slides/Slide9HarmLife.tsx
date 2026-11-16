import React from 'react';

export const Slide9HarmLife: React.FC = () => {
  return (
    <div className="slide bg-comic-strip text-[#1f2937] p-6 md:p-10 font-comic-neue" data-slide="9">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-3 border-[#1f2937] pb-2">
        <span className="bg-[#fee2e2] text-[#b91c1c] px-3 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
          BIẾN CHỨNG ĐỜI SỐNG & VÍ TIỀN (5 - 7)
        </span>
        <span className="text-xs font-comic-fredoka font-bold text-zinc-500">TRANG 09 / 12</span>
      </div>

      {/* Main Content: 3 Cards */}
      <div className="my-auto max-w-5xl mx-auto w-full z-10 flex flex-col gap-4">
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-comic-fredoka">
            3 Biến Chứng Thực Tế Khiến Bạn Vừa Cười Vừa Mếu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Harm 5 */}
          <div className="comic-panel-coral p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl">💸</span>
                <span className="font-comic-fredoka font-bold text-[10px] bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 05
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-2">
                HỘI CHỨNG "TSUNDOKU" & VIÊM VÍ
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Tốc độ mua sách nhanh gấp 10 lần tốc độ đọc. Đi hội sách chỉ định ngó nghiêng nhưng ôm về 8 cuốn dày cộp, xếp chồng từ sàn lên tận nóc tủ làm phong thủy!
              </p>
            </div>
            <div className="mt-3 bg-white/90 p-2 rounded-lg border border-[#1f2937] text-center text-xs font-comic-hand font-bold text-red-800">
              "Mua sách là mua hy vọng tri thức!" 📚
            </div>
          </div>

          {/* Harm 6 */}
          <div className="comic-panel-yellow p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl">🚽</span>
                <span className="font-comic-fredoka font-bold text-[10px] bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 06
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-2">
                CHIẾM DỤNG TOILET LÀM THƯ VIỆN
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Cầm cuốn sách vào nhà vệ sinh "giải quyết nhanh 3 phút", nhưng lật trang hồi hộp quá ngồi lì 45 phút. Hậu quả là bước ra với đôi chân tê rần mất cảm giác!
              </p>
            </div>
            <div className="mt-3 bg-white/90 p-2 rounded-lg border border-[#1f2937] text-center text-xs font-comic-hand font-bold text-amber-800">
              Phòng đọc sách VIP yên tĩnh nhất trần gian! ✨
            </div>
          </div>

          {/* Harm 7 */}
          <div className="comic-panel-sky p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl">🧘</span>
                <span className="font-comic-fredoka font-bold text-[10px] bg-white px-2 py-0.5 rounded-md border border-[#1f2937]">
                  BIẾN CHỨNG 07
                </span>
              </div>
              <h3 className="font-comic-fredoka font-black text-base text-[#111827] mt-2">
                BÌNH THẢN ĐẾN MỨC "ĐÁNG GHÉT"
              </h3>
              <p className="text-xs font-bold text-zinc-700 mt-2 leading-relaxed">
                Khi drama mạng xã hội bùng nổ, mọi người sốt sắng cãi cọ, riêng bạn lại bình tĩnh ngồi đọc sách và bảo: "Mọi việc đều có tính hai mặt". Thái độ này dễ làm người khác bực mình!
              </p>
            </div>
            <div className="mt-3 bg-white/90 p-2 rounded-lg border border-[#1f2937] text-center text-xs font-comic-hand font-bold text-blue-800">
              Trạng thái Zen vô cực: Miễn nhiễm drama! 🌊
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs font-bold text-zinc-600 z-10 border-t-2 border-dashed border-[#1f2937] pt-1.5">
        <span className="font-comic-fredoka">7 BIẾN CHỨNG ĐÃ ĐIỂM DANH</span>
        <span>NHẤN 👉 ĐỂ SANG PHẦN 4: VÌ SAO 90% THOÁT NẠN?</span>
      </div>

    </div>
  );
};
