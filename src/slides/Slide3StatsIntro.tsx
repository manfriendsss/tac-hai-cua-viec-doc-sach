import React from 'react';
import { motion } from 'framer-motion';

export const Slide3StatsIntro: React.FC = () => {
  return (
    <div className="slide bg-codex-parchment text-[#291305] p-8 md:p-14 flex flex-col justify-between font-serif-italic select-none" data-slide="3">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs text-[#78350f] border-b border-[#78350f]/20 pb-2 font-codex-mono">
        <span>PARS PRIMA • THỐNG KÊ Y HỌC</span>
        <span>CHỨNG TỪ SỐ 492</span>
      </div>

      {/* Center Section Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-2 text-[#78350f]"
        >
          ⚖️ 📊 🔬
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-codex-title mb-2"
        >
          PHẦN 01 • BẰNG CHỨNG KHOA HỌC KHÔNG THỂ CHỐI CÃI
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-black text-[#220f04] leading-tight mb-4 font-calligraphy italic"
        >
          Những Thống Kê Khó Đỡ & Sự Thật Lạ Lùng
        </motion.h2>

        <div className="divider-ornament my-2">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🪶 📖 🪶</span>
          <div className="divider-line right"></div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-sm md:text-lg text-[#522504] italic max-w-2xl mx-auto leading-relaxed mt-2 border-l-2 border-[#78350f]/50 pl-4 text-left"
        >
          "Đừng tưởng đọc sách là vô hại, các nhà khoa học trên thế giới đã phải toát mồ hôi hột khi phát hiện ra những con số làm biến dạng hoàn toàn tâm sinh lý của con người!"
        </motion.p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">INVESTIGATIO SCIENTIFICA</span>
        <span className="italic">"Sự thật luôn khiến người ta bàng hoàng."</span>
        <span className="font-codex-mono">FOLIO III</span>
      </div>

    </div>
  );
};
