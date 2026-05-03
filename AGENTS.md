# Agent Instructions — MyPortfolio

> File này chứa conventions và preferences dành cho agent/AI khi maintain project này.

---

## Commit Message Convention

Khi user yêu cầu "commit changes" (hoặc tương tự), **bắt buộc** tuân thủ format sau:

```
[YYMMDD-update-NN] <type>: <short-description>
```

### Thành phần
| Phần | Ý nghĩa | Ví dụ |
|------|---------|-------|
| `YYMMDD` | Ngày hiện tại (2 chữ số năm, tháng, ngày) | `250503` |
| `NN` | Số thứ tự lần update trong ngày, bắt đầu từ `01` | `01`, `02`, `03`... |
| `<type>` | Loại thay đổi (theo Conventional Commits) | `feat`, `fix`, `docs`, `style`, `refactor` |
| `<short-description>` | Mô tả ngắn gọn bằng tiếng Anh, viết thường | `update Projects & About sections` |

### Cách xác định `NN`
1. Chạy: `git log --oneline --since="YYYY-MM-DD 00:00"`
2. Đếm số commit trong ngày hiện tại đã có format `[YYMMDD-update-NN]`
3. `NN` = số đếm được + 1 (định dạng 2 chữ số, có leading zero)

### Ví dụ hợp lệ
- `[260503-update-01] feat: update Projects & About with real work experience`
- `[260503-update-02] fix: resolve CSS import order warning`
- `[260504-update-01] docs: update DEV_NOTES change log`

### Không bao giờ
- Force push lên `main`/`master`
- Tự ý amend commit đã push lên remote
- Bỏ qua convention này khi user yêu cầu commit

---

## Project Context

- **Stack**: React 19 + Vite + Tailwind CSS v4 + TypeScript
- **Dev server**: `npm run dev` tại `http://localhost:3000`
- **Dark mode**: Class-based (`dark` class trên `<html>`), kích hoạt bởi `ThemeToggle.tsx`
- **Animation**: `motion/react` (Framer Motion)
- **Icons**: `lucide-react`
- **Fonts**: Outfit (display), Inter (sans), Playfair Display (serif) — load từ Google Fonts trong `index.html`

---

## Assets

- Ảnh đặt tại: `src/assets/images/`
- Import trong component: `import myImg from '../assets/images/my-image.png';`
- Logo placeholder đang chờ (chưa có file thật):
  - `src/assets/images/tdtu-logo.png`
  - `src/assets/images/dxc-logo.png`
  - `src/assets/images/fwd-logo.png`

---

## Change Tracking

Mọi thay đổi đáng kể phải được ghi vào `DEV_NOTES.md` theo format có sẵn (tham khảo các mục `[YYYY-MM-DD]` hiện tại).

---

*Convention established: 2026-05-03*
