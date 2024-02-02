import H1 from "@/components/typography/H1";
import SmallWidth from "@/components/layouts/SmallWidth";

export default function Hero() {
  return (
    <section className="bg-white pb-5 lg:pb-24">
      <SmallWidth>
        <div className="col-span-12 text-center  ">
          <video
            className="-mt-[1%] -mb-[1%]"
            controls={true}
            autoPlay={true}
            muted={true}
            // src={"/videos/DE-Black-Bars.mp4"}
            loop={true}
          />
        </div>
      </SmallWidth>
    </section>
  );
}
