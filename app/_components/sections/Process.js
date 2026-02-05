const steps = ["Discover", "Define", "Design & Deploy", "Amplify"];

function Process() {
  return (
    <section className="px-8 md:px-16 py-32">
      <h2 className="text-3xl mb-12">How we work</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step}>
            <h1 className="text-7xl opacity-40">0{i + 1}</h1>
            <h3 className="mt-2 text-xl">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
