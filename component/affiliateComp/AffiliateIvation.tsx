import React from "react";

const AffiliateInvitationSystem: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          Affiliate Invitation System
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          Our world-class invitation system gets you and your sub-affiliate
          followers earn together
        </p>
      </div>

      {/* Diagram Container */}
      <div className="max-w-6xl mx-auto">
        {/* You Avatar */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full shadow-lg mb-2"></div>
            <span className="text-black font-semibold text-lg">You</span>
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="relative mb-12">
          <svg
            className="w-full h-24"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            {/* Left curve */}
            <path
              d="M 600 0 Q 300 50, 200 100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            {/* Right curve */}
            <path
              d="M 600 0 Q 900 50, 1000 100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Two Sections */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Invitee Commission */}
          <div className="space-y-6">
            {/* Commission Box */}
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-black">Up to</p>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black">
                50%
              </div>
            </div>

            {/* Avatar Row */}
            <div className="flex justify-center gap-3 py-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-300 rounded-full shadow-md flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-gray-600"></div>
                </div>
              ))}
            </div>

            {/* Label */}
            <p className="text-center text-black font-semibold text-base sm:text-lg">
              Invitee Futures Trading Fees Commission
            </p>
          </div>

          {/* Right Section - Sub-affiliates Commission */}
          <div className="space-y-6">
            {/* Commission Box */}
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-orange-500">Plus</p>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-orange-500">
                X%
              </div>
            </div>

            {/* Avatar Row */}
            <div className="flex justify-center gap-3 py-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-300 rounded-full shadow-md flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-orange-500"></div>
                </div>
              ))}
            </div>

            {/* Label */}
            <p className="text-center text-black font-semibold text-base sm:text-lg">
              Sub-affiliates' Commission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateInvitationSystem;
