import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.stadlerrail.com/media/img/c/anlagenbauer_berufserfahrene.jpg",
  "https://www.stadlerrail.com/media/img/c/bild_075.jpg",
  "https://www.stadlerrail.com/media/img/c/interne_transporte_berufserfahrene.jpg",
  "https://www.stadlerrail.com/media/img/c/anlagenbauer_berufserfahrene.jpg",
  "https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg",
];

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    zIndex: 1,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: {
          duration: 0.2,
        },
      },
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          opacity: {
            duration: 0.2,
          },
        },
      },
    };
  },
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  return (
    <>
      <div className="slider-container">
        <div className="slideshow">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              src={images[index]}
              alt=""
              className="slider"
              key={images[index]}
              custom={direction}
            />
          </AnimatePresence>

          <button onClick={prevStep} className="prevButton">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button onClick={nextStep} className="nextButton">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
