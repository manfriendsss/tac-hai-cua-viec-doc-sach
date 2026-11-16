import React from 'react';
import { motion } from 'framer-motion';

export const Slide12Conclusion: React.FC = () => {
  return (
    <div className="slide bg-codex-parchment text-[#291305] p-8 md:p-14 flex flex-col justify-between font-serif-italic relative select-none" data-slide="12">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs text-[#78350f] border-b border-[#78350f]/20 pb-2 font-codex-mono">
        <span>EPILOGUS • LỜI KẾT & VẤN ĐÁP</span>
        <span>HOÀN THÀNH BÁO CÁO 30 PHÚT</span>
      </div>

      {/* Center Section Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-2 text-[#78350f]"
        >
          📜 🕯️ ✨
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-codex-title mb-2"
        >
          KẾT LUẬN & LỜI CHÚC PHÚC ĐẶC BIỆT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-black text-[#220f04] leading-tight mb-3 font-calligraphy italic"
        >
          Lời Chúc "Độc Địa" Cuối Cùng
        </motion.h2>

        <div className="divider-ornament my-2">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🪶 📖 🪶</span>
          <div className="divider-line right"></div>
        </div>

        {/* Core Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="codex-card p-6 md:p-8 max-w-3xl mx-auto text-center mt-3 shadow-warm-lg"
        >
          <p className="text-sm md:text-base text-[#381c08] leading-relaxed mb-4 italic">
            "Đọc sách thực sự rất nguy hiểm. Bởi vì nó sẽ <strong className="text-[#991b1b]">giết chết phiên bản cũ kỹ, hạn hẹp</strong> của ngày hôm qua để nhào nặn nên một phiên bản mới sâu sắc hơn, hài hước hơn, thấu cảm hơn và bản lĩnh hơn của chính bạn."
          </p>

          <div className="py-3 px-4 rounded-xl bg-[#78350f]/15 border border-[#78350f]/30 inline-block mb-3">
            <span className="font-calligraphy text-2xl md:text-4xl font-bold text-[#801414] italic">
              "Chúc các bạn sớm 'mắc bệnh' đọc sách thành công, và không bao giờ chữa khỏi!"
            </span>
          </div>

          <div className="text-xs text-[#78350f] font-codex-title font-bold uppercase tracking-wider">
            Xin chân thành cảm ơn & Mời quý vị cùng thảo luận, đặt câu hỏi!
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">FINIS • FOLIO XII</span>
        <span className="italic">"Sách mở ra là thế giới mở ra."</span>
        <span className="font-codex-mono">Q&A SESSION</span>
      </div>

    </div>
  );
};
