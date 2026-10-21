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
   
  },
  
    
  {
    
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
    }

  },
  {
   
  },
];
