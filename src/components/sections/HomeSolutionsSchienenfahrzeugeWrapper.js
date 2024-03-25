'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import TrainSequence from './TrainSequence';

const plusAnimation = {
    open: { transform: 'rotate(45deg)' },
    close: { transform: 'rotate(0deg)' },
};

const HomeSolutionsSchienenfahrzeugeWrapper = ({ blok }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <>
            <ContentWidth {...storyblokEditable(blok)}>
                <div className="col-span-12 lg:col-span-6 lg:ml-8 text-white">
                    <H3>{blok.title}</H3>
                    <Text>{blok.lead}</Text>
                    <a className="flex mt-4" href={blok.cta_link.url}>
                        <img
                            className="h-5"
                            src="/stadler-arrow-foreward.svg"
                        />
                    </a>
                </div>
            </ContentWidth>
            <div className="w-full">
                <TrainSequence
                    selectedCategory={selectedCategory}
                ></TrainSequence>
                <ContentWidth>
                    <div className="col-span-8 col-start-4 col-end-10 grid grid-cols-1 my-6">
                        <div className="flex flex-row items-start justify-center">
                            {blok.wrapper.map((item, key) => (
                                <div
                                    key={item.key}
                                    className={`${
                                        selectedCategory === key
                                            ? 'text-white'
                                            : 'text-greyBrighten-600'
                                    } font-semibold text-center px-4 flex flex-col items-center cursor-pointer`}
                                    onClick={() => (
                                        setIsOpen(
                                            selectedCategory === key &&
                                                isOpen === false
                                                ? true
                                                : false
                                        ),
                                        setSelectedCategory(key),
                                        console.log(
                                            'selectedCategory',
                                            selectedCategory
                                        )
                                    )}
                                >
                                    <p>{item.tab_title}</p>
                                    <motion.img
                                        className={`${selectedCategory === key ? 'w-4' : 'w-0'} mt-2`}
                                        src="/plus-light.svg"
                                        animate={
                                            selectedCategory === key && isOpen
                                                ? 'open'
                                                : 'close'
                                        }
                                        variants={plusAnimation}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ContentWidth>
            </div>
            {blok.wrapper.map((nestedBlok, index) => (
                <StoryblokComponent
                    blok={nestedBlok}
                    open={selectedCategory === index && isOpen}
                    key={nestedBlok?._uid}
                />
            ))}
        </>
    );
};

export default HomeSolutionsSchienenfahrzeugeWrapper;
