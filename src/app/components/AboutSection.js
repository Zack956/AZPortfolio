'use client';

import React from 'react';
import { Code, Palette } from 'lucide-react';

const AboutSection = ({ isVisible, fadeInUp, fadeInLeft, fadeInRight }) => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={fadeInUp('about')}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={fadeInLeft('about')}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className={fadeInRight('about')}>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Passionate Developer with 5+ Years Experience
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer who loves creating beautiful, functional web applications. 
              My journey in tech started with a curiosity about how things work, and it has evolved 
              into a passion for crafting digital experiences that make a difference.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I specialize in modern web technologies including React, Next.js, Node.js, and cloud 
              platforms. When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or mentoring aspiring developers.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <Code className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-semibold mb-1">Frontend</h4>
                <p className="text-sm text-gray-400">React, Next.js, TypeScript</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <Palette className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="font-semibold mb-1">Design</h4>
                <p className="text-sm text-gray-400">UI/UX, Figma, Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
