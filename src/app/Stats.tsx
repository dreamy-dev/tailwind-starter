import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

interface ScrollTriggerProps {
  onEnter?: () => boolean;
  onExit?: () => boolean;
}

const Stats: React.FC<{ props: ScrollTriggerProps }> = () => {
  const [counterOn, setCounterOn] = useState(false);
  const handleEnter = () => {
    setCounterOn(true);
    return true;
  };

  const handleExit = () => {
    setCounterOn(false);
    return false;
  };
  return (
    <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
      <div className="bg-secondaryBgcLightBlue py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Mitarbeiter weltweit
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counterOn && <CountUp end={14} suffix=" Tsd" />}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Produktionsstandorte
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counterOn && <CountUp end={15} />}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Arbeitstunden
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counterOn && <CountUp end={170} suffix=" Mio" />}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Team</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counterOn && <CountUp end={1} />}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </ScrollTrigger>
  );
};
export default Stats;
