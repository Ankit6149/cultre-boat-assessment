"use client";

import Image from "next/image";

function GalleryModal({ image, details, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-offwhite-50 dark:bg-charcoal-900 rounded-xl p-6 max-w-3xl w-full relative">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-charcoal-900 dark:text-offwhite-100"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src={image}
            alt={details.name}
            width={256}
            height={160}
            className="w-full md:w-1/2 h-auto rounded-xl object-cover"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2 text-charcoal-900 dark:text-offwhite-100">
              {details.name}
            </h3>
            <p className="text-charcoal-700 dark:text-offwhite-300 opacity-80 mb-2">
              {details.tagline}
            </p>
            <p
              className="text-charcoal
            -700 dark:text-offwhite-300 opacity-80 mb-1"
            >
              <strong>Tools:</strong> {details.tools}
            </p>
            <p className="text-charcoal-700 dark:text-offwhite-300 opacity-80">
              <strong>Year:</strong> {details.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
