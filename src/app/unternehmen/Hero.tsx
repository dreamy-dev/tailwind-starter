import H1 from "@/components/typography/H1";
import SmallWidth from "@/components/layouts/SmallWidth";

export default function Hero() {
  return (
    <section className="bg-white ">
      <SmallWidth>
        <div className="col-span-12 text-center  ">
          <video
            className="-mt-[1%] -mb-[1%]"
            controls={false}
            autoPlay={true}
            muted={true}
            src={"/videos/Movie-Stadler-Kurz-People-Focus-no-frame-1080.mp4"}
            loop={true}
          />
        </div>
      </SmallWidth>
    </section>
  );
}
