"use client";

import { motion } from 'framer-motion';

export default function Trust() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
  ];

  const tools = [
    'Python', 'SQL', 'Power BI', 'React', 'Next.js', 'Tailwind CSS', 'Google Analytics', 'SEO'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Businesses Trust Me for High-Leverage Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I turn data, tools and marketing into predictable leads and reliable revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Tools that power fast growth</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="bg-gray-100 text-primary px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
