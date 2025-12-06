import React from 'react';
import { FaGlobe, FaCheckCircle } from 'react-icons/fa';

const Languages = () => {
  const languages = [
    {
      name: "Bengali",
      proficiency: "Native",
      level: 100,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-300"
    },
    {
      name: "Hindi",
      proficiency: "Professional",
      level: 90,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-300"
    },
    {
      name: "English",
      proficiency: "Professional",
      level: 90,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-300"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Languages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multilingual communication abilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${language.color} rounded-full flex items-center justify-center`}>
                    <FaGlobe className="text-3xl text-white" />
                  </div>
                </div>

                {/* Language Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {language.name}
                </h3>

                {/* Proficiency Badge */}
                <div className="flex justify-center mb-4">
                  <div className={`inline-flex items-center ${language.bgColor} border ${language.borderColor} rounded-full px-4 py-2`}>
                    <FaCheckCircle className={`${language.textColor} mr-2 text-sm`} />
                    <span className={`${language.textColor} text-sm font-medium`}>
                      {language.proficiency}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${language.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <p className="text-gray-300 text-lg">
                Proficient in communicating technical concepts and collaborating with diverse teams in <span className="text-blue-400 font-semibold">English</span> and <span className="text-green-400 font-semibold">Bengali</span>, with strong command of <span className="text-purple-400 font-semibold">Hindi</span> for professional interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
