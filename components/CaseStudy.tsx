"use client";

import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Case Study: Sales Dashboard That Scaled Revenue Fast
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A strong retail client went from messy sales reports to a single dashboard that created quick wins and measurable profit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Problem</h3>
            <p className="text-gray-600 leading-relaxed">
              The business was losing deals because sales data was split across tools, and leaders were making decisions from stale reports.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Action</h3>
            <p className="text-gray-600 leading-relaxed">
              I built a live analytics dashboard with sales forecasting, channel performance, and lead scoring so the team could act on the right opportunities immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Results</h3>
            <p className="text-gray-600 leading-relaxed">
              In 90 days the client saw +35% revenue, 50% lower inventory costs, and the team gained 10 hours per week back from reporting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}