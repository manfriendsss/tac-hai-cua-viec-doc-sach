import React from 'react';
import { motion } from 'framer-motion';

export const Slide11HowToInfect: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "'Cú Lừa Thế Kỷ' Với Não (Quy Tắc 5 Trang)",
      desc: "Đừng dại tuyên bố cày 50 trang khiến não kéo còi báo động! Hãy ngọt ngào thủ thỉ: 'Hôm nay chỉ đọc đúng 5 trang thôi'. Mục tiêu nhỏ khiến não sập bẫy, vượt qua trang 5 là bạn đọc tiếp một mạch!"
    },
    {
      step: "02",
      title: "Ăn Tráng Miệng Trước, Món Chính Sau",
      desc: "Đừng vội nhai triết học hay sách làm giàu khô như ngói. Bắt đầu bằng trinh thám gay cấn, truyện tranh hay tiểu thuyết hài hước — miễn là cuốn! Hãy nghiện cảm giác lật trang trước đã."
    },
    {
      step: "03",
      title: "Đặc Quyền 'Chia Tay Không Lý Do' (Quy Tắc 50 Trang)",
      desc: "Đọc sách không phải đi thi đại học! Đã đọc qua 50 trang mà thấy không hợp gu, mạnh dạn gấp lại nói lời tạm biệt không chút áy náy và đổi cuốn khác. Đời ngắn lắm, đừng đọc sách chán!"
    },
    {
      step: "04",
      title: "Vũ Khí Cho Những Buổi Deeptalk Thâu Đêm",
      desc: "Đừng áp lực thuộc lòng. Cứ để câu chữ ngấm ngầm như chất gây nghiện. Một ngày đẹp trời, kiến thức và vốn từ đắt giá tuôn ra biến bạn thành tâm điểm các buổi deeptalk — chính thức không cai được nữa!"
    }
  ];

  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-5 md:p-8 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="11">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2">
        <span>✦ PARS QUINTA • HƯỚNG DẪN DÀNH CHO KẺ LIỀU LĨNH ✦</span>
        <span>METHODUS INFECTIONIS</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          BỐN BƯỚC "NHIỄM ĐỘC" SÁCH ĐÚNG CÁCH
        </h2>
        <div className="divider-sanguine my-1">
          <div className="divider-sanguine-line"></div>
          <span className="text-xs tracking-widest text-[#991b1b]">🧪 📜 🪶</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </motion.div>

      {/* Main Grid: 4 Steps Left + Alchemical Elixir Right */}
      <div className="grid grid-cols-12 gap-3 md:gap-4 my-auto w-full px-1 items-center">
        
        {/* Left 4 Steps: 8 Columns */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((st, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="bg-white/65 p-3.5 border-2 border-dashed border-[#991b1b]/40 rounded-xl flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-1 text-xs border-b border-[#991b1b]/20 pb-1">
                  <span className="font-bold text-[#991b1b] font-davinci-title">Bước #{st.step}</span>
                  <span className="text-[10px] text-[#7c2d12] font-davinci-mono">BÍ KÍP</span>
                </div>
                <h4 className="font-bold text-xs md:text-sm text-[#521b0a] font-davinci-title mb-1 uppercase">
                  {st.title}
                </h4>
                <p className="text-[11px] md:text-xs text-[#7c2d12] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right 4 Columns: Da Vinci Elixir Librorum Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-12 md:col-span-4 flex items-center justify-center p-2 rounded-xl border-2 border-dashed border-[#991b1b]/40 bg-white/50 shadow-md"
        >
          <img 
            loading="lazy"
            decoding="async"
            src="/assets/davinci-elixir-scroll.webp" 
            alt="Bản vẽ giả kim thuật Elixir Librorum Da Vinci" 
            className="w-full max-h-[250px] md:max-h-[290px] object-contain rounded"
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>METHODUS INFECTIONIS • FOLIO XI</span>
        <span className="italic">"Khi đã sập bẫy trang thứ 5, bạn chính thức nghiện đọc."</span>
        <span>ELIXIR LIBRORUM</span>
      </div>

    </div>
  );
};
