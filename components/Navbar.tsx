"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Ramkumar
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#about" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - for simplicity, just show menu */}
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#about" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}