import {
  Code2,
  Brain,
  Wifi,
  Palette,
  Globe,
  Wrench,
  Database,
  Languages,
  type LucideIcon,
} from "lucide-react";

export const personalInfo = {
  name: "Muhammad Teguh Insani",
  role: "Information Technology Student | Front-End Developer | AI & IoT Enthusiast",
  shortRole: "Front-End Dev",
  email: "insani1416@gmail.com",
  location: "Jakarta, Indonesia",
  bio: "I build elegant digital experiences that live at the intersection of design and technology. Passionate about crafting interfaces that feel alive.",
  longBio:
    "I am an Information Technology student at Telkom University Jakarta who is passionate about Front-End Development, Artificial Intelligence, Internet of Things (IoT), and Graphic Design. I enjoy creating modern, responsive, and interactive web applications while continuously exploring new technologies and improving my problem-solving skills.",
  avatar: "/images/avatar.png",
  resumeUrl: "/cv/CV - Muhammad Teguh Insani.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mtghinsani", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-teguh-insani-b271772b6/", icon: "linkedin" },
  { name: "Instagram", url: "https://https://www.instagram.com/mtghinsanii_/", icon: "instagram" },
];

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "HTML", level: 95, category: "Frontend" },
      { name: "CSS", level: 92, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "React", level: 80, category: "Frontend" },
      { name: "Next.js", level: 86, category: "Frontend" },
      { name: "Tailwind CSS", level: 87, category: "Frontend" },
    ],
  },
  {
    title: "Backend",
    icon: Globe,
    color: "cyan",
    skills: [
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "REST APIs", level: 80, category: "Backend" },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    color: "purple",
    skills: [
      { name: "JavaScript", level: 90, category: "Languages" },
      { name: "TypeScript", level: 85, category: "Languages" },
      { name: "Python", level: 90, category: "Languages" },
      { name: "PHP", level: 93, category: "Languages" },
      { name: "C++", level: 85, category: "Languages" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "cyan",
    skills: [
      { name: "MySQL", level: 90, category: "Database" },
      { name: "PostgreSQL", level: 76, category: "Database" },
      { name: "Firebase", level: 82, category: "Database" },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "purple",
    skills: [
      { name: "TensorFlow", level: 72, category: "AI" },
      { name: "Scikit-Learn", level: 70, category: "AI" },
      { name: "OpenCV", level: 74, category: "AI" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "cyan",
    skills: [
      { name: "GitHub", level: 86, category: "Tools" },
      { name: "Figma", level: 84, category: "Tools" },
      { name: "VS Code", level: 92, category: "Tools" },
      { name: "Arduino IDE", level: 78, category: "Tools" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "GenQA - NutriLearn",
    description:
      "Modern AI chatbot built with Next.js and Python, featuring real-time conversational capabilities powered by natural language processing.",
    longDescription:
      "Full-stack AI chat application with natural language understanding, context-aware responses, and a clean conversational interface.",
    image: "/images/project-1.png",
    techStack: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "NLP"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "AiCI Website Redesign",
    description:
      "Revamped the Artificial Intelligence Indonesia website with a modern UI, responsive layout, and enhanced user experience.",
    longDescription:
      "Redesigned the Artificial Intelligence Indonesia (AiCI) website to deliver a cleaner interface, improved navigation, and a responsive design while maintaining the organization's branding and identity.",
    image: "/images/project-2.png",
    techStack: ["HTML", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "HearText",
    description:
      "Speech-to-text communication system for people with hearing impairments using ESP32 and AI speech recognition.",
    longDescription:
      "Accessibility-focused speech-to-text system combining ESP32 hardware with AI-powered speech recognition to assist people with hearing impairments.",
    image: "/images/project-3.png",
    techStack: ["ESP32", "Python", "AI Speech Recognition", "React", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "EduVista",
    description:
      "Adaptive learning platform for children with Down syndrome using AI-assisted personalized learning paths.",
    longDescription:
      "Inclusive education platform leveraging AI to create personalized, adaptive learning experiences tailored for children with Down syndrome.",
    image: "/images/project-4.png",
    techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    title: "SuperEdu Game",
    description:
      "2D educational game developed using Godot Engine, designed to make learning fun and interactive for students.",
    longDescription:
      "Engaging 2D educational game built with Godot Engine featuring interactive lessons, progress tracking, and gamified learning mechanics.",
    image: "/images/project-5.png",
    techStack: ["Godot Engine", "GDScript", "2D Graphics", "Game Design"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Internal Affairs Minister",
    company: "HMIT Telkom University Jakarta",
    period: "Jan 2026 — Present",
    description:
      "Managing internal organizational affairs and ensuring smooth coordination across all divisions within the HMIT student organization.",
    highlights: [
      "Overseeing internal communication and organizational operations",
      "Coordinating cross-divisional activities and events",
      "Streamlining internal workflows and documentation processes",
    ],
  },
  {
    title: "Public Relations Staff",
    company: "HMIT Telkom University Jakarta",
    period: "Jun 2025 — Dec 2025",
    description:
      "Managed external communications and built strategic partnerships to enhance the organization's visibility and outreach.",
    highlights: [
      "Developed communication strategies for organizational events",
      "Managed social media presence and brand identity",
      "Established partnerships with industry professionals",
    ],
  },
  {
    title: "Vlogcast Team Lead",
    company: "Marketing Crew SMB Telkom Jakarta",
    period: "Jul 2026 - Present",
    description:
      "Contributed to marketing campaigns and promotional activities for university events and student initiatives.",
    highlights: [
      "Created marketing materials for university-wide events",
      "Coordinated promotional campaigns across digital platforms",
      "Analyzed campaign performance and engagement metrics",
    ],
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const typingTexts = [
  "Front-End Developer",
  "AI Enthusiast",
  "IoT Explorer",
  "UI/UX Designer",
  "Web Developer",
];
