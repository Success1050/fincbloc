"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Step {
  title: string;
  number: number;
}

const CryptoJourneySection: React.FC = () => {
  const steps: Step[] = [
    { title: "Create Your Account Now", number: 1 },
    { title: "Fund Your Wallet", number: 2 },
    { title: "Start Trading and Earning", number: 3 },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
          FUEL YOUR JOURNEY IN CRYPTO
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Image
              src={"/home1.png"}
              alt="process"
              height={500}
              width={500}
              className="w-[400px]"
            />
          </div>

          {/* Right Side - Steps */}
          <div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group bg-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-orange-500/10 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300">
                        <span className="font-semibold">{step.number}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <Link href="https://dash.fincbloc.com/register">
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
};

export default CryptoJourneySection;
