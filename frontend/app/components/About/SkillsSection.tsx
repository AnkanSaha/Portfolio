// Define types for skill items
export type SkillCategory = {
  id: string;
  name: string;
  color: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  level: number; // 1-100
  icon?: string;
};

// Default data (will be replaced with API data)
const defaultSkillsData: SkillCategory[] = [
  {
    id: "backend-languages",
    name: "Backend Languages",
    color: "blue",
    skills: [
      { id: "javascript", name: "JavaScript", level: 95 },
      { id: "typescript", name: "TypeScript", level: 90 },
      { id: "go", name: "Go", level: 85 },
      { id: "python", name: "Python", level: 75 },
    ]
  },
  {
    id: "backend-frameworks",
    name: "Backend Frameworks & APIs",
    color: "purple",
    skills: [
      { id: "node", name: "Node.js", level: 95 },
      { id: "express", name: "Express.js", level: 90 },
      { id: "fastify", name: "Fastify", level: 85 },
      { id: "graphql", name: "GraphQL", level: 80 },
      { id: "rest", name: "REST APIs", level: 95 },
      { id: "websocket", name: "WebSocket", level: 85 },
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    color: "green",
    skills: [
      { id: "mongodb", name: "MongoDB", level: 90 },
      { id: "postgres", name: "PostgreSQL", level: 85 },
      { id: "mysql", name: "MySQL", level: 80 },
      { id: "redis", name: "Redis", level: 85 },
      { id: "mariadb", name: "MariaDB", level: 75 },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    color: "amber",
    skills: [
      { id: "docker", name: "Docker", level: 90 },
      { id: "git", name: "Git", level: 95 },
      { id: "linux", name: "Linux Shell", level: 85 },
      { id: "nginx", name: "Nginx", level: 80 },
      { id: "ci-cd", name: "CI/CD", level: 85 },
      { id: "azure", name: "Azure", level: 75 },
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Systems",
    color: "cyan",
    skills: [
      { id: "microservices", name: "Microservices", level: 85 },
      { id: "distributed", name: "Distributed Systems", level: 80 },
      { id: "rabbitmq", name: "Message Queues", level: 75 },
      { id: "performance", name: "Performance Optimization", level: 85 },
      { id: "security", name: "Security Best Practices", level: 80 },
    ]
  }
];

// Color mapping for different skill categories
const colorMap: Record<string, { bg: string, bar: string, text: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    bar: "bg-blue-500",
    text: "text-blue-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    bar: "bg-purple-500",
    text: "text-purple-400",
  },
  green: {
    bg: "bg-green-500/10",
    bar: "bg-green-500",
    text: "text-green-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    bar: "bg-amber-500",
    text: "text-amber-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    bar: "bg-cyan-500",
    text: "text-cyan-400",
  }
};

export default function SkillsSection({ data = defaultSkillsData }: { data?: SkillCategory[] }) {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            Technical Expertise
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive technology stack spanning backend development, infrastructure, databases, and system architecture
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.map((category, categoryIndex) => (
          <div
            key={category.id}
            className="backdrop-blur-sm bg-gray-900/70 rounded-xl p-8 border border-gray-800 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${colorMap[category.color]?.text || "text-blue-400"}`}>
              {category.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.id}
                  className={`px-4 py-2 ${colorMap[category.color]?.bg || "bg-blue-500/10"} ${colorMap[category.color]?.text || "text-blue-400"} rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-200 animate-fadeInUp`}
                  style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
