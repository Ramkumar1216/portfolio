"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand Your Business',
    description: 'We start with a deep dive into your goals, challenges, and current processes to identify opportunities for improvement.',
  },
  {
    number: '02',
    title: 'Analyze Data & Build Solution',
    description: 'Using advanced analytics and modern technologies, I develop tailored solutions that address your specific needs.',
  },
  {
    number: '03',
    title: 'Deliver Results & Optimize',
    description: 'I implement the solution, provide training, and continuously optimize for maximum impact and ROI.',
  },
];

export default function Process() {
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
            My Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful outcomes for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-accent mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}