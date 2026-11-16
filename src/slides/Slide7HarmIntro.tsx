import React from 'react';
import { motion } from 'framer-motion';

export const Slide7HarmIntro: React.FC = () => {
  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-8 md:p-14 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="7">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs tracking-widest text-[#991b1b] border-b border-[#991b1b]/20 pb-2 font-davinci-mono">
        <span>✦ PARS TERTIA • TRỌNG TÂM ĐIỀU TRA ✦</span>
        <span>7 BIẾN CHỨNG PHÁ VỠ HÌNH THỂ</span>
      </div>

      {/* Center Section Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-2 text-[#991b1b]"
        >
          💀 ⭕ 📐
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-davinci-title mb-2"
        >
          PHẦN 03 • DANH SÁCH 7 BIẾN DẠNG NGUY HIỂM NHẤT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-[#521b0a] font-davinci-title leading-tight mb-4 uppercase"
        >
          Bảy Biến Chứng Phá Vỡ <br />
          <span className="italic text-[#991b1b] underline decoration-double decoration-[#991b1b]/60">Hình Thể & Đại Não</span>
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
          "Và bây giờ, hãy hít một hơi thật sâu. Tôi sắp công bố 7 biến chứng kinh hoàng nhất mà việc đọc sách sẽ gây ra: từ sự phức tạp hóa nơ-ron đại não, phá sản tài chính vì đóng kệ cho tới... cố thủ trong nhà vệ sinh!"
        </motion.p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>SEPTEM NOXAE VITRUVIANAE</span>
        <span className="italic">"Khi hình thể chuẩn mực bị biến dạng vì chữ nghĩa."</span>
        <span>FOLIO VII</span>
      </div>

    </div>
  );
};
