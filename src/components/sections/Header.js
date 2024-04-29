'use client';

import React, { useState, useEffect, useRef } from 'react';
import IconNav from '../elements/IconNav';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import { motion } from 'framer-motion';
import ModalSearch from './ModalSearch';
import { SearchIcon } from '../icons/SearchIcon';
import TopNav from './TopNav';

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
const variantsSub = {
    open: { opacity: 1, y: 0, height: '100%' },
    closed: { opacity: 0, y: 50, height: 0 },
};

const Header = ({ blok }) => {
    const navigationMain = {
        topNav: [
            {
                title: blok.main_link_1_text,
                href: blok.main_link_1_link.story.url,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 2,
                submenuItems: [
                    {
                        title: blok.main_1_sublink_1_text,
                        href: blok.main_1_sublink_1_link.story.url,
                    },
                    {
                        title: blok.main_1_sublink_2_text,
                        href: blok.main_1_sublink_2_link.story.url,
                    },
                ],
            },
            {
                title: blok.main_2_link_1_text,
                href: blok.main_2_link_1_link.story.url,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 1,
                submenuItems: [
                    {
                        title: blok.main_2_link_2_text,
                        href: blok.main_2_link_2_link.story.url,
                    },
                    {
                        title: blok.main_2_link_3_text,
                        href: blok.main_2_link_3_link.story.url,
                    },
                    {
                        title: blok.main_link_2_text,
                        href: blok.main_link_2_link.story.url,
                    },
                ],
            },
            {
                title: blok.main_link_3_text,
                href: blok.main_link_3_link.story.url,
                icon: false,
            },
            {
                title: blok.main_link_4_text,
                href: blok.main_link_4_link.story.url,
                icon: false,
            },
        ],
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const menuRef = useRef(null);

  const toggleSubmenu = (submenuId) => {
      
      if (openSubmenu === submenuId) {
          setOpenSubmenu(null);
      } else {
          setOpenSubmenu(submenuId);
          setIsOpen(true); 
      }
  };

const toggleMainMenu = () => {
    setIsOpen((prev) => !prev); 
    setOpenSubmenu(null); 
    
};

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
        setOpenSubmenu(null); 
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
        setOpenSubmenu(null); 
    };

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                   setIsOpen(false);
                setOpenSubmenu(null);
                setIsMobileNavOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    useEffect(() => {
        const mediaWatcher = window.matchMedia('(max-width: 1024px)');
        setIsNarrowScreen(mediaWatcher.matches);

        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        if (mediaWatcher.addEventListener) {
            mediaWatcher.addEventListener('change', updateIsNarrowScreen);
            return function cleanup() {
                mediaWatcher.removeEventListener(
                    'change',
                    updateIsNarrowScreen
                );
            };
        } else {
            mediaWatcher.addListener(updateIsNarrowScreen);
            return function cleanup() {
                mediaWatcher.removeListener(updateIsNarrowScreen);
            };
        }
    });



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderSubmenuContent = (submenuId, title, href) => {
            const onClickHandler = () => {
                closeMobileNav(); 
                setIsOpen(false);
            };
        switch (submenuId) {
            case 1:
                return (
                    <Link
                        href={href}
                        className="cursor-pointer text-primarySolid-800 lg:bg-primaryTrans-100 lg:text-primary px-0 py-4 pt-8 lg:px-8 lg:py-24 lg:text-center"
                        onClick={onClickHandler}
                    >
                        <p className="hidden lg:block lg:font-semibold lg:text-xl">
                            {blok.main_submenu_2_text}
                        </p>
                        <p className="">{title}</p>
                    </Link>
                );
            case 2:
                return (
                    <Link
                        href={href}
                        className="cursor-pointer text-primarySolid-800 lg:bg-primaryTrans-100 lg:text-primary px-0 py-4 pt-8 lg:px-8 lg:py-24 lg:text-center"
                        onClick={onClickHandler}
                    >
                        <p className="hidden lg:block lg:font-semibold lg:text-xl">
                            {blok.main_submenu_2_text}
                        </p>
                        <p className="">{title}</p>
                    </Link>
                );
            default:
                return null;
        }
    };

    return (
        <header
            className={` bg-white z-10 ${isMobileNavOpen ? 'mobile-nav-open' : ''} ${
                isMobileNavOpen && isNarrowScreen
                    ? 'fixed w-screen h-screen'
                    : ''
            }`}
        >
            <ContentWidth>
                <div className="lg:hidden col-span-12">
                    <div className="flex justify-between items-center col-span-12 w-full py-5">
                        <Link href={blok.LinkLogo.url}>
                            <img
                                src={blok.Logo.filename}
                                className="h-4 sm:h-6"
                                alt="Stadler Logo"
                            />
                        </Link>

                        <div className="lg:hidden">
                            {isMobileNavOpen ? (
                                <img
                                    src="/icons/times.svg"
                                    alt="close icon"
                                    onClick={toggleMobileNav}
                                    className="cursor-pointer"
                                />
                            ) : (
                                <img
                                    src="/icons/equal.svg"
                                    alt="burger menu icon"
                                    onClick={toggleMobileNav}
                                    className="cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </ContentWidth>
            <div
                className={`${
                    isMobileNavOpen && isNarrowScreen ? 'visible' : 'hidden'
                } lg:visible flex lg:flex flex-col-reverse w-full lg:flex-col`}
            >
                <>
                    <TopNav blok={blok} />
                    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 relative">
                        <ContentWidth>
                            <div className=" bg-white col-span-12 w-full flex flex-col items-start justify-center lg:justify-between lg:flex-row py-5 px-4 lg:px-0 lg:min-h-fit lg:w-auto left-0 top-[10%] absolut lg:static">
                                <div className="hidden lg:block">
                                    <Link
                                        href={blok.LinkLogo.url}
                                        className="flex justify-start items-start lg:justify-center lg:items-center mb-10 lg:mb-0 "
                                    >
                                        <img
                                            src={blok.Logo.filename}
                                            className="h-4 sm:h-6"
                                            alt="Stadler Logo"
                                        />
                                    </Link>
                                </div>
                                <div
                                    ref={menuRef}
                                    className=" w-full lg:w-auto"
                                    id="navbar-solid-bg"
                                >
                                    <ul className="mb-10 lg:mb-0 flex flex-col gap-8 lg:gap-0 items-start justify-center  lg:flex-row font-medium mt-4 rounded-lg bg-white  lg:items-center lg:mt-0 md:border-0 lg:bg-transparent">
                                        {navigationMain.topNav.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="cursor-poiner lg:px-3 xl:px-5 flex gap-2 justify-center items-start pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                >
                                                    {item.submenu ? (
                                                        <motion.div
                                                            onClick={() =>
                                                                toggleSubmenu(
                                                                    item.id
                                                                )
                                                            }
                                                            variants={
                                                                submenuVariants
                                                            }
                                                            animate={
                                                                openSubmenu ===
                                                                item.id
                                                                    ? 'open'
                                                                    : ''
                                                            }
                                                            initial="open"
                                                        >
                                                            {item.title}
                                                        </motion.div>
                                                    ) : (
                                                        <Link
                                                            className="flex gap-2 justify-center items-start pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                            href={item.href}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    )}
                                                    {item.submenu &&
                                                        openSubmenu ===
                                                            item.id && (
                                                            <motion.div
                                                                variants={
                                                                    submenuVariants
                                                                }
                                                                initial="closed"
                                                                animate="open"
                                                                style={{
                                                                    padding:
                                                                        '10px',
                                                                    zIndex: '30',
                                                                    width: '100%',
                                                                    left: '0',
                                                                    top: '63px',
                                                                    overflow:
                                                                        'hidden',
                                                                }}
                                                                className="fixed lg:absolute bg-white h-screen lg:h-auto lg:bg-greySolid-50"
                                                            >
                                                                <ContentWidth>
                                                                    <div className="w-full grid col-span-12 lg:col-span-6 lg:col-start-5 grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:p-8 px-4 lg:px-0 mt-6 lg:mt-0">
                                                                        <div className="border-b lg:border-none lg:hidden">
                                                                            <Link
                                                                                href="#"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();

                                                                                    setIsOpen(
                                                                                        true
                                                                                    );
                                                                                    setOpenSubmenu(
                                                                                        null
                                                                                    );
                                                                                    setIsMobileNavOpen(
                                                                                        true
                                                                                    );
                                                                                }}
                                                                                className="text-primarySolid-800 lg:text-primarySolid-600 mb-6 ml-[-20px] flex flex-row gap-2 items-center justify-start content-center whitespace-nowrap"
                                                                            >
                                                                                <svg
                                                                                    width="10"
                                                                                    height="10"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                                                                                        fill="#005893"
                                                                                    />
                                                                                </svg>
                                                                                Main
                                                                                Menu
                                                                            </Link>
                                                                        </div>
                                                                        {openSubmenu ===
                                                                            item.id &&
                                                                            renderSubmenuContent(
                                                                                item.id,
                                                                                item.title,
                                                                                item.href
                                                                            )}
                                                                        <div className="grid content-center">
                                                                            {item.submenuItems.map(
                                                                                (
                                                                                    subItem
                                                                                ) => (
                                                                                    <motion.div
                                                                                        key={
                                                                                            subItem.title
                                                                                        }
                                                                                        className=""
                                                                                    >
                                                                                        <Link
                                                                                            href={
                                                                                                subItem.href
                                                                                            }
                                                                                            className="flex justify-between px-0 py-4 text-base text-primarySolid-800 lg:text-primarySolid-600 hover:text-primary"
                                                                                            onClick={() => {
                                                                                                closeMobileNav();
                                                                                                setIsOpen(
                                                                                                    (
                                                                                                        isOpen
                                                                                                    ) =>
                                                                                                        !isOpen
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <p>
                                                                                                {
                                                                                                    subItem.title
                                                                                                }
                                                                                            </p>
                                                                                            <span className="hidden lg:block">
                                                                                                <img src="/icons/chevron-right-light.svg" />
                                                                                            </span>
                                                                                        </Link>
                                                                                    </motion.div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </ContentWidth>
                                                            </motion.div>
                                                        )}
                                                </li>
                                            )
                                        )}
                                        <li className="lg:relative lg:block z-20">
                                            <div className="relative block pt-6 pl-0 md:pl-12 md:pt-0">
                                                <button
                                                    onClick={openModal}
                                                    data-modal-target="default-modal"
                                                    data-modal-toggle="default-modal"
                                                    type="button"
                                                    className="w-5 h-5"
                                                >
                                                    <SearchIcon
                                                        className="w-5 h-5 fill-primary"
                                                        color="#005893"
                                                    />
                                                </button>
                                            </div>
                                            <ModalSearch
                                                isModalOpen={isModalOpen}
                                                closeModal={closeModal}
                                            />
                                        </li>
                                    </ul>
                                    <div className="border-b lg:border-none"></div>
                                </div>
                            </div>
                        </ContentWidth>
                    </nav>
                </>
            </div>
        </header>
    );
};

export default Header;
