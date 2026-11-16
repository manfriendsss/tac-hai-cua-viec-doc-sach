import React from 'react';
import { motion } from 'framer-motion';

export const Slide2Roadmap: React.FC = () => {
  const steps = [
    { num: "I", title: "Thống Kê Khó Đỡ", desc: "Những con số rùng rợn vạch trần tội lỗi của hội nghiện sách (-68% Stress, Tsundoku, +2 Năm thọ)." },
    { num: "II", title: "Đặt Lên Bàn Cân", desc: "So sánh 3 thứ vũ khí phát tán độc hại: Sách giấy truyền thống, Ebook gọn nhẹ & Sách nói ru ngủ." },
    { num: "III", title: "7 'Tác Hại' Kinh Hoàng", desc: "Biến chứng tàn phá tâm trí, hủy hoại thanh xuân cày phim, phá hoại tài chính và cố thủ trong toilet!" },
    { num: "IV", title: "90% Đã Thoát Nạn", desc: "Giải mã vì sao đa số nhân loại may mắn bỏ cuộc giữa chừng trước cỗ máy dopamine 15 giây." },
    { num: "V", title: "Nhiễm Độc Đúng Cách", desc: "4 bí kíp lừa đảo não bộ và rủ rê dấn thân vào con đường nghiện sách không lối thoát." }
  ];

  return (
    <div className="slide bg-codex-parchment text-[#291305] p-6 md:p-10 flex flex-col justify-between font-serif-italic relative select-none" data-slide="2">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-codex-title">
          BẢN ĐỒ KHẢO SÁT 30 PHÚT
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#220f04] mb-1 font-calligraphy italic">
          Lộ Trình Cảnh Tỉnh Khẩn Cấp
        </h2>
        <div className="divider-ornament">
          <div className="divider-line"></div>
          <span className="text-sm tracking-widest text-[#78350f]">🧭 📜 ⏳</span>
          <div className="divider-line right"></div>
        </div>
      </motion.div>

      {/* 5 Stages Grid / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 my-auto w-full px-2">
        {steps.map((st, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
            className="codex-card flex flex-col justify-between p-4 relative group hover:border-[#b45309]"
          >
            <div>
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#78350f]/20">
                <span className="w-7 h-7 rounded-full bg-[#78350f] text-[#fde68a] flex items-center justify-center font-codex-title font-bold text-xs shadow-sm">
                  {st.num}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#b45309] font-codex-mono">
                  Giai đoạn {idx + 1}
                </span>
              </div>
              
              <h3 className="font-bold text-sm md:text-base text-[#291305] mb-2 font-codex-title group-hover:text-[#991b1b] transition-colors">
                {st.title}
              </h3>
              
              <p className="text-xs text-[#522504] leading-relaxed italic">
                {st.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-[#78350f]/15 text-right">
              <span className="text-[10px] text-[#78350f] font-semibold italic">✦ Khảo cứu</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-[#6b3e1b] border-t border-[#78350f]/25 pt-2 px-2">
        <span className="font-codex-mono">CURRICULUM DE LIBRIS • PARCHMENT II</span>
        <span className="italic">"30 phút sinh tử để nhận diện một chất gây nghiện nguy hiểm."</span>
        <span className="font-codex-mono">CHỈ ĐẠO ĐIỀU TRA</span>
      </div>

    </div>
  );
};
