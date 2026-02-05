import Link from "next/link";

function FeaturedWork() {
  return (
    <section className="px-8 md:px-16 py-32">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl">Selected Work</h2>

        <Link className="underline hover:text-gold-500" href="/work">
          View all
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {[1, 2].map((i) => (
          <div key={i} className="h-75 border rounded-xl flex items-end p-6">
            <div>
              <h3 className="text-xl">Project Name</h3>
              <p className="opacity-70 text-sm">Brand repositioning & launch</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
