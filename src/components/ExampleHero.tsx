"use client";
import H1 from "./typography/H1";
import Text from "./typography/Text";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-white h-810 relative ">
      <div className="mx-auto max-wull  absolute inset-0 flex items-center flex-col md:flex-row">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[url('/Hero-home.jpg')] w-80 bg-right-top bg-cover h-450 bg-no-repeat absolute right-0 md:h-810 lg:h-810"
        ></motion.div>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[url('/Graph.svg')] sm:w-1/2 lg:w-full  h-350 lg:h-700 bg-no-repeat absolute left-0 transform -translate-y-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 100 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className=" z-40 absolute top-1/4 lg:top-1/4 md:top-1/2  transform -translate-y-1/2 translate-x-1/2 max-w-[330px]"
          >
            <H1>Driven from within.</H1>
            <Text styles="mt-16">
              Für die besten Schienenfahrzeuge der Welt.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
