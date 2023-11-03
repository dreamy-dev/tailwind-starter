export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            Das ist Stadler
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Stadler baut Schienenfahrzeuge, die sich rechnen und auf die
            Bedürfnisse der Kunden zugeschnitten sind. Unsere Züge sind
            zuverlässig und betriebssicher – bei maximalem Reisekomfort für die
            Fahrgäste.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Die Leistungsfähigkeit und Wirtschaftlichkeit unserer Produkte
            verbessern wir laufend. Mit Technologien, die State of the Art sind.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img src="/about-us.jpg" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
