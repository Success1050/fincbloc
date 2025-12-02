import React from "react";
import AffiliateInvitationSystem from "./AffiliateIvation";
import Link from "next/link";

const FlncblocAffiliateWorks: React.FC = () => {
  const benefits = [
    {
      title: "Lifetime Commission",
      description:
        "All your invitees' trading fees will go to your account proportionally",
    },
    {
      title: "Industrial-Leading Commission",
      description: "Up to 50% commission on futures trading fees",
    },
    {
      title: "Daily Compensation",
      description: "Payments are calculated and processed on a daily basis.",
    },
    {
      title: "Invite to Earn More",
      description: "Extra commission when inviting sub-affiliates",
    },
  ];
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* linear Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-600/30 to-yellow-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-green-600/20 to-emerald-500/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Become a FincBloc Affiliate
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Receive up to 50% commission on the trading fee by simply casting
              your influence. Join the FincBloc Affiliate community now.
            </p>
            <Link href={"https://dash.fincbloc.com/login"}>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-base sm:text-lg">
                Become an Affiliate
              </button>
            </Link>
          </div>

          {/* Right Content - Affiliate Card Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glowing Base Platform */}
              <div className="relative">
                {/* Top Platform */}
                <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
                  {/* Card */}
                  <div className="relative bg-linear-to-br from-zinc-800 to-zinc-900 border-4 border-orange-500 rounded-2xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-orange-500">
                        <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <div className="w-8 h-3 bg-white rounded-full mb-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* Affiliate Badge */}
                    <div className="bg-orange-500 text-white font-bold text-center py-2 px-4 rounded-lg mb-4">
                      AFFILIATE
                    </div>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-2">
                      <div className="w-4 h-4 text-green-400">★</div>
                    </div>
                  </div>

                  {/* Support Beams */}
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="relative h-32">
                      {/* Left Beam */}
                      <div className="absolute left-8 top-0 w-2 h-full bg-linear-to-b from-green-400 to-transparent"></div>
                      {/* Right Beam */}
                      <div className="absolute right-8 top-0 w-2 h-full bg-linear-to-b from-green-400 to-transparent"></div>

                      {/* Corner Supports */}
                      <div className="absolute left-4 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                      <div className="absolute right-4 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                    </div>
                  </div>

                  {/* Base Platform */}
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-zinc-700 border-2 border-zinc-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-white text-black py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How does FincBloc Affiliate Program Work?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Boost your earnings by referring users to BloFin.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto shadow-2xl rounded-[16px] p-8 mb-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-100 rounded-lg transform rotate-45"></div>
                <svg
                  className="relative z-10 w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold">
                Apply to be an Affiliate
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-xs">
                Anyone with extensive networks can apply to become a BloFin
                Affiliate.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-100 rounded-lg transform rotate-45"></div>
                <svg
                  className="relative z-10 w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold">Promote BloFin</h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-xs">
                Refer FincBlocin articles, blog posts, and videos, or place ads
                on your websites.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-100 rounded-lg transform rotate-45"></div>
                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-orange-500 rounded-full"></div>
                  <div className="absolute w-3 h-3 bg-white rounded-full top-1 right-1"></div>
                  <svg
                    className="relative w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold">
                Earn up to 50% Commission
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-xs">
                When users sign up with your link, you'll receive commissions on
                every trade they make.
              </p>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mt-5 p-8 shadow-2xl rounded-[16px]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                    FincBloc Affiliate Program Benefits
                  </h2>
                  <p className="text-gray-500 text-base sm:text-lg">
                    FincBlocaims to provide the best win-win affiliate program
                    in the crypto industry.
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex justify-center lg:justify-start py-8">
                  <div className="relative w-64 sm:w-80">
                    {/* Laptop Base */}
                    <div className="relative">
                      {/* Laptop Screen Frame */}
                      <div className="bg-gray-200 rounded-t-lg p-2 border-4 border-gray-300">
                        <div className="bg-white rounded-sm p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                          {/* Screen Content - Handshake */}
                          <div className="relative z-10">
                            {/* Left Hand (Orange sleeve) */}
                            <svg
                              className="w-full h-32"
                              viewBox="0 0 200 100"
                              fill="none"
                            >
                              {/* Orange Sleeve */}
                              <rect
                                x="10"
                                y="40"
                                width="70"
                                height="40"
                                fill="#FF8C00"
                                rx="5"
                              />
                              <circle cx="45" cy="60" r="8" fill="#FFA500" />

                              {/* Left Hand */}
                              <path
                                d="M70 50 L90 50 L90 70 L85 75 L80 75 L75 70 L70 70 Z"
                                fill="#FFF"
                                stroke="#000"
                                strokeWidth="1.5"
                              />

                              {/* Right Hand (White sleeve) */}
                              <rect
                                x="120"
                                y="40"
                                width="70"
                                height="40"
                                fill="#FFF"
                                stroke="#000"
                                strokeWidth="2"
                                rx="5"
                              />

                              {/* Right Hand */}
                              <path
                                d="M130 50 L110 50 L110 70 L115 75 L120 75 L125 70 L130 70 Z"
                                fill="#FFF"
                                stroke="#000"
                                strokeWidth="1.5"
                              />

                              {/* Handshake overlap */}
                              <rect
                                x="85"
                                y="55"
                                width="30"
                                height="20"
                                fill="#F5F5F5"
                                stroke="#000"
                                strokeWidth="1.5"
                              />

                              {/* Green circular element behind */}
                              <circle
                                cx="140"
                                cy="45"
                                r="25"
                                fill="#90EE90"
                                opacity="0.7"
                              />
                              <path
                                d="M130 45 L140 55 L160 35"
                                stroke="#22C55E"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          {/* Floating Coin */}
                          <div className="absolute top-4 left-8">
                            <div className="relative w-12 h-12 animate-bounce">
                              <div className="absolute inset-0 bg-linear-to-br from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-600 transform rotate-12"></div>
                              <div className="absolute inset-2 flex items-center justify-center">
                                <span className="text-yellow-800 font-bold text-xl">
                                  $
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Laptop Base */}
                      <div className="bg-linear-to-b from-orange-500 to-orange-600 h-3 rounded-b-lg border-4 border-t-0 border-orange-600"></div>
                      <div className="bg-gray-300 h-2 w-48 mx-auto rounded-b-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Benefits List */}
              <div className="space-y-6 lg:space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 group">
                    {/* Orange Dot */}
                    <div className="shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AFFILIATE SYSTEM */}

          <div className="mt-15">
            <AffiliateInvitationSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlncblocAffiliateWorks;
