import { Service } from "./types";

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Membangun website responsif dari desain hingga deploy, menggunakan Next.js dan Tailwind CSS.",
    deliverables: ["Landing page", "Company profile", "Portfolio", "Deployment ke Vercel"],
  },
  {
    title: "Web Application",
    description: "Aplikasi web dengan autentikasi, database, dan fitur custom sesuai kebutuhan.",
    deliverables: ["Dashboard", "CRUD sederhana", "Integrasi Supabase"],
  },
  {
    title: "UI Implementation",
    description: "Mengubah desain Figma menjadi kode yang rapi dan mudah dikembangkan.",
    deliverables: ["Component library", "Responsive layout", "Aksesibilitas dasar"],
  },
];
