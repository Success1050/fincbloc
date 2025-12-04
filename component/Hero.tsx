"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FincBloc - Where Small Trades
              <br />
              Grow Giant
            </motion.h1>

            {/* Email Signup Form */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.input
                type="text"
                placeholder="Email / Phone"
                className="flex-1 px-6 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-white placeholder-gray-500"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />

              <Link href={"https://dash.fincbloc.com/login"}>
                <motion.button
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xl">🎁</span>
                  <span>Sign up</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Abstract Wave/Whale */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[600px]">
              {/* Main glowing effect */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-3/4 h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-full blur-3xl"></div>
              </motion.div>

              {/* Abstract wave shapes */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Upper wave */}
                <motion.path
                  d="M100 250 Q 200 150, 350 200 Q 450 230, 550 180"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                />

                {/* Middle wave */}
                <motion.path
                  d="M50 300 Q 180 200, 320 260 Q 460 300, 580 240"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                />

                {/* Lower subtle wave */}
                <motion.path
                  d="M80 350 Q 200 280, 340 320 Q 480 350, 600 300"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />

                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fdba74" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated whale character */}
              <motion.div
                className="absolute bottom-20 right-24 text-7xl drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                animate={{
                  y: [0, -25, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                🐋
              </motion.div>

              {/* Additional glow effect around whale */}
              <motion.div
                className="absolute bottom-20 right-24 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
