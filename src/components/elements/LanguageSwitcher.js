'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import { ChevronDown } from '../icons/ChevronDown';

const variantsLang = {
    open: { scale: 1, zIndex: 2 },
    closed: { scale: 0, zIndex: 1 },
};

const LanguageSwitcher = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const currentPathname = usePathname();
    const currentLocale = useCurrentLocale(i18nConfig);

    const handleChange = () => {
        //static implementation of language switcher
        const newLocale = currentLocale == 'en' ? 'de' : 'en';

        router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
        /* TODO: If folder level translations are added: use this logic */
        // redirect to the new locale path
        /* if (currentLocale === i18nConfig.defaultLocale) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        } */
        router.refresh();
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="inline-flex items-center dark:text-gray-300 hover:bg-greySolid-30 hover:text-primary text-primarySolid-800 font-medium rounded-lg text-base lg:px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none "
            >
                {currentLocale == 'en' ? 'English' : 'Deutsch'}
                <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
                {/* <ChevronDown styles="w-6 h-6" color="#005893" /> */}
            </button>
            <motion.div
                animate={isOpen ? 'open' : 'closed'}
                variants={variantsLang}
                initial="closed"
                className="lg:absolute lg:top-14 lg:my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow hover:cursor-pointer dark:bg-gray-700"
                id="language-dropdown"
            >
                <ul className="py-1" role="menu">
                    {/* TODO: With folder level translation, map over languages here to display options */}
                    <li role="none">
                        <a
                            role="menuitem"
                            onClick={handleChange}
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <div className="inline-flex items-center">
                                {currentLocale == 'en' ? 'German' : 'Englisch'}
                            </div>
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default LanguageSwitcher;
