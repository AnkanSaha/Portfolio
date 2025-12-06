// Define types for interests items
export type Interest = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  color: string;
};

// Default data (will be replaced with API data)
const defaultInterestsData: Interest[] = [
  {
    id: "coding",
    title: "Coding Projects",
    description: "Building side projects and exploring new technologies in my free time",
    color: "blue"
  },
  {
    id: "reading",
    title: "Technical Reading",
    description: "Staying updated with the latest trends in tech through books and articles",
    color: "purple"
  },
  {
    id: "travel",
    title: "Traveling",
    description: "Exploring different cultures and gaining new perspectives through travel",
    color: "green"
  },
  {
    id: "photography",
    title: "Photography",
    description: "Capturing moments and scenes that inspire creative thinking",
    color: "amber"
  }
];

// Color mapping for different interests
const colorMap: Record<string, { bg: string, text: string, border: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30"
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/30"
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/30"
  }
};

export default function InterestsSection({ data = defaultInterestsData }: { data?: Interest[] }) {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            Featured Projects & Expertise
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Showcasing technical expertise through production-grade projects and specialized domains
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((interest, index) => (
          <div
            key={interest.id}
            className={`backdrop-blur-sm bg-gray-900/70 rounded-xl p-6 border ${colorMap[interest.color]?.border || "border-blue-500/30"} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`w-12 h-12 ${colorMap[interest.color]?.bg || "bg-blue-500/10"} rounded-full flex items-center justify-center mb-4`}>
              {interest.id === 'nexoraldns' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              )}
              {interest.id === 'containdb' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              )}
              {interest.id === 'axiodb' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                </svg>
              )}
              {interest.id === 'system-architecture' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              )}
              {interest.id === 'infrastructure' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              )}
              {interest.id === 'open-source' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              )}
            </div>

            <h3 className={`text-xl font-bold mb-2 ${colorMap[interest.color]?.text || "text-blue-400"}`}>
              {interest.title}
            </h3>

            <p className="text-gray-300">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
