/*
 * data.js
 * Mục đích: Lưu trữ dữ liệu thông tin nhóm và 6 thành viên.
 * AI ĐƯỢC SỬA – Người phụ trách khung sửa cấu trúc,
 * Mỗi người chỉ sửa object của mình trong mảng members.
 */

// ============================================================
// 📝 TEAM & MEMBERS DATA
// ============================================================
const teamInfo = {
  name: "Nhóm 03",
  greeting: "Chào mừng bạn đến với",
  heroTitle: "Nhóm 03",
  heroTagline: "Portfolio 6 thành viên — Khám phá hồ sơ cá nhân, vai trò & kỹ năng",
  theme: {
    accentColor: "#4F46E5",
    accentColorDark: "#3730A3",
  },
};

const members = [
  {
    id: "chau",
    name: "Hồ Nguyễn Thái Châu",
    mssv: "MSSV - cập nhật sau",
    role: "Trưởng nhóm / Frontend Developer",
    avatar: "images/chau/avatar.jpg",
    intro: "Đam mê xây dựng giao diện người dùng hiện đại, tối ưu trải nghiệm và điều phối tiến độ nhóm.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    link: "members/chau.html",
    social: {
      github: "https://github.com",
      facebook: "https://facebook.com",
      email: "chau@example.com",
    },
  },
  {
    id: "bao1",
    name: "Ngô Gia Bảo",
    mssv: "054206002006",
    role: "Thành viên / Frontend Developer",
    avatar: "images/bao1/avatar.jpg",
    intro: "Đam mê xây dựng giao diện người dùng hiện đại, tối ưu trải nghiệm và điều phối tiến độ nhóm.",
    skills: ["HTML5", "CSS3", "Python", "C++", "Git"],
    link: "members/bao1.html",
    social: {
      github: "https://github.com/gbao2510",
      facebook: "https://www.facebook.com/whos.gb",
      email: "baong2006@ut.edu",
    },
  },
  {
    id: "bao2",
    name: "Gia Bảo (Bảo 2)",
    mssv: "22000000",
    role: "Frontend / Fullstack Developer",
    avatar: "images/bao2/avatar.jpg",
    intro: "Đam mê thiết kế giao diện web hiện đại, tối ưu trải nghiệm người dùng và xây dựng hệ thống mạng tương tác cao.",
    skills: ["HTML5 / CSS3 / JavaScript", "React.js", "Node.js & Express", "Socket.IO / WebRTC", "RESTful API & Git"],
    link: "members/bao2.html",
    social: {
      github: "https://github.com/bao2-dev",
      facebook: "https://facebook.com/",
      email: "giabao.dev@example.com",
    },
  },
  {
    id: "qanh",
    name: "Quỳnh Anh - cập nhật sau",
    mssv: "MSSV - cập nhật sau",
    role: "Vai trò - cập nhật sau",
    avatar: "images/qanh/avatar.jpg",
    intro: "Giới thiệu ngắn - cập nhật sau",
    skills: ["HTML5", "CSS3", "JavaScript"],
    link: "members/qanh.html",
    social: {
      github: "https://github.com/",
      facebook: "https://facebook.com/",
      email: "qanh@example.com",
    },
  },
  {
    id: "huy",
    name: "Huy - cập nhật sau",
    mssv: "MSSV - cập nhật sau",
    role: "Vai trò - cập nhật sau",
    avatar: "images/huy/avatar.jpg",
    intro: "Giới thiệu ngắn - cập nhật sau",
    skills: ["HTML5", "CSS3", "JavaScript"],
    link: "members/huy.html",
    social: {
      github: "https://github.com/",
      facebook: "https://facebook.com/",
      email: "huy@example.com",
    },
  },
  {
    id: "nam",
    name: "Nam - cập nhật sau",
    mssv: "MSSV - cập nhật sau",
    role: "Vai trò - cập nhật sau",
    avatar: "images/nam/avatar.jpg",
    intro: "Giới thiệu ngắn - cập nhật sau",
    skills: ["HTML5", "CSS3", "JavaScript"],
    link: "members/nam.html",
    social: {
      github: "https://github.com/",
      facebook: "https://facebook.com/",
      email: "nam@example.com",
    },
  },
];
