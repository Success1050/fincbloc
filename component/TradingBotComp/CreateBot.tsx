"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FincBlocCreateBot() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Bullish", "Bearish", "Slicing Bots", "Sideways"];

  const allBots = [
    {
      id: 1,
      name: "Futures Grid",
      isNew: true,
      icon: "📊",
      features: ["Profit from market swings", "Ideal for volatile markets"],
      category: ["All", "Bullish", "Bearish"],
    },
    {
      id: 2,
      name: "Futures DCA",
      isNew: true,
      icon: "💹",
      features: [
        "Recover quickly from losses",
        "Enter low, exit high in stages",
      ],
      category: ["All", "Bullish"],
    },
    {
      id: 3,
      name: "Signal Bot",
      isNew: false,
      icon: "📡",
      features: ["Trade with low-latency signals automatically"],
      category: ["All", "Slicing Bots"],
    },
    {
      id: 4,
      name: "TWAP",
      isNew: false,
      icon: "⏱️",
      features: ["Place scheduled orders to reduce slippage."],
      category: ["All", "Sideways"],
    },
  ];

  const filteredBots =
    activeTab === "All"
      ? allBots
      : allBots.filter((bot) => bot.category.includes(activeTab));

  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-12"
        >
          Create My Bot
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-neutral-800"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`pb-4 text-base sm:text-lg md:text-xl font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Bot Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {filteredBots.map((bot, index) => (
              <motion.div
                key={bot.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-neutral-700 transition-all cursor-pointer group"
              >
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl"
                    >
                      {bot.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                        {bot.name}
                      </h3>
                    </div>
                  </div>
                  {bot.isNew && (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        ease: [0.34, 1.56, 0.64, 1] as const,
                      }}
                      className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded"
                    >
                      NEW
                    </motion.span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {bot.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.4 + index * 0.1 + idx * 0.1,
                        duration: 0.4,
                      }}
                      className="text-gray-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-gray-600 mt-1">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredBots.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No bots available in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
