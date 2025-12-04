"use client";
import { motion } from "framer-motion";

export default function FincBlocHowToBuy() {
  const steps = [
    {
      title: "Enter Amount & Select Payment",
      description:
        "Enter the desired amount, choose a payment method, and select/bind your payment account or card on FincBloc",
      image: "/buyImages/51.png",
      direction: "left",
    },
    {
      title: "Confirm Order",
      description:
        "Confirm your transaction details, including the trading pair, amount, fees, and any additional instructions.",
      image: "/buyImages/52.png",
      direction: "bottom",
    },
    {
      title: "Receive Your Crypto",
      description:
        "Once the payment is processed, the purchased crypto will be credited to your Funding Account.",
      image: "/buyImages/53.png",
      direction: "right",
    },
  ];

  // Animation variants for different directions
  const getVariants = (direction: string) => {
    const directions = {
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
      bottom: { y: 100, opacity: 0 },
      top: { y: -100, opacity: 0 },
    };

    return {
      hidden: directions[direction as keyof typeof directions] || {
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1] as const,
        },
      },
    };
  };

  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 md:mb-20"
        >
          How to Buy Crypto?
        </motion.h2>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={getVariants(step.direction)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 hover:border-neutral-700 transition-colors"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.2,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="mb-6 sm:mb-8"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + index * 0.2,
                  duration: 0.5,
                }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6"
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  duration: 0.5,
                }}
                className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
