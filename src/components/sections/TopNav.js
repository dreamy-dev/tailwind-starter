'use client';
import LanguageSwitcher from '../elements/LanguageSwitcher';
import React from 'react';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';

export default function TopNav({ blok, closeMainMenu, closeMobileNav }) {
    const navigation = {
        topNav: [
            { name: blok.media_link_text, href: blok.media_link.story.url },
            { name: blok.suppliers_text, href: blok.suppliers_link.story.url },
            { name: blok.downloads_text, href: blok.downloads_link.story.url },
        ],
    };
    return (
        <section className="bg-white">
            <ContentWidth>
                <div className="col-span-12 px-4 lg:px-0">
                    <div className="pt-5 flex flex-col sm:justify-between lg:justify-end lg:flex-row lg:flex lg:items-center gap-8 lg:gap-4">
                        <ul
                            role="list"
                            className="flex lg:flex flex-col lg:flex-row justify-between lg:justify-end gap-8"
                        >
                            {navigation.topNav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                         onClick={() => {
                                            // closeUnternehmenSubmenu();
                                            // closeSolutionsSubmenu();
                                            closeMainMenu();
                                            closeMobileNav();
                                        }} 
                                        href={item.href}
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
            </ContentWidth>
        </section>
    );
}
