"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import H2 from "../typography/H2";
import { MotionConfig, motion } from "framer-motion";
import { useState, useEffect } from "react";

import ContentWidth from "../layouts/ContentWidth";

const SuccessStoryGrid = ({ blok }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <section className="pb-5 lg:pb-24 bg-white overflow-hidden">
      <ContentWidth>
        <div className="col-span-12">
          <div className="relative">
            <div className="lg:pl-20 2xl:pl-0 mb-10">
              <H2>{blok?.title}</H2>
            </div>
          </div>
          <div className="flex lg:pl-20 flex-col items-center justify-between 2xl:pl-0">
            <MotionConfig
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative w-full max-w-[100%] flex items-center">
                <motion.div
                  {...storyblokEditable(blok)}
                  className="flex items-stretch gap-8 flex-nowrap overflow-hidden  ml-[-2px] pl-[2px] my-[-32px] py-[32px] pr-[2px] mr-[-2px]"
                >
                  {blok.success_stories.map((nestedBlok) => (
                    <p>{nestedBlok}</p>
                  ))}
                  {/* <StoryblokComponent
                      blok={nestedBlok}
                      key={nestedBlok?._uid}
                    /> */}
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
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_left_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
                <button onClick={onNextClick}>
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_right_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SuccessStoryGrid;
