'use client';
import LanguageSwitcher from '../elements/LanguageSwitcher';
import React from 'react';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function TopNav({ blok }) {
    const navigation = {
        topNav: [
            { name: blok.media_link_text, href: blok.media_link },
            { name: blok.suppliers_text, href: blok.suppliers_link },
            { name: blok.downloads_text, href: blok.downloads_link },
        ],
    };
    return (
        <div className="">
            <div className="pt-5 flex flex-col sm:justify-between lg:justify-end lg:flex-row lg:flex lg:items-center gap-2 lg:gap-4">
                <ul
                    role="list"
                    className="flex lg:flex flex-col lg:flex-row justify-between lg:justify-end gap-4 lg:gap-8"
                >
                    {navigation.topNav.map((item) => (
                        <li key={item.name}>
                            <Link
                                onClick={() => {
                                    // closeUnternehmenSubmenu();
                                    // closeSolutionsSubmenu();
                                    /* closeMainMenu(); */
                                    /* closeMobileNav(); */
                                }}
                                href={ButtonUrlRenderer(item.href)}
                                className="text-base leading-6 font-medium text-primarySolid-800 hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <LanguageSwitcher />
            </div>
        </div>
    );
}
