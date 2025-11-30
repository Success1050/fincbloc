import React from "react";

export default function FincBlocHowToBuy() {
  const steps = [
    {
      title: "Enter Amount & Select Payment",
      description:
        "Enter the desired amount, choose a payment method, and select/bind your payment account or card on FincBloc",
      image: "/buyImages/51.png", // Replace with your actual image path
    },
    {
      title: "Confirm Order",
      description:
        "Confirm your transaction details, including the trading pair, amount, fees, and any additional instructions.",
      image: "/buyImages/52.png", // Replace with your actual image path
    },
    {
      title: "Receive Your Crypto",
      description:
        "Once the payment is processed, the purchased crypto will be credited to your Funding Account.",
      image: "/buyImages/53.png", // Replace with your actual image path
    },
  ];

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 md:mb-20">
          How to Buy Crypto?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 hover:border-neutral-700 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
