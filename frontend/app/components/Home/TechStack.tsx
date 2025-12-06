import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages & Frameworks",
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "Golang" },
        { name: "Express.js" },
        { name: "Fastify" },
        { name: "NestJS" },
      ]
    },
    {
      title: "Databases & Messaging",
      items: [
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "RabbitMQ" },
        { name: "Event-driven Architecture" },
        { name: "NoSQL Design" },
      ]
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "Docker" },
        { name: "CI/CD" },
        { name: "Cloudflare Workers" },
        { name: "Nginx" },
        { name: "PM2" },
        { name: "Docker Compose" },
        { name: "Linux" },
        { name: "Git & GitHub" },
      ]
    },
    {
      title: "Architecture & Tools",
      items: [
        { name: "Microservices" },
        { name: "REST APIs" },
        { name: "GraphQL" },
        { name: "WebSocket" },
        { name: "DNS" },
        { name: "FFmpeg" },
        { name: "Serverless" },
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise in backend engineering, system design, and infrastructure optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <span className="text-sm text-gray-300 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">Core Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["DNS Server Development", "NoSQL Database Design", "Container Orchestration", "Infrastructure Optimization", "System Design", "RTSP Streaming", "IoT Backend", "Cost Reduction", "Performance Tuning", "Open Source Development", "UDP Protocol", "Binary Serialization"].map((concept) => (
              <div
                key={concept}
                className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full"
              >
                <span className="text-purple-300 font-medium">{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
