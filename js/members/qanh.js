/*
 * qanh.js
 * Mục đích: JS riêng của Quốc Anh, dùng cho tính năng sáng tạo cá nhân.
 * AI ĐƯỢC SỬA – Chỉ Quốc Anh sửa.
 * Có thể để trống nếu không cần tính năng riêng.
 */
/*
 * qanh.js
 * Mục đích: JS riêng của Quốc Anh, dùng cho tính năng sáng tạo cá nhân.
 * AI ĐƯỢC SỬA – Chỉ Quốc Anh sửa.
 *
 * Chức năng:
 *  1. Dark mode + cuộn mượt (gọi hàm từ common.js)
 *  2. Menu mobile
 *  3. Làm nổi bật link menu theo section đang xem
 *  4. Thanh tiến độ cuộn trang
 *  5. Thanh kỹ năng chạy khi cuộn tới
 *  6. Lọc dự án
 *  7. Hộp thoại chi tiết dự án (sáng tạo)
 *  8. Hiệu ứng gõ chữ ở banner (sáng tạo)
 *  9. Ảnh dự phòng khi chưa có ảnh
 * 10. Kiểm tra form liên hệ
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Hàm dùng chung từ common.js
  if (typeof initDarkMode === "function") initDarkMode();
  if (typeof initSmoothScroll === "function") initSmoothScroll();

  initMobileMenu();
  initActiveNav();
  initScrollProgress();
  initSkillBars();
  initProjectFilter();
  initProjectDialog();
  initTypedRole();
  initImageFallback();
  initContactForm();
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 2. Menu mobile
function initMobileMenu() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!btn || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  };

  btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

// 3. Link menu nổi bật theo section đang xem
function initActiveNav() {
  const links = document.querySelectorAll(".main-nav a");
  const sections = [...links]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach((s) => observer.observe(s));
}

// 4. Thanh tiến độ cuộn trang
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// 5. Thanh kỹ năng
function initSkillBars() {
  const skills = document.querySelectorAll(".skill");
  const DURATION = 1100;

  const draw = (skill, value) => {
    skill.querySelector(".skill-bar i").style.width = value + "%";
    skill.querySelector(".skill-pct").textContent = Math.round(value) + "%";
  };

  const play = (skill) => {
    cancelAnimationFrame(skill._raf);
    const target = Number(skill.dataset.level);
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      draw(skill, target * (1 - Math.pow(1 - t, 4)));
      if (t < 1) skill._raf = requestAnimationFrame(step);
    };
    skill._raf = requestAnimationFrame(step);
  };

  const reset = (skill) => {
    cancelAnimationFrame(skill._raf);
    draw(skill, 0);
  };

  // Tắt transition của CSS để không bị trễ khi JS tự vẽ
  skills.forEach((s) => {
    s.querySelector(".skill-bar i").style.transition = "none";
    reset(s);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) play(entry.target);
      else reset(entry.target);
    });
  }, { threshold: 0.3 });

  skills.forEach((s) => observer.observe(s));
}

// 6. Lọc dự án
function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      const type = btn.dataset.filter;
      cards.forEach((card) => {
        card.classList.toggle("hidden", type !== "all" && card.dataset.category !== type);
      });
    });
  });
}

// 7. Hộp thoại chi tiết dự án
function initProjectDialog() {
  const dialog = document.getElementById("projectDialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const title = document.getElementById("dialogTitle");
  const text = document.getElementById("dialogText");
  const tags = document.getElementById("dialogTags");

  document.querySelectorAll(".project-more").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      title.textContent = card.querySelector("h3").textContent;
      text.textContent = card.dataset.detail || card.querySelector("p").textContent;
      tags.innerHTML = card.querySelector(".tags").innerHTML;
      dialog.showModal();
    });
  });

  document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
  // Bấm ra ngoài hộp thoại để đóng
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
}

// 8. Hiệu ứng gõ chữ ở banner
function initTypedRole() {
  const el = document.getElementById("typedRole");
  if (!el || prefersReducedMotion) return;

  const words = (el.dataset.words || "").split("|").filter(Boolean);
  if (words.length < 2) return;

  let w = 0, i = words[0].length, deleting = false;

  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, i);

    let delay = deleting ? 45 : 90;
    if (!deleting && i === word.length) { deleting = true; delay = 1800; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
    else i += deleting ? -1 : 1;

    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

// 9. Ảnh dự phòng khi chưa có ảnh
function initImageFallback() {
  document.querySelectorAll(".photo-frame img, .project-img img, .hobby-img img").forEach((img) => {
    const wrap = img.parentElement;
    const markMissing = () => wrap.classList.add("no-img");
    img.addEventListener("error", markMissing);
    if (img.complete && img.naturalWidth === 0) markMissing();
  });
}

// 10. Kiểm tra form liên hệ
function initContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  if (!form) return;

  const fields = {
    name: document.getElementById("contact-name"),
    email: document.getElementById("contact-email"),
    message: document.getElementById("contact-message"),
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const validators = {
    name: (v) => (!v ? "Vui lòng nhập họ tên." : v.length < 2 ? "Họ tên cần ít nhất 2 ký tự." : ""),
    email: (v) => (!v ? "Vui lòng nhập email." : !emailPattern.test(v) ? "Email chưa đúng định dạng, ví dụ: ten@gmail.com." : ""),
    message: (v) => (!v ? "Vui lòng nhập nội dung." : v.length < 10 ? "Nội dung cần ít nhất 10 ký tự." : ""),
  };

  const setError = (key, msg) => {
    const input = fields[key];
    const out = input.parentElement.querySelector(".error-message");
    out.textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  };

  const check = (key) => {
    const msg = validators[key](fields[key].value.trim());
    setError(key, msg);
    return !msg;
  };

  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener("blur", () => check(key));
    fields[key].addEventListener("input", () => {
      if (fields[key].getAttribute("aria-invalid") === "true") check(key);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (success) success.style.display = "none";

    const results = Object.keys(fields).map(check);
    if (results.includes(false)) {
      const firstBad = Object.keys(fields).find((k) => fields[k].getAttribute("aria-invalid") === "true");
      fields[firstBad].focus();
      return;
    }

    form.reset();
    Object.keys(fields).forEach((k) => fields[k].setAttribute("aria-invalid", "false"));
    if (success) {
      success.style.display = "block";
      setTimeout(() => { success.style.display = "none"; }, 6000);
    }
  });
}