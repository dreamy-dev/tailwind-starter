import H3 from "./typography/H3";
import Link from "next/link";
import Text from "./typography/Text";
import H2 from "./typography/H2";
import { MotionConfig, motion, MotionProps } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Cards {
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
  ref?: any;
}

const TestimonialMotionDiv: React.FC<TestimonialMotionProps> = motion.div;

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

const cards = [
  {
    title: "FLIRT bewegt die Welt",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/card-1.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/card-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-1.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-1.jpg",
  },
];

const HomePageCaroucel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleSwipe = (direction: "left" | "right") => {
    const totalImages = cards.length;
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    } else if (direction === "right" && current < totalImages - 1) {
      setCurrent(current + 1);
    }
  };

  const handleSwipeStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleSwipeMove = (e: React.TouchEvent) => {
    const distanceX = e.touches[0].clientX - startX;

    if (Math.abs(distanceX) > 50) {
      const direction = distanceX > 0 ? "left" : "right";
      handleSwipe(direction);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleSwipeEnd = (e: React.TouchEvent) => {
    console.log("Swipe ended");
  };

  /*   swipe logic ends here */

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < cards.length - 1) {
      setCurrent(current + 1);
    }
  };

  // Ref to store the height of each card's content
  const cardContentRef = useRef<Array<HTMLDivElement | null>>([]);

  // useEffect(() => {
  //   const maxCardHeight = Math.max(
  //     ...cardContentRef.current.map((ref) =>
  //       ref instanceof HTMLElement ? ref.clientHeight : 0
  //     )
  //   );

  //   cardContentRef.current.forEach((ref) => {
  //     if (ref ) {
  //       const container = ref.closest(".testimonial-motion-div");
  //       if (container) {
  //         container.style.height = `${maxCardHeight}px`;
  //       }
  //     }
  //   });
  // }, []);

  useEffect(() => {
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
  }, []);

  return (
    <section className=" py-24 bg-white ">
      <div className="relative">
        <div className="mb-24 flex justify-center items-center">
          <H2 titleH2="Erfolgsgeschichten"></H2>
        </div>
        {isMobile && (
          <div className="absolute top-[90px] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  z-10 ">
            <div className="flex gap-3 px-3 py-2 rounded-full opacity-80">
              {cards.map((_, idx) => (
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
      <div className="flex lg:pl-[80px] flex-col items-center justify-between ">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div
            className="relative   w-full  max-w-[100%] flex items-center"
            onTouchStart={handleSwipeStart}
            onTouchMove={handleSwipeMove}
            onTouchEnd={handleSwipeEnd}
          >
            <motion.div className="flex gap-8 flex-nowrap overflow-hidden  ml-1 pl-1 my-[-32px] py-[32px]">
              {cards.map((card, idx) => (
                <TestimonialMotionDiv
                  key={idx}
                  ref={(el: any) => (cardContentRef.current[idx] = el)}
                  className="min-w-[100%]  lg:min-w-[40%] testimonial-motion-div shadow-md shadow-greyDarken-300"
                  animate={{
                    translateX: `calc(-${current * 100}% - ${current}rem)`,

                    opacity: idx === current || idx === current + 1 ? 1 : 0.3,
                  }}
                  responsive={responsive}
                >
                  <a href="#">
                    <img
                      className="w-full max-h-[430px]"
                      src={card.img}
                      alt=""
                    />
                  </a>
                  <div className="p-5 ">
                    <div className="mb-4">
                      <H3>{card.title}</H3>
                    </div>
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
    </section>
  );
};

export default HomePageCaroucel;
