"use client";

import React from "react";
import { Shield, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

const SecuritySection: React.FC = () => {
  const partners = [
    { name: "Fireblocks", icon: "🔺" },
    { name: "Chainalysis", icon: "🔗" },
    { name: "ISO 27001", icon: "✓", isBadge: true },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const partnerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-orange-500">FincBloc</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-leading security and trusted partnerships
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card - Security Info */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Partners Row */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={partnerVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    partner.isBadge
                      ? "bg-blue-900/30 border-2 border-blue-500 w-20 h-20 rounded-full flex items-center justify-center"
                      : "bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-full"
                  }`}
                >
                  {partner.isBadge ? (
                    <div className="text-center">
                      <div className="text-blue-400 text-xs font-semibold">
                        ISO
                      </div>
                      <div className="text-white text-xs font-bold">27001</div>
                      <div className="text-blue-400 text-[8px]">Certified</div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-black font-semibold">
                      <span className="text-lg">{partner.icon}</span>
                      <span>{partner.name}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Security Message */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                YOUR <span className="text-gray-400">ASSETS</span>, YOUR
                <br />
                <span className="text-gray-400">PRIVACY PROTECTED</span>
                <br />
                BY <span className="text-gray-400">MULTI-</span>LAYER
                <br />
                SECURITY
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-orange-500 text-lg font-medium"
              >
                Top-tier partners. Top-level asset protection.
              </motion.p>

              {/* Key Chain Illustration */}
              <motion.div
                variants={itemVariants}
                className="relative mt-12 flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Key ring */}
                  <motion.div
                    className="w-16 h-20 border-4 border-gray-600 rounded-full relative"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-gray-600 rounded-full bg-black"></div>
                  </motion.div>

                  {/* Keys hanging */}
                  <motion.div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Key 1 */}
                    <div className="w-6 h-16 bg-gradient-to-b from-orange-600 to-orange-800 rounded-sm relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute bottom-1 left-0 right-0 h-3 bg-orange-900"></div>
                    </div>

                    {/* FincBloc Tag */}
                    <motion.div
                      className="w-12 h-16 bg-gradient-to-br from-orange-500 to-orange-700 transform rotate-12 flex items-center justify-center text-black font-bold text-xs rounded-sm shadow-lg"
                      whileHover={{ rotate: 20, scale: 1.1 }}
                    >
                      <div className="text-center">
                        <Shield className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-[8px]">FincBloc</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Card - Lock & Shield Visual */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10 flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Main Lock & Shield */}
            <div className="relative z-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Shield background */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="w-48 h-56 bg-gradient-to-br from-gray-800 to-black rounded-t-full border-4 border-gray-700 relative">
                    {/* Shield details */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-900/30 to-transparent rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Lock */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative">
                    {/* Lock body */}
                    <motion.div
                      className="w-32 h-24 bg-gradient-to-br from-gray-900 to-black border-4 border-orange-500 rounded-xl flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Fingerprint icon */}
                      <motion.div
                        className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg
                          className="w-10 h-10 text-orange-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 10v4M12 17h.01M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {/* Lock shackle */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-16 border-t-4 border-l-4 border-r-4 border-orange-500 rounded-t-full"
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Check mark ribbon */}
                <motion.div
                  className="absolute top-8 right-4 w-20 h-24 bg-gradient-to-br from-orange-500 to-orange-600 transform rotate-12 rounded-lg flex items-center justify-center shadow-xl z-30"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 12 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                  whileHover={{ rotate: 20, scale: 1.1 }}
                >
                  <Check className="w-12 h-12 text-white stroke-[3]" />
                </motion.div>

                {/* Decorative orange ribbon wave */}
                <motion.div
                  className="absolute bottom-0 right-0 w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 transform -rotate-12 blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{ transformOrigin: "left" }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-4 right-8 w-32 h-3 bg-gradient-to-r from-orange-500 to-orange-600 transform rotate-6 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  style={{ transformOrigin: "left" }}
                ></motion.div>
              </div>
            </div>

            {/* Background glow effects */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
