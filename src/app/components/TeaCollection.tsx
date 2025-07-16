'use client';

import { motion } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';

const teas = [
  {
    name: "Earl Grey Supreme",
    description: "A classic blend with bergamot and premium black tea",
    price: "$12.99",
    category: "Black Tea"
  },
  {
    name: "Jasmine Pearl",
    description: "Hand-rolled green tea scented with jasmine blossoms",
    price: "$15.99",
    category: "Green Tea"
  },
  {
    name: "Chamomile Bloom",
    description: "Soothing herbal tea with honey notes",
    price: "$10.99",
    category: "Herbal Tea"
  },
  {
    name: "Oolong Reserve",
    description: "Complex, partially oxidized tea with floral notes",
    price: "$18.99",
    category: "Oolong Tea"
  },
  {
    name: "Moroccan Mint",
    description: "Refreshing blend of green tea and spearmint",
    price: "$11.99",
    category: "Green Tea"
  },
  {
    name: "Golden Turmeric",
    description: "Wellness blend with turmeric and ginger",
    price: "$13.99",
    category: "Herbal Tea"
  }
];

export default function TeaCollection() {
  return (
    <section id="collection" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Our Tea Collection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Carefully curated selection of the finest teas from around the world
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teas.map((tea, index) => (
            <motion.div
              key={tea.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-800"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                    {tea.category}
                  </span>
                  <FiCoffee className="text-amber-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tea.name}</h3>
                <p className="text-gray-400 mb-4">{tea.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">{tea.price}</span>
                  <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}