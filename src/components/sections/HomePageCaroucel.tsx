import H3 from "../typography/H3";
import Link from "next/link";
import Text from "../typography/Text";
import H2 from "../typography/H2";
import { MotionConfig, motion, MotionProps } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import FullWidth from "../layouts/FullWidth";
import ButtonPrimary from "../elements/ButtonPrimary";

interface Cards {
  title: string;
  text: string;
  img: string;
  date?: string;
 
}

interface TestimonialMotionProps extends MotionProps {
  className?: string;
  ref?: any;
}

interface CarouselProps {
  items: Cards[];
  carouselTitle: string;
  showButton?: boolean;
  showDate?: boolean;
  h2Styles?: string;

}

const TestimonialMotionDiv: React.FC<TestimonialMotionProps> = motion.div;




const HomePageCaroucel: React.FC<CarouselProps> = ({
  items,
  carouselTitle,
  h2Styles,
 showButton = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showDate, setShowDate] = useState(true);
console.log("showButton value:", showButton);
  //Show dots on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*  swipe logic starts here */

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSwipe = (direction: "left" | "right") => {
    const totalImages = items.length;
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    } else if (direction === "right" && current < totalImages - 1) {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleSwipeStart = (e: TouchEvent | MouseEvent) => {
      setStartX(e instanceof TouchEvent ? e.touches[0].clientX : e.clientX);
      setIsDragging(true);
    };

    const handleSwipeMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return;

      const clientX =
        e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

      const distanceX = clientX - startX;

      if (Math.abs(distanceX) > 50) {
        const direction = distanceX > 0 ? "left" : "right";
        handleSwipe(direction);
        setStartX(clientX);
      }
    };

    const handleSwipeEnd = () => {
      setIsDragging(false);
    };

    container.addEventListener("touchstart", handleSwipeStart);
    container.addEventListener("touchmove", handleSwipeMove);
    container.addEventListener("touchend", handleSwipeEnd);

    container.addEventListener("mousedown", handleSwipeStart);
    container.addEventListener("mousemove", handleSwipeMove);
    container.addEventListener("mouseup", handleSwipeEnd);

    return () => {
      container.removeEventListener("touchstart", handleSwipeStart);
      container.removeEventListener("touchmove", handleSwipeMove);
      container.removeEventListener("touchend", handleSwipeEnd);

      container.removeEventListener("mousedown", handleSwipeStart);
      container.removeEventListener("mousemove", handleSwipeMove);
      container.removeEventListener("mouseup", handleSwipeEnd);
    };
  }, [isDragging, startX]);

  /*   swipe logic ends here */

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  const cardContentRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleResize = () => {
      const maxCardHeight = Math.max(
        ...cardContentRef.current.map((ref) =>
          ref instanceof HTMLElement ? ref.clientHeight : 0
        )
      );

      cardContentRef.current.forEach((ref) => {
        if (ref instanceof HTMLElement) {
          const container = ref.closest(
            ".testimonial-motion-div"
          ) as HTMLDivElement | null;
          if (container) {
            container.style.height = `${maxCardHeight}px`;
          }
        }
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardContentRef]);

  return (
    <section className=" py-24 bg-white ">
      <FullWidth>
        <div className="col-span-12">
          <div className="relative">
            <div className="lg:pl-20 2xl:pl-0 mb-4">
              <H2 styles={h2Styles}>{carouselTitle}</H2>
            </div>
            {isMobile && (
              <div className="absolute top-[60px] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  z-10 ">
                <div className="flex gap-3 px-3 py-2 rounded-full opacity-80">
                  {items.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrent(idx)}>
                      <div
                        className={` w-8 h-1 ${
                          idx === current ? "bg-primary" : "bg-greyDarken-100"
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex lg:pl-20 flex-col items-center justify-between 2xl:pl-0">
            <MotionConfig
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div
                className="relative w-full max-w-[100%] flex items-center"
                ref={containerRef}
              >
                <motion.div className="flex gap-8 flex-nowrap overflow-hidden  ml-[-2px] pl-[2px] my-[-32px] py-[32px] pr-[2px] mr-[-2px]">
                  {items.map((card, idx) => (
                    <TestimonialMotionDiv
                      key={idx}
                      ref={(el: any) => (cardContentRef.current[idx] = el)}
                      className="min-w-[100%]  lg:min-w-[43%] md:flex-row  testimonial-motion-div shadow-md shadow-greyDarken-300"
                      animate={{
                        translateX: `calc(-${current * 102}% - ${current}rem) `,

                        opacity:
                          idx === current || idx === current + 1 ? 1 : 0.3,
                      }}
                    >
                      {/* <a href="#"> */}
                      <img
                        className="w-full max-h-[430px] object-cover"
                        src={card.img}
                        alt=""
                      />
                      {/* </a> */}
                      <div className="p-5 ">
                        <div className="mb-4">
                          <H3>{card.title}</H3>
                        </div>
                        {showDate && (
                          <div className="mb-4 text-primary">
                            <p>{card.date}</p>
                          </div>
                        )}

                        <div className="mb-4">
                          <Text>{card.text}</Text>
                        </div>
                        <Link
                          href="#"
                          className="inline-flex items-center py-2 text-sm font-medium text-center"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4995_6662)">
                              <path
                                d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                fill="#005893"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4995_6662">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </TestimonialMotionDiv>
                  ))}
                </motion.div>
              </div>
            </MotionConfig>
          </div>
          <div className="relative lg:pl-20  flex flex-row w-full mt-8 justify-beetween items-center ">
            <div className=" flex flex-row gap-4 justify-center items-center w-full">
              <motion.div
                className=" flex flex-row gap-4 z-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button onClick={onPrevClick}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                      fill="#005893"
                    />
                  </svg>
                </button>
                <button onClick={onNextClick}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                      fill="#005893"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
          {showButton && (
            <div className="mt-10 lg:pl-20 2xl:pl-0">
              <ButtonPrimary position="left">
                Alle News{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5650_6261)">
                    <path
                      d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5650_6261">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5 0.517578)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </ButtonPrimary>
            </div>
          )}
        </div>
      </FullWidth>
    </section>
  );
};

export default HomePageCaroucel;
