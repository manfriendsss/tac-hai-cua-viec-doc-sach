# Tác Hại Của Việc Đọc Sách — Interactive Slide Deck (Da Vinci Codex Edition)

Hệ thống slide thuyết trình tương tác 30 phút theo phong cách **Bản thảo Leonardo Da Vinci (Da Vinci Codex)** trên nền giấy da cổ (*Aged Parchment*), được xây dựng chuẩn theo kiến trúc từ dự án `Thuyết trình cà phê`.

---

## 🎨 Phong Cách Thiết Kế (Visual Identity)
- **Chuẩn mẫu tham khảo:** Dựa trên mẫu ảnh gốc với bìa da cổ, chồng sách gáy mạ vàng, bút lông ngỗng, lọ mực sepia và cặp kính học giả gọng tròn.
- **Màu sắc chủ đạo:**
  - Nền giấy da cổ ngả vàng tự nhiên (`#ebdcb9`), viền cháy xém (*vignette*).
  - Mực óc chó Florence (*Walnut Ink* `#291305`), mực Sepia trầm (`#451a03`), điểm nhấn đỏ son (*Oxblood Red* `#801414`) và nhũ vàng antique (`#b45309`).
- **Thư pháp & Phông chữ:**
  - Tiêu đề nghệ thuật: Calligraphy / Cursive Script (`Great Vibes`, `Alex Brush`, `Snell Roundhand`).
  - Nội dung: Serif cổ điển (`Palatino`, `Georgia`) in nghiêng cùng ký hiệu hoa thị `✦`.
  - Phụ đề kỹ thuật: `Cinzel` & `Courier New`.

---

## 🚀 Công Nghệ & Thư Viện
- **Vite 6 + React 18 + TypeScript:** Tốc độ tải và biên dịch cực nhanh.
- **Framer Motion (`framer-motion`):** Diễn hoạt mượt mà cho hiệu ứng xuất hiện tuần tự các luận điểm, thẻ thông số, modal và chuyển cảnh.
- **Remotion (`remotion`, `@remotion/player`):** Thiết lập sẵn cấu trúc video sequence cho toàn bộ 12 slide (1920x1080 @ 30fps).
- **Tailwind CSS:** Quản lý utility classes, typography và responsive 16:9 viewport.
- **WebP Optimizer:** Tự động nén toàn bộ hình ảnh raster (JPG/PNG) sang định dạng WebP với chất lượng `quality=85`.

---

## 📂 Danh Sách 12 Slide (Theo Kịch Bản 30 Phút)
1. **Slide 1:** Bìa bài thuyết trình trào phúng & 5 luận điểm phản tư (Mẫu tham khảo 1:1).
2. **Slide 2:** Lộ trình 30 phút cảnh tỉnh (5 giai đoạn điều tra).
3. **Slide 3:** Phần 01: Những thống kê khó đỡ & sự thật lạ lùng.
4. **Slide 4:** Những con số "biết nói" (-68% Stress Sussex, Tsundoku Nhật Bản, +2 Năm thọ Yale).
5. **Slide 5:** Phần 02: 3 Công cụ gây nghiện phổ biến.
6. **Slide 6:** Đặt lên bàn cân 3 định dạng: Sách giấy cổ, Ebook cơ học & Sách nói kèn đồng (Minh họa Da Vinci).
7. **Slide 7:** Phần 03: 7 "Tác hại" khó lường của việc đọc sách (Trọng tâm).
8. **Slide 8:** Biến chứng tâm trí & giấc ngủ 1–4 (Ngủ sâu, Mất ngây thơ, Thừa từ vựng, Trí tưởng tượng 4K).
9. **Slide 9:** Biến chứng đời sống & nhân cách 5–7 (Phá hoại tài chính, Tước đoạt làm kẻ trộm, Cố thủ trong toilet!).
10. **Slide 10:** Phần 04: Vì sao 90% người đọc bỏ cuộc giữa chừng? (Lưu manh giả trí thức, 15s Dopamine, Nô lệ sách).
11. **Slide 11:** Phần 05: 4 Bước "nhiễm độc" sách đúng cách (Cú lừa 5 trang, Tráng miệng trước, Quy tắc 50 trang, Deeptalk).
12. **Slide 12:** Kết luận & Lời chúc phúc độc địa: *"Chúc các bạn sớm mắc bệnh đọc sách thành công, và không bao giờ chữa khỏi!"*

---

## ⌨️ Phím Tắt Điều Khiển
- **Mũi tên phải (`→`), Phím cách (`Space`), `PageDown`, `L`, `J`:** Chuyển slide tiếp theo.
- **Mũi tên trái (`←`), `Backspace`, `PageUp`, `H`, `K`:** Lùi lại slide trước.
- **Home / End:** Về slide đầu tiên / Nhảy tới slide cuối cùng.
- **Phím `F`:** Bật / Tắt chế độ toàn màn hình (*Fullscreen*).
- **Click vào bộ đếm slide (ví dụ `1 / 12`):** Mở bảng chọn nhanh 12 slide dạng popover grid.

---

## 🛠️ Lệnh Thực Thi
```bash
# Cài đặt thư viện
npm install

# Nén và tối ưu toàn bộ ảnh sang WebP (quality 85)
npm run optimize-images

# Chạy server xem trước tương tác cục bộ
npm run dev

# Biên dịch bản phát hành sản phẩm (output tại thư mục dist/)
npm run build
```

---

## 📄 Tài Liệu Gốc
- [Kịch bản thuyết trình tiếng Việt - Chính thức.md](./Kịch%20bản%20thuyết%20trình%20tiếng%20Việt%20-%20Chính%20thức.md)
- [Kịch bản English chính thức.md](./Kịch%20bản%20English%20chính%20thức.md)
- [sườn 1..md](./sườn%201..md)
