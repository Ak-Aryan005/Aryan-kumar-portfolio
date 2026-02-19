
export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  link?:string
}

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Certification {
  title: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tool' | 'other';
}
