# 🌟 Portfolio Nhóm 03 – Website Giới Thiệu Thành Viên

> **Dự án Website Portfolio Giới Thiệu Nhóm & Thành Viên**  
> Môn học: **Phát triển Ứng dụng Web / Lập trình Web**  
> Trường: **Trường Đại học Giao thông Vận tải TP.HCM (UTH)**

---

## 📌 1. Giới thiệu dự án

Website Portfolio Nhóm 03 là sản phẩm web hiện đại giới thiệu năng lực, vai trò, kỹ năng và các dự án cá nhân của **6 thành viên**. Website được xây dựng với kiến trúc module phân tách độc lập, tối ưu hóa cho làm việc nhóm song song bằng Git mà không gây xung đột (merge conflicts).

Dự án bao gồm:
- **1 Trang chủ nhóm (`index.html`)**: Trình bày thông tin nhóm, banner giới thiệu, danh sách thẻ thành viên tương tác, modal xem nhanh (Quick View) và chuyển đổi giao diện Sáng / Tối (Dark & Light Mode).
- **6 Trang hồ sơ cá nhân riêng biệt (`members/*.html`)**: Mỗi thành viên sở hữu một trang portfolio chi tiết thể hiện phong cách cá nhân, kỹ năng chuyên môn, dự án đã làm và form liên hệ tương tác.

---

## 👥 2. Danh sách thành viên Nhóm 03

| STT | Họ và Tên | MSSV | Vai trò chính | Thư mục / File cá nhân | Liên kết |
|:---:|-----------|:----:|---------------|:----------------------:|:--------:|
| 1 | **Hồ Nguyễn Thái Châu** | `054206003685` | Trưởng nhóm | `chau` | [Xem Hồ Sơ](members/chau.html) |
| 2 | **Ngô Gia Bảo** | `054206002006` | Thành viên / Frontend Developer | `bao1` | [Xem Hồ Sơ](members/bao1.html) |
| 3 | **Nguyễn Gia Bảo** | `075206006255` | Thành viên / Fullstack Developer | `bao2` | [Xem Hồ Sơ](members/bao2.html) |
| 4 | **Lê Quốc Anh** | `080206004361` | Thành viên / Fullstack Developer | `qanh` | [Xem Hồ Sơ](members/qanh.html) |
| 5 | **Trần Gia Huy** | `052206016219` | Thành viên / QA/QC Engineer | `huy` | [Xem Hồ Sơ](members/huy.html) |
| 6 | **Trần Hoàng Nam** | `068206000088` | Thành viên / Frontend Developer | `nam` | [Xem Hồ Sơ](members/nam.html) |

---

## 🚀 3. Tính năng nổi bật & Công nghệ sử dụng

### 🛠️ Công nghệ sử dụng
- **HTML5**: Ngữ nghĩa chuẩn SEO, cấu trúc rõ ràng, tối ưu trợ năng (Accessibility).
- **CSS3 (Vanilla CSS)**: Thiết kế Responsive (Mobile / Tablet / Desktop), Flexbox, CSS Grid, Glassmorphism, hiệu ứng chuyển màu gradient và CSS Variables quản lý theme.
- **JavaScript (ES6+)**: Xử lý logic thuần, điều khiển DOM động, hiệu ứng mượt mà không phụ thuộc thư viện bên ngoài nặng nề.
- **Google Fonts**: Phông chữ hiện đại `Inter` & `Space Grotesk`.

### ✨ Tính năng chính
- 🌓 **Chế độ Sáng / Tối (Dark / Light Theme)**: Hỗ trợ chuyển đổi giao diện mượt mà và tự động lưu trạng thái vào `localStorage`.
- ⚡ **Màn hình chờ (Preloader) & Custom Cursor**: Tạo trải nghiệm mượt mà, ấn tượng cho người dùng desktop.
- 🗂️ **Dữ liệu tập trung (`data.js`)**: Quản lý thông tin thành viên (tên, avatar, tiểu sử, kỹ năng, liên kết mạng xã hội) đồng bộ cho trang chủ.
- 🔍 **Modal Xem Nhanh (Quick View Modal)**: Xem tóm tắt thông tin thành viên trực tiếp trên trang chủ mà không cần tải lại trang.
- 📬 **Form liên hệ (Contact Form Validation)**: Kiểm tra tính hợp lệ của dữ liệu đầu vào (tên, email, lời nhắn) kèm thông báo trực quan.
- 📱 **Mobile-First Responsive**: Giao diện tương thích chuẩn trên mọi thiết bị và kích thước màn hình.

---

