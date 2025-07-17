'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Award, Code, Palette } from 'lucide-react';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Animation classes
  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`;

  const fadeInLeft = (id) => 
    `transform transition-all duration-1000 ${
      isVisible[id] ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
    }`;

  const fadeInRight = (id) => 
    `transform transition-all duration-1000 ${
      isVisible[id] ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
    }`;

  const staggerChildren = (id, delay = 0) => 
    `transform transition-all duration-1000 ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <HeroSection isVisible={isVisible} fadeInUp={fadeInUp} scrollToSection={scrollToSection} />
      <AboutSection isVisible={isVisible} fadeInUp={fadeInUp} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight} />
      <ProjectsSection isVisible={isVisible} fadeInUp={fadeInUp} staggerChildren={staggerChildren} />
      <CertificationsSection isVisible={isVisible} fadeInUp={fadeInUp} staggerChildren={staggerChildren} />
      <ContactSection isVisible={isVisible} fadeInUp={fadeInUp} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight} />
      <Footer />
    </div>
  );
};

export default Portfolio;
