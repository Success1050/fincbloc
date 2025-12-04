"use client";
import { motion } from "framer-motion";

export default function FincBlocPartners() {
  const partners = [
    // Row 1
    [
      { name: "Fireblocks", logo: "△" },
      { name: "Chainalysis", logo: "⚡" },
      { name: "TradingView", logo: "TV" },
      { name: "Coin Market Manager", logo: "|||" },
      { name: "CoinMarketCap", logo: "Ⓜ" },
    ],
    // Row 2
    [
      { name: "mha", logo: "⊂" },
      { name: "CoinGecko", logo: "🦎" },
      { name: "HACKEN PROOF", logo: "H" },
      { name: "matrix PARTNERS", logo: "matrix" },
      { name: "INSULCO TERMINAL", logo: "✦" },
    ],
    // Row 3
    [
      { name: "VerifyVASP", logo: "V" },
      { name: "sumsub", logo: "⚊" },
      { name: "TokenInsight", logo: "◇" },
      { name: "NAV", logo: "⊞" },
      { name: "Loeb Smith", logo: "$" },
    ],
    // Row 4 (centered)
    [
      { name: "Tealstreet", logo: "≡" },
      { name: "DefiLlama", logo: "🦙" },
    ],
  ];

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 sm:mb-16 md:mb-20"
        >
          Partners
        </motion.h2>

        {/* Partners Grid */}
        <div className="space-y-6 lg:space-y-8">
          {/* Rows 1-3: 5 cards each */}
          {partners.slice(0, 3).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
            >
              {row.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 flex items-center justify-center min-h-[100px] sm:min-h-[120px] hover:border-neutral-700 transition-colors"
                >
                  <div className="text-center">
                    <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                      {partner.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}

          {/* Row 4: 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-2xl w-full">
              {partners[3].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 flex items-center justify-center min-h-[100px] sm:min-h-[120px] hover:border-neutral-700 transition-colors"
                >
                  <div className="text-center">
                    <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                      {partner.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
