'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ isVisible, fadeInUp, staggerChildren }) => {
  const projects = [
    {
      title: "Purchase Requisition",
      description: "A full-stack e-commerce solution built with PHP, Filament and modern UI components.",
      tech: ["PHP", "TypeScript", "Filament", "Postgress"],
      gradient: "from-blue-500 to-cyan-500",
      image: "/Project/PR.PNG"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop functionality and team features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      image: "/Project/TaskManagement.png"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={fadeInUp('projects')}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${staggerChildren('projects', index * 200)} group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className={`h-48 relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4">
                  <ExternalLink className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
