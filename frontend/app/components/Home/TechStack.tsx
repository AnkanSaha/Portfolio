import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Backend Languages",
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Go" },
        { name: "Python" },
      ]
    },
    {
      title: "Backend Frameworks & APIs",
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Fastify" },
        { name: "GraphQL" },
        { name: "REST APIs" },
        { name: "WebSocket" },
        { name: "gRPC" },
      ]
    },
    {
      title: "Databases & Storage",
      items: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "MariaDB" },
      ]
    },
    {
      title: "DevOps & Infrastructure",
      items: [
        { name: "Docker" },
        { name: "Git & Github" },
        { name: "Linux Shell" },
        { name: "Nginx" },
        { name: "Azure" },
        { name: "CI/CD Automation" },
        { name: "CircleCI" },
        { name: "Container Orchestration" },
      ]
    },
    {
      title: "Architecture & Messaging",
      items: [
        { name: "Microservices Architecture" },
        { name: "Distributed Systems" },
        { name: "RabbitMQ" },
        { name: "Event-Driven Architecture" },
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Backend technologies and infrastructure tools I use to build scalable server-side solutions
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

        {/* Concepts Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">Backend Expertise & Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["RESTful API Design", "GraphQL Implementation", "Database Optimization", "JWT Authentication", "Microservices Architecture", "Message Queue Systems", "Container Orchestration", "Performance Monitoring", "Security Best Practices", "Distributed Caching", "API Rate Limiting", "Background Job Processing"].map((concept) => (
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
