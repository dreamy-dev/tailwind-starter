import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

interface ScrollTriggerProps {
  onEnter?: () => boolean;
  onExit?: () => boolean;
}

const Stats: React.FC = () => {
  const [counterOn, setCounterOn] = useState(false);
  const handleEnter = () => {
    setCounterOn(true);
    return true; // You can return a boolean here if needed
  };

  const handleExit = () => {
    setCounterOn(false);
    return true; // You can return a boolean here if needed
  };
  return (
    <>
      <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Transactions every 24 hours
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {counterOn && <CountUp end={44} suffix="million" />}
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Assets under holding
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {counterOn && (
                    <CountUp end={199} prefix="$" suffix=" trillion" />
                  )}
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  New users annually
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {counterOn && <CountUp end={46000} />}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default Stats;
