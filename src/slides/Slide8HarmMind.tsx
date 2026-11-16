import React from 'react';
import { motion } from 'framer-motion';

export const Slide8HarmMind: React.FC = () => {
  const harms = [
    {
      num: "01",
      title: "Cải Thiện Giấc Ngủ Quá Mức",
      desc: "Đọc vài trang là mắt díu lại ngủ say như chết. Hậu quả: Không còn ai thức thâu đêm cày phim Hàn hay lướt mạng hóng drama showbiz tới 3h sáng! Lãng phí thanh xuân!"
    },
    {
      num: "02",
      title: "Tăng Hiểu Biết Đến Mất Ngây Thơ",
      desc: "Đầu nhồi nhét đủ thứ kiến thức. Khi cả thế giới đang hoang mang vì tin giật gân, bạn lại lẳng lặng ngồi phân tích lỗ hổng logic — bỗng dưng thành kẻ lạc lõng giữa đám đông!"
    },
    {
      num: "03",
      title: "Vốn Từ Vựng Mất Kiểm Soát",
      desc: "Thay vì 'Trời ơi đỉnh quá', bạn lại tuôn ra từ ngữ hoa mỹ như người thế kỷ 19 xuyên không về. Trở thành 'ác mộng' tranh luận — cãi nhau với người đọc sách như lấy trứng chọi đá!"
    },
    {
      num: "04",
      title: "Trí Tưởng Tượng 4K Hoang Tưởng",
      desc: "Từ con chữ đen trắng, não tự dựng phim bom tấn 4K hoành tráng. Hệ lụy: Ra rạp xem phim chuyển thể mặt hụt hẫng tột độ: 'Chán thế, chẳng đẹp bằng một góc trong đầu mình!'"
    }
  ];

  return (
    <div className="slide bg-codex-parchment text-[#291305] p-5 md:p-8 flex flex-col justify-between font-serif-italic relative select-none" data-slide="8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          BIẾN CHỨNG NÃO BỘ & TÂM TRÍ
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Bốn "Căn Bệnh" Tâm Thần Đầu Tiên (1–4)
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🧠 👁️ 💭</span>
          <div className="divider-line right"></div>
        </div>
      </motion.div>

      {/* Main Grid: 4 Cards surrounding or alongside the Da Vinci Mind Gears */}
      <div className="grid grid-cols-12 gap-3 md:gap-4 my-auto w-full px-1 items-center">
        
        {/* Left 4 Cards: 7 Columns */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {harms.map((h, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="codex-card p-3.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-1 text-xs border-b border-[#78350f]/20 pb-1">
                  <span className="font-bold text-[#991b1b] font-codex-title">Biến chứng #{h.num}</span>
                  <span className="text-[10px] text-[#78350f] font-codex-mono">TÂM TRÍ</span>
                </div>
                <h4 className="font-bold text-xs md:text-sm text-[#291305] font-codex-title mb-1.5">
                  {h.title}
                </h4>
                <p className="text-[11px] md:text-xs text-[#522504] leading-relaxed italic">
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right 4 Columns: Da Vinci Mind Gears Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-12 md:col-span-4 flex items-center justify-center p-2 rounded-xl border border-[#78350f]/30 bg-[#faf3e3]/60 shadow-md"
        >
          <img 
            loading="lazy"
            decoding="async"
            src="/assets/davinci-mind-gears.webp" 
            alt="Bản vẽ giải phẫu não bộ bánh răng Da Vinci" 
            className="w-full max-h-[260px] md:max-h-[310px] object-contain rounded"
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">DE MUTATIONE CEREBRI • FOLIO VIII</span>
        <span className="italic">"Khi các nơ-ron ngây thơ bị phức tạp hóa vĩnh viễn."</span>
        <span className="font-codex-mono">FLORENTIA 2026</span>
      </div>

    </div>
  );
};
