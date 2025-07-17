'use client';

import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = ({ isVisible, fadeInUp, staggerChildren }) => {
  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      badge: "🏆"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      badge: "☁️"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      badge: "⚛️"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      date: "2022",
      badge: "📜"
    },
    {
      title: "UI/UX Design Certification",
      issuer: "Adobe",
      date: "2022",
      badge: "🎨"
    },
    {
      title: "Node.js Certification",
      issuer: "OpenJS Foundation",
      date: "2022",
      badge: "🟢"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={fadeInUp('certifications')}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${staggerChildren('certifications', index * 100)} bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{cert.badge}</div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold">{cert.date}</span>
                <Award className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
