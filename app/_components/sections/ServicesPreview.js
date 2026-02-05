const services = [
  {
    title: "PR & Communications",
    desc: "Earn attention, not noise.",
  },
  {
    title: "Brand & Visual Design",
    desc: "Identity systems that scale.",
  },
  {
    title: "Social & Content",
    desc: "Narratives built for modern platforms.",
  },
];

function ServicesPreview() {
  return (
    <section className="px-8 md:px-16 py-32">
      <h2 className="text-3xl mb-12">What we do</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-xl">
            <h3 className="text-xl">{s.title}</h3>
            <p className="mt-3 opacity-75">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;
