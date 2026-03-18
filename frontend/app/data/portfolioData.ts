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
  companyDesc?: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
  description: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  technologies: string[];
  period: string;
  github: string;
  npm?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
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
  summary: string;
  social: SocialLinks;
  skillCategories: SkillCategory[];
  skills: Record<string, string[]>;
  experience: Experience[];
  education: Education;
  projects: Project[];
  achievements: string[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Ankan Saha",
  title: "Full Stack Developer",
  subtitle: "Backend Engineering Specialist | System Design & Infrastructure Optimization Expert",
  email: "ankansahaofficial@gmail.com",
  alternateEmail: "connect@ankan.in",
  phone: "+91 7063355213",
  location: "Kolkata, India",
  currentCompany: "Open to Opportunities",
  summary:
    "Backend-focused Engineer specializing in JavaScript, TypeScript, and Node.js. Successfully reduced infrastructure costs by $3K/month through architectural migration to Cloudflare Workers. Maintained and migrated infrastructure for production systems serving 10M+ users. Built and shipped an embedded NoSQL database engine to NPM with 2,000+ downloads.",

  social: {
    github: "https://github.com/AnkanSaha",
    linkedin: "https://linkedin.com/in/theankansaha",
    twitter: "https://twitter.com/theankansaha",
    instagram: "https://instagram.com/theankansaha",
    reddit: "https://reddit.com/user/theankansaha",
    devto: "https://dev.to/theankansaha",
    discord: "https://discord.gg/theankansaha",
  },

  skillCategories: [
    {
      name: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Node.js", "Express.js", "Fastify", "NestJS", "Golang"],
    },
    {
      name: "Frontend Ecosystem",
      skills: ["React.js", "Next.js", "Redux Toolkit", "Zustand", "TailwindCSS", "GraphQL"],
    },
    {
      name: "Databases & Cloud",
      skills: [
        "MongoDB", "SQL", "Redis", "Redis Streams", "RabbitMQ",
        "Docker", "AWS Lambda", "Cloudflare Workers", "Nginx", "Git", "CI/CD", "Linux",
      ],
    },
    {
      name: "AI & Integration",
      skills: ["Gemini API", "OpenAI API", "Google AI File API"],
    },
    {
      name: "System Design",
      skills: [
        "Microservices", "Modular Monolith", "Event-driven Architecture",
        "RESTful APIs", "WebSockets",
      ],
    },
  ],

  // Legacy flat skills map kept for backwards compatibility
  get skills() {
    return Object.fromEntries(this.skillCategories.map((c) => [c.name, c.skills]));
  },

  experience: [
    {
      title: "Full Stack Developer",
      company: "Hoichoi Technologies",
      companyDesc: "Bengal's Leading OTT Streaming Platform",
      period: "Jul 2025 - Mar 2026",
      location: "Kolkata, India",
      description:
        "Engineered website migration to Cloudflare Workers for a platform serving 10M+ users, reducing monthly infrastructure costs by $3,000. Maintained REST APIs powering core platform features and built an FFmpeg API Wrapper abstracting video processing into a clean REST interface.",
      bullets: [
        "Engineered website migration to Cloudflare Workers for a platform serving 10M+ users, implementing deployment automation that reduced monthly infrastructure costs by $3,000",
        "Designed and maintained REST APIs powering core platform features including video delivery, user authentication, and subscription flows across the backend codebase",
        "Built an FFmpeg API Wrapper in Node.js/TypeScript abstracting video processing operations into a clean REST interface, enabling non-technical team members to trigger transcoding jobs without CLI access",
      ],
      technologies: ["Cloudflare Workers", "Node.js", "TypeScript", "FFmpeg", "CI/CD", "REST APIs"],
    },
    {
      title: "Software Engineer",
      company: "Openweb Solutions",
      companyDesc: "Previously Pitangent Analytics",
      period: "Sep 2024 - Jul 2025",
      location: "Kolkata, India",
      description:
        "Built backend infrastructure for an AI-powered CCTV SaaS platform. Designed an RTSP video stream pipeline handling 40+ concurrent camera feeds for real-time threat detection. Rearchitected video ingestion from buffered batch processing to direct streaming, enabling real-time AI inference.",
      bullets: [
        "Built backend infrastructure for an AI-powered CCTV SaaS platform; designed an RTSP video stream pipeline handling 40+ concurrent camera feeds for real-time threat detection",
        "Rearchitected video ingestion from a buffered batch processing model to a direct streaming pipeline, eliminating accumulated frame delay and enabling real-time AI inference on live RTSP feeds",
        "Developed an internal management tool (React & Node.js) that automated contract generation and client onboarding workflows",
      ],
      technologies: ["Node.js", "RTSP Protocol", "Real-time Processing", "React.js", "AI Integration", "Microservices"],
    },
    {
      title: "Junior Software Developer",
      company: "Excellis IT",
      period: "Apr 2024 - Sep 2024",
      location: "Kolkata, India",
      description:
        "Developed the backend for a Smart Lock IoT system using Node.js/MQTT, supporting 200+ live devices with real-time remote control capabilities. Improved device connectivity stability by rewriting WebSocket handling with exponential backoff reconnection.",
      bullets: [
        "Developed the backend for a Smart Lock IoT system using Node.js/MQTT, supporting 200+ live devices with real-time remote control capabilities",
        "Improved device connectivity stability by rewriting WebSocket handling and implementing an exponential backoff reconnection strategy",
      ],
      technologies: ["Node.js", "MQTT", "WebSocket", "IoT", "AES-256 Encryption"],
    },
  ],

  education: {
    degree: "Bachelor of Arts – Art Studies",
    university: "University of Kalyani",
    period: "Oct 2021 - Oct 2024",
    location: "Kolkata, India",
    description:
      "Completed Bachelor of Arts degree while simultaneously pursuing intensive self-directed learning in software development, system design, and distributed architectures.",
  },

  projects: [
    {
      name: "NexoralDNS",
      tagline: "High-Performance Self-Hosted DNS Server",
      period: "Oct 2025 - Present",
      description:
        "Engineered a self-hosted DNS server from scratch implementing standard DNS protocol with custom UDP packet parsing, Redis caching, and Change Streams. Achieved 8,050+ QPS with 9-worker cluster and 0.00% packet loss under 500 concurrent clients.",
      bullets: [
        "Engineered a self-hosted DNS server from scratch implementing standard DNS protocol with custom UDP packet parsing, Redis caching, and Change Streams",
        "Achieved 8,050+ QPS with 9-worker cluster and 0.00% packet loss under 500 concurrent clients in load testing",
      ],
      technologies: ["Node.js", "UDP", "Redis", "MongoDB", "DNS Protocol"],
      github: "https://github.com/nexoral/NexoralDNS",
    },
    {
      name: "AxioDB",
      tagline: "Embedded NoSQL Database Engine",
      period: "Oct 2024 - Aug 2025",
      description:
        "Built AxioDB, an embedded NoSQL database for Node.js/Electron apps with custom hash indexing and binary serialization. Released on NPM with 2,000+ downloads.",
      bullets: [
        "Built an embedded NoSQL database for Node.js/Electron apps with custom hash indexing and binary serialization",
        "Released on NPM with 2,000+ downloads",
      ],
      technologies: ["TypeScript", "Node.js", "Binary Serialization", "Hash Indexing", "AES-256"],
      github: "https://github.com/nexoral/AxioDB",
      npm: "https://www.npmjs.com/package/axiodb",
    },
    {
      name: "ContainDB",
      tagline: "One-Command Database Deployment CLI",
      period: "May 2025 - Jul 2025",
      description:
        "CLI tool for one-command database deployment (MongoDB, Postgres, Redis, MySQL) packaged as a .deb installer, featuring automated backups and container health monitoring.",
      bullets: [
        "Built a CLI tool for one-command database deployment (MongoDB, Postgres, Redis, MySQL) packaged as a .deb installer",
        "Features automated backups and container health monitoring",
      ],
      technologies: ["Golang", "Docker", "CLI", "MongoDB", "PostgreSQL", "Redis"],
      github: "https://github.com/nexoral/ContainDB",
    },
    {
      name: "xpack",
      tagline: "Universal Linux Package Builder",
      period: "Aug 2025 - Nov 2025",
      description:
        "Universal Linux package builder converting standalone binaries (Go, Rust) into native formats (.deb, .rpm, tar.gz), automating service file generation for CI/CD pipelines.",
      bullets: [
        "Built a universal Linux package builder converting standalone binaries (Go, Rust) into native formats (.deb, .rpm, tar.gz)",
        "Automates service file generation for CI/CD pipelines",
      ],
      technologies: ["Golang", "Linux", "CLI", "Package Management"],
      github: "https://github.com/nexoral/xpack",
    },
    {
      name: "react-caches",
      tagline: "React Local Storage Management",
      period: "2024",
      description:
        "Lightweight TypeScript package for local storage management in React applications with a type-safe API.",
      bullets: [
        "Lightweight TypeScript package for local storage management in React applications with type-safe API",
      ],
      technologies: ["TypeScript", "React", "Local Storage", "Hooks"],
      github: "https://github.com/nexoral/react-caches",
      npm: "https://www.npmjs.com/package/react-caches",
    },
    {
      name: "outers",
      tagline: "Node.js Utilities Package",
      period: "2024",
      description:
        "Essential utilities for Node.js including AES-256 encryption, terminal text coloring, and string manipulation helpers.",
      bullets: [
        "Essential utilities for Node.js including AES-256 encryption, terminal text coloring, and string manipulation helpers",
      ],
      technologies: ["TypeScript", "Node.js", "Encryption", "CLI"],
      github: "https://github.com/nexoral/outers",
      npm: "https://www.npmjs.com/package/outers",
    },
  ],

  achievements: [
    "$3K/month Infrastructure Cost Savings at Hoichoi",
    "2,000+ NPM Downloads (AxioDB)",
    "10M+ Users Served",
    "8,050+ DNS QPS (NexoralDNS)",
    "GitHub Pro",
    "Pull Shark x4",
    "Pair Extraordinaire",
    "YOLO Badge",
    "Quickdraw Badge",
  ],

  languages: ["Bengali (Native)", "Hindi (Professional)", "English (Professional)"],
};
