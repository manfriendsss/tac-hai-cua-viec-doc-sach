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
    <div className="slide bg-codex-parchment text-[#291305] p-6 md:p-10 flex flex-col justify-between font-serif-italic select-none" data-slide="9">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          BIẾN CHỨNG ĐỜI SỐNG & NHÂN CÁCH
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Ba Nạn Kiếp Đời Thực (5–7)
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">💸 ⚖️ 🚽</span>
          <div className="divider-line right"></div>
        </div>
      </motion.div>

      {/* 3 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-auto w-full px-2">
        {harms.map((h, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.12 }}
            className="codex-card flex flex-col justify-between p-5 relative overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#78350f]/20">
                <span className="w-8 h-8 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-codex-title font-bold text-xs shadow-sm">
                  #{h.num}
                </span>
                <span className="text-[10px] font-bold uppercase text-[#78350f] font-codex-mono">
                  {h.subtitle}
                </span>
              </div>

              <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 font-codex-title">
                {h.title}
              </h3>

              <p className="text-xs text-[#522504] leading-relaxed italic">
                {h.desc}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-[#78350f]/20 text-[11px] text-[#991b1b] font-semibold italic">
              ⚠️ Mức độ ảnh hưởng: Toàn diện cuộc sống gia đình
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">DAMNA COTIDIANA • FOLIO IX</span>
        <span className="italic">"Đọc sách đánh thẳng vào ví tiền và thời gian sinh hoạt của cả gia đình."</span>
        <span className="font-codex-mono">CẢNH TỈNH</span>
      </div>

    </div>
  );
};
