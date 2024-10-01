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
                    className={`flex w-full items-center justify-between border-b border-gray-200 py-5 text-left text-base font-medium lg:text-xl ${
                        isActive
                            ? 'text-primary dark:text-white'
                            : 'text-black dark:text-gray-400'
                    }`}
                    onClick={handleAccordionClick}
                    aria-expanded={isActive}
                >
                    <span>{blok?.title}</span>
                    <ChevronDown
                        styles={isActive ? 'fill-primary' : 'fill-black'}
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
