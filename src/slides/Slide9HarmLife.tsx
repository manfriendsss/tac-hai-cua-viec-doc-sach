import React from 'react';
import { motion } from 'framer-motion';

export const Slide9HarmLife: React.FC = () => {
  const harms = [
    {
      num: "05",
      title: "Hiệu Ứng Domino Tàn Phá Tài Chính",
      subtitle: "Từ cuốn sách đến giẻ lau bụi cuối tuần",
      desc: "Nghiện mua sách -> Sách chất đầy sàn nhà -> Tốn cả đống tiền thuê thợ đóng kệ sách to đùng -> Cuối tuần thay vì đi chơi thì phải cầm giẻ lau bụi từng ngăn! Rước việc nhà vào thân!"
    },
    {
      num: "06",
      title: "Tước Đoạt Cơ Hội Thành Kẻ Trộm",
      subtitle: "Đạo đức tăng lên mức đáng báo động",
      desc: "Hiệu sách đêm không người trông coi, không camera, sáng ra không mất một cuốn. Chân lý: 'Người đọc sách không bao giờ ăn trộm, và kẻ trộm không bao giờ đọc sách!' Bị gạch tên khỏi giới đạo chích!"
    },
    {
      num: "07",
      title: "Cố Thủ Trong... Nhà Vệ Sinh!",
      subtitle: "Thư viện thu nhỏ mang tên toilet",
      desc: "Khảo sát thực tế: 46% nam giới và 26% phụ nữ thường xuyên mang sách báo vào toilet! Đọc cuốn đến quên thời gian, biến toilet thành phòng VIP, khiến cả nhà xếp hàng dài gõ cửa kêu cứu!"
    }
  ];

  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-6 md:p-10 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="9">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2">
        <span>✦ BIẾN CHỨNG ĐỜI THỰC, TÀI CHÍNH & SINH HOẠT ✦</span>
        <span>NOXAE COTIDIANAE V–VII</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          BA NẠN KIẾP ĐỜI THỰC CỦA KẺ NGHIỆN CHỮ (5–7)
        </h2>
        <div className="divider-sanguine my-1">
          <div className="divider-sanguine-line"></div>
          <span className="text-xs tracking-widest text-[#991b1b]">💸 ⚖️ 🚽</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </motion.div>

      {/* 3 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-auto w-full px-2">
        {harms.map((h, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.12 }}
            className="bg-white/65 p-5 md:p-6 border-2 border-dashed border-[#991b1b]/40 rounded-2xl flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#991b1b]/20">
                <span className="w-8 h-8 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-davinci-title font-bold text-xs shadow-sm">
                  #{h.num}
                </span>
                <span className="text-[10px] font-bold uppercase text-[#7c2d12] font-davinci-mono">
                  {h.subtitle}
                </span>
              </div>

              <h3 className="font-bold text-sm md:text-base text-[#521b0a] mb-2 font-davinci-title uppercase">
                {h.title}
              </h3>

              <p className="text-xs text-[#7c2d12] leading-relaxed">
                {h.desc}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-[#991b1b]/20 text-[11px] text-[#991b1b] font-semibold italic">
              ⚠️ Mức độ ảnh hưởng: Toàn diện sinh hoạt gia đình
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>DAMNA COTIDIANA • FOLIO IX</span>
        <span className="italic">"Đọc sách đánh thẳng vào ví tiền và biến toilet thành phòng đọc."</span>
        <span>VITRUVIUS 1490</span>
      </div>

    </div>
  );
};
