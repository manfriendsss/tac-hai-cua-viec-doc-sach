import React from 'react';
import { motion } from 'framer-motion';

export const Slide10WhyQuit: React.FC = () => {
  const reasons = [
    {
      icon: "☕",
      title: "'Lưu Manh Giả Danh Trí Thức'",
      desc: "Thấy người ta check-in ly cà phê với sách triết, kinh tế vĩ mô dày cộp, mình cũng mua về cho bằng bạn bằng bè. Đọc đến trang thứ 3, não tự ngắt cầu dao vì quá tải — sách biến thành vật kê laptop!"
    },
    {
      icon: "⚡",
      title: "Thua 'Đế Chế' 15 Giây",
      desc: "Video ngắn là cỗ máy bơm dopamine siêu tốc — cứ vuốt ngón tay là có tiếng cười và hình ảnh nhảy múa. Trước cỗ máy hạng nặng đó, trang sách tĩnh lặng bỗng chậm chạp như một chú rùa già!"
    },
    {
      icon: "⛓️",
      title: "Tự Biến Thành 'Nô Lệ' Cuốn Sách",
      desc: "Tâm lý tiếc của: 'Bỏ 150 nghìn mua là phải đọc đến dấu chấm cuối cùng!' Dù sách nhạt nhẽo buồn ngủ vẫn cố đấm ăn xôi nhai từng chữ, biến thú vui thành một hình thức tra tấn tinh thần!"
    }
  ];

  return (
    <div className="slide bg-codex-parchment text-[#291305] p-6 md:p-10 flex flex-col justify-between font-serif-italic relative select-none" data-slide="10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          PHẦN 04 • GIẢI MÃ SỰ THOÁT NẠN
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Vì Sao 90% Đã Bỏ Cuộc Giữa Chừng?
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🛡️ 🏃‍♂️ 💨</span>
          <div className="divider-line right"></div>
        </div>
        <p className="italic text-xs md:text-sm text-[#522504]">
          (Xin chúc mừng, 90% nhân loại đã may mắn "thoát nạn" nhờ 3 nguyên nhân dở khóc dở cười này)
        </p>
      </motion.div>

      {/* 3 Main Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-auto w-full px-2">
        {reasons.map((r, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.12 }}
            className="codex-card flex flex-col justify-between p-5 relative"
          >
            <div>
              <div className="text-3xl mb-2 text-[#78350f]">{r.icon}</div>
              <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 font-codex-title">
                {r.title}
              </h3>
              <p className="text-xs text-[#522504] leading-relaxed italic">
                {r.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-[#78350f]/20 text-[11px] text-[#78350f] font-semibold italic">
              ✦ "Thoát nạn" thành công
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">CURA ET ABANDONUM • FOLIO X</span>
        <span className="italic">"Sự kiên nhẫn là thứ thuốc đắng mà ít ai muốn nuốt."</span>
        <span className="font-codex-mono">LỐI THOÁT</span>
      </div>

    </div>
  );
};
