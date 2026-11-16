import React from 'react';
import { motion } from 'framer-motion';

export const Slide6ToolsCompare: React.FC = () => {
  return (
    <div className="slide bg-codex-parchment text-[#291305] p-5 md:p-8 flex flex-col justify-between font-serif-italic select-none" data-slide="6">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          ĐẶT LÊN BÀN CÂN 3 ĐỊNH DẠNG
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Ba Thứ "Vũ Khí" Sát Thương Khác Nhau
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">📖 📱 🎧</span>
          <div className="divider-line right"></div>
        </div>
      </motion.div>

      {/* Center Image Feature: Da Vinci 3 Mediums Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto w-full my-1 rounded-xl overflow-hidden border-2 border-[#78350f]/35 shadow-md bg-[#ebdcb9]"
      >
        <img 
          loading="lazy"
          decoding="async"
          src="/assets/davinci-3-mediums.webp" 
          alt="Bản vẽ Da Vinci so sánh 3 công cụ đọc sách" 
          className="w-full max-h-[190px] md:max-h-[230px] object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* 3 Interactive Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 my-auto w-full px-1">
        
        {/* Col 1: Sách Giấy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="codex-card p-3.5 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs border-b border-[#78350f]/20 pb-1">
              <span className="font-bold text-[#78350f] font-codex-title">Codex Vetustus</span>
              <span className="font-bold text-[#991b1b] text-[10px]">SÁCH GIẤY</span>
            </div>
            <h4 className="font-bold text-xs md:text-sm text-[#291305] font-codex-title mb-1">
              Vũ Khí Sát Thương Vật Lý
            </h4>
            <ul className="space-y-1.5 text-xs text-[#522504] leading-relaxed italic">
              <li>✦ <strong>Ưu điểm:</strong> Mùi giấy thơm ngào ngạt gây ảo giác, cảm giác lật trang sột soạt đê mê.</li>
              <li>✦ <strong>"Tác hại":</strong> Vác 2 cuốn dày chẳng khác nào tập tạ trong balo, gù lưng lúc nào không hay!</li>
            </ul>
          </div>
          <div className="mt-2 pt-1.5 border-t border-[#78350f]/20 text-[10px] text-[#991b1b] font-bold">
            Sát thương: Tập tạ miễn phí • Tốn tiền mua kệ
          </div>
        </motion.div>

        {/* Col 2: Ebook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="codex-card p-3.5 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs border-b border-[#78350f]/20 pb-1">
              <span className="font-bold text-[#78350f] font-codex-title">Machina Portabilis</span>
              <span className="font-bold text-[#b45309] text-[10px]">MÁY ĐỌC SÁCH EBOOK</span>
            </div>
            <h4 className="font-bold text-xs md:text-sm text-[#291305] font-codex-title mb-1">
              Sát Thủ Giấu Mặt 200g
            </h4>
            <ul className="space-y-1.5 text-xs text-[#522504] leading-relaxed italic">
              <li>✦ <strong>Ưu điểm:</strong> 200g nhét cả thư viện khổng lồ vào túi quần, có đèn nền đọc ban đêm.</li>
              <li>✦ <strong>"Tử huyệt":</strong> Đang đọc truyện trinh thám đến đúng lúc hung thủ lộ diện thì... <em>HẾT PIN!</em></li>
            </ul>
          </div>
          <div className="mt-2 pt-1.5 border-t border-[#78350f]/20 text-[10px] text-[#b45309] font-bold">
            Sát thương: Tuyệt vọng tột cùng khi cạn pin
          </div>
        </motion.div>

        {/* Col 3: Audiobook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="codex-card p-3.5 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-1 text-xs border-b border-[#78350f]/20 pb-1">
              <span className="font-bold text-[#78350f] font-codex-title">Cornu Acousticum</span>
              <span className="font-bold text-[#15803d] text-[10px]">SÁCH NÓI AUDIOBOOK</span>
            </div>
            <h4 className="font-bold text-xs md:text-sm text-[#291305] font-codex-title mb-1">
              Tấn Công Đường Thính Giác
            </h4>
            <ul className="space-y-1.5 text-xs text-[#522504] leading-relaxed italic">
              <li>✦ <strong>Ưu điểm:</strong> Nghe rảnh tay khi đang rửa bát, lái xe trên đường hay chạy bộ.</li>
              <li>✦ <strong>"Tác hại":</strong> Giọng đọc trầm ấm biến thành liều thuốc mê cực mạnh — 10h đêm bật, 6h sáng quên sạch!</li>
            </ul>
          </div>
          <div className="mt-2 pt-1.5 border-t border-[#78350f]/20 text-[10px] text-[#15803d] font-bold">
            Sát thương: Thuốc ngủ liều cao cực êm
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">COMPARATIO FORMATORUM • FOLIO VI</span>
        <span className="italic">"Không có định dạng nào thượng đẳng hơn, hãy chọn thứ bẫy được bạn!"</span>
        <span className="font-codex-mono">LEONARDO FECIT</span>
      </div>

    </div>
  );
};
