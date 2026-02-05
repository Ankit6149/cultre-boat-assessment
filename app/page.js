import FeaturedWork from "./_components/sections/FeaturedWork";
import FinalCTA from "./_components/sections/FinalCTA";
import Hero from "./_components/sections/Hero";
import Philosophy from "./_components/sections/Philosophy";
import Process from "./_components/sections/Process";
import ServicesPreview from "./_components/sections/ServicesPreview";
import FadeIn from "./_lib/FadeIn";

export default function Home() {
  return (
    <div>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={200}>
        <Philosophy />
      </FadeIn>
      <FadeIn delay={400}>
        <ServicesPreview />
      </FadeIn>
      <FadeIn delay={500}>
        <FeaturedWork />
      </FadeIn>
      <FadeIn delay={600}>
        <Process />
      </FadeIn>
      <FadeIn delay={800}>
        <FinalCTA />
      </FadeIn>
    </div>
  );
}

// TESTING PAGE - DELETE LATER
// export default async function Page() {
//   // 1. Force a 3-second wait
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return (
//     <div>
//       <h1>Page Loaded!</h1>
//     </div>
//   );
// }
