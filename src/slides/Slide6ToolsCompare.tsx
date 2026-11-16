import React from 'react';
import { motion } from 'framer-motion';

export const Slide6ToolsCompare: React.FC = () => {
  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-5 md:p-8 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="6">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2 uppercase">
        <span>✦ TAM THỂ LOẠI KHÍ CỤ PHÁ VỠ HÌNH THỂ CON NGƯỜI ✦</span>
        <span>INSTRUMENTA VITRUVIANA</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          ĐẶT LÊN BÀN CÂN 3 KHÍ CỤ BẺ CONG DÁNG VÓC
        </h2>
        <div className="divider-sanguine my-1">
          <div className="divider-sanguine-line"></div>
          <span className="text-xs tracking-widest text-[#991b1b]">📜 📱 🎧</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </motion.div>

      {/* Center Image: Da Vinci 3 Mediums Sketch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto w-full my-1 rounded-xl overflow-hidden border-2 border-[#991b1b]/35 shadow-sm bg-white/40"
      >
        <img 
          loading="lazy"
          decoding="async"
          src="/assets/davinci-3-mediums.webp" 
          alt="Bản vẽ Da Vinci so sánh 3 công cụ đọc sách" 
          className="w-full max-h-[170px] md:max-h-[200px] object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 my-auto w-full px-1">
        
        {/* Col 1: Khối Sách Giấy */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/65 p-3.5 border-2 border-dashed border-[#991b1b]/40 rounded-xl text-center flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="text-2xl mb-1 text-[#991b1b]">📜</div>
            <h4 className="font-bold text-xs md:text-sm text-[#521b0a] mb-1 font-davinci-title uppercase">
              Khối Sách Giấy
            </h4>
            <p className="text-xs text-[#7c2d12] leading-relaxed">
              ✦ Sức nặng 5kg làm lệch trục xương sống Vitruvius sang một bên. Mùi giấy thơm ngào ngạt gây ảo giác đê mê.
            </p>
          </div>
          <div className="mt-2 pt-1 border-t border-[#991b1b]/20 text-[10px] text-[#991b1b] font-davinci-mono font-bold">
            Tác hại: Tập tạ miễn phí • Gù lưng
          </div>
        </motion.div>

        {/* Col 2: Phiến Đá Ebook */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/65 p-3.5 border-2 border-dashed border-[#991b1b]/40 rounded-xl text-center flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="text-2xl mb-1 text-[#991b1b]">📱</div>
            <h4 className="font-bold text-xs md:text-sm text-[#521b0a] mb-1 font-davinci-title uppercase">
              Phiến Đá Ebook
            </h4>
            <p className="text-xs text-[#7c2d12] leading-relaxed">
              ✦ 200 gram hoàn hảo trong lòng bàn tay, dập tắt hy vọng bằng thông báo hết pin đúng trang hung thủ lộ diện!
            </p>
          </div>
          <div className="mt-2 pt-1 border-t border-[#991b1b]/20 text-[10px] text-[#991b1b] font-davinci-mono font-bold">
            Tử huyệt: Hết pin đoạn cao trào
          </div>
        </motion.div>

        {/* Col 3: Thanh Âm Sách Nói */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/65 p-3.5 border-2 border-dashed border-[#991b1b]/40 rounded-xl text-center flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="text-2xl mb-1 text-[#991b1b]">🎧</div>
            <h4 className="font-bold text-xs md:text-sm text-[#521b0a] mb-1 font-davinci-title uppercase">
              Thanh Âm Sách Nói
            </h4>
            <p className="text-xs text-[#7c2d12] leading-relaxed">
              ✦ Làm tê liệt thính giác, đưa con người từ tư thế đứng thẳng Vitruvius sang tư thế nằm ngủ mê mệt tới sáng!
            </p>
          </div>
          <div className="mt-2 pt-1 border-t border-[#991b1b]/20 text-[10px] text-[#991b1b] font-davinci-mono font-bold">
            Tác hại: Thuốc ngủ liều cao êm ái
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="text-xs text-center text-[#991b1b] font-davinci-mono border-t border-[#991b1b]/20 pt-2">
        ✦ Lời khuyên của danh họa: Hãy giữ nguyên dáng vóc Vitruvius, đừng để sách bẻ cong bạn!
      </div>

    </div>
  );
};
