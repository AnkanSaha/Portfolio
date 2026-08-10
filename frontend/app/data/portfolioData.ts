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
  live?: string;
  featured: boolean;
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
    "Backend engineer with 2 years of production experience in Node.js and TypeScript. At an OTT platform with 10M+ users, I moved the frontend onto Cloudflare Workers and cut compute cost by $3,000 a month. On my own time I write developer tools: a NoSQL database on NPM, a DNS server, and a load balancer you set up by chatting with an agent.",

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
      name: "AI & Agents",
      skills: ["Agentic AI", "AI Agents", "LangChain.js", "LLM Function Calling (Tool Calling)", "Model Context Protocol (MCP)"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS (ECS, Fargate, ECR, S3)", "Docker", "Kubernetes (K3s)", "Cloudflare Workers", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Backend & APIs",
      skills: ["Node.js", "Express.js", "NestJS", "Fastify", "REST APIs", "Microservices", "Event-Driven Architecture", "WebSockets", "Server-Sent Events", "Authentication (OAuth)"],
    },
    {
      name: "Databases & Messaging",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "RabbitMQ", "Caching"],
    },
    {
      name: "Languages & Frontend",
      skills: ["TypeScript", "JavaScript", "SQL", "Golang", "React.js", "Next.js"],
    },
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Hoichoi Technologies Pvt. Ltd.",
      companyDesc: "Bengal's Leading OTT Streaming Platform",
      period: "Jul 2025 - Mar 2026",
      location: "Kolkata, India",
      description:
        "Cut compute cost by $3,000 a month on a platform serving 10M+ users, by migrating the Next.js frontend off Vercel onto Cloudflare Workers using OpenNext. Integrated cancellation and retention flows into the Go subscription service behind the same platform.",
      bullets: [
        "Cut compute cost by $3,000 a month on a platform serving 10M+ users, by migrating the Next.js frontend off Vercel onto Cloudflare Workers using OpenNext",
        "Integrated Churnkey cancellation and retention flows into the Go subscription service behind the same platform",
        "Handled day-to-day backend and server issues across the platform, from API bugs to deployment and production incidents",
      ],
      technologies: ["Cloudflare Workers", "Next.js", "OpenNext", "Node.js", "TypeScript", "Golang", "CI/CD"],
    },
    {
      title: "Software Engineer",
      company: "Openweb Solutions",
      companyDesc: "Previously Pitangent Analytics (Pitangent Group)",
      period: "Sep 2024 - Jul 2025",
      location: "Kolkata, India",
      description:
        "Built the Node.js backend and React dashboard for an AI CCTV product, ingesting user-configured RTSP camera streams, pulling frames for an external threat-detection model, and rendering live feeds with detection alerts. Set up the deploy path from CI to AWS Fargate.",
      bullets: [
        "Built the Node.js backend and React dashboard for an AI CCTV product: ingested user-configured RTSP camera streams, pulled frames out for an external threat-detection model, and rendered live feeds with detection alerts",
        "Set up the deploy path, with Docker builds pushed to ECR and rolled out from CI to ECS on AWS Fargate with autoscaling",
      ],
      technologies: ["Node.js", "React.js", "RTSP Protocol", "Docker", "AWS ECS", "AWS Fargate", "AWS ECR"],
    },
    {
      title: "Junior Software Developer",
      company: "Excellis IT Pvt. Ltd.",
      period: "Apr 2024 - Aug 2024",
      location: "Kolkata, India",
      description:
        "Wrote the Node.js and MQTT backend for a smart lock system running 200+ live devices, adding exponential backoff reconnection to the WebSocket layer after locks kept dropping off the dashboard. Added path-based change detection to the GitHub Actions pipeline.",
      bullets: [
        "Wrote the Node.js and MQTT backend for a smart lock system running 200+ live devices, adding exponential backoff reconnection to the WebSocket layer after locks kept dropping off the dashboard",
        "Added path-based change detection to the GitHub Actions pipeline so only changed services got tested and deployed",
      ],
      technologies: ["Node.js", "MQTT", "WebSocket", "IoT", "GitHub Actions"],
    },
  ],

  education: {
    degree: "Bachelor of Arts",
    university: "University of Kalyani",
    period: "Sep 2021 - Sep 2024",
    location: "Nadia, West Bengal, India",
    description:
      "Completed Bachelor of Arts degree while simultaneously pursuing intensive self-directed learning in software development, system design, and distributed architectures.",
  },

  projects: [
    {
      name: "EdgeBalancer",
      tagline: "AI-Configured Load Balancer on Cloudflare Workers",
      period: "Apr 2026 - May 2026",
      description:
        "A load balancer that runs on Cloudflare Workers, live from a dashboard in under 90 seconds, with 7 routing strategies, health checks and per-origin traffic weighting. Runs on K3s with Redis holding shared state.",
      bullets: [
        "A load balancer that runs on Cloudflare Workers, live from a dashboard in under 90 seconds, with 7 routing strategies, health checks and per-origin traffic weighting; runs on K3s with Redis holding shared state",
        "A LangChain.js agent sets one up from a single chat message and streams progress live over SSE; if a deploy fails, it searches the web and reads docs to explain why, instead of returning a stack trace",
        "Loading tool definitions only when the agent needs them, instead of all of them up front, cut tokens per run by about 66% (1,612 against 4,788); Redis fails over to a backup LLM provider on quota exhaustion and blocks duplicate deploys",
      ],
      technologies: ["TypeScript", "LangChain.js", "Cloudflare Workers", "Redis", "K3s"],
      github: "https://github.com/nexoral/EdgeBalancer",
      featured: true,
    },
    {
      name: "NexoralDNS",
      tagline: "High-Performance Self-Hosted DNS Server",
      period: "Oct 2025 - Jun 2026",
      description:
        "Self-hosted DNS: block ads network-wide, point any domain where you want, and keep the query data instead of handing it to your ISP. Next.js console for blocklists and live queries, plus an MCP server to manage it in plain English.",
      bullets: [
        "Self-hosted DNS: block ads network-wide, point any domain where you want, and keep the query data instead of handing it to your ISP; Next.js console for blocklists and live queries, plus an MCP server to manage it in plain English",
        "Built in TypeScript first to get the behaviour right, then rewrote the query engine in Go once it was settled: 8,050 queries per second on a 9-node cluster became 12,746 on one 6-core laptop, at 3.8ms latency and no dropped queries (dnsperf)",
        "Redis caching answers 98% of lookups from memory; RabbitMQ logs after the reply is sent, so logging never delays an answer",
      ],
      technologies: ["Golang", "TypeScript", "Fastify", "Next.js", "Redis", "UDP", "DNS Protocol"],
      github: "https://github.com/nexoral/NexoralDNS",
      featured: true,
    },
    {
      name: "AxioDB",
      tagline: "Embedded NoSQL Database Engine",
      period: "Oct 2024 - Aug 2025",
      description:
        "Embedded NoSQL database for Node and Electron, for the gap between SQLite (schema up front) and a JSON file (no queries, no crash safety). Runs inside your process via NPM, ACID transactions and hash indexing.",
      bullets: [
        "Embedded NoSQL database for Node and Electron, for the gap between SQLite (schema up front) and a JSON file (no queries, no crash safety); runs inside your process via NPM, ACID transactions and hash indexing",
        "Ships three ways: embedded in your process via NPM, or as a Docker image that several apps share over the AxioDB Cloud client with the same query API, optionally exposing an MCP server for AI agents. Both include a web dashboard with authentication and roles",
        "19,574 downloads in the last 12 months, 4,947 in the last 30",
      ],
      technologies: ["TypeScript", "Node.js", "Docker", "Binary Serialization", "Hash Indexing"],
      github: "https://github.com/nexoral/AxioDB",
      npm: "https://www.npmjs.com/package/axiodb",
      featured: true,
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: false,
    },
  ],

  achievements: [
    "$3K/month Infrastructure Cost Savings at Hoichoi",
    "19,574 NPM Downloads in 12 Months (AxioDB)",
    "10M+ Users Served",
    "12,746 QPS on a Single Node (NexoralDNS)",
    "~66% Token Reduction via Lazy Tool Loading (EdgeBalancer)",
    "GitHub Pro",
    "Pull Shark x4",
    "Pair Extraordinaire",
    "YOLO Badge",
    "Quickdraw Badge",
  ],

  languages: ["Bengali (Native)", "Hindi (Professional)", "English (Professional)"],
};
