'use client';

import React, { useState, useEffect, useRef } from 'react';
import IconNav from '../elements/IconNav';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import { motion } from 'framer-motion';
import ModalSearch from './ModalSearch';
import { SearchIcon } from '../icons/SearchIcon';
import TopNav from './TopNav';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Logo from '../elements/Logo';
import { MenuIcon } from '../icons/MenuIcon';
import { CloseIcon } from '../icons/CloseIcon';
import Submenu from '../elements/Submenu';
import { ChevronRight } from '../icons/ChevronRight';

const submenuVariants = {
    open: {
        opacity: 1,
        y: 0,
        height: 'auto',
        overflow: 'visible',
        cursor: 'pointer',
    },
    closed: {
        opacity: 0,
        y: 50,
        height: 0,
        overflow: 'hidden',

        transitionEnd: { display: 'none' },
    },
};

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 'var(--responsive-opacity)' },
};

const HeaderNew = ({ blok }) => {
    //can be deleted
    const navigationMain = {
        topNav: [
            {
                title: blok.main_link_1_text,
                href: blok.main_link_1_link,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 2,
                submenuItems: [
                    {
                        title: blok.main_1_sublink_1_text,
                        href: blok.main_1_sublink_1_link,
                    },
                    {
                        title: blok.main_1_sublink_2_text,
                        href: blok.main_1_sublink_2_link,
                    },
                ],
            },
            {
                title: blok.main_2_link_1_text,
                href: blok.main_2_link_1_link,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 1,
                submenuItems: [
                    {
                        title: blok.main_2_link_2_text,
                        href: blok.main_2_link_2_link,
                    },
                    {
                        title: blok.main_2_link_3_text,
                        href: blok.main_2_link_3_link,
                    },
                    {
                        title: blok.main_link_2_text,
                        href: blok.main_link_2_link,
                    },
                ],
            },
            {
                title: blok.main_link_3_text,
                href: blok.main_link_3_link,
                icon: false,
            },
            {
                title: blok.main_link_4_text,
                href: blok.main_link_4_link,
                icon: false,
            },
        ],
    };
    //for mobile menu
    const [isOpen, setIsOpen] = useState(false);
    //for submenu
    /* const [submenuOpen, openSubMenu] = useState(false); */

    return (
        <header className="py-4">
            <ContentWidth>
                <div className="col-span-12 flex flex-col-reverse lg:flex-col">
                    <motion.div
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                        className="[--responsive-opacity:0%] lg:[--responsive-opacity:100%]"
                    >
                        <hr className="bg-grey h-1 lg:hidden" />
                        <TopNav blok={blok} />
                    </motion.div>
                    <div className="py-2 lg:flex lg:justify-between">
                        <div className="flex justify-between">
                            <Logo blok={blok} />
                            <button
                                className="lg:hidden"
                                onClick={() => setIsOpen((isOpen) => !isOpen)}
                            >
                                {isOpen ? (
                                    <CloseIcon styles="fill-primary" />
                                ) : (
                                    <MenuIcon styles="fill-primary" />
                                )}
                            </button>
                        </div>
                        <motion.nav
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={variants}
                            className="[--responsive-opacity:0%] lg:[--responsive-opacity:100%] text-primarySolid-800 font-semibold my-4 lg:mt-0 flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-6"
                        >
                            <motion.button
                                className="py-2 lg:py-0 lg:px-2 text-left flex"
                                /* onClick={() =>
                                    openSubMenu((submenuOpen) => !submenuOpen)
                                } */
                            >
                                {blok.main_link_1_text}
                                <span>
                                    <ChevronRight styles="h-3 w-3 fill-primary" />
                                </span>
                            </motion.button>
                            {/* <Submenu blok={blok} /> */}
                            <motion.div className="py-2 lg:py-0 lg:px-2">
                                {blok.main_link_2_text}
                            </motion.div>
                            <Link
                                className="py-2 lg:py-0 lg:px-2"
                                href={ButtonUrlRenderer(blok.main_link_3_link)}
                            >
                                {blok.main_link_3_text}
                            </Link>
                            <Link
                                className="py-2 lg:py-0 lg:px-2"
                                href={ButtonUrlRenderer(blok.main_link_4_link)}
                            >
                                {blok.main_link_4_text}
                            </Link>
                            <div>
                                <button
                                    /* onClick={openModal} */
                                    type="button"
                                    className="w-5 h-5 py-2 lg:py-0 my-4 lg:my-0 lg:ml-8"
                                >
                                    <SearchIcon
                                        className="w-5 h-5 fill-primary"
                                        color="#005893"
                                    />
                                </button>
                            </div>
                        </motion.nav>
                    </div>
                </div>
            </ContentWidth>
        </header>
    );
};

export default HeaderNew;
