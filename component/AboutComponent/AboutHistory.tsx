"use client";
import { motion } from "framer-motion";

export default function FincBlocMilestones() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16 sm:mb-20 md:mb-24">
          Milestones
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Always centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-500 via-orange-500 to-orange-500 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
            {/* 2025 - Left Side */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
                  2025
                </h3>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Q1 */}
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      Q1
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                      <li>
                        • Became the Title Sponsor of TOKEN2049, hosting 1,000+
                        attendees at the Whale's Rave Afterparty.
                      </li>
                      <li>
                        • Launched Unified Trading Account (UTA), the 4th major
                        exchange to offer this feature.
                      </li>
                      <li>• Introduced Grid Trading to the platform.</li>
                    </ul>
                  </div>

                  {/* Q2 */}
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      Q2
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                      <li>
                        • Launched the FincBloc Mastercard Crypto Card, enabling
                        secure and effortless payments.
                      </li>
                      <li>
                        • Rolled out new trading features: Copy Multiple
                        Traders, Coin-M Contracts, and Trade on Chart.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Empty */}
              <div />

              {/* Orange Dot */}
              <div className="absolute left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-orange-500/50" />
            </div>

            {/* 2024 - Right Side */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
              {/* Left Side - Empty */}
              <div />

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-left pl-4 sm:pl-6 md:pl-8 lg:pl-12"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
                  2024
                </h3>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Q1-Q2 */}
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      Q1-Q2
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                      <li>• Officially launched FincBloc Spot trading.</li>
                      <li>
                        • Enhanced compliance and security by integrating
                        Chainalysis.
                      </li>
                      <li>
                        • Established security with industry-leading cold wallet
                        protection via Fireblocks.
                      </li>
                    </ul>
                  </div>

                  {/* Q2 */}
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      Q2
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                      <li>
                        • Listed on DeFiLlama's CEX Transparency Dashboard.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Orange Dot */}
              <div className="absolute left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-orange-500/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
