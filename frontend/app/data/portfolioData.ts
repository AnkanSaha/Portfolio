export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  reddit: string;
  devto: string;
  discord: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  github: string;
  npm?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  alternateEmail: string;
  phone: string;
  location: string;
  currentCompany: string;
  social: SocialLinks;
  skills: {
    [category: string]: string[];
  };
  experience: Experience[];
  education: Education;
  projects: Project[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  name: "Ankan Saha",
  title: "Full Stack Developer",
  subtitle: "Backend Engineering Specialist | System Design & Infrastructure Optimization Expert",
  email: "ankansahaofficial@gmail.com",
  alternateEmail: "connect@ankan.in",
  phone: "+91 7063355213",
  location: "Ranaghat, West Bengal, India",
  currentCompany: "Hoichoi Technologies Pvt. Ltd.",

  social: {
    github: "https://github.com/AnkanSaha",
    linkedin: "https://linkedin.com/in/theankansaha",
    twitter: "https://twitter.com/theankansaha",
    instagram: "https://instagram.com/theankansaha",
    reddit: "https://reddit.com/user/theankansaha",
    devto: "https://dev.to/theankansaha",
    discord: "https://discord.gg/theankansaha",
  },

  skills: {
    "Languages & Frameworks": [
      "JavaScript (95%)", "TypeScript (93%)", "Node.js (95%)", "Golang (85%)",
      "Express.js (92%)", "Fastify (88%)", "NestJS (82%)"
    ],
    "Databases & Messaging": [
      "MongoDB (92%)", "Redis (90%)", "RabbitMQ (85%)", "NoSQL Design (88%)",
      "Event-driven Architecture (83%)", "PostgreSQL (80%)"
    ],
    "Cloud & DevOps": [
      "Docker (93%)", "Docker Compose (91%)", "CI/CD Pipelines (87%)",
      "Cloudflare Workers (88%)", "Nginx (85%)", "PM2 (89%)",
      "Linux Administration (86%)", "Git & GitHub (94%)"
    ],
    "Architecture & Tools": [
      "Microservices Architecture (87%)", "REST APIs (94%)", "GraphQL (82%)",
      "WebSocket (86%)", "DNS Protocol RFC 1035 (90%)", "FFmpeg Integration (83%)",
      "Serverless Computing (85%)"
    ],
    "Specialized Skills": [
      "UDP Protocol Parsing (88%)", "Binary Serialization (85%)",
      "AES-256 Encryption (87%)", "RTSP Stream Handling (82%)",
      "MQTT Protocol (80%)", "Performance Optimization (89%)",
      "System Design (86%)"
    ]
  },

  experience: [
    {
      title: "Full Stack Developer",
      company: "Hoichoi Technologies Pvt. Ltd.",
      period: "Jul 2025 - Present",
      description: "Leading critical infrastructure migrations for a platform serving 10M+ users. Successfully migrated Hoichoi's entire web platform from Vercel to Cloudflare Workers, achieving $3,000/month cost savings ($36,000 annually). Architected and implemented comprehensive CI/CD automation pipelines.",
      technologies: ["Cloudflare Workers", "Node.js", "Docker", "FFmpeg", "CI/CD", "Serverless"]
    },
    {
      title: "Software Engineer",
      company: "Openweb Solutions (Previously Pitangent Analytics)",
      period: "Sep 2024 – Jul 2025",
      description: "Architected and developed backend infrastructure for an AI-powered CCTV surveillance SaaS platform. Built real-time video stream processing system handling RTSP streams. Reduced frame processing latency by 30ms. Reduced client onboarding time from 2 hours to 20 minutes.",
      technologies: ["Node.js", "RTSP Protocol", "Real-time Processing", "AI Integration", "Microservices"]
    },
    {
      title: "Junior Software Developer",
      company: "Excellis IT Pvt. Ltd.",
      period: "Apr 2024 – Sep 2024",
      description: "Led backend development for smart lock IoT system managing 200+ connected devices using MQTT protocol. Reduced device disconnect rates from 12% to 8%. Implemented AES-256 encryption for end-to-end data protection.",
      technologies: ["Node.js", "IoT", "MQTT Protocol", "AES-256 Encryption", "Real-time Systems"]
    }
  ],

  education: {
    degree: "Bachelor of Arts",
    university: "University of Kalyani",
    period: "2021 – 2024",
    description: "Completed Bachelor of Arts degree while simultaneously pursuing intensive self-directed learning in software development, system design, and distributed architectures."
  },

  projects: [
    {
      name: "NexoralDNS",
      tagline: "High-Performance DNS Server",
      description: "Production-grade RFC 1035 compliant DNS server built with JavaScript and Docker. Handles 7,000+ queries per second while managing 400,000+ DNS records.",
      technologies: ["JavaScript", "Docker", "Redis", "MongoDB", "UDP Protocol", "DNS RFC 1035"],
      github: "https://github.com/nexoral/NexoralDNS"
    },
    {
      name: "AxioDB",
      tagline: "Fast, Lightweight NoSQL Database",
      description: "High-performance embedded NoSQL database with hash indexing, binary serialization, and AES-256 encryption. 1,950+ npm downloads.",
      technologies: ["TypeScript", "Node.js", "Binary Serialization", "AES-256", "Hash Indexing"],
      github: "https://github.com/nexoral/AxioDB",
      npm: "https://www.npmjs.com/package/axiodb"
    },
    {
      name: "ContainDB",
      tagline: "Database Container Management CLI",
      description: "Golang CLI tool for one-command database deployment with automated backup systems and container health monitoring.",
      technologies: ["Golang", "Docker", "CLI", "MongoDB", "PostgreSQL", "Redis"],
      github: "https://github.com/nexoral/ContainDB"
    },
    {
      name: "react-caches",
      tagline: "React Local Storage Management",
      description: "Lightweight TypeScript package for local storage management in React applications with type-safe API.",
      technologies: ["TypeScript", "React", "Local Storage", "Hooks"],
      github: "https://github.com/nexoral/react-caches",
      npm: "https://www.npmjs.com/package/react-caches"
    },
    {
      name: "outers",
      tagline: "Node.js Utilities Package",
      description: "Essential utilities for Node.js including AES-256 encryption, terminal text coloring, and string manipulation helpers.",
      technologies: ["TypeScript", "Node.js", "Encryption", "CLI"],
      github: "https://github.com/nexoral/outers",
      npm: "https://www.npmjs.com/package/outers"
    },
    {
      name: "uniquegen",
      tagline: "Random Data Generator",
      description: "TypeScript package for generating unique identifiers, random numbers, and words. Includes MongoDB ObjectID generation.",
      technologies: ["TypeScript", "Node.js", "UUID", "Cryptography"],
      github: "https://github.com/nexoral/uniquegen",
      npm: "https://www.npmjs.com/package/uniquegen"
    },
    {
      name: "xpack",
      tagline: "Universal Linux Package Builder",
      description: "Go-based CLI tool for building universal Linux packages. Simplifies creating .deb, .rpm, and other package formats.",
      technologies: ["Go", "Linux", "CLI", "Package Management"],
      github: "https://github.com/nexoral/xpack"
    }
  ],

  achievements: [
    "$3,000/month Infrastructure Cost Savings",
    "2,000+ Open-Source Package Downloads",
    "10M+ Users Served",
    "GitHub Pro",
    "Pull Shark x4",
    "Pair Extraordinaire",
    "YOLO Badge",
    "Quickdraw Badge"
  ]
};
