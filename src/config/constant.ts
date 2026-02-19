
import type { Project, Experience, Education, Certification, Skill } from './types';

export const DATA = {
  name: "ARYAN KUMAR",
  location: "Mohali, India",
  email: "akaryankumar486@gmail.com",
  github: "Ak-Aryan005",
  phones: ["+917591062486", "+916230903536"],
  linkedin: "in/aryankumar-coder",
  summary: "Passionate and detail-oriented Full-Stack Web Developer skilled in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in developing RESTful APIs, managing Git workflows, and implementing modern UI with responsive design. Eager to contribute to collaborative teams, solve real-world problems, and grow continuously in fast-paced, agile environments.",
};

export const SKILLS: Skill[] = [
  { name: "React.js", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5/CSS3", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Mongoose", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "JWT Auth", category: "backend" },
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "npm/Yarn", category: "tool" },
];

export const PROJECTS: Project[] = [
  {
    title: "Full-Stack Social Media Platform",
    description: "A scalable MERN stack social media application with real-time features and monetization.",
    tech: ["MongoDB", "Express", "React", "Node", "Socket.IO", "Cloudinary", "Stripe", "JWT"],
    features: [
      "Real-time chat and notifications via Socket.IO",
      "Media sharing with seamless Cloudinary integration",
      "Secure JWT-based authentication and profile management",
      "Stripe integration for paid verified subscriptions"
    ],
    link:"https://social-media-lime-omega.vercel.app"
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A comprehensive e-commerce solution with advanced product management and cart systems.",
    tech: ["MongoDB", "Express", "React", "Node", "JWT", "REST API"],
    features: [
      "Secure authentication and user session management",
      "Product search and dynamic cart management",
      "Optimized API queries reducing load time by 30%",
      "Clean RESTful architecture for all operations"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "MERN Stack Intern",
    company: "Apptunix",
    period: "September 2025 - December 2025"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Computer Application",
    institution: "Govt Degree College",
    location: "Sarkaghat, HP, India",
    period: "08/2022 - 06/2025"
  },
  {
    degree: "Class 12",
    institution: "Government senior secondary school",
    location: "Gopalpur, Mandi, HP",
    period: "2021 - 2022"
  },
  {
    degree: "Class 10",
    institution: "Saraswati Vidya Mandir",
    location: "Mohin, Sarkaghat, HP",
    period: "2019 - 2020"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Git & Github",
    details: [
      "Mastered version control fundamentals",
      "Proficient in branching, merging, and collaboration workflows",
      "Experienced in repository management and conflict resolution"
    ]
  },
  {
    title: "Node.js",
    details: [
      "In-depth understanding of asynchronous, event-driven development",
      "Building command-line tools and RESTful API mocking",
      "Real-time application development using Node.js core libraries"
    ]
  }
];
