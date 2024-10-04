'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';
import { MotionConfig, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import ContentWidth from '../layouts/ContentWidth';
import { ChevronRight } from '../icons/ChevronRight';
import { ChevronLeft } from '../icons/ChevronLeft';
import { ArrowForward } from '../icons/ArrowForward';

const SuccessStoryGrid = ({ blok }) => {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const onNextClick = () => {
        if (current < blok.success_stories.length - 1) {
            setCurrent(current + 1);
        }
    };

    return (
        <section className="overflow-hidden bg-white py-16 lg:py-24">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="relative mb-4">
                        <div className="flex items-center justify-center lg:pl-20 2xl:pl-0">
                            <H2>{blok?.title}</H2>
                        </div>
                        {isMobile && (
                            <div className="flex justify-center">
                                <div className="flex gap-3 rounded-full px-3 py-2 opacity-80">
                                    {blok.success_stories.map((_, idx) => (
                                        <button
                                            key={idx}
                                            /* onClick={() => setCurrent(idx)} */
                                        >
                                            <div
                                                className={`h-1 w-8 ${
                                                    idx === current
                                                        ? 'bg-primary'
                                                        : 'bg-greyDarken-100'
                                                }`}
                                                key={idx}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-between lg:pl-20 2xl:pl-0">
                        <MotionConfig
                            transition={{
                                duration: 0.7,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                        >
                            <div className="relative flex w-full max-w-[100%] items-center">
                                <motion.div className="my-[-32px] ml-[-2px] mr-[-2px] flex flex-nowrap items-stretch gap-8 overflow-hidden py-[32px] pl-[2px] pr-[2px]">
                                    {blok.success_stories.map(
                                        (nestedBlok, idx) => {
                                            return (
                                                <motion.div
                                                    {...storyblokEditable(blok)}
                                                    key={nestedBlok.slug}
                                                    className="testimonial-motion-div relative min-w-[100%] shadow-md shadow-greyDarken-300 md:flex-row lg:min-w-[43%]"
                                                    animate={{
                                                        translateX: `calc(-${current * 100}% - ${current * 2}rem)`,
                                                        opacity:
                                                            idx === current ||
                                                            idx === current + 1
                                                                ? 1
                                                                : 0.3,
                                                    }}
                                                >
                                                    <img
                                                        key={
                                                            nestedBlok.slug +
                                                            ' image'
                                                        }
                                                        className="aspect-[4/3] w-full object-cover"
                                                        src={
                                                            nestedBlok.content
                                                                ?.image.filename
                                                        }
                                                        alt={
                                                            nestedBlok.content
                                                                ?.image.filename.alt ?? "Sussecc Stories Image"
                                                        }
                                                    />
                                                    <div
                                                        className="p-5"
                                                        key={nestedBlok.slug}
                                                    >
                                                        <div className="mb-4">
                                                            <H3>
                                                                {
                                                                    nestedBlok
                                                                        .content
                                                                        ?.title
                                                                }
                                                            </H3>
                                                        </div>
                                                        <div className="mb-14">
                                                            <Text>
                                                                {
                                                                    nestedBlok
                                                                        .content
                                                                        ?.teaser
                                                                }
                                                            </Text>
                                                        </div>
                                                        <Link
                                                            tabIndex="1"
                                                            href={
                                                                '/successstories/' +
                                                                nestedBlok?.slug
                                                            }
                                                            className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-center text-sm font-medium"
                                                        >
                                                            <ArrowForward styles="w-5 h-5 fill-primary" />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            );
                                        }
                                    )}
                                </motion.div>
                            </div>
                        </MotionConfig>
                    </div>
                    <div className="justify-beetween relative mt-8 flex w-full flex-row items-center lg:pl-20">
                        <div className="flex w-full flex-row items-center justify-center gap-4">
                            <motion.div
                                className="z-10 flex flex-row gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <button
                                    tabIndex="1"
                                    onClick={onPrevClick}
                                    aria-label="Previous"
                                >
                                    <ChevronLeft styles="w-5 h-5 fill-primary" />
                                </button>
                                <button
                                    tabIndex="1"
                                    onClick={onNextClick}
                                    aria-label="Next"
                                >
                                    <ChevronRight styles="w-5 h-5 fill-primary" />
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
