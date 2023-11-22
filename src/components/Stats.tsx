import CountUp from "react-countup";
import { motion } from "framer-motion";

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
    <>
      <motion.div className="progress-bar" />
      <div className={`py-24 sm:py-24 ${backgroundColor}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
    </>
  );
};

export default Stats;
