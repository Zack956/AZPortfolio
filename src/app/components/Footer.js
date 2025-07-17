'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Amir Zakwan. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
