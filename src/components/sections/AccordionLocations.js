'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useState } from 'react';
import H4 from '../typography/H4';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { PinIcon } from '../icons/PinIcon';
import RichTextRenderer from '../helpers/RichTextRenderer';

const AccordionLocations = ({ blok }) => {
    const [isActive, setIsActive] = useState(false);
    const handleAccordionClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="col-span-12" {...storyblokEditable(blok)}>
            <div
                onClick={handleAccordionClick}
                className="border-b border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
                <div className="flex w-full items-center justify-between p-2 font-medium text-gray-500 rtl:text-right">
                    <div className="pt-4">
                        <div className="flex">
                            <p className="mb-3 mr-4 inline-flex items-center bg-primaryTrans-100 px-2 py-1 text-xs font-light tracking-tight text-gray-900">
                                {blok.tag_division.map((country, index) => (
                                    <span key={index}>
                                        {country.content.category}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="mr-6 font-medium text-black">
                                <H4>{blok.title}</H4>
                            </div>
                        </div>
                        <div className="hidden w-full flex-wrap items-start lg:flex-nowrap">
                            {blok.tag_business_area.map((category, index) => (
                                <span key={index}>
                                    {category.content.category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={`flex w-full items-center justify-between py-5 text-left font-medium ${
                                isActive
                                    ? 'bg-white text-gray-900 dark:text-white'
                                    : 'text-gray-500 dark:text-gray-400'
                            }`}
                            onClick={handleAccordionClick}
                            aria-expanded={isActive}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                                    fill="#6b7280"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {isActive && (
                    <div className="border-t border-gray-200 px-2 py-5 dark:border-gray-700 lg:p-5">
                        <div className="flex flex-col items-start justify-start lg:flex-row">
                            <div className="mb-4 w-9/12 lg:mb-0">
                                <div className="mb-4 flex items-center justify-start">
                                    <PhoneIcon color="#000" />
                                    <span className="ml-4">
                                        {blok?.phonenumber}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center justify-start">
                                    <MailIcon className="fill-blueDark" />
                                    <span className="ml-4">{blok?.email}</span>
                                </div>

                                <div className="mb-2 flex items-center justify-start text-primary">
                                    <PinIcon />
                                    <a
                                        className="cursor-pointer"
                                        href={blok?.link_google_maps?.url}
                                    >
                                        <span className="ml-2">
                                            {blok?.text_google_maps}
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <img
                                src={blok?.image?.filename}
                                className="flex md:w-3/12"
                                alt="Stadler Office image"
                            />
                        </div>
                        <div className="pt-8">
                            <p className="mb-2 text-black dark:text-gray-400">
                                <RichTextRenderer text={blok?.text} />
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccordionLocations;
