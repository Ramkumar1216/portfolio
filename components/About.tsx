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
              Growth Work for Business Owners Who Need Leads and Revenue
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I help owners and founders stop wasting time on guesswork. I turn data into clear actions, slow websites into conversion engines, and campaigns into steady qualified leads.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you want a premium growth partner who focuses on real business impact — more leads, higher sales, and better ROI — this is the work I do every week.
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
              src="/picture/profile.jpeg"
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