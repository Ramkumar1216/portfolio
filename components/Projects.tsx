"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Customer Sales Dashboard',
    description: 'Interactive dashboard for sales analytics with real-time data visualization and forecasting.',
    image: 'https://via.placeholder.com/400x200/0F172A/FFFFFF?text=Sales+Dashboard+Screenshot',
    tools: ['Python', 'Power BI', 'SQL'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'E-commerce Website',
    description: 'Modern, responsive e-commerce site with payment integration and admin panel.',
    image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=E-commerce+Website+Screenshot',
    tools: ['React', 'Next.js', 'Stripe'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Marketing Campaign Tracker',
    description: 'Tool to track and analyze digital marketing campaigns across multiple platforms.',
    image: 'https://via.placeholder.com/400x200/22C55E/FFFFFF?text=Marketing+Tracker+Screenshot',
    tools: ['Google Analytics', 'Python', 'Tableau'],
    liveDemo: '#',
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
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
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
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="flex-1 bg-accent text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-primary text-primary text-center py-2 rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}