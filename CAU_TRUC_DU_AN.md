# Cấu Trúc Thư Mục Dự Án Portfolio Nhóm 03

Dự án này được tổ chức theo cấu trúc module gọn gàng nhằm giúp các thành viên trong nhóm có thể làm việc song song mà không bị ghi đè hay xung đột mã nguồn (conflict) của nhau.

Dưới đây là giải thích chi tiết cho từng thư mục và tệp tin trong dự án:

## 1. Thư mục `css/`
Chứa tất cả các tệp định dạng giao diện (Cascading Style Sheets).
*   **`base.css`**: Chứa các biến CSS toàn cục (màu sắc, phông chữ, khoảng cách), reset CSS cơ bản, cấu hình giao diện Sáng/Tối (Dark/Light theme), và các style dùng chung (như nút bấm, preloader).
*   **`home.css`**: Code CSS dành riêng cho giao diện trang chủ (`index.html`) bao gồm thanh điều hướng, banner, lưới thẻ thành viên và chân trang.
*   **`member-common.css`**: Khung CSS dùng chung cho các trang cá nhân của từng thành viên (như form liên hệ, bố cục chung).
*   **`members/`**: Thư mục chứa các tệp CSS riêng biệt của từng người (ví dụ: `bao1.css`, `chau.css`, `huy.css`...). Mỗi người sẽ viết style cho trang cá nhân của mình vào file tương ứng tại đây.

## 2. Thư mục `images/`
Nơi lưu trữ toàn bộ hình ảnh của dự án.
*   **`common/`**: Chứa các hình ảnh dùng chung cho cả trang (ví dụ: logo, ảnh nền mặc định, icon dùng chung).
*   **`bao1/`, `bao2/`, `chau/`, `huy/`, `nam/`, `qanh/`**: Các thư mục cá nhân. Mỗi thành viên sẽ tải ảnh đại diện, ảnh dự án cá nhân của mình vào đúng thư mục tên mình để dễ dàng quản lý.

## 3. Thư mục `js/`
Chứa các tệp mã nguồn xử lý logic (JavaScript).
*   **`common.js`**: Chứa logic dùng chung cho tất cả các trang (chức năng đổi màu giao diện Sáng/Tối, cuộn mượt).
*   **`data.js`**: Tệp lưu trữ dữ liệu tập trung (tên, vai trò, câu slogan, màu sắc đặc trưng của từng thành viên). Trang chủ sẽ đọc dữ liệu từ đây để hiển thị.
*   **`home.js`**: Logic riêng cho trang chủ (quản lý modal chi tiết, màn hình chờ tải preloader, hoạt ảnh con trỏ chuột, v.v.).
*   **`contact.js`**: Xử lý logic cho biểu mẫu (form) liên hệ trên trang cá nhân của các thành viên.
*   **`members/`**: Thư mục chứa các tệp JS riêng của từng người. Tương tự như CSS, mỗi thành viên viết hiệu ứng hoặc logic cá nhân vào file của mình trong này.

## 4. Thư mục `members/` (Thư mục gốc)
Chứa các trang HTML đại diện cho portfolio cá nhân của mỗi thành viên.
*   **`bao1.html`, `chau.html`, `huy.html`...**: Tệp trang cá nhân của từng người.
*   **`member-template.html`**: Một tệp HTML mẫu (template) đã được thiết lập sẵn các liên kết (link css/js). Thành viên có thể dựa vào cấu trúc của file này để xây dựng trang cá nhân của mình.

## 5. Các tệp ở thư mục gốc (Root)
*   **`index.html`**: Tệp trang chủ của nhóm. Nơi hiển thị thông tin giới thiệu chung và danh sách thẻ liên kết tới các thành viên.
*   **`README.md`**: Tệp giới thiệu dự án chung thường dùng cho GitHub/GitLab.
*   **`.gitignore`**: Tệp khai báo các file/thư mục mà Git sẽ bỏ qua không lưu trữ (thường là các thư mục hệ thống hoặc file rác).

---
**Quy tắc làm việc:** 
- Khi làm phần cá nhân, **chỉ** thao tác trên tệp `.html` mang tên mình, tệp `.css` và `.js` mang tên mình trong thư mục `members/`, và thư mục ảnh của riêng mình. Điều này giúp cả nhóm làm việc cực kỳ trơn tru!
