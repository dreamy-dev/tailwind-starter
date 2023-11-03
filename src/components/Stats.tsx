import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useScroll } from "framer-motion";

interface StatsProps {
  data: {
    text: string;
    end: number;
    suffix: string;
  }[];
  backgroundColor: string;
}

const Stats: React.FC<StatsProps> = ({ data, backgroundColor }) => {
  const { scrollYProgress } = useScroll();
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const updateCounterOn = (latest: number) => {
      if (latest > 0.5) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };

    const unsubscribe = scrollYProgress.onChange(updateCounterOn);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className={`py-24 sm:py-24 ${backgroundColor}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {data.map((stat, index) => (
              <div
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                key={index}
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.text}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {counterOn && <CountUp end={stat.end} suffix={stat.suffix} />}
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
