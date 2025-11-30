// components/CTABanner.tsx
import React from "react";
import Link from "next/link";

const CTABanner: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Start your crypto journey now!
        </h2>

        {/* CTA Button */}
        <Link
          href={"https://dash.fincbloc.com/register"}
          className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 md:px-10 md:py-5 md:text-xl"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Sign up now
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
