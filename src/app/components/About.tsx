'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiHome } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey of passion, tradition, and the perfect cup of tea
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon={<FiHome />}
            title="Traditional Values"
            description="Founded on the principles of quality and authenticity, bringing you the finest tea experiences."
          />
          <Feature 
            icon={<FiHeart />}
            title="Crafted with Love"
            description="Every blend is carefully curated and tested to ensure the perfect balance of flavors."
          />
          <Feature 
            icon={<FiAward />}
            title="Award Winning"
            description="Recognized for our commitment to excellence and innovation in tea crafting."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-black/50 rounded-2xl p-8 md:p-12 border border-gray-800"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              Our Commitment to Quality
            </h3>
            <p className="text-gray-300 mb-8">
              We travel the world to source the finest tea leaves, working directly with farmers
              who share our passion for quality and sustainability. Every cup of tea we serve
              is a testament to our commitment to excellence and our respect for tea traditions
              from around the globe.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-amber-400/10 p-4 rounded-full text-amber-400 text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}