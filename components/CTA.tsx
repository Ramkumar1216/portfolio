"use client";

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to stop leaving revenue on the table?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            The faster you act, the sooner you get better leads, higher sales, and less wasted spend. My calendar fills quickly — book now before the next growth window closes.
          </p>
          <motion.a
            href="#contact"
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Growth Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}