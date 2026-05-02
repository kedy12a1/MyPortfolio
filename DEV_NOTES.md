# Change Log / Dev Notes

> File này dùng để track tất cả các thay đổi trong project, giúp dễ dàng review trên Git Graph.

---

## [2025-05-03] — Hero Section Redesign

### Added
- **Hero Background Image**
  - File: `src/assets/images/Gemini_Generated_Image_zd8eh7zd8e.png`
  - Thay thế placeholder video background bằng ảnh AI-generated.
- **Location Badge**
  - Vị trí: góc trái giữa màn hình (responsive: `left-4 md:left-8`).
  - Nội dung: "Located in Vietnam".
  - Icon: `Globe` từ `lucide-react` — xoay liên tục (6s/vòng).
  - Style: pill shape, nền đen mờ (`bg-black/90`), viền `white/10`, backdrop blur.
  - Animation: fade-in + scale từ `motion/react`.
- **Scroll to Explore Functionality**
  - Nút mũi tên + chữ "Scroll to explore" giờ có thể click.
  - Click sẽ smooth scroll xuống section `#about`.
  - Hover effect: đổi màu nền và icon.

### Changed
- **Hero Text Visibility (Light Mode Fix)**
  - Nguyên nhân: khi ở light mode, chữ `text-zinc-600`/`text-zinc-900` bị chìm vào ảnh bìa tối.
  - Giải pháp: ép màu chữ trên Hero thành `text-zinc-300` và `text-white` (không dùng `dark:` prefix).
  - Các trang khác (About, Projects, Contact) vẫn giữ nguyên logic dark mode.
- **Hero Layout**
  - Xóa chữ "Business meets Technology" khỏi Hero.
  - Xóa chữ "STORY" decorative element.

### Fixed
- **Dark Mode Not Working**
  - Nguyên nhân: Tailwind v4 thiếu `@custom-variant dark`.
  - File sửa: `src/index.css`
  - Thêm: `@custom-variant dark (&:is(.dark *))` để kích hoạt class-based dark mode.

---

## [2025-05-03] — Project Setup

### Added
- Clone repo `https://github.com/kedy12a1/MyPortfolio`.
- Tạo thư mục `src/assets/images/` để chứa ảnh.
- Cài extension VS Code: `mhutchie.git-graph`.
- Cài dependencies: `npm install`.

### Infrastructure
- Git version: `2.54.0.windows.1`
- Node / Vite dev server chạy tại `http://localhost:3000`.

---

## Dev Tips

- **Restart dev server**: 
  ```bash
  npx kill-port 3000 && npm run dev
  ```
- **Git workflow**:
  ```bash
  git add -A
  git commit -m "type(scope): description"
  git push origin main
  ```
- **Image assets**: Đặt ảnh mới vào `src/assets/images/` rồi import như:
  ```tsx
  import myImg from '../assets/images/my-image.png';
  ```

---

*Last updated: 2025-05-03*
