import React from 'react';
import { motion } from 'framer-motion';

export const Slide4StatsDetails: React.FC = () => {
  return (
    <div className="slide bg-codex-parchment text-[#291305] p-6 md:p-10 flex flex-col justify-between font-serif-italic relative select-none" data-slide="4">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          CHỨNG CỨ SỐ HỌC
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Những Con Số "Biết Nói"
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🪶 📖 🪶</span>
          <div className="divider-line right"></div>
        </div>
      </motion.div>

      {/* 3 Main Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-auto w-full px-2">
        
        {/* Card 1: -68% Stress */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="codex-card flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs text-[#78350f] border-b border-[#78350f]/20 pb-1">
              <span className="font-bold uppercase font-codex-title">ĐH Sussex (2009)</span>
              <span className="font-bold text-[#991b1b]">6 PHÚT ĐỌC</span>
            </div>
            
            <div className="text-4xl md:text-6xl font-black text-[#991b1b] font-calligraphy italic tracking-tight my-2">
              -68%
            </div>
            
            <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 uppercase font-codex-title">
              Mức Độ Căng Thẳng (Stress)
            </h3>
            
            <p className="text-xs text-[#522504] leading-relaxed italic">
              ✦ Chỉ sau 6 phút đọc trong im lặng, nhịp tim đã chậm lại và cơ thể tự động thả lỏng — hiệu quả hơn cả nghe nhạc, uống trà hay đi dạo.
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-[#78350f]/20 text-[11px] text-[#78350f] font-semibold italic">
            ⚠️ <strong>Tác hại:</strong> Tước đi quyền nổi điên chính đáng! Sếp mắng không quạu, người yêu dỗi vẫn mỉm cười ung dung!
          </div>
        </motion.div>

        {/* Card 2: Tsundoku */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="codex-card flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs text-[#78350f] border-b border-[#78350f]/20 pb-1">
              <span className="font-bold uppercase font-codex-title">Y Học Nhật Bản</span>
              <span className="font-bold text-[#b45309]">HỘI CHỨNG TSUNDOKU</span>
            </div>
            
            <div className="text-3xl md:text-5xl font-black text-[#b45309] font-calligraphy italic tracking-tight my-2">
              積ん読 (Tsundoku)
            </div>
            
            <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 uppercase font-codex-title">
              Mua Sách Chất Cao Như Núi
            </h3>
            
            <p className="text-xs text-[#522504] leading-relaxed italic">
              ✦ Hội chứng nan y: Cứ thấy giảm giá là tay tự động bấm thanh toán, mua về chất đầy nhà để... ngắm cho sang chứ không hề đọc!
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-[#78350f]/20 text-[11px] text-[#78350f] font-semibold italic">
            ⚠️ <strong>Chân lý đanh thép:</strong> Mua sách và đọc sách là hai bộ môn thể thao hoàn toàn độc lập với nhau!
          </div>
        </motion.div>

        {/* Card 3: +2 Years Yale */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="codex-card flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs text-[#78350f] border-b border-[#78350f]/20 pb-1">
              <span className="font-bold uppercase font-codex-title">ĐH Yale (12 Năm)</span>
              <span className="font-bold text-[#991b1b]">3.635 ĐỐI TƯỢNG</span>
            </div>
            
            <div className="text-4xl md:text-6xl font-black text-[#991b1b] font-calligraphy italic tracking-tight my-2">
              +2 Năm
            </div>
            
            <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 uppercase font-codex-title">
              Kéo Dài Tuổi Thọ Sinh Học
            </h3>
            
            <p className="text-xs text-[#522504] leading-relaxed italic">
              ✦ Người đọc sách 30 phút mỗi ngày sống thọ hơn trung bình gần 2 năm so với người không đọc sách.
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-[#78350f]/20 text-[11px] text-[#78350f] font-semibold italic">
            ⚠️ <strong>Thiệt hại kinh tế:</strong> Bắt bạn phải sống lâu hơn để tốn thêm 2 năm tiền ăn uống, điện nước, đóng thuế và đi làm!
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">NUMERI CRUCIALES • FOLIO IV</span>
        <span className="italic">"Những con số khiến cả nhân loại phải giật mình suy ngẫm."</span>
        <span className="font-codex-mono">SUSSEX & YALE</span>
      </div>

    </div>
  );
};
