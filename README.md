# Portfolio Nhóm 3 – Website Giới Thiệu Thành Viên

## 1. Giới thiệu dự án

Đây là website portfolio giới thiệu 6 thành viên nhóm 3, bài tập môn Web.
Website gồm 1 trang chủ nhóm và 6 trang cá nhân riêng biệt.

### Danh sách thành viên

| STT | Tên thư mục | Họ tên đầy đủ |
|-----|-------------|---------------|
| 1 | chau | *(cập nhật sau)* |
| 2 | qanh | *(cập nhật sau)* |
| 3 | bao1 | *(cập nhật sau – cần ghi rõ để phân biệt với bao2)* |
| 4 | bao2 | *(cập nhật sau – cần ghi rõ để phân biệt với bao1)* |
| 5 | huy | *(cập nhật sau)* |
| 6 | nam | *(cập nhật sau)* |

---

## 2. Cấu trúc thư mục

```
PORTFOLIO_nhom3/
├── index.html                  ← Trang chủ nhóm
├── README.md                   ← File này
├── css/
│   ├── base.css                ← Biến CSS, reset, dark mode
│   ├── home.css                ← Style trang chủ (lưới + modal)
│   ├── member-common.css       ← Style chung trang cá nhân
│   └── members/
│       ├── chau.css
│       ├── qanh.css
│       ├── bao1.css
│       ├── bao2.css
│       ├── huy.css
│       └── nam.css
├── js/
│   ├── data.js                 ← Dữ liệu 6 thành viên
│   ├── home.js                 ← Logic trang chủ (modal)
│   ├── common.js               ← Logic dùng chung (menu, dark mode)
│   ├── contact.js              ← Validate form liên hệ
│   └── members/
│       ├── chau.js
│       ├── qanh.js
│       ├── bao1.js
│       ├── bao2.js
│       ├── huy.js
│       └── nam.js
├── images/
│   ├── common/                 ← Ảnh dùng chung
│   ├── chau/                   ← Ảnh của Châu
│   ├── qanh/                   ← Ảnh của Quỳnh Anh
│   ├── bao1/                   ← Ảnh của Bảo 1
│   ├── bao2/                   ← Ảnh của Bảo 2
│   ├── huy/                    ← Ảnh của Huy
│   └── nam/                    ← Ảnh của Nam
└── members/
    ├── member-template.html    ← Template gốc (KHÔNG sửa)
    ├── chau.html
    ├── qanh.html
    ├── bao1.html
    ├── bao2.html
    ├── huy.html
    └── nam.html
```

---

## 3. Bảng phân quyền sửa file

| File / Thư mục | Ai được sửa |
|-----------------|-------------|
| `index.html` | Người phụ trách khung |
| `css/base.css` | Người phụ trách khung |
| `css/home.css` | Người phụ trách khung |
| `css/member-common.css` | Người phụ trách khung |
| `js/data.js` (cấu trúc) | Người phụ trách khung |
| `js/home.js` | Người phụ trách khung |
| `js/common.js` | Người phụ trách khung |
| `js/contact.js` | Người phụ trách khung |
| `members/member-template.html` | Người phụ trách khung (KHÔNG sửa) |
| `members/<tên>.html` | Chỉ **<tên>** sửa |
| `css/members/<tên>.css` | Chỉ **<tên>** sửa |
| `js/members/<tên>.js` | Chỉ **<tên>** sửa |
| `images/<tên>/` | Chỉ **<tên>** sửa |
| `js/data.js` (object của mình) | Mỗi người chỉ sửa object của mình |

---

## 4. Quy ước

### Đặt tên file
- Chữ thường, không dấu, không khoảng trắng
- Dùng dấu gạch ngang `-` nếu cần phân tách

### Đường dẫn
- Luôn dùng **đường dẫn tương đối**
- Từ `members/<tên>.html` trỏ lên gốc: dùng `../`

### Tên ảnh chuẩn
| Ảnh | Tên file | Ghi chú |
|-----|----------|---------|
| Ảnh đại diện | `avatar.jpg` | Vuông ~400×400px |
| Ảnh dự án 1 | `project1.jpg` | |
| Ảnh dự án 2 | `project2.jpg` | |
| Ảnh bìa | `cover.jpg` | Tùy chọn |

### Quy ước id form liên hệ
| Thành phần | ID |
|-----------|-----|
| Form | `contact-form` |
| Ô họ tên | `contact-name` |
| Ô email | `contact-email` |
| Ô nội dung | `contact-message` |
| Thông báo thành công | `contact-success` |

---

## 5. Quy trình Git đơn giản

### Trước khi làm việc
```bash
git pull
```

### Sau khi làm xong
```bash
git add .
git commit -m "Mô tả ngắn gọn việc đã làm"
git push
```

### Quy tắc quan trọng
- **LUÔN** `git pull` trước khi bắt đầu làm
- **KHÔNG** sửa file chung (trừ người phụ trách khung)
- **CHỈ** sửa file trong phạm vi của mình (xem bảng phân quyền)
- Nếu có xung đột (conflict), hỏi người phụ trách khung