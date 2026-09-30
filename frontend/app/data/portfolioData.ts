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
  companyUrl?: string;
  companyDesc?: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
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
  docs?: string;
  stars?: number;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface GitHubStats {
  followers: number;
  following: number;
  stars: number;
  publicRepos: number;
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  alternateEmail: string;
  location: string;
  currentCompany: string;
  summary: string;
  openSourceSummary: string;
  social: SocialLinks;
  github: GitHubStats;
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: Education;
  projects: Project[];
  achievements: string[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Ankan Saha",
  title: "Backend Engineer & Open Source Maintainer",
  subtitle: "Node.js · TypeScript · Go · Cloudflare Workers",
  email: "ankansahaofficial@gmail.com",
  alternateEmail: "connect@ankan.in",
  location: "Kolkata, India",
  currentCompany: "Open to SDE Roles",
  summary:
    "Backend engineer with 2 years of production experience in Node.js and TypeScript. I build developer tools and infrastructure software that runs in production — from embedded databases to DNS servers to edge load balancers.",
  openSourceSummary:
    "I maintain Nexoral, an open-source organization building infrastructure tools for developers. AxioDB, my embedded NoSQL database, has 20K+ NPM downloads per year. NexoralDNS is a self-hosted DNS resolver benchmarked at 12,746 QPS. EdgeBalancer deploys load balancers to Cloudflare's 330+ edge locations in under 90 seconds.",

  social: {
    github: "https://github.com/AnkanSaha",
    linkedin: "https://linkedin.com/in/theankansaha",
    twitter: "https://twitter.com/theankansaha",
    instagram: "https://instagram.com/theankansaha",
    reddit: "https://reddit.com/user/theankansaha",
    devto: "https://dev.to/theankansaha",
    discord: "https://discord.gg/theankansaha",
  },

  github: {
    followers: 37,
    following: 21,
    stars: 42,
    publicRepos: 15,
    achievements: [
      "Pull Shark x4",
      "Pair Extraordinaire x2",
      "Starstruck",
      "YOLO",
      "Quickdraw",
      "GitHub Pro",
      "Developer Program Member",
    ],
  },

  skillCategories: [
    {
      name: "AI & Agents",
      skills: ["LangChain.js", "LLM Tool Calling", "Agentic Workflows", "Model Context Protocol (MCP)"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS (ECS, Fargate, ECR, S3, SQS)", "Docker", "Kubernetes (K3s)", "Cloudflare Workers", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Backend & APIs",
      skills: ["Node.js", "Express.js", "NestJS", "Fastify", "REST APIs", "GraphQL", "WebSockets", "Server-Sent Events", "OAuth", "Microservices"],
    },
    {
      name: "Databases & Messaging",
      skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "SQLite"],
    },
    {
      name: "Languages & Frontend",
      skills: ["TypeScript", "JavaScript", "Go", "SQL", "React", "Next.js"],
    },
    {
      name: "Testing & Observability",
      skills: ["Jest", "Middleware.io", "DNS Benchmarking (dnsperf)"],
    },
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "hoichoi",
      companyUrl: "https://hoichoi.tv",
      companyDesc: "Bengal's Leading OTT Streaming Platform · 10M+ Users · hoichoi.tv",
      period: "Jul 2025 – Mar 2026",
      location: "Kolkata, India",
      bullets: [
        "Migrated the Next.js frontend from Vercel to Cloudflare Workers using OpenNext, cutting monthly compute costs by $3,000.",
        "Built cancellation and retention flows in the Go subscription service, integrating Churnkey and exposing them through a NestJS GraphQL API.",
        "Fixed a race condition where post-payment emails fired before MongoDB writes committed — implemented Change Data Capture so SQS events only fire after the write succeeds.",
      ],
      technologies: ["Cloudflare Workers", "OpenNext", "NestJS", "GraphQL", "Golang", "MongoDB", "SQS", "CI/CD"],
    },
    {
      title: "Software Engineer",
      company: "Pitangent Analytics (Pitangent Group)",
      companyUrl: "https://pitangent.com",
      companyDesc: "AI & Analytics Solutions · Kolkata",
      period: "Sep 2024 – Jul 2025",
      location: "Kolkata, India",
      bullets: [
        "Built the backend and React dashboard for an AI CCTV product — ingesting RTSP camera streams, pulling frames for threat detection, and rendering live feeds with alerts.",
        "Set up the deploy path: Docker builds pushed to ECR, rolled out from CI to ECS on AWS Fargate with autoscaling.",
      ],
      technologies: ["Node.js", "React.js", "RTSP Protocol", "Docker", "AWS ECS", "AWS Fargate", "AWS ECR"],
    },
    {
      title: "Junior Software Developer",
      company: "Excellis IT Pvt. Ltd.",
      companyUrl: "https://excellisit.com",
      companyDesc: "IoT & Smart Devices · Kolkata",
      period: "Apr 2024 – Aug 2024",
      location: "Kolkata, India",
      bullets: [
        "Node.js and MQTT backend for a smart lock system with 200+ live devices. Added exponential backoff reconnection to fix dashboard dropouts.",
        "Added path-based change detection to GitHub Actions CI so only changed services get tested and deployed.",
      ],
      technologies: ["Node.js", "MQTT", "WebSocket", "IoT", "GitHub Actions"],
    },
  ],

  education: {
    degree: "Bachelor of Arts",
    university: "University of Kalyani",
    period: "2021 – 2024",
    location: "Nadia, West Bengal, India",
  },

  projects: [
    {
      name: "AxioDB",
      tagline: "Zero-Dependency Embedded Database for Node.js",
      period: "Oct 2024 – Present",
      description:
        "An embedded NoSQL database that runs inside your Node.js or Electron process — no external daemon, no native bindings. MongoDB-compatible query API, ACID transactions with WAL, hash-indexed lookups, and multi-core processing via worker_threads.",
      bullets: [
        "Pure TypeScript engine with zero native dependencies — runs directly inside the host process.",
        "MongoDB-compatible query syntax, hash-indexed lookups, ACID transactions backed by a Write-Ahead Log (WAL).",
        "Multi-core processing utilizing worker_threads for parallel dataset operations.",
        "Ships with an interactive Go CLI, web control dashboard, Dockerized TCP server mode, and a 32-tool MCP server for AI agent interaction.",
        "Verified with 10 automated test suites covering crash recovery under SIGKILL, TCP/TLS authentication, and data rollbacks.",
        "20,000+ NPM downloads per year. Used across Electron desktop software and local-first tooling.",
      ],
      technologies: ["TypeScript", "Node.js", "Docker", "Go", "MCP", "Worker Threads", "WAL"],
      github: "https://github.com/nexoral/AxioDB",
      npm: "https://www.npmjs.com/package/axiodb",
      stars: 33,
      featured: true,
    },
    {
      name: "NexoralDNS",
      tagline: "High-Throughput Self-Hosted DNS Resolver",
      period: "Oct 2025 – Present",
      description:
        "A self-hosted DNS control plane for local networks — network-wide ad blocking, custom domain routing, real-time query analytics, and an MCP server for AI-powered management. Supports UDP, TCP, and DNS-over-TLS.",
      bullets: [
        "Prototyped in TypeScript (8,050 QPS), rewrote in Go — reached 12,746 QPS at 3.8ms latency with zero dropped packets under dnsperf on a consumer laptop.",
        "7-layer query engine: Redis cache, block-list engine, upstream resolution. Redis serves 98% of lookups from cache.",
        "Asynchronous audit logging via RabbitMQ — logging never delays a DNS response.",
        "Next.js admin console with real-time query visualization. MCP server for managing DNS through AI clients.",
        "DNS over TCP (RFC 7766) and DNS over TLS (RFC 7858) — zero configuration changes needed.",
      ],
      technologies: ["Go", "TypeScript", "Fastify", "Next.js", "Redis", "RabbitMQ", "Docker", "MCP"],
      github: "https://github.com/nexoral/NexoralDNS",
      live: "https://dns.nexoral.in",
      docs: "https://dns.nexoral.in/docs/getting-started",
      stars: 2,
      featured: true,
    },
    {
      name: "EdgeBalancer",
      tagline: "Edge Load Balancer & API Gateway Control Plane",
      period: "Apr 2026 – Present",
      description:
        "A SaaS control plane that deploys production load balancers and API gateways to Cloudflare Workers across 330+ edge locations in under 90 seconds. 7 routing strategies, active health checks, JWT validation, and an AI deployment assistant.",
      bullets: [
        "Compiles and deploys load balancers directly onto Cloudflare Workers — reduces idle costs to zero with serverless edge execution.",
        "7 routing strategies (weighted, failover, round-robin, etc.), active health checks, JWT validation, and canary releases.",
        "LangChain.js chat agent configures the balancer from natural-language requests and streams deployment progress via SSE.",
        "Dynamically scoped tool definitions reduced agent token consumption by 66% (4,788 → 1,612 tokens/run).",
        "Redis prevents duplicate deployments across concurrent requests; backup LLM provider takes over on quota exhaustion.",
      ],
      technologies: ["TypeScript", "LangChain.js", "Cloudflare Workers", "Redis", "AWS Fargate", "MongoDB", "SSE"],
      github: "https://github.com/nexoral/EdgeBalancer",
      live: "https://edge.nexoral.in",
      stars: 1,
      featured: true,
    },
    {
      name: "ContainDB",
      tagline: "One-Command Database Deployment CLI",
      period: "May 2025 – Jul 2025",
      description:
        "CLI tool for one-command deployment of MongoDB, Postgres, Redis, MySQL, and MariaDB — packaged as a .deb installer with automated backups and container health monitoring.",
      bullets: [
        "One-command deployment of 5 database engines with Docker containers.",
        "Automated backups, health monitoring, and PHPMyAdmin integration.",
      ],
      technologies: ["Go", "Docker", "CLI", "MongoDB", "PostgreSQL", "Redis", "MySQL"],
      github: "https://github.com/nexoral/ContainDB",
      stars: 4,
      featured: false,
    },
    {
      name: "xpack",
      tagline: "Universal Linux Package Builder",
      period: "Aug 2025 – Nov 2025",
      description:
        "Universal Linux package builder that converts standalone binaries (Go, Rust) into native formats (.deb, .rpm, tar.gz) with automated systemd service file generation.",
      bullets: [
        "Converts standalone binaries into .deb, .rpm, and tar.gz packages.",
        "Automates systemd service file generation for CI/CD pipelines.",
      ],
      technologies: ["Go", "Linux", "CLI", "Package Management"],
      github: "https://github.com/nexoral/xpack",
      stars: 2,
      featured: false,
    },
    {
      name: "ReviewBuddy",
      tagline: "GitHub Action for PR Reviews",
      period: "2025",
      description:
        "A configurable GitHub Action that comments on Pull Requests in your preferred language and tone.",
      bullets: [
        "Configurable GitHub Action for automated PR review comments.",
      ],
      technologies: ["JavaScript", "GitHub Actions"],
      github: "https://github.com/nexoral/ReviewBuddy",
      stars: 2,
      featured: false,
    },
  ],

  achievements: [
    "Built and maintain 6 open-source projects under Nexoral",
    "20K+ NPM downloads per year (AxioDB)",
    "12,746 QPS DNS resolution on a consumer laptop (NexoralDNS)",
    "Load balancer deployment to 330+ edge locations in under 90 seconds (EdgeBalancer)",
    "~66% AI token reduction via lazy tool loading (EdgeBalancer)",
    "$3K/month infrastructure cost savings at hoichoi (10M+ users)",
  ],

  languages: ["Bengali (Native)", "Hindi (Professional)", "English (Professional)"],
};