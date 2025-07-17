'use client';

import React, { useState } from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = ({ isVisible, fadeInUp, staggerChildren }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certifications = [
    {
      title: "Microsoft Certified: Azure Security Engineer Associate",
      issuer: "Microsoft",
      badge: "🛡️",
      CertNo: "168048-15EA94",
      image: "/cert/microsoft-certified-azure-security-engineer-associate.png"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      badge: "🔧",
      CertNo: "119E1E-F3F784",
      image: "/cert/microsoft-certified-azure-administrator-associate.2.png"
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      badge: "🏗️",
      CertNo: "23686E-9AV5DE",
      image: "/cert/microsoft-certified-azure-solutions-architect-expert.1.png"
    },
    {
      title: "CCNA Certification",
      issuer: "Cisco",
      badge: "🌐",
      image: "/cert/CCNA.jpg"
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${staggerChildren('certifications', index * 100)} relative bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer`}
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
              {hoveredIndex === index && (
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-2xl bg-gray-900 bg-opacity-90 z-10"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
