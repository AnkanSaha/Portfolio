/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, github, demo }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {item}
                    </span>
                ))}
            </div>
            <div className="flex space-x-4">
                <a href={github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                </a>
                <a href={demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "AI Task Manager",
            description: "Smart task management app with AI-powered prioritization",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            tech: ["React", "Node.js", "OpenAI", "MongoDB"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "E-Commerce Platform",
            description: "Modern e-commerce solution with real-time inventory",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "DevOps Dashboard",
            description: "Unified dashboard for monitoring cloud infrastructure",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            tech: ["Vue.js", "AWS", "Docker", "GraphQL"],
            github: "https://github.com",
            demo: "https://demo.com"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;