import FadeIn from "../_lib/FadeIn";

function page() {
  const values = [
    "Clarity – We believe in clear messaging and purposeful design.",
    "Creativity – Every project gets fresh ideas tailored to the brand.",
    "Collaboration – We work closely with clients to bring their vision to life.",
    "Impact – Our work isn’t just aesthetic; it drives measurable results.",
  ];

  const differentiators = [
    "We focus on brand experiences rather than just visuals.",
    "Our integrated approach blends strategy, design, and communications.",
    "We create memorable brands that resonate with audiences long-term.",
  ];

  return (
    <section className="px-8 md:px-16 py-38 ">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Intro */}
        <FadeIn>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              About <i className="text-gold-600">Cultre</i> Boat
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Cultre Boat helps brands stand out in an increasingly crowded
              market. We combine creativity, strategy, and storytelling to craft
              experiences that resonate and endure.
            </p>
          </div>
        </FadeIn>

        {/* Mission / Values */}
        <FadeIn delay={200}>
          <div>
            <h2 className="text-3xl mb-6 underline underline-offset-4">
              Our Mission & Values
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg md:text-xl opacity-90 font-medium">
              {values.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Story / Journey */}
        <FadeIn delay={400}>
          <div>
            <h2 className="text-3xl mb-6">Our Journey</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Founded in 2017, Cultre Boat started as a small studio with a big
              idea: to create brands people remember. Over the years, we’ve
              partnered with startups, scale-ups, and established companies,
              helping them define identity, strategy, and storytelling.
            </p>
          </div>
        </FadeIn>

        {/* Why Us */}
        <FadeIn delay={600}>
          <div>
            <h2 className="text-3xl mb-6">Why Cultre Boat</h2>
            <ul className="list-disc list-inside space-y-3 text-lg md:text-xl opacity-90">
              {differentiators.map((diff, idx) => (
                <li key={idx}>{diff}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default page;
