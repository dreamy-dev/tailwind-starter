'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useState } from 'react';
import H3 from '../typography/H3';
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
                className="text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
                <div className="flex justify-between items-center w-full p-2 font-medium rtl:text-right text-gray-500">
                    <div className="pt-4">
                        <div className="flex">
                            <p className="mb-3 mr-4 py-1 px-2 inline-flex items-center text-xs font-light bg-primaryTrans-100 tracking-tight text-gray-900">
                                {blok.tag_division.map((country, index) => (
                                    <span key={index}>{country.content.category}</span>
                                ))}
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="mr-6 text-black font-medium">
                                <H4>{blok.title}</H4>
                            </div>
                        </div>
                        <div className="hidden w-full  items-start flex-wrap lg:flex-nowrap">
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
                            className={`flex justify-between items-center py-5 w-full font-medium text-left ${isActive
                                ? 'text-gray-900 bg-white  dark:text-white'
                                : 'text-gray-500   dark:text-gray-400'
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
                    <div className="px-2 py-5 lg:p-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row justify-start items-start">
                            <div className="w-9/12 mb-4 lg:mb-0">
                                <div className="mb-4 flex justify-start items-center">
                                    <PhoneIcon color="#000" />
                                    <span className="ml-4">
                                        {blok?.phonenumber}
                                    </span>
                                </div>

                                <div className="flex mb-4 justify-start items-center">
                                    <MailIcon className="fill-blueDark" />
                                    <span className="ml-4">{blok?.email}</span>
                                </div>

                                <div className="mb-2 flex justify-start items-center text-primary">
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
