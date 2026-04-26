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
            Case Study: Customer Sales Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How I helped a retail business increase sales by 35% through data-driven insights.
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
            <h3 className="text-2xl font-bold text-primary mb-4">The Problem</h3>
            <p className="text-gray-600 leading-relaxed">
              The client was struggling with disorganized sales data across multiple channels. They lacked visibility into customer behavior, leading to missed opportunities and inefficient inventory management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">The Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              I built a comprehensive dashboard using Python for data processing, SQL for database management, and Power BI for visualization. The solution included real-time data syncing and predictive analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">The Result</h3>
            <p className="text-gray-600 leading-relaxed">
              Within 3 months, the client saw a 35% increase in sales, 50% reduction in inventory costs, and improved decision-making with actionable insights available 24/7.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}