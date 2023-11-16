import H1 from "@/components/typography/H1";

export default function Hero() {
  return (
    <section className="bg-white "> {/* bg-[url('/ernst-stadler.jpg')] */}
      <div className="mx-auto max-w-screen-xl text-center pt-16 sm:pt-20 lg:pt-32 ">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl tracking-tight">
          Das ist Stadler
        </h1>
        <p className="mb-24 font-normal text-black md:text-lg lg:text-xl sm:px-16 xl:px-48">
          Stadler baut Schienenfahrzeuge, die sich rechnen und auf die
          Bedürfnisse der Kunden zugeschnitten sind. Unsere Züge sind
          zuverlässig und betriebssicher – bei maximalem Reisekomfort für die
          Fahrgäste.
        </p>
        <iframe
          className="mx-auto w-full max-w-2xl h-64 sm:h-96"
          src="https://www.youtube.com/embed/RVIil82HKaA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
