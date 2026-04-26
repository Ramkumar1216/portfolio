"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              I Help Businesses Grow with Data, Technology & Marketing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              From insights to execution — I build data-driven solutions that increase revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Hero+Illustration"
              alt="Professional illustration"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}