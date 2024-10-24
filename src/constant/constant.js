import project1 from "../assets/Kang Parkir.png";
import project2 from "../assets/Squad Space.png";
import project3 from "../assets/Eclectic Milkyway Shop.png";
import project4 from "../assets/Eclectic Milkyway Shop.png";

export const HERO_CONTENT = 
`Saya merupakan lulusan Universitas Kalbis dengan jurusan Sistem Informasi tahun 2024, 
dengan minat dan keterampilan dalam pengembangan website, khususnya sebagai Front-End Developer. 
Memiliki pengalaman dalam pengembangan web menggunakan HTML, CSS, JavaScript, dan ReactJS. 
Berfokus pada desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk menciptakan antarmuka web yang efektif dan menarik.`;

export const ABOUT_TEXT = `
Saya merupakan seorang fresh graduate Universitas Kalbis dengan jurusan Sistem Informasi. 
Selama masa studi, saya mengembangkan ketertarikan pada pengembangan web, terutama di bidang front-end development. Saya memiliki keahlian dalam HTML, CSS, JavaScript, dan React. 
Fokus saya adalah membuat antarmuka web yang ramah pengguna dan responsif.`;

export const EXPERIENCES = [
  {
    year: "February-June 2023",
    role: "Studi Independen - Front-End Engineer Career with ReactJS",
    company: "Alterra Academy",
    description: `Mengikuti kursus selama 6 bulan mengenai pengembangan front-end menggunakan React untuk membangun aplikasi web dinamis dan responsif.
Membuat beberapa proyek kecil sebagai latihan, termasuk Kangparkir, dan Squad Space.
Mengintegrasikan komponen dan mengelola state menggunakan React Hooks
Mempelajari mengenai pengelolaan rute dengan React Router`,
    technologies: ["Javascript", "React.js", "Next.js", "PostgreSQL", "Hasura"],
  },
];

export const PROJECTS = [
  {
    title: "Kang Parkir",
    image: project1,
    link: "https://kang-parkir.vercel.app/",
    description:
      "Dibuat menggunakan ReactJS dan Tailwind sebagai CSSproyek ini dibuat dengan spesifikasi :User dapat booking tempat parkir sebelum datang ke tempat yang ingin dituju. Mencari tempat parkir terdekat sesuai dengan titik destinasi. Dapat memberikan informasi mengenai dimana mobil diparkir.",
    technologies: ["Javasript", "Tailwind", "ReactJs", "Hasura", "PostgreSQL"],
  },
  {
    title: "Squad Space",
    image: project2,
    link: "https://qe-testing.vercel.app/login",
    description:
      "Dibuat menggunakan ReactJS dan Tailwind sebagai CSS. SquadSpace merupakan proyek forum grup diskusi yang lahir sebagai respons terhadap meningkatnya kebutuhan akan ide, pemikiran, dan pengetahuan. Mengembangkan halaman Manage Thread dan View Thread, yang memungkinkan admin untuk mengelola, dan melihat thread diskusi yang ada.",
    technologies: ["ReactJS", "Tailwind"],
  },
  {
    title: "Eclectic Milkyway Shop",
    image: project3,
    link: "https://e-commerce1-xi.vercel.app/",
    description:
      "Eclectic Milkyway Shop merupakan website e-commerce yang dibangun untuk menyelesaikan masalah yang ada pada toko.",
    technologies: ["JavaScript", "Tailwind", "ReactJS", "Hasura", "PostgreSQL", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Website portofolio pribadi yang menampilkan proyek, pengalaman, keterampilan, dan informasi kontak",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Palmerah, Jakarta Barat",
  phoneNo: "+62 856 1048 099 ",
  email: "prasetyo.davidezra@gmail.com",
};