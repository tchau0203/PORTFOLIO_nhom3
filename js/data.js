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
    mssv: "054206003685",
    role: "Trưởng nhóm",
    avatar: "images/chau/avatar.jpg",
    tagline: "Sinh viên Kỹ thuật & Lập trình viên tương lai",
    intro: "Sinh viên Kỹ thuật đam mê xây dựng các sản phẩm web. Yêu thích khám phá công nghệ mới",
    skills: ["HTML5", "CSS3", "Python", "C++", "Git"],
    link: "members/chau.html",
    social:{
      github:"https://github.com/tchau0203",
      facebook:"https://www.facebook.com/Thaichau020326",
      instagram:"https://www.instagram.com/ts.chou023/",
      email:"thaichau020326@gmail.com",
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
    name: "Nguyễn Gia Bảo ",
    mssv: "075206006255",
    role: "Frontend / Fullstack Developer",
    avatar: "images/bao2/avatar.jpg",
    intro: "Đam mê thiết kế giao diện web hiện đại, tối ưu trải nghiệm người dùng và xây dựng hệ thống mạng tương tác cao.",
    skills: ["HTML5 / CSS3 / JavaScript", "React.js", "Node.js & Express", "Socket.IO / WebRTC", "RESTful API & Git"],
    link: "members/bao2.html",
    social: {
      github: "https://github.com/bao2-dev",
      facebook: "https://www.facebook.com/share/1E7DgjVGeA/?mibextid=wwXIfr",
      email: "baong6255@ut.edu.vn",
    },
  },
  {
    id: "qanh",
    name: "Lê Quốc Anh",
    mssv: "MSSV - 080206004361",
    role: "Thành Viên - Frontend/Backend Developer",
    avatar: "images/qanh/avatar.jpg",
    intro: "Đam mê thiết kế giao diện web hiện đại, tối ưu trải nghiệm người dùng và xây dựng hệ thống mạng tương tác cao.",
    skills: ["HTML5", "CSS3", "JavaScript","Python","C++","Git"],
    link: "members/qanh.html",
    social: {
      github: "https://github.com/quocanh06-git",
      facebook: "https://facebook.com/wuoc.ahn06",
      email: "quocanh13570@gmail.com",
    },
  },
  {
    id: "huy",
    name: "Trần Gia Huy",
    mssv: "052206016219",
    role: "Thành viên / QA/QC Engineer",
    avatar: "images/huy/avatar.jpg",
    intro: "Theo đuổi sự hoàn hảo của phần mềm thông qua việc kiểm thử tự động, phân tích hệ thống và thiết kế Test Case tối ưu.",
    skills: ["C#", "C++", "Python", "Software Testing", "SQL"],
    link: "members/huy.html",
    social: {
      github: "https://github.com/huyt1270",
      facebook: "#",
      email: "huyt1270@gmail.com",
    },
  },
  {
    id: "nam",
    name: "Trần Hoàng Nam",
    mssv: "068206000088",
    role: "Thành viên / Frontend Developer",
    avatar: "images/nam/avatar.png",
    intro: "Xây dựng giao diện người dùng bắt mắt, tối ưu trải nghiệm người dùng và mang lại nhiều tính năng.",
    skills: ["C++", "Python", "JavaScript", "SQL", "Git"],
    link: "members/nam.html",
    social: {
      github: "https://github.com/Hoangnam2606",
      facebook: "https://facebook.com",
      email: "namth0088@ut.edu.vn",
    },
  },
];

