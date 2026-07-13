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
  email: "muhammadteguh@email.dev",
  location: "Jakarta, Indonesia",
  bio: "I build elegant digital experiences that live at the intersection of design and technology. Passionate about crafting interfaces that feel alive.",
  longBio:
    "I am an Information Technology student at Telkom University Jakarta who is passionate about Front-End Development, Artificial Intelligence, Internet of Things (IoT), and Graphic Design. I enjoy creating modern, responsive, and interactive web applications while continuously exploring new technologies and improving my problem-solving skills.",
  avatar: "/images/avatar.png",
  resumeUrl: "#contact",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/muhammadteguh", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/muhammadteguh", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/muhammadteguh", icon: "instagram" },
  { name: "Twitter", url: "https://twitter.com/muhammadteguh", icon: "twitter" },
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
      { name: "React", level: 88, category: "Frontend" },
      { name: "Next.js", level: 86, category: "Frontend" },
      { name: "Tailwind CSS", level: 93, category: "Frontend" },
    ],
  },
  {
    title: "Backend",
    icon: Globe,
    color: "cyan",
    skills: [
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "Express.js", level: 78, category: "Backend" },
      { name: "REST APIs", level: 82, category: "Backend" },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    color: "purple",
    skills: [
      { name: "JavaScript", level: 90, category: "Languages" },
      { name: "TypeScript", level: 85, category: "Languages" },
      { name: "Python", level: 78, category: "Languages" },
      { name: "PHP", level: 70, category: "Languages" },
      { name: "C++", level: 65, category: "Languages" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "cyan",
    skills: [
      { name: "MySQL", level: 80, category: "Database" },
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
      { name: "Git", level: 88, category: "Tools" },
      { name: "GitHub", level: 86, category: "Tools" },
      { name: "Figma", level: 84, category: "Tools" },
      { name: "VS Code", level: 92, category: "Tools" },
      { name: "Arduino IDE", level: 78, category: "Tools" },
      { name: "Postman", level: 80, category: "Tools" },
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
    title: "AI Chatbot",
    description:
      "Modern AI chatbot built with Next.js and Python, featuring real-time conversational capabilities powered by natural language processing.",
    longDescription:
      "Full-stack AI chat application with natural language understanding, context-aware responses, and a clean conversational interface.",
    image: "/images/project-1.png",
    techStack: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "NLP"],
    githubUrl: "https://github.com/muhammadteguh/ai-chatbot",
    liveUrl: "https://ai-chatbot.vercel.app",
    featured: true,
  },
  {
    title: "SmartCompost IoT",
    description:
      "IoT-based smart compost management system using ESP32 and cloud technology for real-time monitoring and automation.",
    longDescription:
      "Smart compost monitoring system with sensor data visualization, automated alerts, and cloud-based dashboard for remote management.",
    image: "/images/project-2.png",
    techStack: ["ESP32", "Arduino", "Cloud IoT", "React", "Firebase"],
    githubUrl: "https://github.com/muhammadteguh/smartcompost",
    liveUrl: "https://smartcompost.vercel.app",
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
    githubUrl: "https://github.com/muhammadteguh/heartext",
    liveUrl: "https://heartext.vercel.app",
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
    githubUrl: "https://github.com/muhammadteguh/eduvista",
    liveUrl: "https://eduvista.vercel.app",
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
    githubUrl: "https://github.com/muhammadteguh/superedu",
    liveUrl: "https://superedu-game.vercel.app",
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
    period: "2024 — Present",
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
    period: "2024 — 2025",
    description:
      "Managed external communications and built strategic partnerships to enhance the organization's visibility and outreach.",
    highlights: [
      "Developed communication strategies for organizational events",
      "Managed social media presence and brand identity",
      "Established partnerships with industry professionals",
    ],
  },
  {
    title: "Marketing Crew",
    company: "Telkom University Jakarta",
    period: "2024 — 2025",
    description:
      "Contributed to marketing campaigns and promotional activities for university events and student initiatives.",
    highlights: [
      "Created marketing materials for university-wide events",
      "Coordinated promotional campaigns across digital platforms",
      "Analyzed campaign performance and engagement metrics",
    ],
  },
  {
    title: "Field & Logistics Coordinator",
    company: "Vlogcast Division",
    period: "2023 — 2024",
    description:
      "Led field operations and logistics planning for content production, ensuring seamless execution of on-site activities.",
    highlights: [
      "Coordinated on-site logistics for video production shoots",
      "Managed field equipment and resource allocation",
      "Ensured timely delivery of project milestones",
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
