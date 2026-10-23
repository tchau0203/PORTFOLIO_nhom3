/*
 * nam.js
 * Mục đích: JS riêng của Nam, dùng cho tính năng sáng tạo cá nhân.
 * AI ĐƯỢC SỬA – Chỉ Nam sửa.
 * Có thể để trống nếu không cần tính năng riêng.
 */
const links = [...document.querySelectorAll('.nav-link')];
const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const activeSection = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    links.forEach((link) => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
  }
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach((section) => activeSection.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-heading, .about-content, .skill-card, .education-panel, .project-card, .achievement-item').forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

const card = document.querySelector('#tilt-card');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (card && finePointer.matches) {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `rotateY(${-10 + x * 10}deg) rotateX(${5 - y * 9}deg) translateZ(8px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
}
