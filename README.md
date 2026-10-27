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

## 📁 4. Cấu trúc thư mục dự án

```text
PORTFOLIO_nhom3/
├── index.html                      # Trang chủ giới thiệu nhóm
├── README.md                       # Tài liệu hướng dẫn dự án
├── CAU_TRUC_DU_AN.md               # Mô tả chi tiết kiến trúc dự án
├── CHUC_NANG_CAC_FOLDER.md         # Hướng dẫn chi tiết từng thư mục
│
├── css/                            # Toàn bộ mã nguồn CSS
│   ├── base.css                    # Biến toàn cục, reset CSS, theme Sáng/Tối
│   ├── home.css                    # Định kiểu giao diện trang chủ, navbar, modal
│   ├── member-common.css           # Bố cục & khung chung cho trang cá nhân
│   └── members/                    # CSS tùy chỉnh riêng của từng thành viên
│       ├── chau.css
│       ├── bao1.css
│       ├── bao2.css
│       ├── qanh.css
│       ├── huy.css
│       └── nam.css
│
├── js/                             # Toàn bộ mã nguồn JavaScript
│   ├── common.js                   # Logic dùng chung (dark mode, navbar, scroll)
│   ├── data.js                     # Dữ liệu tập trung của nhóm và 6 thành viên
│   ├── home.js                     # Logic trang chủ (render dữ liệu, modal, cursor)
│   ├── contact.js                  # Kiểm tra tính hợp lệ của biểu mẫu liên hệ
│   └── members/                    # JavaScript hiệu ứng riêng của từng thành viên
│       ├── chau.js
│       ├── bao1.js
│       ├── bao2.js
│       ├── qanh.js
│       ├── huy.js
│       └── nam.js
│
├── images/                         # Toàn bộ tài nguyên hình ảnh
│   ├── common/                     # Ảnh dùng chung (logo, icon, nền mặc định)
│   ├── chau/                       # Ảnh đại diện, dự án của Châu
│   ├── bao1/                       # Ảnh đại diện, dự án của Ngô Gia Bảo
│   ├── bao2/                       # Ảnh đại diện, dự án của Nguyễn Gia Bảo
│   ├── qanh/                       # Ảnh đại diện, dự án của Quốc Anh
│   ├── huy/                        # Ảnh đại diện, dự án của Huy
│   └── nam/                        # Ảnh đại diện, dự án của Nam
│
└── members/                        # Trang HTML cá nhân của từng thành viên
    ├── member-template.html        # Khung mẫu chuẩn (tham khảo, KHÔNG sửa)
    ├── chau.html                   # Portfolio cá nhân Hồ Nguyễn Thái Châu
    ├── bao1.html                   # Portfolio cá nhân Ngô Gia Bảo
    ├── bao2.html                   # Portfolio cá nhân Nguyễn Gia Bảo
    ├── qanh.html                   # Portfolio cá nhân Lê Quốc Anh
    ├── huy.html                    # Portfolio cá nhân Trần Gia Huy
    └── nam.html                    # Portfolio cá nhân Trần Hoàng Nam
```

---

## 🔒 5. Bảng phân quyền thao tác file

Để đảm bảo an toàn mã nguồn và tránh conflict khi làm việc nhóm trên Git:

| Thành phần / Tệp tin | Người phụ trách & phân quyền |
|----------------------|------------------------------|
| `index.html` | Người phụ trách khung dự án |
| `css/base.css`, `css/home.css`, `css/member-common.css` | Người phụ trách khung dự án |
| `js/common.js`, `js/home.js`, `js/contact.js` | Người phụ trách khung dự án |
| `js/data.js` (cấu trúc chung) | Người phụ trách khung dự án |
| `members/member-template.html` | Khung mẫu chuẩn (**Không chỉnh sửa trực tiếp**) |
| **`members/<tên>.html`** | 🟢 **Chỉ thành viên tương ứng chỉnh sửa** |
| **`css/members/<tên>.css`** | 🟢 **Chỉ thành viên tương ứng chỉnh sửa** |
| **`js/members/<tên>.js`** | 🟢 **Chỉ thành viên tương ứng chỉnh sửa** |
| **`images/<tên>/`** | 🟢 **Chỉ thành viên tương ứng thêm/sửa ảnh** |
| **`js/data.js` (Object thành viên)** | 🟢 **Chỉ sửa object mang ID của chính mình** |

---

## 📐 6. Quy ước chuẩn phát triển

### 1. Quy ước đặt tên tệp & thư mục
- Viết chữ thường, không dấu tiếng Việt, không chứa khoảng trắng.
- Sử dụng dấu gạch ngang `-` để phân cách các từ (kebab-case).

### 2. Quy ước đường dẫn (Relative Paths)
- Luôn sử dụng **đường dẫn tương đối**.
- Từ các tệp trong `members/<tên>.html` trỏ về thư mục gốc: dùng `../`  
  *(Ví dụ: `../css/base.css`, `../images/<tên>/avatar.jpg`, `../js/common.js`)*.

### 3. Quy ước tệp hình ảnh
| Loại hình | Tên tệp chuẩn | Kích thước đề xuất | Định dạng |
|-----------|---------------|-------------------|-----------|
| Ảnh đại diện | `avatar.jpg` hoặc `avatar.png` | ~400 × 400px (tỉ lệ 1:1) | JPG / PNG / WebP |
| Ảnh dự án 1, 2 | `project1.jpg`, `project2.jpg` | ~800 × 500px (tỉ lệ 16:9) | JPG / PNG / WebP |
| Ảnh bìa (tùy chọn)| `cover.jpg` | ~1200 × 400px | JPG / PNG / WebP |

### 4. Quy ước ID cho Form liên hệ
Mỗi trang cá nhân cần giữ đúng các ID sau để dùng chung logic xác thực tại `js/contact.js`:
- Form liên hệ: `id="contact-form"`
- Ô nhập họ tên: `id="contact-name"`
- Ô nhập email: `id="contact-email"`
- Ô nhập nội dung: `id="contact-message"`
- Hộp thông báo kết quả: `id="contact-success"`

---

## 💻 7. Hướng dẫn cài đặt & Khởi chạy dự án

### Yêu cầu môi trường
- Một trình duyệt web hiện đại (Google Chrome, Microsoft Edge, Firefox, Brave,...).
- Khuyến nghị sử dụng **Visual Studio Code** cùng extension **Live Server**.

### Các bước thực hiện
1. **Clone dự án về máy tính:**
   ```bash
   git clone <URL_REPOSITORY>
   cd PORTFOLIO_nhom3
   ```
2. **Khởi chạy ứng dụng:**
   - **Cách 1 (Khuyên dùng):** Mở thư mục dự án bằng VS Code, nhấn chuột phải vào file `index.html` và chọn **"Open with Live Server"**.
   - **Cách 2:** Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào.

---

## 🌿 8. Quy trình làm việc nhóm với Git

```bash
# 1. Trước khi bắt đầu làm việc (luôn cập nhật code mới nhất từ nhóm)
git pull origin main

# 2. Kiểm tra các file bạn đã thay đổi (chỉ sửa các file thuộc quyền hạn của mình)
git status

# 3. Thêm các file đã chỉnh sửa vào staging area
git add .

# 4. Tạo commit với thông điệp rõ ràng
git commit -m "feat(bao1): cập nhật giao diện hồ sơ cá nhân và dự án"

# 5. Đẩy code lên repository
git push origin main
```

> [!IMPORTANT]
> **Quy tắc vàng khi làm việc nhóm:**
> 1. Luôn chạy `git pull` trước khi bắt đầu chỉnh sửa.
> 2. Tuyệt đối không can thiệp vào các tệp của thành viên khác hoặc các tệp khung hệ thống trừ khi được phân công.
> 3. Nếu xảy ra xung đột mã nguồn (Merge Conflict), hãy liên hệ ngay với Trưởng nhóm hoặc Người phụ trách khung để được hỗ trợ xử lý.
