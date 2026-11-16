import React from 'react';
import { motion } from 'framer-motion';

export const Slide12Conclusion: React.FC = () => {
  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-8 md:p-14 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="12">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs tracking-widest text-[#991b1b] border-b border-[#991b1b]/20 pb-2 font-davinci-mono">
        <span>✦ EPILOGUS • LỜI KẾT & VẤN ĐÁP ✦</span>
        <span>HOÀN THÀNH KHẢO LUẬN 30 PHÚT</span>
      </div>

      {/* Center Section Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-2 text-[#991b1b]"
        >
          📜 ⭕ ✨
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-davinci-title mb-2"
        >
          KẾT LUẬN & LỜI CHÚC PHÚC ĐẶC BIỆT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-[#521b0a] font-davinci-title leading-tight mb-3 uppercase"
        >
          Lời Chúc "Độc Địa" Cuối Cùng
        </motion.h2>

        <div className="divider-sanguine my-2">
          <div className="divider-sanguine-line"></div>
          <span className="text-sm tracking-widest text-[#991b1b]">⭕ 📐 🧍</span>
          <div className="divider-sanguine-line right"></div>
        </div>

        {/* Core Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-white/70 p-6 md:p-8 max-w-3xl mx-auto text-center mt-3 rounded-2xl border-2 border-dashed border-[#991b1b]/50 shadow-md"
        >
          <p className="text-xs md:text-sm text-[#521b0a] leading-relaxed mb-4 italic">
            "Đọc sách thực sự rất nguy hiểm. Bởi vì nó sẽ <strong className="text-[#991b1b]">giết chết phiên bản cũ kỹ, hạn hẹp</strong> của ngày hôm qua để nhào nặn nên một phiên bản mới sâu sắc hơn, hài hước hơn, thấu cảm hơn và bản lĩnh hơn của chính bạn."
          </p>

          <div className="py-3 px-5 rounded-xl bg-[#fed7aa] border border-[#9a3412] inline-block mb-3 shadow-inner">
            <span className="font-davinci-title text-xl md:text-3xl font-black text-[#7c2d12] uppercase tracking-wide">
              "Chúc các bạn sớm 'mắc bệnh' đọc sách thành công, và không bao giờ chữa khỏi!"
            </span>
          </div>

          <div className="text-xs text-[#991b1b] font-davinci-title font-bold uppercase tracking-wider">
            Xin chân thành cảm ơn & Mời quý vị cùng thảo luận, đặt câu hỏi!
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>FINIS • FOLIO XII</span>
        <span className="italic">"Hình thể Vitruvius đã thức tỉnh hoàn toàn."</span>
        <span>Q&A SESSION</span>
      </div>

    </div>
  );
};
