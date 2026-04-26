"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Customer Sales Dashboard',
    description: 'Problem: sales data was trapped in spreadsheets. Action: built a live dashboard with forecasting and channel performance. Result: 35% revenue growth and 50% faster decision-making.',
    image: '/picture/data-analytics.jpg',
    tools: ['Python', 'Power BI', 'SQL'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'E-commerce Website',
    description: 'Problem: the online store lost visitors on slow pages. Action: launched a fast, mobile-first site with clear offers. Result: 42% more demo requests and stronger sales-ready traffic.',
    image: '/picture/web-development.jpg',
    tools: ['React', 'Next.js', 'Stripe'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Marketing Campaign Tracker',
    description: 'Problem: campaigns were measured in separate tools. Action: built a single tracker for every channel. Result: 65% better ROI and 10+ hours saved every week.',
    image: '/picture/digital-marketing.jpg',
    tools: ['Google Analytics', 'Python', 'Tableau'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'My Portfolio Website',
    description: 'Problem: needed a professional portfolio to showcase services. Action: built a modern, responsive portfolio site with smooth animations. Result: improved brand credibility and increased client inquiries.',
    image: '/picture/portfolio-preview.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveDemo: 'https://ramkumarp.vercel.app/',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in data, development, and marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                {/* Overlay with View Project button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}