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
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-5 md:p-8 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="8">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2">
        <span>✦ BIẾN CHỨNG TÂM THẦN & NƠ-RON ĐẠI NÃO ✦</span>
        <span>NOXAE CEREBRI I–IV</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          BỐN BIẾN CHỨNG ĐẦU TIÊN CỦA ĐẠI NÃO (1–4)
        </h2>
        <div className="divider-sanguine my-1">
          <div className="divider-sanguine-line"></div>
          <span className="text-xs tracking-widest text-[#991b1b]">🧠 ⭕ 📐</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </motion.div>

      {/* Main Grid: 4 Cards Left + Mind Gears Right */}
      <div className="grid grid-cols-12 gap-3 md:gap-4 my-auto w-full px-1 items-center">
        
        {/* Left 4 Cards: 8 Columns */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {harms.map((h, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="bg-white/65 p-3.5 border-2 border-dashed border-[#991b1b]/40 rounded-xl flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-1 text-xs border-b border-[#991b1b]/20 pb-1">
                  <span className="font-bold text-[#991b1b] font-davinci-title">Biến chứng #{h.num}</span>
                  <span className="text-[10px] text-[#7c2d12] font-davinci-mono">TÂM THẦN</span>
                </div>
                <h4 className="font-bold text-xs md:text-sm text-[#521b0a] font-davinci-title mb-1">
                  {h.title}
                </h4>
                <p className="text-[11px] md:text-xs text-[#7c2d12] leading-relaxed">
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
          className="col-span-12 md:col-span-4 flex items-center justify-center p-2 rounded-xl border-2 border-dashed border-[#991b1b]/40 bg-white/50 shadow-md"
        >
          <img 
            loading="lazy"
            decoding="async"
            src="/assets/davinci-mind-gears.webp" 
            alt="Bản vẽ giải phẫu não bộ bánh răng Da Vinci" 
            className="w-full max-h-[250px] md:max-h-[290px] object-contain rounded"
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>DE ANATOMIA CEREBRI • FOLIO VIII</span>
        <span className="italic">"Khi nơ-ron thần kinh ngây thơ bị phức tạp hóa vĩnh viễn."</span>
        <span>SANGUINE CHALK</span>
      </div>

    </div>
  );
};
