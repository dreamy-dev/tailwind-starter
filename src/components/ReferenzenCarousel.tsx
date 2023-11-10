import H3 from "./typography/H3";
import Text from "./typography/Text";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import H2 from "./typography/H2";
import ContentWidth from "./layouts/ContentWidth";
import Button from "./elements/ButtonSecondary";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  img: string;
}

interface PaginationProps {
  currentIndex: number;
  totalSlides: number;
}

const testimonials = [
  {
    id: 1,
    title: "FLIRT bewegt die Welt",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/card-1.jpg",
  },
  {
    id: 2,
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/card-2.jpg",
  },
  {
    id: 3,
    title: "Im Land der längsten Zugstrecken",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-1.jpg",
  },
  {
    id: 4,
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/card-2.jpg",
  },
  {
    id: 5,
    title: "FLIRT bewegt die Welt",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements",
    img: "/card-1.jpg",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Pagination: React.FC<PaginationProps> = ({
  currentIndex,
  totalSlides,
}) => (
  <div className="flex items-center text-greySolid-400 z-30 gap-4">
    <span>{currentIndex + 1}</span>
    <span>|</span>
    <span>{totalSlides}</span>
  </div>
);

const TestimonialsCarousel: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="bg-primarySolid-50 pt-24 pb-12">
      <ContentWidth>
        <div className="col-span-12 w-full mx-auto mb-12 text-center">
          <H2 titleH2="Referenzen"></H2>
        </div>

        <div className="col-span-12 w-full mx-auto h-[450px] overflow-hidden relative flex justify-between flex-wrap">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="flex lg:flex-row flex-col items-center justify-center absolute top-0 max-w-[80%] bg-white"
              key={imageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <img
                className="block mx-w-full h-auto"
                src={testimonials[imageIndex].img}
                alt="Carousel Image"
              />

              <div className="p-20 md:p-20 ">
                <H3>{testimonials[imageIndex].title}</H3>
                <Text styles="mb-6 mt-8 md:mb-6 mt-4 md:mt-8">
                  {testimonials[imageIndex].text}
                </Text>
                <Button
                  backgroundColorClass="bg-transparent"
                  borderColorClass="border-white"
                  textColorClass="text-primary"
                  position="left"
                  styles="flex items-center"
                  iconAfter={
                    <svg
                      width="10"
                      height="10"
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
                  }
                >
                  Mehr erfahren
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <Pagination
          currentIndex={imageIndex}
          totalSlides={testimonials.length}
        />
        <button
          className="w-10 h-10 md:w-10 md:h-10"
          onClick={() => paginate(-1)}
        >
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
        <button
          className="w-10 h-10 md:w-10 md:h-10"
          onClick={() => paginate(1)}
        >
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
      </ContentWidth>
    </section>
  );
};

export default TestimonialsCarousel;
