'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import { motion } from 'framer-motion';
import { animate, stagger } from 'framer-motion/dom';

export default function HomePageHero({ blok }) {
    return (
        <div {...storyblokEditable(blok)} className="mx-auto w-full bg-white">
            <div className="relative inset-0 flex w-full flex-col-reverse items-center justify-end overflow-hidden md:flex-row">
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}

                    className=" w-full md:w-[550px] lg:w-[700px] lg:ml-16  bg-contain md:h-hero-bg-height-middle-screen xl:h-hero-bg-height-extralarge-screen bg-no-repeat relative md:absolute left-0 md:left-0 transform -translate-y-1/2 -translate-x-1/2 2xl:ml-[calc((100vw-1536px)/2)]"
                >
                    <div className="-mt-16 md:mt-0 w-full flex pr-4 md:pr-0 items-center justify-end h-full">
                        <motion.img
                            src="/shape_blue_2.svg"
                            className="block h-auto md:h-[80vh] w-full"
                            alt={`background shape for ${blok?.title} `}
                            aria-label={`background shape for ${blok?.title} `}
                        ></motion.img>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 30 }}
                        className="z-1 absolute flex flex-col justify-center pb-16 md:pb-0 md:ml-4 xl:ml-12 h-4/5 top-4 md:w-3/5 md:top-8 md:left-0 transform -translate-y-1/2 translate-x-1/2 w-3/6 max-w-[300px] md:max-w-[330px]"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 40 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5,
                            }}
                        >
                            <H1 styles="lg:mt-0 text-3xl md:text-7xl lg:text-7xl">
                                {blok?.title}
                            </H1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 40 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.8,
                            }}
                        >
                            <Text styles="text-md lg:text-3xl md:mt-4 xl:mt-4">
                                {blok?.lead}
                            </Text>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="w-full bg-cover bg-center bg-no-repeat object-center">
                    <img
                        src={blok?.image.filename ?? '/hero-home-big-min.jpg'}
                        className="w-full object-cover object-center lg:h-[90vh]"
                        alt="Hero image with train for Home page"
                        aria-label={`Shadow image for ${blok?.title} `}
                    />
                </motion.div>
            </div>
        </div>
    );
}
