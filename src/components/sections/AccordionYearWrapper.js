'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionYearWrapper = ({ blok, isActive }) => {
    return (
        <div className="col-span-12 max-w-full" {...storyblokEditable(blok)}>
            {isActive && (
                <AnimatePresence mode="wait">
                    <motion.div
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className={`col-span-12 mt-10 max-w-full overflow-x-auto ${isActive ? '' : 'hidden'} w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right`}
                        >
                            <table className="w-full">
                                <thead className="whitespace-nowrap bg-primarySolid-50 text-xs font-bold uppercase text-black">
                                    <tr>
                                        <th className="px-6 py-3">
                                            {blok?.headline_title}
                                        </th>
                                        <th className="px-6 py-3">
                                            {blok?.headline_date}
                                        </th>
                                        <th className="px-6 py-3 text-center">
                                            {blok?.headline_berichte}
                                        </th>
                                        <th className="px-6 py-3 text-center">
                                            {blok?.headline_presentation}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blok.year_wrapper.map((nestedBlok) => (
                                        <StoryblokComponent
                                            blok={nestedBlok}
                                            key={nestedBlok?._uid}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default AccordionYearWrapper;
