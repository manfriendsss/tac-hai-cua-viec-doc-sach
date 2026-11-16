import React from 'react';
import { motion } from 'framer-motion';

export const Slide4StatsDetails: React.FC = () => {
  return (
    <div className="slide bg-codex-sanguine text-[#7c2d12] p-6 md:p-10 flex flex-col justify-between font-davinci-note slide-sanguine-frame select-none" data-slide="4">
      
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs font-davinci-mono text-[#991b1b] border-b border-[#991b1b]/20 pb-2">
        <span>✦ HAI QUY LUẬT TỶ LỆ HÌNH HỌC GÂY HOANG MANG ✦</span>
        <span>SUSSEX & YALE ACADEMY</span>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-1"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-bold font-davinci-title">
          CHỨNG CỨ TỶ LỆ VITRUVIUS
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#521b0a] font-davinci-title uppercase tracking-wide mb-1">
          Hai Quy Luật Phá Vỡ Cân Bằng
        </h2>
        <div className="divider-sanguine">
          <div className="divider-sanguine-line"></div>
          <span className="text-sm tracking-widest text-[#991b1b]">⭕ 📐 🧍</span>
          <div className="divider-sanguine-line right"></div>
        </div>
      </motion.div>

      {/* 2 Main Geometric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-auto max-w-5xl mx-auto w-full px-2">
        
        {/* Card 1: -68% Sussex */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white/60 p-6 md:p-8 border-2 border-dashed border-[#991b1b] rounded-2xl text-center shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center text-xs text-[#991b1b] font-davinci-mono font-bold border-b border-[#991b1b]/20 pb-1 mb-2">
              <span>ĐẠI HỌC SUSSEX (2009)</span>
              <span>6 PHÚT ĐỌC</span>
            </div>

            <div className="text-5xl md:text-7xl font-black text-[#991b1b] mb-1 font-davinci-title tracking-tight">
              -68%
            </div>

            <h4 className="font-bold text-sm md:text-base uppercase text-[#521b0a] mb-2 font-davinci-title">
              Vòng Tròn Bình Yên Độc Hại
            </h4>

            <p className="text-xs md:text-sm text-[#7c2d12] leading-relaxed">
              ✦ Sau 6 phút ngắm nhìn trang giấy, chỉ số bốc hỏa giảm 68%. Vòng tròn tỷ lệ vàng bị kéo phẳng thành trạng thái bất động — tước đi quyền nổi điên chính đáng của con người!
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-[#991b1b]/20 text-xs text-[#991b1b] font-bold italic font-davinci-mono">
            ⚠️ "Hại" vì làm đứt đoạn nhịp sống âu lo quen thuộc!
          </div>
        </motion.div>

        {/* Card 2: +2 Years Yale */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white/60 p-6 md:p-8 border-2 border-dashed border-[#7c2d12] rounded-2xl text-center shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center text-xs text-[#7c2d12] font-davinci-mono font-bold border-b border-[#7c2d12]/20 pb-1 mb-2">
              <span>ĐẠI HỌC YALE (12 NĂM)</span>
              <span>3.635 ĐỐI TƯỢNG</span>
            </div>

            <div className="text-5xl md:text-7xl font-black text-[#7c2d12] mb-1 font-davinci-title tracking-tight">
              +2 NĂM
            </div>

            <h4 className="font-bold text-sm md:text-base uppercase text-[#521b0a] mb-2 font-davinci-title">
              Kéo Dài Cạnh Hình Vuông Khổ Ải
            </h4>

            <p className="text-xs md:text-sm text-[#7c2d12] leading-relaxed">
              ✦ Cạnh hình vuông thọ mệnh kéo dài thêm 2 năm, tương đương 730 ngày chi trả tiền thuê nhà, tiền điện nước và tiền nộp thuế cho xã hội!
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-[#7c2d12]/20 text-xs text-[#7c2d12] font-bold italic font-davinci-mono">
            ⚠️ Thiệt hại kinh tế: Bắt bạn sống lâu hơn để cày cuốc!
          </div>
        </motion.div>

      </div>

      {/* Tsundoku Footnote */}
      <div className="text-xs text-center text-[#991b1b] italic font-davinci-mono border-t border-[#991b1b]/20 pt-2">
        ✦ Quy luật Tsundoku: Số lượng sách mua về luôn tạo thành góc tù 180° so với quỹ thời gian rảnh rỗi!
      </div>

    </div>
  );
};
