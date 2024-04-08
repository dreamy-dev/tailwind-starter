import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion, AnimatePresence } from 'framer-motion';
import H2 from '../typography/H2';

const AccordionYearWrapper = ({ blok, isActive }) => {
    return (
        <div className="max-w-full col-span-12" {...storyblokEditable(blok)}>
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
                            className={`mt-10 overflow-x-auto max-w-full col-span-12 ${isActive ? '' : 'hidden'} w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400`}
                        >
                            <table className="w-full">
                                <thead className="text-xs whitespace-nowrap text-black uppercase bg-primarySolid-50 font-bold">
                                    <tr>
                                        <th className="px-6 py-3 ">
                                            {blok?.headline_title}
                                        </th>
                                        <th className="px-6 py-3 ">
                                            {blok?.headline_date}
                                        </th>
                                        <th className="px-6 py-3  text-center">
                                            {blok?.headline_berichte}
                                        </th>
                                        <th className="px-6 py-3  text-center">
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
