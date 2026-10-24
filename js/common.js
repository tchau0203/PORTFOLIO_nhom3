/*
 * common.js
 * Mục đích: Logic dùng chung cho tất cả các trang.

 */

// ============================================================
// 1. DARK MODE TOGGLE (dùng chung cho trang chủ và các trang con)
// ============================================================
function initDarkMode() {
  const toggle = document.getElementById("themeToggle");

  // Đọc thiết lập đã lưu
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
    });
  }
}

// ============================================================
// 2. CUỘN MƯỢT (Smooth Scroll)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbar = document.getElementById("navbar") || document.querySelector(".site-header");
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
}
