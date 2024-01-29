import H2 from "../typography/H2";

import CountUp from "react-countup";
import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";

interface StatsProps {
  data1: {
    text?: string;
    start?: number;
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    separator?: string;
    decimals?: number;
    decimal?: string;
  }[];
  data2: {
    text?: string;
    start?: number;
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    separator?: string;
    decimals?: number;
    decimal?: string;
  }[];
  backgroundColor?: string;
  title?: string;
  showTwoRows?: boolean;
  textBottom?: string;
}


const FactsAndFigures: React.FC<StatsProps> = ({ data1, data2, title, showTwoRows = true, backgroundColor, textBottom  = "Stand: HY 2023" }) => {
  const renderData = showTwoRows ? [...data1, ...data2] : data1;
  return (
    <section className="bg-primarySolid-50 dark:bg-gray-900 py-5 lg:py-24">
      <ContentWidth>
        <div className="col-span-12 my-auto  ">
          <div className="text-center mb-4">
            <H2>{title}</H2>
          </div>
          <div className="first-level">
            {/* <div className="border-b border-black border-solid">
            <H3 titleH3="Wirtschaftliche Kennzahlen"></H3>
          </div> */}
            <div className="bg-secondaryBgcGray py-8 sm:py-10">
              <div className="mx-auto max-w-full">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                  {renderData.map((stat, index) => (
                    <div
                      className="flex flex-col gap-y-2 col-span-1 max-w-[400px]"
                      key={index}
                    >
                      <dt className="text-xl leading-7 text-black">
                        {stat.text ?? "Lorem ipsum"}
                      </dt>
                      <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                        <CountUp
                          start={stat.start ?? 0}
                          end={stat.end ?? ""}
                          suffix={stat.suffix ?? " "}
                          prefix={stat.prefix ?? " "}
                          duration={stat.duration ?? 2}
                          separator={stat.separator ?? " "}
                          decimals={stat.decimals ?? 0}
                          decimal={stat.decimal ?? "'"}
                          enableScrollSpy
                        ></CountUp>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <Text styles="text-black text-xl text-right">{textBottom}</Text>
        </div>
      </ContentWidth>
    </section>
  );
};

export default FactsAndFigures;
