"use client";

import { motion } from 'framer-motion';

export default function WhyRamkumar() {
  const reasons = [
    {
      title: "Data-Driven Decisions",
      description: "I combine analytics expertise with business acumen to turn data into actionable insights that drive real results.",
      icon: "📊"
    },
    {
      title: "Full-Stack Development",
      description: "From concept to deployment, I handle everything - frontend, backend, databases, and cloud infrastructure.",
      icon: "⚡"
    },
    {
      title: "Marketing That Converts",
      description: "I don't just build websites, I create digital experiences that attract, engage, and convert visitors into customers.",
      icon: "🎯"
    },
    {
      title: "Problem Solver First",
      description: "Every project starts with understanding your unique challenges and crafting solutions that actually solve them.",
      icon: "🧠"
    },
    {
      title: "Fast & Reliable",
      description: "I deliver high-quality work quickly without compromising on attention to detail or best practices.",
      icon: "🚀"
    },
    {
      title: "Long-Term Partnership",
      description: "I'm not just a freelancer - I'm your technology partner who grows with your business.",
      icon: "🤝"
    }
  ];

  return (
    <section id="why-ramkumar" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Ramkumar?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            More than just skills - a mindset focused on delivering results that matter to your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help transform your ideas into successful digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}