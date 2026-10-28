/* ============================================================
   js/members/bao1.js - Portfolio Ngô Gia Bảo (Bảo 1)
   Các chức năng: Cuộn mượt & ScrollSpy, Hiệu ứng gõ chữ Typewriter,
   Chuyển đổi giao diện Sáng/Tối, Menu di động, Hoạt ảnh kỹ năng,
   và Kiểm tra dữ liệu biểu mẫu liên hệ.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 1. CHUYỂN ĐỔI GIAO DIỆN SÁNG / TỐI (THEME TOGGLE)
  // ============================================================
  const themeToggleBtn = document.getElementById("themeToggle");
  const htmlRoot = document.documentElement;

  // Đọc theme đã lưu trong localStorage hoặc theo cài đặt hệ điều hành
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    htmlRoot.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlRoot.setAttribute("data-theme", "dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      htmlRoot.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }

  // ============================================================
  // 2. MENU DI ĐỘNG (MOBILE NAVIGATION DRAWER)
  // ============================================================
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });

    // Đóng drawer khi click ra ngoài
    document.addEventListener("click", (e) => {
      if (!mobileToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        mobileDrawer.classList.remove("open");
      }
    });
  }

  // ============================================================
  // 3. CUỘN MƯỢT & ĐÁNH DẤU LIÊN KẾT ĐANG XEM (SCROLLSPY)
  // ============================================================
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-link:not(.mobile-link-home)");
  const sections = document.querySelectorAll("main section[id]");
  const navbar = document.getElementById("navbar");
  let isProgrammaticScroll = false;

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        isProgrammaticScroll = true;

        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 10;

        window.scrollTo({
          top: targetTop,
          behavior: "smooth"
        });

        // Đổi active link trên menu ngay lập tức
        document.querySelectorAll(".main-nav a").forEach(l => l.classList.remove("active"));
        if (this.classList.contains("nav-link")) {
          this.classList.add("active");
        } else {
          // Nếu click từ mobile drawer, tìm link tương ứng trên desktop nav
          const desktopLink = document.querySelector(`.main-nav a[href="${href}"]`);
          if (desktopLink) desktopLink.classList.add("active");
        }

        setTimeout(() => {
          isProgrammaticScroll = false;
        }, 800);
      }
    });
  });

  // Tự động cập nhật menu khi người dùng cuộn trang
  window.addEventListener("scroll", () => {
    if (isProgrammaticScroll) return;

    const scrollPos = window.scrollY + 140;
    let currentId = "";

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      document.querySelectorAll(".main-nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // ============================================================
  // 4. HIỆU ỨNG CHỮ GÕ TỰ ĐỘNG (TYPEWRITER EFFECT)
  // ============================================================
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const roles = [
      "Frontend Developer",
      "UI/UX Enthusiast",
      "Web & System Explorer",
      "C# & Python Programmer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function handleTyping() {
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
        setTimeout(handleTyping, 2000); // Dừng lại đọc
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(handleTyping, 400); // Chuyển từ mới
      } else {
        setTimeout(handleTyping, isDeleting ? 45 : 95);
      }
    }

    handleTyping();
  }

  // ============================================================
  // 5. HOẠT ẢNH THANH TIẾN ĐỘ KỸ NĂNG KHI CUỘN TỚI (INTERSECTION OBSERVER)
  // ============================================================
  const progressFills = document.querySelectorAll(".progress-fill");
  const skillsSection = document.getElementById("skills");

  if ("IntersectionObserver" in window && skillsSection) {
    // Ban đầu reset về 0 để tạo hiệu ứng chạy mượt
    progressFills.forEach(fill => {
      fill.style.width = "0%";
    });

    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute("data-progress");
            if (targetWidth) {
              fill.style.width = targetWidth;
            }
          });
          observer.unobserve(entry.target); // Chỉ chạy hoạt ảnh 1 lần
        }
      });
    }, { threshold: 0.25 });

    skillsObserver.observe(skillsSection);
  }

  // ============================================================
  // 6. KIỂM TRA & XỬ LÝ BIỂU MẪU LIÊN HỆ (FORM VALIDATION)
  // ============================================================
  const contactForm = document.getElementById("contact-form");
  const successAlert = document.getElementById("contact-success");

  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Xóa lỗi ngay khi người dùng gõ phím
    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener("input", () => {
        input.classList.remove("invalid");
        const errEl = document.getElementById(`${input.name}-error`);
        if (errEl) errEl.textContent = "";
      });
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset thông báo lỗi
      [nameInput, emailInput, messageInput].forEach(inp => inp && inp.classList.remove("invalid"));
      [nameError, emailError, messageError].forEach(err => err && (err.textContent = ""));

      // 1. Kiểm tra Họ và tên
      const nameVal = nameInput ? nameInput.value.trim() : "";
      if (!nameVal) {
        nameInput.classList.add("invalid");
        nameError.textContent = "Vui lòng nhập họ và tên của bạn.";
        isValid = false;
      } else if (nameVal.length < 2) {
        nameInput.classList.add("invalid");
        nameError.textContent = "Họ tên quá ngắn (tối thiểu 2 ký tự).";
        isValid = false;
      }

      // 2. Kiểm tra Email
      const emailVal = emailInput ? emailInput.value.trim() : "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Vui lòng nhập địa chỉ email.";
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Địa chỉ email không hợp lệ (ví dụ: name@example.com).";
        isValid = false;
      }

      // 3. Kiểm tra Nội dung tin nhắn
      const messageVal = messageInput ? messageInput.value.trim() : "";
      if (!messageVal) {
        messageInput.classList.add("invalid");
        messageError.textContent = "Vui lòng nhập nội dung tin nhắn.";
        isValid = false;
      } else if (messageVal.length < 5) {
        messageInput.classList.add("invalid");
        messageError.textContent = "Nội dung tin nhắn quá ngắn (tối thiểu 5 ký tự).";
        isValid = false;
      }

      // Nếu tất cả trường đều hợp lệ
      if (isValid) {
        // Reset form
        contactForm.reset();

        // Hiển thị alert gửi thành công
        if (successAlert) {
          successAlert.style.display = "flex";
          successAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });

          // Tự động ẩn sau 5 giây
          setTimeout(() => {
            successAlert.style.display = "none";
          }, 5000);
        }
      } else {
        // Tự động focus vào trường lỗi đầu tiên
        const firstInvalid = contactForm.querySelector(".form-control.invalid");
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });
  }

});
