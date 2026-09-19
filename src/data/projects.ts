import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "school-project-management",
    title: "School Project Management System",
    description: "Sistem manajemen proyek sekolah untuk PPLG — tracking tugas, deadline, dan kolaborasi tim.",
    year: "2025",
    category: "Web Application",
    featured: true,
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    image: "/images/projects/school-pm-cover.svg",
    gallery: ["/images/projects/school-pm-1.svg", "/images/projects/school-pm-2.svg"],
    demoUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "Sekolah membutuhkan cara yang lebih rapi untuk mengelola tugas kelompok lintas kelas PPLG.",
      problem:
        "Tugas dan deadline tersebar di grup chat, sulit dilacak siapa mengerjakan apa.",
      solution:
        "Dashboard terpusat dengan board per kelas, assignment per anggota, dan notifikasi deadline.",
      features: [
        "Board tugas drag-and-drop",
        "Role guru dan siswa",
        "Riwayat aktivitas per proyek",
      ],
      challenges: [
        "Merancang skema database yang fleksibel untuk banyak kelas",
        "Menjaga performa saat data proyek bertambah banyak",
      ],
      result: "Dipakai oleh 3 kelas PPLG untuk mengelola tugas kelompok semester berjalan.",
    },
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "Website portofolio pribadi dengan guestbook interaktif berbasis Supabase.",
    year: "2026",
    category: "Personal Project",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    image: "/images/projects/portfolio-cover.svg",
    gallery: ["/images/projects/portfolio-1.svg"],
    demoUrl: "",
    githubUrl: "",
    caseStudy: {
      overview: "Portfolio pribadi untuk menunjukkan proyek dan proses belajar sebagai web developer.",
      problem: "Belum punya tempat terpusat untuk showcase proyek ke recruiter atau klien freelance.",
      solution: "Website editorial dengan project index, journey timeline, dan guestbook untuk interaksi pengunjung.",
      features: ["Project case study page", "Journey timeline", "Guestbook realtime"],
      challenges: ["Menjaga desain tetap minimal namun distinctive", "Setup RLS policy Supabase yang aman"],
      result: "Portfolio siap dipakai untuk melamar kerja dan proyek freelance.",
    },
  },
  {
    slug: "learning-clone-project",
    title: "E-Commerce UI Clone (Learning Project)",
    description: "Clone UI e-commerce sederhana untuk belajar state management dan komponen reusable.",
    year: "2025",
    category: "Learning Project",
    featured: false,
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/images/projects/ecommerce-cover.svg",
    gallery: ["/images/projects/ecommerce-1.svg"],
    demoUrl: "",
    githubUrl: "",
    caseStudy: {
      overview: "Proyek belajar untuk memahami pola component-driven development.",
      problem: "Ingin memahami cara struktur komponen e-commerce yang scalable.",
      solution: "Membangun ulang beberapa halaman inti: listing produk, detail produk, dan keranjang.",
      features: ["Filter produk", "Keranjang belanja lokal", "Halaman detail produk"],
      challenges: ["Mengelola state keranjang tanpa library tambahan"],
      result: "Pemahaman lebih kuat soal component composition dan props drilling.",
    },
  },
];
