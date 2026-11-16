import React from 'react';
import { motion } from 'framer-motion';

export const Slide2Roadmap: React.FC = () => {
  const laws = [
    { num: "I", title: "Quy Luật Tỉ Lệ", desc: "Hai con số đo lường rùng rợn của Sussex & Yale vạch trần tội lỗi của hội nghiện sách (-68% & +2 Năm)." },
    { num: "II", title: "Tam Thể Khí Cụ", desc: "So sánh 3 thứ vũ khí bẻ cong dáng vóc: Sách giấy nặng trịch, Ebook hết pin & Sách nói ru ngủ." },
    { num: "III", title: "7 Biến Chứng Nan Y", desc: "Công bố danh sách 7 biến dạng giải phẫu từ đại não, tài chính cho tới cố thủ trong toilet!" },
    { num: "IV", title: "Bảo Toàn Tỉ Lệ Vàng", desc: "Giải mã vì sao 90% nhân loại may mắn thoát nạn nhờ bỏ cuộc sớm trước cỗ máy dopamine 15 giây." },
    { num: "V", title: "Nhiễm Độc Bài Bản", desc: "4 bí kíp lừa đảo não bộ và rủ rê dấn thân vào con đường nghiện sách không lối thoát." }
  ];

  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-6 md:p-10 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="2">
      
      {/* Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center text-xs tracking-widest text-[#991b1b] border-b border-[#991b1b]/20 pb-2 font-davinci-mono"
      >
        <span>✦ TABULA DISPOSITIONIS • LỘ TRÌNH 30 PHÚT ✦</span>
        <span>5 QUY LUẬT HÌNH HỌC CẢNH TỈNH</span>
      </motion.div>

      {/* Center Section Header */}
      <div className="text-center pt-2">
        <h2 className="text-3xl md:text-5xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          NĂM QUY LUẬT HÌNH HỌC VITRUVIUS
        </h2>
        <div className="divider-sanguine">
          <div className="divider-sanguine-line"></div>
          <span className="text-sm tracking-widest text-[#991b1b]">⭕ 📐 🧍</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </div>

      {/* 5 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 my-auto w-full px-2">
        {laws.map((l, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
            className="sanguine-card flex flex-col justify-between p-4 relative group"
          >
            <div>
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#991b1b]/20">
                <span className="w-7 h-7 rounded-full bg-[#991b1b] text-[#fed7aa] flex items-center justify-center font-davinci-title font-bold text-xs shadow-sm">
                  {l.num}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#7c2d12] font-davinci-mono">
                  Giai đoạn {idx + 1}
                </span>
              </div>
              
              <h3 className="font-bold text-xs md:text-sm text-[#521b0a] mb-2 font-davinci-title uppercase">
                {l.title}
              </h3>
              
              <p className="text-[11px] md:text-xs text-[#7c2d12] leading-relaxed">
                {l.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-[#991b1b]/20 text-right">
              <span className="text-[10px] text-[#991b1b] font-semibold italic">✦ Vitruvius</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-[#991b1b] border-t border-[#991b1b]/20 pt-2 font-davinci-mono">
        <span>PHÁC HỌA: COMPA & THƯỚC ĐO TỶ LỆ</span>
        <span className="italic">"30 phút giải mã sự đứt gãy của vòng tròn hoàn hảo."</span>
        <span>FOLIO II</span>
      </div>

    </div>
  );
};
