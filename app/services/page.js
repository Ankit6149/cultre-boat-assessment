import Button from "../_components/Button";
import FadeIn from "../_lib/FadeIn";

function page() {
  const services = [
    {
      title: "Brand Strategy",
      description:
        "Define your brand’s identity, positioning, and story to create lasting impact.",
    },
    {
      title: "Visual Identity & Design",
      description:
        "Logos, typography, and visual systems that capture attention and reflect your brand.",
    },
    {
      title: "Digital Experiences",
      description:
        "Website and digital product design that’s intuitive, engaging, and memorable.",
    },
    {
      title: "Communications & PR",
      description:
        "Storytelling and campaigns that resonate with your audience and amplify your presence.",
    },
    {
      title: "Creative Campaigns",
      description:
        "Innovative campaigns that blend strategy and creativity to make your brand unforgettable.",
    },
  ];

  return (
    <section className="px-8 md:px-16 py-32">
      {/* Hero / Intro */}
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We craft experiences that help brands stand out. Explore the ways we
            bring creativity, strategy, and storytelling together.
          </p>
        </div>
      </FadeIn>

      {/* Service Cards */}
      <FadeIn delay={200}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gold-600 hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-2xl mb-3 font-medium">{service.title}</h3>
              <p className="opacity-80 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={400}>
        <div className="mt-20 text-center">
          <Button>Start a Project</Button>
        </div>
      </FadeIn>
    </section>
  );
}

export default page;
