/* 
  huy.js
  Mục đích: Xử lý các tương tác (logic) trên trang portfolio của Huy
*/

document.addEventListener('DOMContentLoaded', () => {
    // Xử lý sự kiện gửi form liên hệ
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn hành vi reload trang mặc định của trình duyệt

            // Xóa các thông báo lỗi cũ trước khi kiểm tra lại
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            let isValid = true;

            // Lấy dữ liệu từ các ô input
            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');

            // 1. Kiểm tra Họ tên
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Vui lòng nhập họ tên của bạn.');
                isValid = false;
            }

            // 2. Kiểm tra Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Vui lòng nhập email.');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Email không đúng định dạng (ví dụ: ten@gmail.com).');
                isValid = false;
            }

            // 3. Kiểm tra Nội dung tin nhắn
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Vui lòng nhập nội dung bạn muốn nhắn gửi.');
                isValid = false;
            }

            // 4. Nếu toàn bộ dữ liệu hợp lệ
            if (isValid) {
                // Hiện thông báo thành công
                successMessage.style.display = 'block';
                
                // Xóa trắng dữ liệu trong form
                contactForm.reset();

                // Tự động ẩn thông báo sau 4 giây
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 4000);
            }
        });
    }

    // Hàm phụ trợ: Hiển thị lỗi ngay bên dưới ô input bị sai
    function showError(inputElement, message) {
        const errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = message;
        }
    }
    
    // Thêm hiệu ứng cuộn trang mượt (Smooth Scroll) cho các link menu
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});