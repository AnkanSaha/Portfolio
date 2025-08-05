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
            Beyond Coding
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Interests and activities that fuel my creativity and passion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((interest, index) => (
          <div
            key={interest.id}
            className={`backdrop-blur-sm bg-gray-900/70 rounded-xl p-6 border ${colorMap[interest.color]?.border || "border-blue-500/30"} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`w-12 h-12 ${colorMap[interest.color]?.bg || "bg-blue-500/10"} rounded-full flex items-center justify-center mb-4`}>
              {interest.id === 'coding' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              )}
              {interest.id === 'reading' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              )}
              {interest.id === 'travel' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
              {interest.id === 'photography' && (
                <svg className={`w-6 h-6 ${colorMap[interest.color]?.text || "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
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
