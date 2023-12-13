"use client";

import { motion } from "framer-motion";

interface ReusableSubHeroProps {
  imageUrl: string;
  children?: React.ReactNode;
}

 const SubHero: React.FC<ReusableSubHeroProps> = ({imageUrl, children})  => {
  return (
    <div className=" mx-auto w-full bg-white relative">
      <div className="max-w-[1500px] w-[80%] max-h-[750px] relative inset-0 flex flex-row items-center justify-start">
        <motion.div
          initial={{ x: 0, opacity: 0.4 }}
          animate={{ x: 0, opacity: 0.4 }}
          //transition={{ duration: 1, delay: 0.5 }}
          className=""
        >
          <div className="w-full h-full flex items-center justify-end">
            <img
              src="/shadow-subhero.svg"
              className="absolute h-full w-auto max-h-[750px] right-[-7%] "
              alt=""
            />
          </div>
        </motion.div>
        <div
          //   initial={{ x: -1800 }}
          //   animate={{ x: 0 }}
          //   transition={{ duration: 1 }}
          className="w-full bg-center bg-cover bg-no-repeat"
        >
          <img src={imageUrl} className="w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SubHero;
