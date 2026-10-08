/* ============================================================
   🚀 HOME JAVASCRIPT — PORTFOLIO NHÓM 03
   ============================================================
   Mục đích: Logic trang chủ — Đổ dữ liệu thành viên từ data.js,
   quản lý modal chi tiết, preloader, custom cursor, navbar,
   menu di động và hiệu ứng tương tác.
   AI ĐƯỢC SỬA – Chỉ người phụ trách khung sửa.
   ============================================================ */

// ============================================================
// 1. HELPER: SVG Icons cho mạng xã hội
// ============================================================
function getSocialIcon(iconName) {
  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  };

  return icons[iconName] || icons.github;
}

// ============================================================
// 2. HELPER: Lấy chữ cái đại diện (initials) cho avatar placeholder
// ============================================================
function getMemberInitials(member) {
  if (member.name && member.name !== "Họ tên - cập nhật sau") {
    const parts = member.name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (member.id || "M").substring(0, 2).toUpperCase();
}

// ============================================================
// 3. POPULATE PAGE — Đổ dữ liệu từ data.js vào trang
// ============================================================
function populatePage() {
  if (typeof teamInfo === "undefined") return;

  // Cấu hình theme màu nếu có
  if (teamInfo.theme && teamInfo.theme.accentColor) {
    document.documentElement.style.setProperty("--accent", teamInfo.theme.accentColor);
    document.documentElement.style.setProperty(
      "--accent-glow",
      teamInfo.theme.accentColor + "26"
    );
  }
  if (teamInfo.theme && teamInfo.theme.accentColorDark) {
    document.documentElement.style.setProperty("--accent-dark", teamInfo.theme.accentColorDark);
  }

  // Tiêu đề trang
  document.title = `${teamInfo.name} — Portfolio 6 thành viên`;

  // Header Logo & Banner Hero
  const logoText = document.querySelector(".nav-logo-text");
  if (logoText) logoText.textContent = teamInfo.name;

  const heroGreeting = document.getElementById("heroGreeting");
  if (heroGreeting) heroGreeting.textContent = teamInfo.greeting;

  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.textContent = teamInfo.heroTitle || teamInfo.name;

  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline) heroTagline.textContent = teamInfo.heroTagline;

  // Footer
  const footerName = document.getElementById("footerName");
  if (footerName) footerName.textContent = teamInfo.name;

  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()}`;

  // Menu di động
  const mobileNavLinks = document.getElementById("mobileNavLinks");
  if (mobileNavLinks) {
    mobileNavLinks.innerHTML = "";
    const navItems = [
      { id: "hero", label: "Trang chủ" },
      { id: "members", label: "Thành viên" },
    ];
    navItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${item.id}`;
      a.textContent = item.label;
      a.addEventListener("click", () => closeMobileMenu());
      li.appendChild(a);
      mobileNavLinks.appendChild(li);
    });
  }

  // Render 6 thẻ thành viên vào #membersGrid
  renderMembers();
}

// ============================================================
// 4. RENDER THÀNH VIÊN — Hiển thị 6 thẻ từ data.js
// ============================================================
function renderMembers() {
  const membersGrid = document.getElementById("membersGrid");
  if (!membersGrid || typeof members === "undefined") return;

  membersGrid.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("div");
    card.className = "member-card";

    const initials = getMemberInitials(member);
    const memberName = member.name || "Thành viên";
    const memberRole = member.role || "Thành viên nhóm";
    const avatarSrc = member.avatar || "";

    card.innerHTML = `
      <div class="member-avatar-wrapper">
        <img
          class="member-avatar-img"
          src="${avatarSrc}"
          alt="${memberName}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="avatar-placeholder" style="display: none;">${initials}</div>
      </div>
      <div class="member-info">
        <h3 class="member-name">${memberName}</h3>
        <p class="member-role">${memberRole}</p>
      </div>
      <button type="button" class="btn btn-outline member-view-btn" data-id="${member.id}" aria-label="Xem chi tiết ${memberName}">
        <span>Xem</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    `;

    membersGrid.appendChild(card);
  });
}

// ============================================================
// 5. MODAL CHI TIẾT THÀNH VIÊN
// ============================================================
function initMemberModal() {
  const modal = document.getElementById("memberModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const membersGrid = document.getElementById("membersGrid");

  if (!modal) return;

  // Mở modal khi bấm vào nút 'Xem' trên thẻ bất kỳ
  if (membersGrid) {
    membersGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".member-view-btn");
      if (!btn) return;

      const memberId = btn.getAttribute("data-id");
      const member = members.find((m) => m.id === memberId);
      if (!member) return;

      openModal(member);
    });
  }

  // Đóng modal khi bấm nút X
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal());
  }

  // Đóng modal khi bấm vào nền tối bên ngoài
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", () => closeModal());
  }

  // Đóng modal khi nhấn phím Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Hàm đổ dữ liệu và mở modal
  function openModal(member) {
    const avatarImg = document.getElementById("modalAvatarImg");
    const placeholder = document.getElementById("modalAvatarPlaceholder");
    const nameEl = document.getElementById("modalMemberName");
    const roleEl = document.getElementById("modalMemberRole");
    const mssvEl = document.getElementById("modalMemberMssv");
    const introEl = document.getElementById("modalMemberIntro");
    const skillsEl = document.getElementById("modalMemberSkills");
    const socialsEl = document.getElementById("modalMemberSocials");
    const fullLinkEl = document.getElementById("modalFullLink");

    // Xử lý avatar & fallback placeholder
    const initials = getMemberInitials(member);
    placeholder.textContent = initials;
    avatarImg.style.display = "block";
    placeholder.style.display = "none";
    avatarImg.onerror = () => {
      avatarImg.style.display = "none";
      placeholder.style.display = "flex";
    };
    avatarImg.src = member.avatar || "";
    avatarImg.alt = member.name || "Thành viên";

    // Họ tên, vai trò, MSSV
    nameEl.textContent = member.name || "Thành viên";
    roleEl.textContent = member.role || "Thành viên nhóm";
    mssvEl.textContent = member.mssv ? `MSSV: ${member.mssv}` : "";

    // Giới thiệu ngắn
    introEl.textContent = member.intro || "Chưa có thông tin giới thiệu.";

    // Danh sách kỹ năng (dạng thẻ nhỏ)
    skillsEl.innerHTML = "";
    if (Array.isArray(member.skills) && member.skills.length > 0) {
      member.skills.forEach((skill) => {
        const tag = document.createElement("span");
        tag.className = "modal-skill-tag";
        tag.textContent = skill;
        skillsEl.appendChild(tag);
      });
    } else {
      const tag = document.createElement("span");
      tag.className = "modal-skill-tag";
      tag.textContent = "HTML / CSS / JS";
      skillsEl.appendChild(tag);
    }

    // Các liên kết mạng xã hội / liên hệ
    socialsEl.innerHTML = "";
    if (member.social) {
      if (member.social.github && member.social.github !== "#") {
        const a = document.createElement("a");
        a.href = member.social.github;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "modal-social-btn";
        a.innerHTML = `${getSocialIcon("github")}<span>GitHub</span>`;
        socialsEl.appendChild(a);
      }
      if (member.social.facebook && member.social.facebook !== "#") {
        const a = document.createElement("a");
        a.href = member.social.facebook;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "modal-social-btn";
        a.innerHTML = `${getSocialIcon("facebook")}<span>Facebook</span>`;
        socialsEl.appendChild(a);
      }
      if (member.social.email && member.social.email !== "#") {
        const a = document.createElement("a");
        a.href = `mailto:${member.social.email}`;
        a.className = "modal-social-btn";
        a.innerHTML = `${getSocialIcon("email")}<span>${member.social.email}</span>`;
        socialsEl.appendChild(a);
      }
    }

    // Nút xem portfolio đầy đủ
    fullLinkEl.href = member.link || "#";

    // Mở modal & khóa cuộn trang nền
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
  }

  // Hàm đóng modal & khôi phục cuộn trang
  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
  }
}

// ============================================================
// 6. PRELOADER
// ============================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("done");
      // Kích hoạt chữ reveal trong hero banner sau khi preloader xong
      setTimeout(() => {
        document.querySelectorAll(".hero .reveal-text").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 150);
        });
      }, 300);
    }, 1400);
  });
}

// ============================================================
// 7. CUSTOM CURSOR (Desktop only)
// ============================================================
function initCustomCursor() {
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hiệu ứng hover lên các phần tử tương tác
  const hoverTargets = document.querySelectorAll(
    "a, button, .member-card, .modal-close-btn, .modal-social-btn"
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    });
  });
}

// ============================================================
// 8. STICKY NAVBAR + ACTIVE LINK
// ============================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".hero, .section");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("data-section") === sectionId
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));
}

// ============================================================
// 9. MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ============================================================
// 10. SCROLL REVEAL (Intersection Observer)
// ============================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-up, .reveal-stagger");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ============================================================
// 11. PARALLAX CHO CÁC KHỐI SHAPE HERO
// ============================================================
function initParallax() {
  const shapes = document.querySelectorAll(".hero-shape");
  if (shapes.length === 0) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 8;
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}

// ============================================================
// 🏁 KHỞI TẠO TẤT CẢ TÍNH NĂNG KHI DOM SẴN SÀNG
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Đổ dữ liệu từ data.js
  populatePage();

  // Khởi tạo các module giao diện trang chủ
  initMemberModal();
  initPreloader();
  initCustomCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initParallax();

  // Khởi tạo Dark Mode & Smooth Scroll (nếu chưa được gọi từ common.js)
  if (typeof initDarkMode === "function") initDarkMode();
  if (typeof initSmoothScroll === "function") initSmoothScroll();
});
