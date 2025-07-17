'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ isVisible, fadeInUp, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className={fadeInUp('home')}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Amir Zakwan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and creative design thinking
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="/AMIRZAKWANBINZABAHResume.pdf"
                download
                className="border-2 border-green-500 px-8 py-3 rounded-full font-semibold text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Download My CV
              </a>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
