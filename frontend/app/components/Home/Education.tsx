import React from 'react';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const education = {
    degree: "Bachelor of Arts (BA)",
    institution: "University of Kalyani",
    period: "2021 - 2024",
    status: "Completed"
  };

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
                  <div className="flex items-center text-yellow-400 mt-1">
                    <FaUniversity className="mr-2" />
                    <span className="text-lg font-semibold">{education.institution}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-300 text-sm font-medium">{education.status}</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center text-gray-400">
              <FaCalendar className="mr-2" />
              <span className="font-medium">{education.period}</span>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-gray-300 text-sm">
                Completed undergraduate studies while actively pursuing software development career, gaining practical experience through multiple professional roles and open-source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
