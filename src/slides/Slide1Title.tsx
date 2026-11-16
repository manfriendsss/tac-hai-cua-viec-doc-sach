import React from 'react';
import { motion } from 'framer-motion';

export const Slide1Title: React.FC = () => {
  const points = [
    "Trục xương sống thẳng đứng bị bẻ cong thành góc nhọn 45° vì cúi đầu đọc sách.",
    "Đồng tử và thần kinh thị giác bị kích thích liên tục bởi các ký tự in cổ.",
    "Vòng tròn tâm trí bị kéo giãn vô hạn bởi sự tò mò và thói quen suy nghĩ sâu.",
    "Trí tưởng tượng phóng đại phá vỡ ranh giới hình vuông an toàn của thực tại.",
    "Đánh mất vĩnh viễn sự vô tư, ngây thơ để trở thành kẻ nhiều chuyện và phản biện."
  ];

  return (
    <div className="slide active bg-codex-sanguine text-[#7c2d12] p-6 md:p-10 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="1">
      
      {/* Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center text-xs tracking-widest text-[#991b1b] border-b border-[#991b1b]/20 pb-2 font-davinci-mono"
      >
        <span>✦ DE PROPORTIONE VITRUVIANA HOMINIS LECTURIS ✦</span>
        <span>1490 — TỶ LỆ VÀNG BIẾN DẠNG</span>
      </motion.div>

      {/* Main Content: 2 Columns */}
      <div className="grid grid-cols-12 gap-4 items-center my-auto py-2">
        
        {/* Left 7 Columns: Title & Bullets */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center pl-2 md:pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold font-davinci-title mb-1.5">
              <span>⭕ 📐</span> TỶ LỆ HÌNH HỌC VỀ KẺ ĐỌC SÁCH
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#521b0a] leading-tight mb-3 font-davinci-title uppercase">
              TÁC HẠI KHI PHÁ VỠ <br />
              <span className="italic text-[#991b1b] underline decoration-double decoration-[#991b1b]/60">TỶ LỆ VÀNG</span> VÌ ĐỌC SÁCH
            </h1>

            <p className="text-xs md:text-sm text-[#7c2d12] italic leading-relaxed border-y border-[#991b1b]/20 py-2.5 mb-4">
              "Con người Vitruvius chuẩn mực đứng dang tay trong vòng tròn hoàn hảo... cho đến khi cầm cuốn sách trên tay và gù lưng gập người!"
            </p>
          </motion.div>

          {/* 5 Geometric Deformations */}
          <div className="space-y-2">
            {points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-2.5 text-xs md:text-sm text-[#521b0a] leading-relaxed"
              >
                <span className="text-[#991b1b] font-bold mt-0.5">✦</span>
                <span>{pt}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Vitruvian Sanguine Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="col-span-12 md:col-span-5 flex items-center justify-center p-2"
        >
          <div className="relative p-2 rounded-xl border-2 border-dashed border-[#991b1b]/35 bg-white/50 shadow-md">
            <img 
              loading="lazy"
              decoding="async"
              src="/assets/vitruvian-reading-sanguine.webp" 
              alt="Bản vẽ Người Vitruvius đọc sách bằng phấn chì đỏ Sanguine" 
              className="max-h-[270px] md:max-h-[320px] w-auto object-contain rounded"
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className="text-[10px] text-center text-[#991b1b] font-davinci-mono font-bold mt-1">
              FIG. I — HOMO VITRUVIANUS LECTOR
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono"
      >
        <span>PHÁC HỌA: PHẤN CHÌ ĐỎ SANGUINE</span>
        <span className="italic">"Hình thể biến dạng — Tâm trí thức tỉnh."</span>
        <span>NIÊN KHÓA NGHỆ THUẬT 2026</span>
      </motion.div>

    </div>
  );
};
