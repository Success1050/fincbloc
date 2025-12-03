// components/WorldwideBuzzMedia.tsx
import React from "react";
import Image from "next/image";

interface MediaCard {
  id: number;
  title: string;
  description: string;
  logo: string;
  logoAlt: string;
}

const WorldwideBuzzMedia: React.FC = () => {
  const mediaCards: MediaCard[] = [
    {
      id: 1,
      title: "FincBloc futures performance rivals top exchanges across...",
      description:
        "FincBloc Exchange has achieved a significant milestone in future market performance, establishing itself as a top-tier competitor...",
      logo: "/7.png",
      logoAlt: "Cointelegraph",
    },
    {
      id: 2,
      title: "FincBloc Guide: Everything About the Trading Platform in 2025",
      description:
        "FincBloc is a top-tier cryptocurrency exchange that specializes in futures trading. This FincBloc guide will teach you how to...",
      logo: "/8.png",
      logoAlt: "BeInCrypto",
    },
    {
      id: 3,
      title: "FincBloc Empowers Users with Coin-Margined Perpetual...",
      description:
        "FincBloc, a leading cryptocurrency exchange known for its user-centric innovation, is pleased to announce the launch of coin-...",
      logo: "/9.jpeg",
      logoAlt: "U.Today",
    },
  ];

  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Worldwide Buzz Media on Our
          <br />
          Narrative
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaCards.map((card) => (
            <article
              key={card.id}
              className="group relative flex min-h-[380px] flex-col justify-between rounded-3xl border border-gray-800 bg-black p-8 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50"
            >
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold leading-tight text-white transition-colors group-hover:text-gray-100">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  {card.description}
                </p>
              </div>

              {/* Logo at bottom */}
              <div className="mt-8 flex items-center">
                <div className="relative h-8 w-40">
                  <Image
                    src={card.logo}
                    alt={card.logoAlt}
                    fill
                    className=" object-left w-[150px]"
                  />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-linear-to from-gray-800/10 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldwideBuzzMedia;
