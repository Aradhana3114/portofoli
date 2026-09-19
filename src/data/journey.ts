import { JourneyItem } from "./types";

export const journey: JourneyItem[] = [
  {
    year: "2026",
    title: "Membangun Personal Portfolio",
    organization: "Personal Project",
    description:
      "Mendesain dan membangun portfolio pribadi dari nol dengan Next.js dan Supabase, termasuk guestbook interaktif.",
    type: "project",
    technologies: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    year: "2025",
    title: "Sistem Manajemen Proyek Sekolah",
    organization: "Tugas PPLG",
    description:
      "Membangun sistem manajemen proyek sekolah lengkap dengan autentikasi dan dashboard.",
    type: "education",
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    year: "2024",
    title: "Mulai PPLG",
    organization: "SMK",
    description: "Memulai jurusan Pengembangan Perangkat Lunak dan Gim, fokus awal di web development.",
    type: "education",
  },
];
