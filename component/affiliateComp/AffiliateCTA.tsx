import Link from "next/link";
import React from "react";

const BloFinCTA: React.FC = () => {
  return (
    <div className="w-full bg-linear-to-br from-gray-900 via-black to-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-4xl">
            Become a FincBloc Affiliate Now!
          </h2>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl leading-relaxed">
            Meet like-minded crypto enthusiasts in FincBloc Affiliate Community,
            share your thoughts, and grow your influence!
          </p>

          {/* CTA Button */}
          <Link href={"https://dash.fincbloc.com/login"}>
            {" "}
            <button className="group relative bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105 flex items-center gap-2">
              Join
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BloFinCTA;
