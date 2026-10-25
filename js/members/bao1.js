/* js/members/bao1.js */
document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 1. SCROLLSPY & CLICK HIGHLIGHT FIX (Tính động chiều cao header)
  // ============================================================
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".main-nav a");
  let isScrollingFromClick = false;

  // Xử lý khi click vào nút trên menu (Dùng window.scrollTo chuẩn xác từng pixel)
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Ngăn chặn nhảy mặc định của thẻ a
      isScrollingFromClick = true;
      
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Lấy chiều cao thực tế của header trên màn hình để trừ hao chuẩn xác
        const headerHeight = document.querySelector(".site-header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // Đổi màu active ngay lập tức
        navLinks.forEach(n => n.classList.remove("active"));
        this.classList.add("active");
      }
      
      // Mở khóa lại sau khi cuộn xong
      setTimeout(() => {
        isScrollingFromClick = false;
      }, 800);
    });
  });

  // Xử lý khi tự lăn chuột
  window.addEventListener("scroll", () => {
    if (isScrollingFromClick) return;

    let currentSectionId = "";
    const scrollPosition = window.scrollY + 130;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (currentSectionId && link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // ============================================================
  // 2. TYPEWRITING EFFECT - Chữ gõ tự động
  // ============================================================
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const roles = ["Frontend Developer", "UI/UX Enthusiast", "C# & Python Coder"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1800);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 400);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }
    typeEffect();
  }

  // ============================================================
  // 3. FORM VALIDATION - Kiểm tra dữ liệu liên hệ
  // ============================================================
  const contactForm = document.getElementById("contact-form");
  const successAlert = document.getElementById("contact-success");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const messageInput = document.getElementById("contact-message");

      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const messageError = document.getElementById("message-error");

      // Reset lỗi
      [nameInput, emailInput, messageInput].forEach(input => input.classList.remove("invalid"));
      [nameError, emailError, messageError].forEach(err => err.textContent = "");

      // Validate Họ tên
      if (!nameInput.value.trim()) {
        nameInput.classList.add("invalid");
        nameError.textContent = "Vui lòng nhập họ tên của bạn.";
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Vui lòng nhập địa chỉ email.";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Email không hợp lệ (ví dụ: name@gmail.com).";
        isValid = false;
      }

      // Validate Nội dung
      if (!messageInput.value.trim()) {
        messageInput.classList.add("invalid");
        messageError.textContent = "Vui lòng nhập nội dung liên hệ.";
        isValid = false;
      }

      // Nếu hợp lệ
      if (isValid) {
        contactForm.reset();
        successAlert.style.display = "block";
        setTimeout(() => {
          successAlert.style.display = "none";
        }, 4000);
      }
    });
  }
});