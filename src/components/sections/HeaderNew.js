'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import { AnimatePresence, motion } from 'framer-motion';
import ModalSearch from './ModalSearch';
import { SearchIcon } from '../icons/SearchIcon';
import TopNav from './TopNav';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Logo from '../elements/Logo';
import Submenu from '../elements/Submenu';

const variants = {
    open: { opacity: 1, height: '240px' },
    closed: {
        opacity: 'var(--responsive-opacity)',
        height: 'var(--responsive-height)',
    },
};

const HeaderNew = ({ blok }) => {
    // State for modal search
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef(null);
    // State for mobile menu
    const [isOpen, setIsOpen] = useState(false);
    // State for desktop menu
    const tabs = ['company', 'solutions'];
    const [selectedTab, setSelectedTab] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <motion.header
            className="py-4 lg:h-40"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
        >
            <ContentWidth>
                <motion.div className="col-span-12 flex flex-col-reverse lg:flex-col">
                    <motion.div
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                        className="[--responsive-opacity:0%] lg:[--responsive-opacity:100%] [--responsive-height:0px] lg:[--responsive-height:80px]"
                    >
                        <hr className="bg-grey h-1 lg:hidden" />
                        <TopNav blok={blok} />
                    </motion.div>
                    <div className="py-2 lg:flex lg:justify-between">
                        <div className="flex justify-between">
                            <Logo blok={blok} />
                            <motion.button
                                className="lg:hidden"
                                onClick={() => setIsOpen((isOpen) => !isOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="#005893"
                                >
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        variants={{
                                            closed: { d: 'M 2 6 L 20 6' },
                                            open: { d: 'M 3 16.5 L 17 2.5' },
                                        }}
                                    />
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        d="M 2 11 L 20 11"
                                        variants={{
                                            closed: { opacity: 1 },
                                            open: { opacity: 0 },
                                        }}
                                        transition={{ duration: 0.1 }}
                                    />
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        variants={{
                                            closed: {
                                                d: 'M 2 16 L 20 16',
                                            },
                                            open: { d: 'M 3 2.5 L 17 16.346' },
                                        }}
                                    />
                                </svg>
                            </motion.button>
                        </div>
                        <motion.nav
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={{
                                open: {
                                    opacity: 1,
                                    minHeight: 'auto',
                                    height: 'auto',
                                    paddingTop: 10,
                                },
                                closed: {
                                    opacity: 'var(--responsive-opacity)',
                                    minHeight: 'var(--responsive-min-height)',
                                    height: 'var(--responsive-height)',
                                    paddingTop: 0,
                                },
                            }}
                            className="[--responsive-opacity:0%] lg:[--responsive-opacity:100%] [--responsive-min-height:0px] lg:[--responsive-min-height:80px] [--responsive-height:0px] lg:[--responsive-height:80px] text-primarySolid-800 font-semibold lg:mt-0 flex flex-col lg:flex-row justify-start lg:space-y-0"
                        >
                            <ul className="flex flex-col lg:flex-row">
                                {tabs.map((item) => (
                                    <li key={item}>
                                        <div
                                            onClick={() => {
                                                if (selectedTab === item) {
                                                    setSelectedTab(null); // Unset if clicked twice
                                                } else {
                                                    setSelectedTab(item);
                                                }
                                            }}
                                            className="hover:cursor-pointer py-2 lg:py-0 lg:px-2"
                                        >
                                            {item == 'company'
                                                ? blok.main_link_1_text
                                                : blok.main_link_2_text}
                                        </div>
                                        <AnimatePresence mode="wait">
                                            {item === selectedTab && (
                                                <motion.div
                                                    key={
                                                        selectedTab
                                                            ? selectedTab
                                                            : ''
                                                    }
                                                >
                                                    {selectedTab ? (
                                                        selectedTab ==
                                                        'company' ? (
                                                            <Submenu
                                                                blok={blok}
                                                                mainLinkText={
                                                                    blok.main_link_1_text
                                                                }
                                                                subLinkOne={
                                                                    blok.main_1_sublink_1_link
                                                                }
                                                                subLinkTextOne={
                                                                    blok.main_1_sublink_1_text
                                                                }
                                                                subLinkTwo={
                                                                    blok.main_1_sublink_2_link
                                                                }
                                                                subLinkTextTwo={
                                                                    blok.main_1_sublink_2_text
                                                                }
                                                            />
                                                        ) : (
                                                            <Submenu
                                                                blok={blok}
                                                                mainLinkText={
                                                                    blok.main_link_2_text
                                                                }
                                                                subLinkOne={
                                                                    blok.main_2_link_1_link
                                                                }
                                                                subLinkTextOne={
                                                                    blok.main_2_link_1_text
                                                                }
                                                                subLinkTwo={
                                                                    blok.main_2_link_2_link
                                                                }
                                                                subLinkTextTwo={
                                                                    blok.main_2_link_2_text
                                                                }
                                                                subLinkThree={
                                                                    blok.main_2_link_3_link
                                                                }
                                                                subLinkTextThree={
                                                                    blok.main_2_link_3_text
                                                                }
                                                            />
                                                        )
                                                    ) : (
                                                        ''
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
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
                            <div className="relative">
                                <button
                                    ref={buttonRef}
                                    onClick={toggleModal}
                                    type="button"
                                    className="w-5 h-5 py-2 lg:py-0 my-4 lg:my-0 lg:ml-8 z-100"
                                >
                                    <SearchIcon
                                        className="w-5 h-5 fill-primary"
                                        color="#005893"
                                    />
                                </button>
                                <ModalSearch
                                    isModalOpen={isModalOpen}
                                    closeModal={closeModal}
                                    buttonRef={buttonRef}
                                />
                            </div>
                        </motion.nav>
                    </div>
                </motion.div>
            </ContentWidth>
        </motion.header>
    );
};

export default HeaderNew;
