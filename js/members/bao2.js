/*
 * bao2.js
 * Mục đích: JS riêng của Gia Bảo (Bảo 2) - Cung cấp các tính năng tương tác sáng tạo cá nhân.
 * AI ĐƯỢC SỬA – Chỉ Bảo 2 sửa.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
   * 1. HIỆU ỨNG GÕ CHỮ ĐỘNG (TYPING EFFECT)
   * ========================================================= */
  const typingElement = document.getElementById("dynamic-typing");
  if (typingElement) {
    const roles = [
      "Frontend Developer",
      "Fullstack Web Enthusiast",
      "Lập trình Mạng & Socket",
      "UI/UX & Responsive Designer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseDelay = 1800;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = 400;
      }

      setTimeout(typeEffect, timeout);
    }

    setTimeout(typeEffect, 600);
  }

  /* =========================================================
   * 2. CHUYỂN ĐỔI CHẾ ĐỘ SÁNG / TỐI (DARK / LIGHT MODE)
   * ========================================================= */
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector(".theme-icon") : null;

  // Khôi phục giao diện từ localStorage hoặc system preference
  const savedTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  /* =========================================================
   * 3. TOGGLE MENU MOBILE
   * ========================================================= */
  const mobileToggle = document.getElementById("mobile-toggle");
  const mainNav = document.getElementById("main-nav");

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });

    // Đóng menu khi bấm vào bất kỳ nav link nào
    mainNav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
      });
    });
  }

  /* =========================================================
   * 4. SCROLLSPY - TỰ ĐỘNG ĐỔI ACTIVE KHI CUỘN TRANG
   * ========================================================= */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  function onScrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScrollSpy, { passive: true });

  /* =========================================================
   * 5. LỌC DỰ ÁN (PROJECT FILTER)
   * ========================================================= */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-grid .project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex";
          card.style.animation = "fadeInCard 0.4s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* =========================================================
   * 6. SAO CHÉP EMAIL VỚI FEEDBACK
   * ========================================================= */
  const copyBtn = document.getElementById("copy-email-btn");
  const emailTextEl = document.getElementById("copy-email-text");

  if (copyBtn && emailTextEl) {
    copyBtn.addEventListener("click", async () => {
      const email = emailTextEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✓ Đã chép!";
        copyBtn.style.backgroundColor = "#10b981";
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.backgroundColor = "";
        }, 2000);
      } catch (err) {
        prompt("Sao chép địa chỉ email:", email);
      }
    });
  }

  /* =========================================================
   * 7. NÚT VỀ ĐẦU TRANG & CUỘN MƯỢT
   * ========================================================= */
  const btnTop = document.querySelector(".btn-top");
  if (btnTop) {
    btnTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* =========================================================
   * 8. VALIDATE & XỬ LÝ FORM LIÊN HỆ
   * (Hoạt động độc lập và tương thích chuẩn ID nhóm)
   * ========================================================= */
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");
  const successBox = document.getElementById("contact-success");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      // Xóa thông báo lỗi cũ
      document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

      // 1. Kiểm tra họ tên
      if (!nameInput.value.trim()) {
        showError(nameInput, "Vui lòng nhập họ và tên của bạn.");
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        showError(nameInput, "Họ và tên tối thiểu 2 ký tự.");
        isValid = false;
      }

      // 2. Kiểm tra email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        showError(emailInput, "Vui lòng nhập địa chỉ email của bạn.");
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Định dạng email không hợp lệ (Ví dụ: name@gmail.com).");
        isValid = false;
      }

      // 3. Kiểm tra nội dung
      if (!messageInput.value.trim()) {
        showError(messageInput, "Vui lòng nhập nội dung tin nhắn.");
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Nội dung tin nhắn cần tối thiểu 10 ký tự.");
        isValid = false;
      }

      // Nếu tất cả hợp lệ
      if (isValid) {
        const submitBtn = document.getElementById("contact-submit-btn");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = "<span>Đang gửi...</span>";
        }

        setTimeout(() => {
          if (successBox) {
            successBox.style.display = "flex";
            successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = "<span>Gửi tin nhắn</span><span class='submit-arrow'>→</span>";
          }
        }, 600);
      }
    });
  }

  function showError(inputEl, message) {
    const formGroup = inputEl.closest(".form-group");
    if (formGroup) {
      const errorEl = formGroup.querySelector(".error-message");
      if (errorEl) {
        errorEl.textContent = message;
      }
    }
    inputEl.focus();
  }
});
