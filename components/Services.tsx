"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights. I specialize in data cleaning, visualization, forecasting, and building dashboards that drive business decisions.',
    icon: 'https://via.placeholder.com/64x64/0F172A/FFFFFF?text=📊',
    cta: 'Learn More',
  },
  {
    title: 'Web Development',
    description: 'Create fast, responsive, and user-friendly websites. From business sites to landing pages, I deliver modern web solutions using the latest technologies.',
    icon: 'https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=💻',
    cta: 'Learn More',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with strategic marketing. I handle social media, ads, SEO, and lead generation to increase your revenue.',
    icon: 'https://via.placeholder.com/64x64/22C55E/FFFFFF?text=📈',
    cta: 'Learn More',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Services That Drive Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, from data insights to digital growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <motion.button
                className="text-accent font-semibold hover:text-blue-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                {service.cta} →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}