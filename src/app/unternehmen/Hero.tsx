export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl text-center pt-16 sm:pt-20 lg:pt-32">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl tracking-tight">
          Das ist Stadler
        </h1>
        <p className="mb-24 font-light text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48">
          Stadler baut Schienenfahrzeuge, die sich rechnen und auf die
          Bedürfnisse der Kunden zugeschnitten sind. Unsere Züge sind
          zuverlässig und betriebssicher – bei maximalem Reisekomfort für die
          Fahrgäste.
        </p>

        <iframe
          className="mx-auto w-full max-w-2xl h-64 rounded-lg sm:h-96"
          src="https://www.youtube.com/embed/RVIil82HKaA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
