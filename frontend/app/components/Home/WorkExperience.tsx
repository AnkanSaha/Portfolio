import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Hoichoi Technologies",
      role: "Full Stack Developer",
      startDate: "2025-07-01",
      endDate: "Present",
      status: "current",
      location: "Kolkata, West Bengal",
      description: "Led migration to Cloudflare Workers for 10M+ users, built CI/CD automation saving $3,000/month, created FFmpeg REST API wrapper.",
      achievements: [
        "Migrated infrastructure to Cloudflare Workers serving 10M+ users",
        "Built CI/CD automation pipeline reducing costs by $3,000/month",
        "Created FFmpeg REST API wrapper for video processing"
      ],
      technologies: ["Cloudflare Workers", "CI/CD", "FFmpeg", "Node.js", "Docker", "Serverless"]
    },
    {
      company: "Openweb Solutions",
      role: "Software Engineer",
      startDate: "2024-09-01",
      endDate: "2025-07-01",
      status: "previous",
      location: "Kolkata, West Bengal",
      description: "Built backend for AI CCTV surveillance SaaS handling RTSP streams, reduced frame latency by 30ms, built pre-sales automation tool cutting workflow from 2 hours to 20 minutes.",
      achievements: [
        "Built AI CCTV surveillance SaaS backend handling RTSP streams",
        "Reduced frame latency by 30ms through optimization",
        "Created pre-sales automation tool: 2 hours → 20 minutes"
      ],
      technologies: ["Node.js", "RTSP", "AI/ML", "Real-time Processing", "Automation", "Backend Development"]
    },
    {
      company: "Excellis IT",
      role: "Junior Developer",
      startDate: "2024-04-01",
      endDate: "2024-09-01",
      status: "previous",
      location: "Kolkata, West Bengal",
      description: "Built smart lock IoT backend using MQTT for 200+ devices, reduced disconnect rate from 12% to 8%, implemented AES-256 encryption and admin dashboard.",
      achievements: [
        "Built IoT backend using MQTT for 200+ smart lock devices",
        "Reduced device disconnect rate from 12% to 8%",
        "Implemented AES-256 encryption and admin dashboard"
      ],
      technologies: ["Node.js", "MQTT", "IoT", "AES-256", "Dashboard Development", "Security"]
    }
  ];

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);

    if (months < 1) return "< 1 month";
    if (months < 12) return `${months} month${months > 1 ? 's' : ''}`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  };

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-400 via-blue-400 to-purple-400"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-800 z-10"
                    style={{ backgroundColor: exp.status === 'current' ? '#10B981' : '#3B82F6' }}>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      {/* Status Badge */}
                      {exp.status === 'current' && (
                        <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 mb-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-green-300 text-xs font-medium">CURRENT</span>
                        </div>
                      )}

                      {/* Company & Role */}
                      <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold mb-3">{exp.company}</h4>

                      {/* Date & Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <FaCalendar className="mr-2" />
                          <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaBriefcase className="mr-2" />
                          <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="mb-4 space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
