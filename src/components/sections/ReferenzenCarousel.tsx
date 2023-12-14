import H3 from "../typography/H3";
import Text from "../typography/Text";
import H2 from "../typography/H2";
import Link from "next/link";
import { MotionConfig, motion, MotionProps } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import FullWidth from "../layouts/FullWidth";
import ContentWidth from "../layouts/ContentWidth";

interface PaginationProps {
  total: number;
  current: number;
}

interface Image {
  title: string;
  text: string;
  img: string;
}

interface ResponsiveObject {
  desktop: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
  tablet: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
  mobile: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
}

interface TestimonialMotionProps extends MotionProps {
  responsive: ResponsiveObject;
  className?: string;
}

const TestimonialMotionDiv: React.FC<TestimonialMotionProps> = motion.div;

const trains = [
  {
    name:
      "Hybrider FLIRT 160 für Flughafen'Transit Hybrider FLIRT 160 für Flughafen'Transit",
    image: "/train-c.jpg",
  },
  {
    name: "Ein vollelektrischer FLIRT ywischen DE und NL",
    image: "/train-c.jpg",
  },
  {
    name: "Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT",
    image: "/train-c.jpg",
  },
];

const images = [
  {
    name: "Dallas Area Rapid Transit (DART) USA",
    title: "FLIRT bewegt die Welt",
    text:
      "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/train-c.jpg",
  },
  {
    name: "Dallas Area Rapid Transit (DART) USA",
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text:
      "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/train-c.jpg",
  },
  {
    name: "Dallas Area Rapid Transit (DART) USA",
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/train-c.jpg",
  },
  {
    name: "Dallas Area Rapid Transit (DART) USA",
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/train-c.jpg",
  },
  {
    name: "Dallas Area Rapid Transit (DART) USA",
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/train-c.jpg",
  },
];

const Pagination: React.FC<PaginationProps> = ({ total, current }) => {
  return (
    <div className="flex justify-center text-sm font-medium text-greySolid-400">
      <p className="text-sm font-medium flex flex-row gap-2">
        <span> {current + 1}</span>
        <span>|</span>
        <span>{total}</span>
      </p>
    </div>
  );
};

const responsive: ResponsiveObject = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const TestimonialsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showTrains, setShowTrains] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  const toggleTrainsVisibility = () => {
    setShowTrains(!showTrains);
  };

  return (
    <section className="py-24 bg-primarySolid-50">
      <FullWidth>
        <div className="col-span-12 max-w-full lg:pl-20 2xl:pl-0">
          <div className="flex justify-center items-center">
            <H2>Referenzen</H2>
          </div>
          <div className="flex  flex-col items-center justify-between overflow-hidden">
            <MotionConfig
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative w-full max-w-[100%] flex items-center ">
                <motion.div className="max-w-[100%] flex gap-6 flex-nowrap lg:mx-[-10px] lg:my-[-10px] lg:px-[10px] lg:py-[10px]">
                  {images.map((image, idx) => (
                    <TestimonialMotionDiv
                      key={image.title}
                      className="flex flex-col items-stretch min-w-[100%] overflow-hidden shadow-md shadow-greyDarken-200  lg:min-w-[90%] bg-white lg:flex-row "
                      animate={{
                        translateX: `calc(-${current * 100}% - ${current *
                          1.5}rem)`,
                        opacity: idx === current ? 1 : 0.3,
                      }}
                      responsive={responsive}
                    >
                      <img
                        src={image.img}
                        alt={image.title}
                        className="w-full lg:w-1/2 object-fit max-h-[350px] md:max-h-[400px] lg:max-h-[440px]"
                      />

                      <div className="flex flex-col m-auto p-4 leading-normal max-w-lg ">
                        <Text styles="mb-6 md:mb-10">{image.name}</Text>
                        <H3>{image.title}</H3>

                        <Text styles="mb-6 mt-8 md:mb-10 mt-4 md:mt-8">
                          {image.text}
                        </Text>
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
          <div className="relative  flex flex-row w-full mt-8 justify-beetween items-center ">
            <button
              type="button"
              onClick={toggleTrainsVisibility}
              className="text-primary items-center text-base flex flex-row gap-2 w-1/2 whitespace-nowrap"
            >
              {!showTrains ? (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4995_6652)">
                    <path
                      d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                      fill="#005893"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4995_6652">
                      <rect width="20" height="20" fill="#005893" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8.88892H11.1111H8.88889H0V11.1111H8.88889H11.1111H20V8.88892Z"
                    fill="#005893"
                  />
                </svg>
              )}
              alle einblenden
            </button>

            <div className=" flex flex-row gap-4 justify-end items-center w-full  p-4">
              <Pagination total={images.length} current={current} />
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

          {showTrains && (
            <div className=" md:grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-3 xl:gap-28 mt-2 w-full lg:pr-20">
              {trains.map((train, idx) => (
                <div
                  key={idx}
                  className="relative max-full items-stretch justify-center mx-auto md:max-w-md bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img className="w-full" src={train.image} alt="" />
                  </a>
                  <div className="p-5">
                    <div className="mb-8">
                      <H3>{train.name}</H3>
                    </div>
                    <Link
                      href="#"
                      className="block absolute bottom-[20px] left-[22px]"
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
                </div>
              ))}
            </div>
          )}
        </div>
      </FullWidth>
    </section>
  );
};

export default TestimonialsCarousel;
