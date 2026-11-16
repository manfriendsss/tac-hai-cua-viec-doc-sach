import React, { useState } from 'react';

export const Slide5HarmsMerged: React.FC = () => {
  const [activeHarm, setActiveHarm] = useState<number | null>(null);

  const toggleHarm = (id: number) => {
    setActiveHarm(prev => prev === id ? null : id);
  };

  const mindHarms = [
    {
      id: 1,
      icon: '🧐',
      title: 'MẤT QUYỀN TIN SÁI CỔ',
      desc: 'Bộ lọc tư duy phản biện quá nhạy. Nghe bất kỳ tin đồn hay quảng cáo nào cũng hỏi: "Bằng chứng ở đâu?" làm mọi người ngán ngẩm!',
      punch: 'Bạn trở nên quá tỉnh táo để bị dắt mũi!',
      tagColor: 'bg-amber-100 text-amber-900'
    },
    {
      id: 2,
      icon: '⏰',
      title: 'ẢO TƯỞNG THỜI GIAN',
      desc: 'Lời nói dối kinh điển: "Đọc nốt chương này rồi ngủ!". Và rồi chớp mắt một cái, chim đã hót ngoài cửa sổ và đồng hồ chỉ 4:30 sáng!',
      punch: 'Mắt thâm như gấu trúc nhưng tâm hồn thỏa mãn!',
      tagColor: 'bg-sky-100 text-sky-900'
    },
    {
      id: 3,
      icon: '🎬',
      title: 'TRÍ TƯỞNG TƯỢNG PHÓNG ĐẠI',
      desc: 'Xem phim chuyển thể bom tấn cùng bạn bè, nhưng 10 phút lại thốt lên: "Trong truyện miêu tả sâu sắc hơn nhiều, phim cắt xén hết!".',
      punch: 'Não tự dựng CGI 4K đẹp hơn rạp phim!',
      tagColor: 'bg-emerald-100 text-emerald-900'
    },
    {
      id: 4,
      icon: '🗣️',
      title: '"NGHIỆN" VỐN TỪ DỊ THƯỜNG',
      desc: 'Nói chuyện đời thường nhưng vô thức chêm thuật ngữ triết học, tâm lý khiến bạn bè bảo: "Nói tiếng người giùm cái!".',
      punch: 'Kho từ điển sống gây hoang mang bạn bè!',
      tagColor: 'bg-rose-100 text-rose-900'
    }
  ];

  const lifeHarms = [
    {
      id: 5,
      icon: '💸',
      title: 'HỘI CHỨNG TSUNDOKU (VIÊM VÍ)',
      desc: 'Tốc độ mua sách nhanh gấp 10 lần đọc. Đi hội sách chỉ định ngó nghiêng nhưng ôm về 8 cuốn dày cộp, xếp thành tháp phong thủy!',
      punch: '"Mua sách là mua hy vọng tri thức!" 📚',
      tagColor: 'bg-red-100 text-red-900'
    },
    {
      id: 6,
      icon: '🚽',
      title: 'CHIẾM DỤNG TOILET LÀM THƯ VIỆN',
      desc: 'Cầm sách vào toilet "giải quyết 3 phút", lật trang hồi hộp ngồi lì 45 phút. Bước ra với đôi chân tê rần mất cảm giác!',
      punch: 'Phòng đọc VIP yên tĩnh nhất trần gian! ✨',
      tagColor: 'bg-yellow-100 text-yellow-900'
    },
    {
      id: 7,
      icon: '🧘',
      title: 'BÌNH THẢN ĐẾN MỨC "ĐÁNG GHÉT"',
      desc: 'Khi drama mạng xã hội bùng nổ, mọi người sốt sắng cãi cọ, riêng bạn lại bình thản bảo: "Mọi việc đều có tính hai mặt".',
      punch: 'Trạng thái Zen vô cực: Miễn nhiễm drama! 🌊',
      tagColor: 'bg-blue-100 text-blue-900'
    }
  ];

  return (
    <div 
      className="slide bg-comic-strip text-[#1f2937] p-4 md:p-6 font-comic-neue" 
      data-slide="5" 
      data-steps="7"
      id="slide-5"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10 border-b-2 border-[#1f2937] pb-1">
        <div className="flex items-center gap-2">
          <span className="bg-[#fee2e2] text-[#b91c1c] px-2.5 py-0.5 rounded-full text-xs font-comic-fredoka font-bold border-2 border-[#1f2937] shadow-[2px_2px_0px_#1f2937]">
            PHẦN 03: HỒ SƠ 7 BIẾN CHỨNG
          </span>
          <span className="font-comic-fredoka text-xs font-bold text-zinc-600 hidden sm:inline">
            4 NÃO BỘ & TƯ DUY • 3 ĐỜI SỐNG & VÍ TIỀN
          </span>
        </div>
        <div className="text-xs font-comic-fredoka font-bold text-zinc-500">
          TRANG 05 / 08
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="my-auto max-w-6xl mx-auto w-full z-10 flex flex-col gap-2">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#111827] font-comic-fredoka leading-tight">
            7 Biến Chứng Đáng Sợ Khi Lỡ "Nhiễm Độc" Sách Quá Sâu
          </h2>
          <p className="text-[10px] sm:text-xs font-bold text-[#4b5563]">
            (Bấm vào bất kỳ thẻ nào để xem lời bình 'tác hại' dí dỏm)
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
          
          {/* Left Column: 4 Mind Harms (7 Cols) */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-bold text-xs uppercase text-amber-900 bg-[#fef08a] px-2 py-0.5 rounded border border-[#1f2937]">
                🧠 4 BIẾN CHỨNG NÃO BỘ & TƯ DUY
              </span>
              <span className="text-[10px] font-bold text-zinc-500">Biến chứng 01 - 04</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mindHarms.map((h) => {
                const isSelected = activeHarm === h.id;
                return (
                  <div
                    key={h.id}
                    id={`s5-harm-${h.id}`}
                    onClick={() => toggleHarm(h.id)}
                    className={`comic-panel py-2 px-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-[#fef9c3] scale-[1.03] ring-3 ring-amber-400 shadow-[5px_5px_0px_#1f2937] z-20' 
                        : 'bg-white hover:bg-yellow-50/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{h.icon}</span>
                        <span className={`text-[9px] font-comic-fredoka font-bold px-1.5 py-0.5 rounded border border-[#1f2937] ${h.tagColor}`}>
                          #{h.id}
                        </span>
                      </div>
                      <div className="font-comic-fredoka font-black text-xs text-[#111827] mt-0.5 leading-snug">
                        {h.title}
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                        {h.desc}
                      </p>
                    </div>
                    <div className="mt-1 text-[10px] font-comic-hand font-bold text-amber-800 border-t border-dashed border-zinc-200 pt-0.5">
                      👉 {h.punch}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3 Life Harms (5 Cols) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="font-comic-fredoka font-bold text-xs uppercase text-red-900 bg-[#fee2e2] px-2 py-0.5 rounded border border-[#1f2937]">
                💸 3 BIẾN CHỨNG ĐỜI SỐNG & VÍ TIỀN
              </span>
              <span className="text-[10px] font-bold text-zinc-500">Biến chứng 05 - 07</span>
            </div>

            <div className="flex flex-col gap-2">
              {lifeHarms.map((h) => {
                const isSelected = activeHarm === h.id;
                return (
                  <div
                    key={h.id}
                    id={`s5-harm-${h.id}`}
                    onClick={() => toggleHarm(h.id)}
                    className={`comic-panel py-2 px-3 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-[#fee2e2] scale-[1.03] ring-3 ring-red-400 shadow-[5px_5px_0px_#1f2937] z-20' 
                        : 'bg-white hover:bg-rose-50/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-lg">{h.icon}</span>
                          <span className="font-comic-fredoka font-black text-xs text-[#111827]">
                            {h.title}
                          </span>
                        </div>
                        <span className={`text-[9px] font-comic-fredoka font-bold px-1.5 py-0.5 rounded border border-[#1f2937] ${h.tagColor}`}>
                          #{h.id}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-bold text-zinc-700 mt-1 leading-snug">
                        {h.desc}
                      </p>
                    </div>
                    <div className="mt-1 text-[10px] font-comic-hand font-bold text-red-800 border-t border-dashed border-zinc-200 pt-0.5">
                      👉 {h.punch}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 z-10 border-t border-dashed border-[#1f2937] pt-1">
        <span className="font-comic-fredoka">BẤM VÀO BIẾN CHỨNG ĐỂ PHÓNG TO</span>
        <span>NHẤN 👉 ĐỂ SANG PHẦN 4: VÌ SAO 90% THOÁT NẠN?</span>
      </div>

    </div>
  );
};
