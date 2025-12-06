import { Metadata } from 'next';
import AnimatedBackground from '../components/About/AnimatedBackground';
import HeroSection from '../components/About/HeroSection';
import SkillsSection from '../components/About/SkillsSection';
import JourneySection from '../components/About/JourneySection';
import InterestsSection from '../components/About/InterestsSection';

export const metadata: Metadata = {
  title: 'About Me - AnkanHub',
  description: 'Learn more about Ankan Saha, my skills, journey, and interests.',
};

// In a real application, this data would come from an API
// This is a placeholder for demonstration purposes
const fetchAboutData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));

  // Return mock data structure that would normally come from an API
  return {
    hero: {
      name: "Ankan Saha",
      title: "Full Stack Developer",
      tagline: "Backend Engineering Specialist | System Design & Infrastructure Optimization Expert",
      profileImage: "/Myself.png",
      backgroundHighlight: "Full Stack Developer with deep expertise in backend engineering, specializing in building high-performance DNS servers, custom NoSQL databases, and container orchestration tools. Successfully reduced infrastructure costs by $3,000/month through strategic migrations and automation. Creator of open-source tools with 2,000+ downloads, passionate about system design, distributed architectures, and scalable server-side solutions."
    },
    skills: [
      {
        id: "languages-frameworks",
        name: "Languages & Frameworks",
        color: "blue",
        skills: [
          { id: "javascript", name: "JavaScript", level: 95 },
          { id: "typescript", name: "TypeScript", level: 93 },
          { id: "nodejs", name: "Node.js", level: 95 },
          { id: "golang", name: "Golang", level: 85 },
          { id: "express", name: "Express.js", level: 92 },
          { id: "fastify", name: "Fastify", level: 88 },
          { id: "nestjs", name: "NestJS", level: 82 },
        ]
      },
      {
        id: "databases-messaging",
        name: "Databases & Messaging",
        color: "purple",
        skills: [
          { id: "mongodb", name: "MongoDB", level: 92 },
          { id: "redis", name: "Redis", level: 90 },
          { id: "rabbitmq", name: "RabbitMQ", level: 85 },
          { id: "nosql", name: "NoSQL Design", level: 88 },
          { id: "event-driven", name: "Event-driven Architecture", level: 83 },
          { id: "postgresql", name: "PostgreSQL", level: 80 },
        ]
      },
      {
        id: "cloud-devops",
        name: "Cloud & DevOps",
        color: "green",
        skills: [
          { id: "docker", name: "Docker", level: 93 },
          { id: "docker-compose", name: "Docker Compose", level: 91 },
          { id: "cicd", name: "CI/CD Pipelines", level: 87 },
          { id: "cloudflare", name: "Cloudflare Workers", level: 88 },
          { id: "nginx", name: "Nginx", level: 85 },
          { id: "pm2", name: "PM2", level: 89 },
          { id: "linux", name: "Linux Administration", level: 86 },
          { id: "git", name: "Git & GitHub", level: 94 },
        ]
      },
      {
        id: "architecture-tools",
        name: "Architecture & Tools",
        color: "amber",
        skills: [
          { id: "microservices", name: "Microservices Architecture", level: 87 },
          { id: "rest", name: "REST APIs", level: 94 },
          { id: "graphql", name: "GraphQL", level: 82 },
          { id: "websocket", name: "WebSocket", level: 86 },
          { id: "dns", name: "DNS Protocol (RFC 1035)", level: 90 },
          { id: "ffmpeg", name: "FFmpeg Integration", level: 83 },
          { id: "serverless", name: "Serverless Computing", level: 85 },
        ]
      },
      {
        id: "specialized-skills",
        name: "Specialized Skills",
        color: "cyan",
        skills: [
          { id: "udp-parsing", name: "UDP Protocol Parsing", level: 88 },
          { id: "binary-serialization", name: "Binary Serialization", level: 85 },
          { id: "encryption", name: "AES-256 Encryption", level: 87 },
          { id: "rtsp", name: "RTSP Stream Handling", level: 82 },
          { id: "mqtt", name: "MQTT Protocol", level: 80 },
          { id: "performance", name: "Performance Optimization", level: 89 },
          { id: "system-design", name: "System Design", level: 86 },
        ]
      }
    ],
    journey: [
      {
        id: "hoichoi",
        title: "Full Stack Developer",
        organization: "Hoichoi Technologies Pvt. Ltd.",
        period: "Jul 2025 - Present",
        description: "Leading critical infrastructure migrations for a platform serving 10M+ users. Successfully migrated Hoichoi's entire web platform from Vercel to Cloudflare Workers, achieving $3,000/month cost savings ($36,000 annually). Architected and implemented comprehensive CI/CD automation pipelines, eliminating manual deployment overhead. Created and open-sourced a production-grade REST API wrapper for FFmpeg & FFprobe using Docker, enabling efficient video processing workflows. Optimizing serverless architecture for maximum performance and reliability.",
        technologies: ["Cloudflare Workers", "Node.js", "Docker", "FFmpeg", "CI/CD", "Serverless", "REST API", "Video Processing", "Infrastructure Migration"],
        type: "experience" as 'experience'
      },
      {
        id: "openweb",
        title: "Software Engineer",
        organization: "Openweb Solutions (Previously Pitangent Analytics)",
        period: "Sep 2024 – Jul 2025",
        description: "Architected and developed backend infrastructure for an AI-powered CCTV surveillance SaaS platform. Built real-time video stream processing system handling RTSP streams with complex protocol integration. Implemented advanced optimization techniques that reduced frame processing latency by 30ms, significantly improving system responsiveness. Designed and developed an internal pre-sales automation tool that revolutionized workflow efficiency, reducing client onboarding time from 2 hours to just 20 minutes. Focused on performance optimization, stream reliability, and scalable microservices architecture.",
        technologies: ["Node.js", "RTSP Protocol", "Real-time Processing", "AI Integration", "Microservices", "Performance Optimization", "Video Streaming", "Automation Tools"],
        type: "experience" as 'experience'
      },
      {
        id: "excellis",
        title: "Junior Software Developer",
        organization: "Excellis IT Pvt. Ltd.",
        period: "Apr 2024 – Sep 2024",
        description: "Led backend development for smart lock IoT system managing 200+ connected devices using MQTT protocol. Implemented critical performance and reliability improvements that reduced device disconnect rates from 12% to 8%, significantly enhancing system stability. Architected secure communication layer with AES-256 encryption for end-to-end data protection. Designed and developed comprehensive admin dashboard with real-time device monitoring, analytics, and management capabilities. Optimized backend performance and security protocols, ensuring zero security breaches throughout deployment.",
        technologies: ["Node.js", "IoT", "MQTT Protocol", "AES-256 Encryption", "Real-time Systems", "Admin Dashboard", "Device Management", "Security Architecture"],
        type: "experience" as 'experience'
      },
      {
        id: "education",
        title: "Bachelor of Arts",
        organization: "University of Kalyani",
        period: "2021 – 2024",
        description: "Completed Bachelor of Arts degree while simultaneously pursuing intensive self-directed learning in software development, system design, and distributed architectures. During this period, built multiple production-grade projects including custom databases, DNS servers, and developer tools. Developed strong foundation in backend engineering, infrastructure optimization, and open-source contribution. Balanced academic commitments with hands-on technical skill development and real-world project implementation.",
        technologies: ["Self-learning", "Project Development", "System Design", "Backend Engineering", "Open Source"],
        type: "education" as 'education'
      }
    ],
    interests: [
      {
        id: "nexoraldns",
        title: "NexoralDNS - High-Performance DNS Server",
        description: "Built a production-grade RFC 1035 compliant DNS server in JavaScript with custom UDP protocol parsing. Implemented Redis caching layer and MongoDB delta synchronization for optimal performance. Achieved 7,000+ queries per second (QPS) while managing 400,000+ DNS records. Demonstrates expertise in network protocols, distributed caching, and high-performance system design.",
        color: "blue"
      },
      {
        id: "containdb",
        title: "ContainDB - Database Deployment CLI",
        description: "Created a Golang CLI tool that revolutionizes database deployment with one-command Docker-based setup for MongoDB, PostgreSQL, and Redis. Features include automated backup systems, container health monitoring, and comprehensive management utilities. Simplifies DevOps workflows and infrastructure management for developers through containerization.",
        color: "purple"
      },
      {
        id: "axiodb",
        title: "AxioDB - Embedded NoSQL Database",
        description: "Developed a custom TypeScript-based embedded NoSQL database with advanced features including hash indexing for fast lookups, binary serialization for efficient storage, and AES-256 encryption for data security. Achieved 1,950+ npm downloads, demonstrating strong adoption. Showcases deep understanding of database internals, data structures, and cryptography.",
        color: "green"
      },
      {
        id: "system-architecture",
        title: "Distributed Systems & Microservices",
        description: "Passionate about designing scalable distributed architectures with event-driven patterns. Expertise in building microservices using RabbitMQ message queues, implementing real-time communication with WebSocket, and optimizing system performance through caching strategies. Focused on creating resilient, fault-tolerant systems that scale horizontally.",
        color: "amber"
      },
      {
        id: "infrastructure",
        title: "Infrastructure Optimization & DevOps",
        description: "Specializing in cloud infrastructure optimization, CI/CD pipeline automation, and containerization strategies. Experience with Cloudflare Workers, Docker orchestration, and serverless architectures. Committed to reducing operational costs while improving system reliability, deployment speed, and developer productivity through automation and best practices.",
        color: "cyan"
      },
      {
        id: "open-source",
        title: "Open Source Development",
        description: "Active contributor to open-source ecosystem with tools downloaded 2,000+ times. Created production-ready libraries for FFmpeg integration, database management, and developer tooling. Believe in giving back to the community through well-documented, production-grade tools that solve real-world problems. Focused on building tools that developers actually want to use.",
        color: "blue"
      }
    ],
    story: {
      personal: "I started my tech journey from a small town with limited resources but limitless curiosity. Over the years, I've developed a strong habit of questioning how things work, building tools from scratch, and pushing beyond my comfort zone.",
      work: "My work ethic is driven by deep focus, curiosity, and a constant urge to improve — both technically and personally. I believe in building things that matter, learning every day, and collaborating with people who share the same fire for innovation and growth.",
      technical: "Beyond my job, I'm deeply committed to personal growth and continuous learning. I often dedicate my nights and weekends to building projects that challenge me technically and intellectually. One of my most ambitious personal projects is AxioDB — a custom NoSQL database system built with TypeScript and Node.js."
    }
  };
};

export default async function AboutPage() {
  // Fetch data (would be from an API in a real application)
  const data = await fetchAboutData();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-32 pb-20 px-6">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="relative z-20 container mx-auto max-w-7xl">
        {/* Hero section */}
        <section className="mb-32">
          <HeroSection data={data.hero} />
        </section>

        {/* Skills section */}
        <section className="mb-32">
          <SkillsSection data={data.skills} />
        </section>

        {/* Journey/Timeline section */}
        <section className="mb-32">
          <JourneySection data={data.journey} />
        </section>

        {/* Interests section */}
        <section className="mb-32">
          <InterestsSection data={data.interests} />
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-gray-900/70 rounded-xl p-8 border border-blue-500/20 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">Ready to Work Together?</h2>
            <p className="text-gray-300 mb-6">
              I&apos;m currently open to new opportunities and collaborations.
              Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-md shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md shadow-lg transition-all duration-300 font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SVG decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -bottom-10 w-full">
          <path
            fill="rgba(30, 41, 59, 0.4)"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
