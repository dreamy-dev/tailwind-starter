import H3 from "./typography/H3";
import Text from "./typography/Text";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { wrap } from "popmotion";
import H2 from "./typography/H2";
import ContentWidth from "./layouts/ContentWidth";
import Button from "./elements/ButtonSecondary";

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

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    setCurrent(current + 1);
  };

  return (
    <div className="bg-primarySolid-50 pt-24 pb-12 flex flex-col items-center justify-between h-[600px] p-24">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className=" w-full  flex items-center">
          <motion.div
            animate={{ translateX: `calc(-${current * 100}% - ${current}rem)` }}
            className="flex"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex flex-row items-center justify-center bg-white w-[80%]"
              >
                <motion.img
                  className="object-contain h-[440px]"
                  animate={{ opacity: index === current ? 1 : 0.3 }}
                  src={testimonial.img}
                  alt={`Carousel Image ${index + 1}`}
                />

                <div className="p-20 md:p-20">
                  <H3>{testimonial.title}</H3>

                  <Text styles="mb-6 mt-8 md:mb-6 mt-4 md:mt-8">
                    {testimonial.text}
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
              </div>
            ))}
          </motion.div>
        </div>
      </MotionConfig>
      <button className="w-10 h-10 md:w-10 md:h-10" onClick={onPrevClick}>
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
      <button className="w-10 h-10 md:w-10 md:h-10" onClick={onNextClick}>
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
    </div>
  );
}
