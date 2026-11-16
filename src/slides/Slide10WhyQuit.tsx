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
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-6 md:p-10 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="10">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2">
        <span>✦ PARS QUARTA • BẢO TOÀN TỶ LỆ VÀNG ✦</span>
        <span>GIẢI MÃ SỰ THOÁT NẠN CỦA 90% NHÂN LOẠI</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          VÌ SAO 90% BẢO TOÀN ĐƯỢC TỶ LỆ VÀNG?
        </h2>
        <div className="divider-sanguine my-1">
          <div className="divider-sanguine-line"></div>
          <span className="text-xs tracking-widest text-[#991b1b]">🛡️ 🏃‍♂️ 💨</span>
          <div className="divider-sanguine-line right"></div>
        </div>
        <p className="italic text-xs md:text-sm text-[#7c2d12]">
          (Xin chúc mừng, 90% nhân loại đã may mắn "thoát nạn" nhờ 3 nguyên nhân dở khóc dở cười này)
        </p>
      </motion.div>

      {/* 3 Main Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-auto w-full px-2">
        {reasons.map((r, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.12 }}
            className="bg-white/65 p-5 md:p-6 border-2 border-dashed border-[#991b1b]/40 rounded-2xl flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="text-3xl mb-2 text-[#991b1b]">{r.icon}</div>
              <h3 className="font-bold text-sm md:text-base text-[#521b0a] mb-2 font-davinci-title uppercase">
                {r.title}
              </h3>
              <p className="text-xs text-[#7c2d12] leading-relaxed">
                {r.desc}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-[#991b1b]/20 text-[11px] text-[#991b1b] font-semibold italic">
              ✦ Giữ nguyên dáng vóc Vitruvius thành công!
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>CURA ET ABANDONUM • FOLIO X</span>
        <span className="italic">"Sự kiên nhẫn là thứ thuốc đắng mà ít ai muốn nuốt."</span>
        <span>LỐI THOÁT</span>
      </div>

    </div>
  );
};
