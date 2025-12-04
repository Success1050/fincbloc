"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Step {
  title: string;
  number: number;
}

const CryptoJourneySection: React.FC = () => {
  const steps: Step[] = [
    { title: "Create Your Account Now", number: 1 },
    { title: "Fund Your Wallet", number: 2 },
    { title: "Start Trading and Earning", number: 3 },
  ];

  // Animation variants
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          FUEL YOUR JOURNEY IN CRYPTO
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/home1.png"}
                alt="process"
                height={500}
                width={500}
                className="w-[400px]"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                  className="group bg-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-orange-500/10 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300"
                        whileHover={{
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="font-semibold">{step.number}</span>
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <Link href="https://dash.fincbloc.com/register">
                      <motion.div
                        className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        <motion.div
                          animate={{
                            x: [0, 3, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoJourneySection;
