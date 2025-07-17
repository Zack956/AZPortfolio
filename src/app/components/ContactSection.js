'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = ({ isVisible, fadeInUp, fadeInLeft, fadeInRight }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    }).catch(() => {
      alert('Oops! There was a problem submitting your form');
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={fadeInUp('contact')}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={fadeInLeft('contact')}>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            
            <div className="space-y-4">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center space-x-4 hover:text-blue-400 transition-colors duration-300"
                aria-label="Send email to John Doe"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">zack66789@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://github.com/Zack956"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-purple-400 transition-colors duration-300"
                aria-label="Visit John Doe's GitHub profile"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-400">Zack956</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/amir-zakwan-bin-zabah-a0841b130/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-blue-400 transition-colors duration-300"
                aria-label="Visit John Doe's LinkedIn profile"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-400">@Amir Zakwan Bin Zabah</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className={fadeInRight('contact')}>
            <form
              action="https://formspree.io/f/xzzvppkq"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
