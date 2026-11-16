import React from 'react';
import { motion } from 'framer-motion';

export const Slide3StatsIntro: React.FC = () => {
  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-8 md:p-14 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="3">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs tracking-widest text-[#991b1b] border-b border-[#991b1b]/20 pb-2 font-davinci-mono">
        <span>✦ PARS PRIMA • KHẢO CỨU HÌNH HỌC SUSSEX & YALE ✦</span>
        <span>CHỨNG TỪ SỐ 1490</span>
      </div>

      {/* Center Section Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-2 text-[#991b1b]"
        >
          ⭕ 📊 📐
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-davinci-title mb-2"
        >
          PHẦN 01 • BẰNG CHỨNG HÌNH HỌC KHÔNG THỂ CHỐI CÃI
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-[#521b0a] font-davinci-title leading-tight mb-4 uppercase"
        >
          Hai Quy Luật Tỷ Lệ Hình Học <br />
          <span className="italic text-[#991b1b] underline decoration-double decoration-[#991b1b]/60">Gây Hoang Mang</span>
        </motion.h2>

        <div className="divider-sanguine my-2">
          <div className="divider-sanguine-line"></div>
          <span className="text-sm tracking-widest text-[#991b1b]">⭕ 📐 🧍</span>
          <div className="divider-sanguine-line right"></div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-sm md:text-base text-[#7c2d12] italic max-w-2xl mx-auto leading-relaxed mt-2 border-l-2 border-[#991b1b] pl-4 text-left"
        >
          "Đừng tưởng đọc sách là vô hại! Khi các học giả đặt compa và thước đo lên cơ thể kẻ đọc sách, những con số đo lường đã làm giới nghiên cứu toát mồ hôi hột vì sự biến dạng của vòng tròn hoàn hảo!"
        </motion.p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>INVESTIGATIO VITRUVIANA</span>
        <span className="italic">"Sự thật hình học luôn khiến người ta bàng hoàng."</span>
        <span>FOLIO III</span>
      </div>

    </div>
  );
};
