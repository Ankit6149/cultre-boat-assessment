"use client";

import Image from "next/image";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import FadeIn from "../_lib/FadeIn";

function GalleryMarquee() {
  const images = [
    {
      src: "/placeholder1.jpg",
      name: "Project Aurora",
      tagline: "Brand repositioning & launch",
      tools: "Figma, Photoshop",
      year: 2025,
    },
    {
      src: "/placeholder2.jpg",
      name: "Project Zenith",
      tagline: "Website & product",
      tools: "Figma, Webflow",
      year: 2024,
    },
    {
      src: "/placeholder3.jpg",
      name: "Project Nova",
      tagline: "Marketing Campaign",
      tools: "Illustrator, Premiere",
      year: 2025,
    },
    {
      src: "/placeholder4.jpg",
      name: "Project Orion",
      tagline: "Brand Design",
      tools: "Photoshop, Illustrator",
      year: 2024,
    },
    {
      src: "/placeholder5.jpg",
      name: "Project Vega",
      tagline: "Digital Media",
      tools: "After Effects, Figma",
      year: 2023,
    },
    {
      src: "/placeholder6.jpg",
      name: "Project Lyra",
      tagline: "UI/UX Design",
      tools: "Figma, Illustrator",
      year: 2025,
    },
  ];

  const loopImages = [...images, ...images];

  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  const handleClick = (img) => {
    setSelected(img);
    setPaused(true); // pause animation
  };

  const handleClose = () => {
    setSelected(null);
    setPaused(false); // resume animation
  };

  return (
    <section className="px-8 md:px-16 py-32">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
          Our Gallery
        </h2>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col gap-8 overflow-hidden">
          {/* Top Row - move right */}

          <div
            className={`flex gap-6 ${paused ? "animate-none" : "animate-marquee-reverse"}`}
          >
            {loopImages.map((img, idx) => (
              <div
                key={`top-${idx}`}
                className="flex shrink-0 w-64 h-40 rounded-xl bg-charcoal-700 overflow-hidden cursor-pointer"
                onClick={() => handleClick(img)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={256}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Middle Row - move left */}
          <div
            className={`flex gap-6 ${paused ? "animate-none" : "animate-marquee"}`}
          >
            {loopImages.map((img, idx) => (
              <div
                key={`middle-${idx}`}
                className="flex shrink-0 w-64 h-40 rounded-xl overflow-hidden bg-charcoal-700 cursor-pointer"
                onClick={() => handleClick(img)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={256}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - move right */}
          <div
            className={`flex gap-6 ${paused ? "animate-none" : "animate-marquee-reverse"}`}
          >
            {loopImages.map((img, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex shrink-0 w-64 h-40 rounded-xl overflow-hidden bg-charcoal-700 cursor-pointer"
                onClick={() => handleClick(img)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={256}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <GalleryModal
        image={selected?.src}
        details={selected}
        onClose={handleClose}
      />
      <FadeIn>
        <p className="mt-8 text-center opacity-80 max-w-2xl mx-auto">
          A showcase of our recent projects scrolling seamlessly in multiple
          directions. Click to view details.
        </p>
      </FadeIn>
    </section>
  );
}

export default GalleryMarquee;
