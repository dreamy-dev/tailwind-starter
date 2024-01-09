import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/slider-square.png",
    title: "Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text:
      "Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei. Unsere Detailorientierung garantiert somit höchste Sicherheitsstandards für alle.",
  },
  {
    image: "https://www.stadlerrail.com/media/img/c/bild_075.jpg",
    title: "1 am Arbeitsplatz sorgt für Sicherheit",
    text:
      "1Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei. Unsere Detailorientierung garantiert somit höchste Sicherheitsstandards für alle.",
  },
  {
    image:
      "https://www.stadlerrail.com/media/img/c/anlagenbauer_berufserfahrene.jpg",
    title: "2 am Arbeitsplatz sorgt für Sicherheit",
    text:
      "2Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei. Unsere Detailorientierung garantiert somit höchste Sicherheitsstandards für alle.",
  },
  {
    image:
      "https://www.stadlerrail.com/media/img/c/interne_transporte_berufserfahrene.jpg",
    title: "3 am Arbeitsplatz sorgt für Sicherheit",
    text:
      "3Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei. Unsere Detailorientierung garantiert somit höchste Sicherheitsstandards für alle.",
  },
];

const variants = {
  initial: (direction: any) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: any) => {
    return {
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};
const Slide = (slide: any) => {
  return (
    <div className="text-black">
      <motion.h1
        initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
        animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="text-black"
      >
        {slide.slide.title}
      </motion.h1>
      <br />
      <p className="text-black">{slide.slide.text}</p>
    </div>
  );
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === slides.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(slides.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <>
      <section className="overflow-hidden relative bg-white dark:bg-gray-900">
        <motion.a
          href="#"
          className="text-black"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "tween" }}
        >
          DFGFdgvjklied
        </motion.a>
        <div className="gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 xl:grid xl:grid-cols-12">
          <div className="col-span-8">
            <div className="slider-container">
              <div className="slideshow">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    variants={variants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    src={slides[index].image}
                    alt=""
                    className="slider"
                    key={slides[index].image}
                    custom={direction}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <AnimatePresence initial={false} custom={direction}>
              <Slide
                variants={variants}
                animate="animate"
                initial="initial"
                className="slider"
                exit="exit"
                custom={direction}
                slide={slides[index]}
              />
            </AnimatePresence>
            <button onClick={prevStep} className="">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button onClick={nextStep} className="">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
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
      </section>
    </>
  );
}
