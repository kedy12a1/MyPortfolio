# Change Log / Dev Notes

> File này dùng để track tất cả các thay đổi trong project, giúp dễ dàng review trên Git Graph.

---

## [2025-05-03] — Projects & Story Content Update

### Added
- **Projects Section — Real Work Experience**
  - File: `src/components/Projects.tsx`
  - Tổng hợp 4 dự án thực tế từ work experience:
    1. DXCi (06/2023 — Present) — CMDB, REST API, Meraki/Dynatrace/Intune, Quality Cloud
    2. Fast Retailing (07/2021 — 05/2023) — Catalog, Scripting, Workflow, Now Mobile, Dynamic Translation
    3. GrainCorp (05/2021 — 07/2021) — Flow Designer, Portal, Notifications
    4. Woodside (01/2021 — 04/2021) — Flow Designer, Catalog, Widgets
  - Thêm accent tag màu `amber` cho role labels.
  - Tách `ProjectRow` thành component riêng với `React.memo` để optimize re-render.
- **About Section — 3 Career Chapters**
  - File: `src/components/About.tsx`
  - Cập nhật 3 câu chuyện:
    1. Ton Duc Thang University — The Foundation
    2. DXC Technology Vietnam — The Beginning of My ServiceNow Career
    3. FWD Vietnam Technology Company — Five Years of Growth
  - Thêm brand color placeholder box cho mỗi chapter (xanh TDTU, đen DXC, cam FWD).
  - Chuẩn bị sẵn cấu trúc import ảnh (`tdtu-logo.png`, `dxc-logo.png`, `fwd-logo.png`) để ghép sau.

### Changed
- **index.html**
  - Đổi title: `My Google AI Studio App` → `Portfolio — ServiceNow Developer`.
  - Chuyển Google Fonts import từ `src/index.css` sang `<link>` trong `index.html` với `preconnect`.
- **src/index.css**
  - Xóa `@import url(...)` Google Fonts để tránh cảnh báo PostCSS "@import must precede all other statements".

### Dev Notes
- **Images pending**: Chưa thêm ảnh logo TDTU / DXC / FWD do hạn chế network. Khi có ảnh, uncomment các dòng import trong `About.tsx` và gán `imageSrc` cho từng chapter.

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
