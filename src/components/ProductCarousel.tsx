// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import H3 from "./typography/H3";
import Text from "./typography/Text";

// const data = [
//   {
//     id: 1,
//     image: "/image1product.jpg",
//     titleH3: "Ergonomie am Arbeitsplatz sorgt für Sicherheit",
//     text: "Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei",
//   },
//   {
//     id: 2,
//     image: "/image1product.jpg",
//     titleH3: "2Ergonomie am Arbeitsplatz sorgt für Sicherheit",
//     text: "2Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei",
//   },
//   {
//     id: 3,
//     image: "/image1product.jpg",
//     titleH3: "3Ergonomie am Arbeitsplatz sorgt für Sicherheit",
//     text: "3Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell,",
//   },
// ];

// const ProductCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   return (
//     <div className="w-full mx-auto ">
//       <div className="">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={currentIndex}
//             custom={currentIndex}
//             initial={{ x: 100 }}
//             animate={{ x: 0 }}
//             exit={{ x: -100 }}
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//             }}
//             className="flex items-center justify-center relative"
//           >
//             <img
//               className="block mx-w-full max-h-96 md:max-h-full"
//               src={data[currentIndex].image}
//               alt="Carousel Image"
//             />

//             <div className="p-20 md:p-20 w-full md:w-auto">
//               <H3>{data[currentIndex].titleH3}</H3>
//               <Text styles="mb-6 mt-8 md:mb-6 mt-4 md:mt-8">
//                 {data[currentIndex].text}
//               </Text>
//               <button className="w-10 h-10 md:w-10 md:h-10" onClick={prevSlide}>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
//                     fill="#005893"
//                   />
//                 </svg>
//               </button>
//               <button className="w-10 h-10 md:w-10 md:h-10" onClick={nextSlide}>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
//                     fill="#005893"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

//export default ProductCarousel;

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const data = [
  {
    id: 1,
    image: "/image1product.jpg",
    titleH3: "Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text: "Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei",
  },
  {
    id: 2,
    image: "/image1product.jpg",
    titleH3: "2Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text: "2Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei",
  },
  {
    id: 3,
    image: "/image1product.jpg",
    titleH3: "3Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text: "3Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell,",
  },
];
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProductCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="w-full mx-auto h-690 overflow-hidden relative flex justify-center items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="flex lg:flex-row flex-col items-center justify-center absolute top-0 max-w-full"
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
              src={data[imageIndex].image}
              alt="Carousel Image"
            />

            <div className="p-20 md:p-20 mx-w-full md:w-auto">
              <H3>{data[imageIndex].titleH3}</H3>
              <Text styles="mb-6 mt-8 md:mb-6 mt-4 md:mt-8">
                {data[imageIndex].text}
              </Text>
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProductCarousel;
