import { storyblokEditable } from "@storyblok/react/rsc";
import H2 from "../typography/H2";
import CountUp from "react-countup";
import ContentWidth from "../layouts/ContentWidth";

const FactsAndFiguresItem = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-y-2 col-span-1 max-w-[400px]">
        <dt className="text-xl leading-7 text-black"></dt>
        <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
          <CountUp
            // start={blok?.start ?? 0}
            // end={blok?.end ?? ""}
            // suffix={blok?.suffix ?? " "}
            // prefix={blok?.prefix ?? " "}
            // duration={blok?.duration ?? 2}
            // separator={blok?.separator ?? " "}
            // decimals={blok?.decimals ?? 0}
            // decimal={blok?.decimal ?? "'"}
            enableScrollSpy
          ></CountUp>
        </dd>
      </div>
    </div>
  );
};

export default FactsAndFiguresItem;
