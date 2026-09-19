import { TechStack } from "./types";

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "intermediate" },
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Tailwind CSS", level: "proficient" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "intermediate" },
      { name: "Supabase", level: "intermediate" },
      { name: "REST API", level: "proficient" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MySQL", level: "proficient" },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git & GitHub", level: "proficient" },
      { name: "Figma", level: "intermediate" },
      { name: "Vercel", level: "proficient" },
    ],
  },
];
