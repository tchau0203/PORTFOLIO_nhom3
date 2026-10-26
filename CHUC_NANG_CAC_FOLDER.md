# TÀI LIỆU CHI TIẾT: CHỨC NĂNG TỪNG FOLDER VÀ FILE TRONG CẤU TRÚC DỰ ÁN PORTFOLIO NHÓM 3

> **Dự án**: Website Portfolio Nhóm 3 (1 Trang chủ nhóm + 6 Trang cá nhân thành viên)  
> **Kiến trúc**: Cấu trúc module hóa độc lập (Modular Separation) giúp 6 thành viên làm việc song song, không lo xung đột mã nguồn (Zero Git Conflicts).

---

## 1. Sơ Đồ Cây Thư Mục Tổng Quan

```text
PORTFOLIO_nhom3/
│
├── index.html                   # Trang chủ chính của cả nhóm
├── README.md                    # Tài liệu hướng dẫn chung dự án
├── CAU_TRUC_DU_AN.md            # Tổng quan cấu trúc dự án
├── CHUC_NANG_CAC_FOLDER.md      # Tài liệu này (Chi tiết chức năng từng folder)
├── .gitignore                   # Cấu hình bỏ qua các file rác khi đẩy lên Git
│
├── css/                         # [FOLDER] Quản lý toàn bộ giao diện & kiểu dáng (CSS)
│   ├── base.css                 # CSS nền tảng: Biến màu, phông chữ, Dark/Light Mode, Reset
│   ├── home.css                 # CSS dành riêng cho trang chủ (banner, thẻ thành viên, modal)
│   ├── member-common.css        # CSS khung chuẩn dùng chung cho các trang cá nhân
│   └── members/                 # [SUB-FOLDER] CSS riêng biệt của từng thành viên
│       ├── chau.css             # Style tùy biến của bạn Châu
│       ├── qanh.css             # Style tùy biến của bạn QAnh
│       ├── bao1.css             # Style tùy biến của bạn Bảo 1
│       ├── bao2.css             # Style tùy biến của bạn Bảo 2
│       ├── huy.css              # Style tùy biến của bạn Huy
│       └── nam.css              # Style tùy biến của bạn Nam
│
├── images/                      # [FOLDER] Quản lý toàn bộ hình ảnh và tài nguyên đồ họa
│   ├── common/                  # [SUB-FOLDER] Hình ảnh & biểu tượng dùng chung cả website
│   ├── chau/                    # [SUB-FOLDER] Nơi lưu ảnh của Châu (avatar, ảnh dự án,...)
│   ├── qanh/                    # [SUB-FOLDER] Nơi lưu ảnh của Quỳnh Anh
│   ├── bao1/                    # [SUB-FOLDER] Nơi lưu ảnh của Bảo 1
│   ├── bao2/                    # [SUB-FOLDER] Nơi lưu ảnh của Bảo 2
│   ├── huy/                     # [SUB-FOLDER] Nơi lưu ảnh của Huy
│   └── nam/                     # [SUB-FOLDER] Nơi lưu ảnh của Nam
│
├── js/                          # [FOLDER] Quản lý toàn bộ mã nguồn xử lý logic (JavaScript)
│   ├── data.js                  # "Cơ sở dữ liệu tĩnh" chứa thông tin 6 thành viên
│   ├── home.js                  # Logic trang chủ (render dữ liệu, mở modal, hiệu ứng)
│   ├── common.js                # Logic dùng chung toàn web (chuyển theme Sáng/Tối, cuộn mượt)
│   ├── contact.js               # Logic kiểm tra dữ liệu biểu mẫu liên hệ (Form Validation)
│   └── members/                 # [SUB-FOLDER] JavaScript riêng biệt của từng người
│       ├── chau.js              # Script hiệu ứng riêng của Châu
│       ├── qanh.js              # Script hiệu ứng riêng của Quỳnh Anh
│       ├── bao1.js              # Script hiệu ứng riêng của Bảo 1
│       ├── bao2.js              # Script hiệu ứng riêng của Bảo 2
│       ├── huy.js               # Script hiệu ứng riêng của Huy
│       └── nam.js               # Script hiệu ứng riêng của Nam
│
└── members/                     # [FOLDER] Chứa các trang HTML portfolio cá nhân
    ├── member-template.html     # Trang HTML mẫu chuẩn (dùng để tham khảo hoặc nhân bản)
    ├── chau.html                # Trang portfolio cá nhân của Châu
    ├── qanh.html                # Trang portfolio cá nhân của Quỳnh Anh
    ├── bao1.html                # Trang portfolio cá nhân của Bảo 1
    ├── bao2.html                # Trang portfolio cá nhân của Bảo 2
    ├── huy.html                 # Trang portfolio cá nhân của Huy
    └── nam.html                 # Trang portfolio cá nhân của Nam
```

---

## 2. Chi Tiết Chức Năng Của Từng Folder

### 📁 2.1. Thư mục `css/` (Cascading Style Sheets)

- **Chức năng chính**: Định dạng toàn bộ mỹ thuật, bố cục, màu sắc, hiệu ứng thị giác và trải nghiệm responsive trên mọi kích thước màn hình (Desktop, Tablet, Mobile).
- **Các thành phần bên trong**:
  1. `base.css`:
     - Khai báo hệ thống **biến CSS (CSS Variables)** dùng toàn trang: mã màu chủ đạo, màu nền sáng/tối, phông chữ chuẩn, kích thước lề (padding/margin).
     - Thiết lập cấu hình chế độ **Dark Mode / Light Mode**.
     - Reset CSS chuẩn để website hiển thị đồng nhất trên các trình duyệt (Chrome, Firefox, Safari, Edge).
     - Định dạng các thành phần cơ bản dùng lại nhiều lần (Button, Preloader, Thẻ Card cơ bản).
  2. `home.css`:
     - Định vị giao diện cho riêng trang chủ `index.html`.
     - Canh chỉnh bố cục: Phần Hero Banner, Tiêu đề nhóm, Lưới thẻ giới thiệu 6 thành viên, Chân trang (Footer), Cửa sổ Modal xem nhanh thông tin thành viên.
  3. `member-common.css`:
     - Tạo khung thiết kế đồng nhất cho tất cả các trang thành viên (cỡ chữ tiêu chuẩn, khoảng cách giữa các phần giới thiệu, định dạng form liên hệ).
  4. 📁 **Thư mục con `css/members/`**:
     - **Chức năng**: Cho phép từng thành viên tự do thiết kế phong cách độc đáo của riêng mình mà **hoàn toàn không ảnh hưởng** đến bạn khác.
     - Mỗi file (`chau.css`, `qanh.css`, `bao1.css`, `bao2.css`, `huy.css`, `nam.css`) sẽ áp dụng các màu sắc, animation, bố cục đặc thù cho trang cá nhân tương ứng.

---

### 📁 2.2. Thư mục `images/` (Tài nguyên hình ảnh & Đồ họa)

- **Chức năng chính**: Quản lý tập trung mọi hình ảnh, biểu tượng (icon), ảnh bìa và minh họa dự án của cả nhóm nhằm tránh thất lạc hay trùng lặp tên file.
- **Các thành phần bên trong**:
  1. 📁 **Thư mục con `images/common/`**:
     - Lưu trữ hình ảnh dùng chung cho toàn bộ website: Logo nhóm, favicon icon trình duyệt, hình nền nền tảng chung, icon mạng xã hội dùng chung.
  2. 📁 **Các thư mục con cá nhân (`chau/`, `qanh/`, `bao1/`, `bao2/`, `huy/`, `nam/`)**:
     - **Chức năng**: Không gian lưu trữ độc quyền của từng thành viên.
     - Từng người tự upload ảnh của mình vào thư mục tương ứng theo quy ước:
       - `avatar.jpg`: Ảnh chân dung đại diện (khuyến nghị tỉ lệ 1:1, ~400x400px).
       - `cover.jpg`: Ảnh bìa banner cá nhân (tùy chọn).
       - `project1.jpg`, `project2.jpg`, ...: Ảnh chụp màn hình các sản phẩm/dự án cá nhân đã thực hiện.

---

### 📁 2.3. Thư mục `js/` (JavaScript Logic)

- **Chức năng chính**: Quản lý toàn bộ mã kịch bản xử lý tương tác người dùng, tính năng động, hoạt ảnh và kiểm tra dữ liệu.
- **Các thành phần bên trong**:
  1. `data.js`:
     - Đóng vai trò như **kho dữ liệu trung tâm (Data Store)**.
     - Lưu trữ danh sách thông tin của 6 thành viên dưới dạng mảng JSON (Họ tên, Vai trò, Châm ngôn sống/Slogan, Danh sách kỹ năng, Link trang cá nhân, Màu đại diện,...).
     - Khi cần cập nhật thông tin giới thiệu ngắn của thành viên trên trang chủ, chỉ cần sửa dữ liệu ở đây mà không cần chạm vào file HTML.
  2. `home.js`:
     - Đọc dữ liệu từ `data.js` để tự động render danh sách các thẻ thành viên lên trang chủ `index.html`.
     - Xử lý đóng/mở cửa sổ Modal xem nhanh thông tin thành viên (Quick View).
     - Hiệu ứng Preloader màn hình chờ, hiệu ứng di chuột (cursor animation).
  3. `common.js`:
     - Xử lý tính năng đổi giao diện **Sáng / Tối (Dark / Light Theme)** và tự động lưu lựa chọn vào `localStorage` của trình duyệt.
     - Hỗ trợ tính năng cuộn mượt (Smooth Scroll) khi nhấn vào menu điều hướng.
  4. `contact.js`:
     - Xử lý biểu mẫu liên hệ (Contact Form) trên các trang cá nhân:
       - Kiểm tra người dùng đã nhập tên hay chưa.
       - Kiểm tra định dạng email có hợp lệ không (`@`, domain).
       - Kiểm tra độ dài nội dung tin nhắn.
       - Hiển thị thông báo gửi thành công mà không cần load lại trang.
  5. 📁 **Thư mục con `js/members/`**:
     - Chứa các file script cá nhân (`chau.js`, `qanh.js`, `bao1.js`, `bao2.js`, `huy.js`, `nam.js`).
     - **Chức năng**: Dành cho thành viên muốn tự viết thêm hiệu ứng đặc biệt trên trang cá nhân của mình (ví dụ: hiệu ứng chữ gõ máy typewriter, hiệu ứng hạt rơi canvas, thanh tiến trình kỹ năng, bộ lọc dự án,...).

---

### 📁 2.4. Thư mục `members/` (Trang HTML Cá Nhân)

- **Chức năng chính**: Chứa các file HTML đại diện cho trang Portfolio cá nhân của từng thành viên.
- **Các thành phần bên trong**:
  1. `member-template.html`:
     - **File mẫu chuẩn**: Được xây dựng sẵn cấu trúc chuẩn SEO, liên kết sẵn các file CSS/JS nền tảng.
     - Dùng làm tài liệu tham khảo hoặc nhân bản cấu trúc khi cần mở rộng thêm thành viên.
  2. Các file HTML cá nhân (`chau.html`, `qanh.html`, `bao1.html`, `bao2.html`, `huy.html`, `nam.html`):
     - Mỗi file là một trang portfolio độc lập của từng bạn.
     - Chứa các phần: Giới thiệu bản thân (About Me), Kỹ năng (Skills), Kinh nghiệm & Học vấn (Experience & Education), Dự án tiêu biểu (Projects), Biểu mẫu liên hệ (Contact).

---

### 📄 2.5. Các File Ở Thư Mục Gốc (Root)

- `index.html`: Cửa ngõ (Entry Point) chính của website - nơi giới thiệu tổng quan về Nhóm 3, tầm nhìn, và hiển thị danh sách thẻ dẫn tới từng thành viên.
- `README.md`: Bản mô tả dự án dùng để hiển thị trên kho lưu trữ Git (GitHub/GitLab).
- `CAU_TRUC_DU_AN.md`: Tóm tắt cấu trúc thư mục và quy tắc làm việc nhóm.
- `CHUC_NANG_CAC_FOLDER.md`: Bản đặc tả chi tiết chức năng từng folder và file trong dự án.
- `.gitignore`: Khai báo các file hệ điều hành/trình biên dịch không cần thiết đưa lên Git (như `.DS_Store`, `Thumbs.db`, thư mục IDE `.vscode/`).

---

## 3. Bảng Phân Quyền Sửa Đổi Tránh Xung Đột (Git Conflict)

Nhằm đảm bảo 6 thành viên làm việc cùng lúc trên Git mà không gặp lỗi xung đột mã nguồn:

| Thư mục / Tập tin                               | Loại tài nguyên         | Ai được phép chỉnh sửa?                         |
| :---------------------------------------------- | :---------------------- | :---------------------------------------------- |
| `index.html`                                    | Trang chủ chung         | **Trưởng nhóm / Người phụ trách khung**         |
| `css/base.css`, `home.css`, `member-common.css` | CSS hệ thống dùng chung | **Trưởng nhóm / Người phụ trách khung**         |
| `js/common.js`, `home.js`, `contact.js`         | JS hệ thống dùng chung  | **Trưởng nhóm / Người phụ trách khung**         |
| `js/data.js`                                    | Dữ liệu nhóm            | Mỗi thành viên **chỉ sửa đúng object của mình** |
| `members/member-template.html`                  | File mẫu                | **Không được sửa** (chỉ đọc)                    |
| **`members/<tên>.html`**                        | Trang cá nhân           | **Chỉ riêng `<tên>` được sửa**                  |
| **`css/members/<tên>.css`**                     | CSS cá nhân             | **Chỉ riêng `<tên>` được sửa**                  |
| **`js/members/<tên>.js`**                       | JS cá nhân              | **Chỉ riêng `<tên>` được sửa**                  |
| **`images/<tên>/`**                             | Ảnh cá nhân             | **Chỉ riêng `<tên>` được sửa**                  |
| `images/common/`                                | Ảnh dùng chung          | Thêm ảnh mới theo thống nhất chung              |

---

## 4. Tóm Tắt Quy Tắc Làm Việc An Toàn

1. **Trước khi bắt đầu làm**: Luôn chạy `git pull` để lấy mã nguồn mới nhất từ nhóm.
2. **Khi phát triển trang cá nhân**:
   - Chỉ sửa file HTML mang tên mình trong thư mục `members/`.
   - Chỉ viết CSS vào file của mình trong `css/members/`.
   - Chỉ viết JS vào file của mình trong `js/members/`.
   - Chỉ bỏ ảnh vào thư mục tên mình trong `images/`.
3. **Sau khi làm xong**:
   - Kiểm tra lại đường dẫn tương đối (từ `members/` trỏ lên thư mục cha phải dùng `../`).
   - Thực hiện commit và push:
     ```bash
     git add .
     git commit -m "Cập nhật portfolio cá nhân: <tên thành viên>"
     git push
     ```
