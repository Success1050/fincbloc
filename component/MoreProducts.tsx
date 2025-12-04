"use client";

import React from "react";
import { TrendingUp, Zap, Bot } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      title: "Spot Trading",
      description:
        "Buy and sell crypto instantly with real-time market prices. Perfect for beginners and pros alike.",
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      title: "Futures Trading",
      description:
        "Trade like a whale with diverse futures markets. Smarter, faster, and bigger — all in one powerful platform.",
      icon: <Zap className="w-12 h-12" />,
    },
    {
      title: "Unified Trading Account",
      description:
        "Automate your trades 24/7 with AI-powered bots. Manage strategies across accounts effortlessly.",
      icon: <Bot className="w-12 h-12" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            DISCOVER MORE PRODUCTS
          </h2>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                className="mb-6 text-orange-500"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {product.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                {product.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center text-orange-500 font-medium">
                  <span className="mr-2">Learn more</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
