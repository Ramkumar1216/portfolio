"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hi, I'm Ramkumar, a passionate data analyst, web developer, and digital marketer with over 5 years of experience helping businesses leverage technology and data to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I help businesses make smarter decisions using data and technology. Whether it's building insightful dashboards, creating engaging websites, or optimizing marketing campaigns, I deliver solutions that drive real results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Profile+Photo"
              alt="Ramkumar - Data Analyst, Web Developer & Digital Marketer"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}