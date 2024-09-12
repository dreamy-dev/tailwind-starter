import React from 'react';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { motion } from 'framer-motion';

export default function Submenu({
    blok,
    mainLinkText,
    subLinkOne,
    subLinkTextOne,
    subLinkTwo,
    subLinkTextTwo,
    subLinkThree,
    subLinkTextThree,
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.2,
                ease: [0.17, 0.67, 0.83, 0.67],
            }}
            exit={{ opacity: 0 }}
            className="flex flex-col lg:absolute lg:w-full lg:bg-greySolid-50 lg:z-10 lg:start-0 lg:top-40 lg:flex-row lg:justify-center lg:p-9 lg:gap-6"
        >
            <div className="lg:bg-primaryTrans-100 lg:flex lg:flex-col lg:text-center lg:p-24">
                <a
                    href={ButtonUrlRenderer(blok.main_link_1_link)}
                    className="lg:text-primary "
                >
                    <p className="hidden lg:block font-normal">
                        {blok.main_submenu_1_text}
                    </p>
                    <p className="lg:text-primary lg:text-lg">{mainLinkText}</p>
                </a>
            </div>
            <motion.div className="flex flex-col lg:grid lg:content-center lg:w-2/12">
                <a
                    className="lg:text-primarySolid-600 lg:hover:text-primary lg:flex lg:justify-between lg:py-4"
                    href={ButtonUrlRenderer(subLinkOne)}
                >
                    <p>{subLinkTextOne}</p>
                    <img
                        src="/icons/chevron-right-light.svg"
                        className="hidden lg:block"
                    />
                </a>
                <a
                    className="lg:text-primarySolid-600 lg:hover:text-primary lg:flex lg:justify-between lg:py-4"
                    href={ButtonUrlRenderer(subLinkTwo)}
                >
                    <p>{subLinkTextTwo}</p>
                    <img
                        src="/icons/chevron-right-light.svg"
                        className="hidden lg:block"
                    />
                </a>
                {subLinkThree ? (
                    <a
                        className="lg:text-primarySolid-600 lg:hover:text-primary lg:flex lg:justify-between lg:py-4"
                        href={ButtonUrlRenderer(subLinkThree)}
                    >
                        <p>{subLinkTextThree}</p>
                        <img
                            src="/icons/chevron-right-light.svg"
                            className="hidden lg:block"
                        />
                    </a>
                ) : (
                    ''
                )}
            </motion.div>
        </motion.div>
    );
}
