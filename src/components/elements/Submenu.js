import React from 'react';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { motion } from 'framer-motion';

export default function Submenu({
    mainSubmenuText,
    mainLinkUrl,
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
            className="flex flex-col lg:absolute lg:start-0 lg:top-40 lg:z-10 lg:w-full lg:flex-row lg:justify-center lg:gap-6 lg:bg-greySolid-50 lg:p-9"
        >
            <div className="lg:flex lg:flex-col lg:bg-primaryTrans-100 lg:p-24 lg:text-center">
                <a
                    href={ButtonUrlRenderer(mainLinkUrl)}
                    className="lg:text-primary"
                >
                    <p className="hidden font-normal lg:block">
                        {mainSubmenuText}
                    </p>
                    <p className="lg:text-lg lg:text-primary">{mainLinkText}</p>
                </a>
            </div>
            <motion.div className="flex flex-col lg:grid lg:w-2/12 lg:content-center">
                <a
                    className="lg:flex lg:justify-between lg:py-4 lg:text-primarySolid-600 lg:hover:text-primary"
                    href={ButtonUrlRenderer(subLinkOne)}
                >
                    <p>{subLinkTextOne}</p>
                    <img
                        src="/icons/chevron-right-light.svg"
                        className="hidden lg:block"
                    />
                </a>
                <a
                    className="lg:flex lg:justify-between lg:py-4 lg:text-primarySolid-600 lg:hover:text-primary"
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
                        className="lg:flex lg:justify-between lg:py-4 lg:text-primarySolid-600 lg:hover:text-primary"
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
