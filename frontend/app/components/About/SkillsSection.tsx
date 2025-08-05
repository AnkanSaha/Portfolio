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
    id: "frontend",
    name: "Frontend",
    color: "blue",
    skills: [
      { id: "react", name: "React", level: 90 },
      { id: "next", name: "Next.js", level: 85 },
      { id: "typescript", name: "TypeScript", level: 80 },
      { id: "tailwind", name: "Tailwind CSS", level: 95 },
      { id: "framer", name: "Framer Motion", level: 75 },
    ]
  },
  {
    id: "backend",
    name: "Backend",
    color: "purple",
    skills: [
      { id: "node", name: "Node.js", level: 88 },
      { id: "express", name: "Express", level: 85 },
      { id: "mongodb", name: "MongoDB", level: 82 },
      { id: "postgres", name: "PostgreSQL", level: 75 },
      { id: "graphql", name: "GraphQL", level: 70 },
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    color: "green",
    skills: [
      { id: "git", name: "Git", level: 90 },
      { id: "docker", name: "Docker", level: 80 },
      { id: "aws", name: "AWS", level: 75 },
      { id: "ci-cd", name: "CI/CD", level: 85 },
      { id: "testing", name: "Testing", level: 80 },
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
            My Skills
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my technical expertise and competencies
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

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 ${colorMap[category.color]?.bg || "bg-blue-500/10"} rounded-full overflow-hidden`}>
                    <div
                      className={`h-full ${colorMap[category.color]?.bar || "bg-blue-500"} rounded-full animate-skill-progress`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
