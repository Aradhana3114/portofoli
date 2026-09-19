export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  category: string;
  featured: boolean;
  technologies: string[];
  image: string;
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    challenges: string[];
    result: string;
  };
}

export interface JourneyItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "project" | "work" | "learning";
  technologies?: string[];
}

export interface TechStack {
  category: string;
  items: {
    name: string;
    level?: "learning" | "intermediate" | "proficient";
  }[];
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}
