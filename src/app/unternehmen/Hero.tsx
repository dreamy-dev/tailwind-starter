import H1 from "@/components/typography/H1";

export default function Hero() {
  return (
    <section className="bg-white "> 
      <div className="mx-auto max-w-screen-4xl text-center  ">
        <iframe
          className="mx-auto w-full max-w-4xl h-80 sm:h-96"
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
