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
      tagline: "JavaScript & TypeScript Specialist | Full Stack Developer at Hoichoi Technologies",
      profileImage: "/Myself.png",
      backgroundHighlight: "A passionate developer from Ranaghat, West Bengal, specializing in JavaScript, TypeScript, and modern web technologies. Expert in Microservices Architecture and Serverless solutions with 1.5+ years of professional experience."
    },
    skills: [
      {
        id: "languages",
        name: "Languages",
        color: "blue",
        skills: [
          { id: "javascript", name: "JavaScript", level: 95 },
          { id: "typescript", name: "TypeScript", level: 90 },
        ]
      },
      {
        id: "frameworks",
        name: "Frameworks & Libraries",
        color: "purple",
        skills: [
          { id: "express", name: "Express.js", level: 92 },
          { id: "react", name: "React.js", level: 90 },
          { id: "node", name: "Node.js", level: 93 },
          { id: "websocket", name: "WebSocket", level: 85 },
          { id: "template", name: "Template Engine", level: 88 },
          { id: "next", name: "Next.js", level: 87 },
          { id: "redux", name: "Redux Toolkit", level: 85 },
        ]
      },
      {
        id: "databases",
        name: "Databases",
        color: "green",
        skills: [
          { id: "mongodb", name: "MongoDB", level: 90 },
          { id: "mysql", name: "MySQL", level: 85 },
        ]
      },
      {
        id: "tools",
        name: "Tools & DevOps",
        color: "amber",
        skills: [
          { id: "git", name: "Git & Github", level: 90 },
          { id: "linux", name: "Linux Shell", level: 88 },
          { id: "nginx", name: "Nginx", level: 85 },
          { id: "docker", name: "Docker", level: 87 },
          { id: "azure", name: "Azure", level: 80 },
          { id: "cicd", name: "CI/CD Automation", level: 83 },
          { id: "circleci", name: "CircleCI", level: 80 },
          { id: "rabbitmq", name: "RabbitMQ", level: 75 },
        ]
      },
      {
        id: "architecture",
        name: "Architecture & Design",
        color: "red",
        skills: [
          { id: "microservices", name: "Microservices Architecture", level: 85 },
          { id: "serverless", name: "Serverless Architecture", level: 80 },
        ]
      }
    ],
    journey: [
      {
        id: "hoichoi",
        title: "Full Stack Developer",
        organization: "Hoichoi Technologies Pvt. ltd.",
        period: "Jul 2025 - Present",
        description: "Migrated Hoichoi's web from Vercel to Cloudflare, cutting annual costs by $30,000. Contributed to open-source projects like the REST API Docker wrapper for FFmpeg & FFprobe.",
        technologies: ["React.js", "Node.js", "Docker", "Cloudflare", "FFmpeg", "Open Source"],
        type: "experience" as 'experience'
      },
      {
        id: "pitangent",
        title: "Software Engineer",
        organization: "Pitangent Analytics and Technology Solutions Pvt. ltd.",
        period: "Sep 2024 – Jun 2025",
        description: "Built the frontend of Pre Sales Management System (Internal Project). Worked on a real-time CCTV surveillance system.",
        technologies: ["React.js", "JavaScript", "Real-time Systems", "Frontend Development"],
        type: "experience" as 'experience'
      },
      {
        id: "excellis",
        title: "Junior Software Developer",
        organization: "Excellis IT Pvt. Ltd.",
        period: "Apr 2024 – Sep 2024",
        description: "Led the development of a smart lock IoT project, reducing connectivity issues by 30%. Designed and developed a dashboard, cutting management time by 40%. Optimized security and performance, improving response times by 50% with no breaches.",
        technologies: ["IoT", "Node.js", "Dashboard Development", "Security Optimization"],
        type: "experience" as 'experience'
      },
      {
        id: "education",
        title: "Bachelor of Arts",
        organization: "University of Kalyani",
        period: "Oct 2021 – 2024",
        description: "Completed Bachelor of Arts degree while simultaneously pursuing self-directed learning in software development and building personal projects.",
        technologies: ["Self-learning", "Project Development"],
        type: "education" as 'education'
      }
    ],
    interests: [
      {
        id: "payment-systems",
        title: "Payment Gateway Integration",
        description: "Building secure payment systems with Razorpay integration and seamless transaction processing",
        color: "blue"
      },
      {
        id: "database-design",
        title: "Database Management Systems",
        description: "Creating custom database solutions like AxioDB with nested tree structures and advanced querying capabilities",
        color: "purple"
      },
      {
        id: "npm-packages",
        title: "NPM Package Development",
        description: "Building reusable TypeScript packages for encryption, API management, and developer tools",
        color: "green"
      },
      {
        id: "open-source",
        title: "Open Source Contribution",
        description: "Contributing to open-source projects like REST API Docker wrappers for FFmpeg & FFprobe",
        color: "amber"
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
