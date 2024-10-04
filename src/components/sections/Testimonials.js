'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContentWidth from '../layouts/ContentWidth';

const Testimonials = ({ blok }) => {
    const [selectedTab, setSelectedTab] = useState(blok.testimonial[0]);

    return (
        <section>
            <ContentWidth>
                <div className="col-span-12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                    <nav
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                        aria-label="Tabs"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                    >
                        {blok.testimonial.map((item) => (
                            <button
                                tabIndex="1"
                                key={item.name}
                                onClick={() => setSelectedTab(item)}
                                className={`${
                                    selectedTab.name == item.name
                                        ? 'bg-greySolid-100'
                                        : ' '
                                } p-3 text-center md:p-5 md:text-left`}
                                type="button"
                                id="tabs-with-card-item-1"
                                data-hs-tab="#tabs-with-card-1"
                                aria-controls="tabs-with-card-1"
                                aria-selected="true"
                                role="tab"
                                data-tabs-target="#europe"
                            >
                                <span className="flex items-center">
                                    <img
                                        className="h-20 w-20 object-cover md:h-16 md:w-16"
                                        src={item.image.filename}
                                        alt="profile picture"
                                    />
                                    <span className="ml-5 grow">
                                        <span className="hs-tab-active:text-blue-600 block font-semibold text-greySolid-800">
                                            {item.name}
                                        </span>
                                        <span className="mt-2 text-greySolid-800 lg:block">
                                            {item.job}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-12 md:mt-16" id="myTabContent">
                        <AnimatePresence mode="wait">
                            <motion.div
                                id="europe"
                                role="tabpanel"
                                aria-labelledby="tabs-with-card-item-1"
                                key={selectedTab ? selectedTab.name : 'empty'}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative max-w-[1140px] lg:pb-12">
                                    <figure className="relative z-[1] ml-auto mr-20 h-auto w-[50rem] max-w-full rounded-b-lg">
                                        <div className="rounded-b-lg bg-white">
                                            <blockquote className="my-4 border-l-4 border-greySolid-300 p-4">
                                                <p className="text-xl font-medium italic leading-relaxed text-greySolid-800">
                                                    "{selectedTab.quote}"
                                                </p>
                                            </blockquote>
                                        </div>
                                    </figure>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default Testimonials;
