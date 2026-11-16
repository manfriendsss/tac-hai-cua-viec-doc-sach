import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Slide1Title: React.FC = () => {
  const [showOriginalRef, setShowOriginalRef] = useState(false);

  const bulletPoints = [
    "Dễ bị nghiện kiến thức và tò mò về thế giới",
    "Khiến vốn từ tăng lên bất thường",
    "Làm trí tưởng tượng hoạt động quá mức",
    "Gây ra thói quen suy nghĩ sâu và phản biện",
    "Có thể khiến bạn bình tĩnh, tập trung và sống tích cực hơn"
  ];

  return (
    <div className="slide active bg-codex-parchment text-[#291305] p-6 md:p-10 flex flex-col justify-between font-serif-italic select-none" data-slide="1">
      
      {/* Top Header & Ornamental Divider */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center pt-1"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#220f04] tracking-normal mb-1 font-calligraphy italic drop-shadow-sm">
          Tác hại của việc đọc sách
        </h1>
        
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm md:text-base tracking-widest text-[#78350f]">🪶 📖 🪶</span>
          <div className="divider-line right"></div>
        </div>

        <p className="italic text-xs sm:text-sm md:text-base text-[#451a03] font-medium tracking-wide">
          (Thực ra là ích lợi, nhưng nhìn theo lối tư duy ngược hài hước)
        </p>
      </motion.div>

      {/* Main Content: 2 Columns Layout */}
      <div className="grid grid-cols-12 gap-4 items-center my-auto py-2">
        
        {/* Left 7 Columns: 5 Key Bullet Points */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-3.5 pl-2 md:pl-8 text-[#240e03]">
          {bulletPoints.map((text, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + idx * 0.12, duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-3 text-sm md:text-base lg:text-lg font-semibold italic leading-relaxed group"
            >
              <span className="text-[#78350f] mt-0.5 text-base md:text-lg transition-transform group-hover:scale-125">✦</span>
              <span className="text-[#240e03] hover:text-[#78350f] transition-colors">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Right 5 Columns: Classical Da Vinci Codex Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="col-span-12 md:col-span-5 flex flex-col items-center justify-center pr-2 md:pr-6 relative"
        >
          <div className="relative group">
            <img 
              loading="lazy"
              decoding="async"
              src="/assets/books_quill_crop.webp" 
              alt="Chồng sách cổ, bút lông vũ và kính mắt" 
              className="max-h-[260px] md:max-h-[320px] w-auto object-contain drop-shadow-md rounded cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]" 
              style={{ mixBlendMode: 'multiply' }}
              onClick={() => setShowOriginalRef(true)}
              title="Click để đối chiếu với ảnh mẫu gốc"
            />
            
            {/* Hover Tooltip */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#291305]/85 text-[#fde68a] text-[10px] px-2 py-1 rounded border border-[#b45309] pointer-events-none">
              🔍 Bấm để xem ảnh mẫu
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Footer Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2"
      >
        <span className="font-codex-mono font-bold tracking-wider">MANUSCRIPTUM • FOLIO I</span>
        <span className="italic text-[#78350f]">"Tri thức là căn bệnh duy nhất khiến người ta tự nguyện không muốn chữa khỏi."</span>
        <span className="font-codex-mono">FLORENTIA 2026</span>
      </motion.div>

      {/* Modal to View Original User Reference Image */}
      <AnimatePresence>
        {showOriginalRef && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOriginalRef(false)}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#ebdcb9] p-4 rounded-2xl border-4 border-[#78350f] shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#78350f]/40">
                <span className="font-codex-title font-bold text-xs uppercase text-[#5c3417]">
                  📷 Hình ảnh mẫu gốc người dùng cung cấp
                </span>
                <button 
                  onClick={() => setShowOriginalRef(false)}
                  className="px-2.5 py-1 rounded bg-[#78350f] text-white text-xs font-bold hover:bg-[#5c3417]"
                >
                  Đóng ✕
                </button>
              </div>
              <img 
                src="/assets/slide1-reference-template.webp" 
                alt="Ảnh mẫu gốc" 
                className="w-full h-auto rounded-lg shadow-inner"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
