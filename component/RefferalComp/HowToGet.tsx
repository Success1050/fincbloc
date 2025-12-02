import Link from "next/link";
import React from "react";

const HowToGetCommission: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 lg:mb-16">
          How to get commission
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Globe with CODE label */}
              <div className="relative">
                <div className="w-24 h-24 bg-orange-500 rounded-full relative overflow-hidden">
                  {/* Grid pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/20"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/20"></div>
                    <div className="absolute inset-2 border-2 border-black/20 rounded-full"></div>
                  </div>
                </div>
                {/* Orbital ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-16 border-2 border-orange-300 rounded-full transform rotate-12"></div>
                </div>
                {/* CODE label */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full border-2 border-orange-500 text-xs font-bold">
                  CODE
                </div>
                {/* Green dot */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-lime-400 rounded-full border-2 border-white"></div>
              </div>
            </div>

            <div className="w-16 h-1 bg-gray-300 rounded"></div>

            {/* Text */}
            <p className="text-base sm:text-lg font-semibold text-black max-w-xs">
              Share your referral code or link with your friends
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Link/Chain icon */}
              <div className="relative">
                {/* Orange ring/chain */}
                <div className="w-24 h-20 border-8 border-orange-500 rounded-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Green plus badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-xl">+</span>
                </div>
              </div>
            </div>

            <div className="w-16 h-1 bg-gray-300 rounded"></div>

            {/* Text */}
            <p className="text-base sm:text-lg font-semibold text-black max-w-xs">
              Invite friends to sign-up
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Coin icon */}
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-black flex items-center justify-center relative overflow-hidden">
                  {/* Inner coin design */}
                  <div className="absolute inset-2 border-2 border-black rounded-full"></div>
                  <div className="relative z-10 text-3xl font-bold text-black">
                    ¥
                  </div>
                </div>
                {/* Small plus decoration */}
                <div className="absolute -top-2 -right-2 text-black text-2xl">
                  +
                </div>
              </div>
            </div>

            <div className="w-16 h-1 bg-gray-300 rounded"></div>

            {/* Text */}
            <p className="text-base sm:text-lg font-semibold text-black max-w-xs">
              Receive a 30% commission from your friends' trading fees
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-black rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Icon and Text */}
          <div className="flex items-center gap-6">
            {/* Coin stack icon */}
            <div className="relative shrink-0">
              <div className="relative">
                {/* Green leaf */}
                <div className="absolute -left-4 top-2 w-8 h-12 bg-lime-400 rounded-full transform -rotate-45"></div>

                {/* Stack of coins */}
                <div className="relative">
                  <div className="w-16 h-6 bg-linear-to-b from-yellow-300 to-yellow-400 rounded-full border-2 border-yellow-600 mb-1"></div>
                  <div className="w-16 h-6 bg-linear-to-b from-yellow-300 to-yellow-400 rounded-full border-2 border-yellow-600 mb-1 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-800">
                        $
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-linear-to-b from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-yellow-900">$</span>
                  </div>
                </div>

                {/* White coin */}
                <div className="absolute -right-2 top-0 w-12 h-12 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-lg font-bold text-orange-500">฿</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
                FincBloc Affiliate
              </h3>
              <p className="text-white text-sm sm:text-base">
                Earn higher commission for influencer
              </p>
            </div>
          </div>

          {/* Right side - Button */}
          <Link href={"https://dash.fincbloc.com/login"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-200 whitespace-nowrap">
              Join Now
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
            Rules
          </h2>
          <ul className="space-y-4 md:space-y-5">
            <li className="flex gap-3 md:gap-4">
              <span className="text-gray-400 text-lg shrink-0">•</span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Share your referral code or link with a friend who does not have
                a FincBlocaccount.
              </p>
            </li>
            <li className="flex gap-3 md:gap-4">
              <span className="text-gray-400 text-lg shrink-0">•</span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Invitee can earn the platform Welcome Bonus within 15 days after
                registration. 30% of the invitee's trading fees will be given to
                his/her inviter.
              </p>
            </li>
            <li className="flex gap-3 md:gap-4">
              <span className="text-gray-400 text-lg shrink-0">•</span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                <span className="font-semibold">Disclaimer:</span> You can only
                claim one reward per referral. For example, you will not be
                eligible for Affiliate rewards if friends sign up using your
                regular Referral code / link.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToGetCommission;
