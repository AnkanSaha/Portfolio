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
      title: "Full-Stack Developer",
      tagline: "MERN Stack Specialist | Software Engineer at Hoichoi",
      profileImage: "/Myself.png",
      backgroundHighlight: "A passionate and self-taught developer who believes in building things that matter, learning every day, and collaborating with people who share the same fire for innovation and growth."
    },
    skills: [
      {
        id: "frontend",
        name: "Frontend",
        color: "blue",
        skills: [
          { id: "react", name: "React.js", level: 92 },
          { id: "next", name: "Next.js", level: 88 },
          { id: "typescript", name: "TypeScript", level: 85 },
          { id: "javascript", name: "JavaScript", level: 95 },
          { id: "tailwind", name: "Tailwind CSS", level: 90 },
        ]
      },
      {
        id: "backend",
        name: "Backend",
        color: "purple",
        skills: [
          { id: "node", name: "Node.js", level: 90 },
          { id: "express", name: "Express.js", level: 88 },
          { id: "mongodb", name: "MongoDB", level: 85 },
          { id: "typescript-backend", name: "TypeScript", level: 85 },
          { id: "rest-api", name: "REST API Design", level: 87 },
        ]
      },
      {
        id: "tools",
        name: "Tools & DevOps",
        color: "green",
        skills: [
          { id: "git", name: "Git", level: 90 },
          { id: "docker", name: "Docker", level: 82 },
          { id: "traefik", name: "Traefik", level: 78 },
          { id: "microservices", name: "Microservices", level: 80 },
          { id: "system-design", name: "System Design", level: 75 },
        ]
      },
      {
        id: "languages",
        name: "Other Languages",
        color: "amber",
        skills: [
          { id: "go", name: "Go", level: 70 },
          { id: "rust", name: "Rust", level: 65 },
          { id: "systems", name: "System Programming", level: 72 },
          { id: "networking", name: "Networking", level: 75 },
          { id: "os", name: "OS Internals", level: 68 },
        ]
      }
    ],
    journey: [
      {
        id: "hoichoi",
        title: "Software Engineer",
        organization: "Hoichoi",
        period: "Present",
        description: "Contributing to building and maintaining scalable and high-performance applications for a leading OTT platform.",
        technologies: ["MERN Stack", "TypeScript", "Microservices"],
        type: "experience" as 'experience'
      },
      {
        id: "excellis",
        title: "Software Engineer",
        organization: "Excellis IT Pvt Ltd",
        period: "Previous",
        description: "Gained hands-on experience working on production-level projects, honing skills in backend development and real-world problem-solving.",
        technologies: ["Node.js", "Express", "MongoDB", "React"],
        type: "experience" as 'experience'
      },
      {
        id: "axiodb",
        title: "Creator & Developer",
        organization: "AxioDB Project",
        period: "Ongoing",
        description: "Building a custom NoSQL database system with TypeScript and Node.js featuring nested tree file structure, cryptographic data encryption, indexing, and caching.",
        technologies: ["TypeScript", "Node.js", "Database Design", "Cryptography"],
        type: "achievement" as 'achievement'
      },
      {
        id: "self-learning",
        title: "Self-Taught Developer",
        organization: "Continuous Learning",
        period: "Ongoing",
        description: "Started tech journey from a small town with limited resources but limitless curiosity. Developed a habit of questioning how things work and building tools from scratch.",
        technologies: ["MERN Stack", "System Design", "Go", "Rust"],
        type: "education" as 'education'
      }
    ],
    interests: [
      {
        id: "system-programming",
        title: "System Programming",
        description: "Experimenting with languages like Go and Rust to understand lower-level system operations",
        color: "blue"
      },
      {
        id: "database-design",
        title: "Database Design",
        description: "Creating custom database solutions and understanding how database systems work internally",
        color: "purple"
      },
      {
        id: "iot-solutions",
        title: "IoT Solutions",
        description: "Building smart systems like custom lock mechanisms and connected devices",
        color: "green"
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        description: "Designing multi-container applications with Docker and Traefik for scalable solutions",
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
