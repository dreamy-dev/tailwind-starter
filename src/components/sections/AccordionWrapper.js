'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { useState } from 'react';
import { ChevronDown } from '../icons/ChevronDown';

const AccordionWrapper = ({ blok }) => {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionClick = () => {
        setIsActive(!isActive);
    };
    return (
        <div {...storyblokEditable(blok)}>
            <h2 className="mb-2">
                <button
                    type="button"
                    className={`flex w-full items-center justify-between py-5 text-left font-medium ${
                        isActive
                            ? 'border-b border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                            : 'border-b border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400'
                    }`}
                    onClick={handleAccordionClick}
                    aria-expanded={isActive}
                >
                    <span>{blok?.title}</span>
                    <ChevronDown
                        styles={isActive ? 'fill-black' : 'fill-gray-500'}
                    />
                </button>
            </h2>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <div className="">
                    <div id="accordion-flush" {...storyblokEditable(blok)}>
                        {blok.accordion_item.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionWrapper;
