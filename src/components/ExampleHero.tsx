"use client";
import H1 from "./typography/H1";
import Text from "./typography/Text";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-3xl bg-white">
      <div className="w-full mb-8 relative inset-0 flex flex-col-reverse md:flex-row items-center justify-end">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-hero-bg-middle-screen lg:w-hero-bg-large-screen xl:w-hero-bg-extralarge-screen bg-contain md:h-hero-bg-height-middle-screen xl:h-hero-bg-height-extralarge-screen bg-no-repeat relative md:absolute left-0 transform -translate-y-1/2 -translate-x-1/2 z-30"
        >
          <div className="-mt-16 md:mt-0 w-full flex pr-4 md:pr-0 items-center justify-end h-full">
            <img
              src="/graph-wide.svg"
              className="md:block hidden max-h-screen h-full w-auto"
              alt=""
            />
            <img
              src="/Graph.svg"
              className="block md:hidden h-auto w-full"
              alt=""
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 40 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="z-40 absolute flex flex-col justify-center pb-16 md:pb-0 md:ml-4 xl:ml-20 h-4/5 top-0 md:w-3/5 md:top-8 md:left-0 transform -translate-y-1/2 translate-x-1/2 w-4/6 max-w-[270px] md:max-w-[330px]"
          >
            <H1 styles="-mt-3 lg:mt-0 text-4xl lg:text-5xl">
              Driven from within.
            </H1>
            <Text styles="text-md lg:text-xl mt-4 xl:mt-16">
              Für die besten Schienenfahrzeuge der Welt.
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: -1800 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-hero-image-small-screen lg:w-hero-image-large-screen xl:w-hero-image-extralarge-screen bg-center bg-cover bg-no-repeat"
        >
          <img
            src="/hero-home-blue.jpg"
            className="w-full md:block hidden"
            alt=""
          />
          <img
            src="/hero-home-mobile.jpg"
            className="w-full block md:hidden"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
