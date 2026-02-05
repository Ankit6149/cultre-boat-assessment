import Link from "next/link";
import Button from "../Button";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light font-serif leading-tight">
          We <b>build</b> <i className="text-gold-600">Brands</i>
          <br />
          people remember.
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-80 max-w-2xl">
          <b>Strategy</b>, <b>design</b>, and <b>PR</b> for brands that want to
          stand apart — not <span className="line-through">blend in</span>.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-full border hover:bg-gold-800 hover:text-offwhite-200">
            <Link href="/work">View Work</Link>
          </button>
          <Button>
            <Link href="/contact">Start a Project </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
