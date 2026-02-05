import Link from "next/link";

function FinalCTA() {
  return (
    <section className="px-8 md:px-16 py-40 text-center">
      <h2 className="text-4xl md:text-5xl">
        Let’s build something meaningful.
      </h2>

      <div className="mt-10">
        <button className="px-8 py-4 rounded-full border hover:bg-gold-800 hover:text-offwhite-200">
          <Link href="/work">Start a Project</Link>
        </button>
      </div>
    </section>
  );
}

export default FinalCTA;
