import React from "react";
import { ChevronRight } from "lucide-react";

const ExploreFutureFinance: React.FC = () => {
  const images = [
    {
      id: 1,
      url: "/2.png",
      alt: "FincBloc Event",
      span: "row-span-2",
    },
    {
      id: 2,
      url: "/3.png",
      alt: "Fire Performance",
      span: "",
    },
    {
      id: 3,
      url: "/4.png",
      alt: "Building Night",
      span: "",
    },
    {
      id: 4,
      url: "/5.png",
      alt: "FincBloc Building",
      span: "",
    },
  ];

  return (
    <section className="w-full bg-black px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Explore Future Finance
          </h2>
          <button className="flex items-center gap-2 text-white transition-all hover:gap-3">
            <span className="text-sm font-medium sm:text-base">View More</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large Left Image */}
          <div className="relative overflow-hidden rounded-2xl sm:col-span-1 lg:row-span-2">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to from-black/60 to-transparent" />
          </div>

          {/* Top Right Image */}
          <div className="relative overflow-hidden rounded-2xl sm:col-span-1 lg:col-span-2">
            <img
              src={images[1].url}
              alt={images[1].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to from-black/60 to-transparent" />
          </div>

          {/* Bottom Right Small Image 1 */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={images[2].url}
              alt={images[2].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to from-black/60 to-transparent" />
          </div>

          {/* Bottom Right Small Image 2 */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={images[3].url}
              alt={images[3].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to from-black/60 to-transparent" />
          </div>

          {/* Bottom Right Small Image 3 */}
          {/* <div className="relative overflow-hidden rounded-2xl">
            <img
              src={images[4].url}
              alt={images[4].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to from-black/60 to-transparent" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExploreFutureFinance;
