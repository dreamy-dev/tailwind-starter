import CountUp from "react-countup";
import { motion } from "framer-motion";
import ContentWidth from "../layouts/ContentWidth";

interface StatsProps {
  data: {
    text?: string;
    end: number;
    suffix?: string;
    prefix?: string;
  }[];
  backgroundColor?: string;
}

const Stats: React.FC<StatsProps> = ({ data, backgroundColor }) => {
  return (
    <ContentWidth>
      <motion.div className="" />
      <div className={`my-24 col-span-12 max-w-full  ${backgroundColor}`}>
        <div className=" px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {data.map((stat, index) => (
              <div
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                key={index}
              >
                <dt className="text-xl leading-7 text-primary">{stat.text}</dt>
                <dd className="order-first  text-6xl font-semibold tracking-tight text-black sm:text-5xl">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    enableScrollSpy
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ContentWidth>
  );
};

export default Stats;
