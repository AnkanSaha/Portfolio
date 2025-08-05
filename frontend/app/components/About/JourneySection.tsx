// Define types for journey timeline
export type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies?: string[];
  type: 'education' | 'experience' | 'achievement';
  icon?: string;
};

// Default data (will be replaced with API data)
const defaultTimelineData: TimelineItem[] = [
  {
    id: "exp1",
    title: "Senior Developer",
    organization: "Tech Company",
    period: "2023 - Present",
    description: "Led development of key products and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS"],
    type: "experience"
  },
  {
    id: "edu1",
    title: "Computer Science Degree",
    organization: "University",
    period: "2019 - 2023",
    description: "Focused on software engineering and web technologies.",
    technologies: ["Algorithms", "Data Structures", "Web Development"],
    type: "education"
  },
  {
    id: "ach1",
    title: "Open Source Contribution",
    organization: "Major Project",
    period: "2022",
    description: "Contributed significant features to a popular open-source project.",
    technologies: ["JavaScript", "Git"],
    type: "achievement"
  },
  {
    id: "exp2",
    title: "Junior Developer",
    organization: "Startup",
    period: "2021 - 2023",
    description: "Worked on frontend development for a fast-growing startup.",
    technologies: ["React", "Redux", "SCSS"],
    type: "experience"
  },
];

// Color and icon mapping for different timeline item types
const typeMap: Record<string, {
  iconClass: string,
  bgClass: string,
  borderClass: string,
  textClass: string
}> = {
  experience: {
    iconClass: "bg-blue-500 text-white",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
    textClass: "text-blue-400"
  },
  education: {
    iconClass: "bg-purple-500 text-white",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/30",
    textClass: "text-purple-400"
  },
  achievement: {
    iconClass: "bg-green-500 text-white",
    bgClass: "bg-green-500/10",
    borderClass: "border-green-500/30",
    textClass: "text-green-400"
  }
};

export default function JourneySection({ data = defaultTimelineData }: { data?: TimelineItem[] }) {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            My Journey
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional experiences and educational background that shaped my career
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700"></div>

        <div className="space-y-12">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-800 z-10">
                <div className={`w-full h-full rounded-full ${typeMap[item.type]?.iconClass || "bg-blue-500"} flex items-center justify-center`}>
                  {item.type === 'experience' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  )}
                  {item.type === 'education' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                    </svg>
                  )}
                  {item.type === 'achievement' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pb-4`}>
                <div className={`backdrop-blur-sm bg-gray-900/70 rounded-xl p-6 border ${typeMap[item.type]?.borderClass || "border-blue-500/30"} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-center mb-3">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${typeMap[item.type]?.bgClass || "bg-blue-500/10"} ${typeMap[item.type]?.textClass || "text-blue-400"}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className="ml-auto text-gray-400 text-sm font-medium">{item.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-lg text-gray-300 mb-3">{item.organization}</h4>

                  <p className="text-gray-400 mb-4">{item.description}</p>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2 py-1 rounded-md bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
