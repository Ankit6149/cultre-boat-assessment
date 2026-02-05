"use client";

import { useState } from "react";
import GalleryMarquee from "../_components/GalleryMarquee";
import FadeIn from "../_lib/FadeIn";

function Page() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Project Aurora",
      tagline: "Brand repositioning & launch",
      description:
        "Redefined visual identity and storytelling approach for a tech startup.",
      tools: "Figma, Photoshop, Illustrator",
      year: 2025,
    },
    {
      name: "Project Zenith",
      tagline: "Digital product & website",
      description:
        "Created an engaging website and mobile experience for a lifestyle brand.",
      tools: "Figma, Webflow, After Effects",
      year: 2024,
    },
    {
      name: "Project Nova",
      tagline: "Marketing campaign",
      description:
        "Developed a creative marketing campaign that boosted brand awareness by 40%.",
      tools: "Photoshop, Illustrator, Premiere Pro",
      year: 2025,
    },
  ];

  return (
    <section className="py-32  overflow-hidden">
      <FadeIn>
        {/* Page Heading */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Our <i className="text-gold-600">Work</i>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We bring ideas to life through <b>design</b>, <b>strategy</b>, and{" "}
            <b>storytelling</b>. Explore some of our selected work.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-8">
        <FadeIn delay={0.2}>
          {/* Main Projects */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 transition-all ease-in duration-500 gap-12 mb-32">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-offwhite-600 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-80 w-full transition all duration-300"></div>
                <div className="absolute inset-0 bg-offwhite-700 bg-opacity-40 opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in flex items-center justify-center">
                  <p className=" text-center text-2xl text-charcoal-800 px-4 transition-all">
                    {project.tagline}
                  </p>
                </div>
                <div className="mt-4 transition-all align-middle">
                  <h3 className="text-2xl text-gold-800 transition-all duration-700 font-medium">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Auto Scrolling Gallery */}
        <GalleryMarquee />

        {/* Modal */}

        {selectedProject && (
          <div className="fixed inset-0 bg-opacity-70 flex text-gold-300 bg-charcoal-900/70 items-center justify-center z-50 p-4">
            <div className="rounded-xl max-w-3xl w-auto p-8 relative">
              <button
                className="absolute top-4 right-4 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h2 className="text-3xl mb-4">{selectedProject.name}</h2>
              <p className="opacity-80 mb-4">{selectedProject.description}</p>
              <p className="opacity-70 mb-2">
                <strong>Tools:</strong> {selectedProject.tools}
              </p>
              <p className="opacity-70">
                <strong>Year:</strong> {selectedProject.year}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
