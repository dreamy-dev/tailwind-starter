'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { color, motion } from 'framer-motion';
import { useState } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import TrainSequence from './TrainSequence';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

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
                    <H2>{blok.title}</H2>
                    <Text>{blok.lead}</Text>
                    <motion.a
                        className="flex mt-4"
                        href={ButtonUrlRenderer(blok?.cta_link)}
                        whileHover={{
                            x: 2,
                        }}
                        whileTap={{ x: 2 }}
                    >
                        <img
                            className="h-5"
                            src="/stadler-arrow-foreward.svg"
                        />
                    </motion.a>
                </div>
            </ContentWidth>
            <div className="w-full">
                <TrainSequence
                    selectedCategory={selectedCategory}
                ></TrainSequence>
                <ContentWidth>
                    <div className="col-span-12 lg:col-span-8 lg:col-start-4 lg:col-end-10 grid lg:grid-cols-1 my-6">
                        <div className="flex flex-row items-start  justify-between lg:justify-center">
                            {blok.wrapper.map((item, key) => (
                                <div
                                    key={key}
                                    className={`${
                                        selectedCategory === key
                                            ? 'text-white'
                                            : 'text-greyBrighten-600'
                                    } font-semibold text-center lg:px-4 flex flex-col items-center cursor-pointer`}
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
                                    <p className="text-sm lg:text-base">
                                        {item.tab_title}
                                    </p>
                                    <motion.img
                                        className={`${selectedCategory === key ? 'w-3 lg:w-4' : 'w-0'} mt-2`}
                                        src="/plus-light.svg"
                                        animate={
                                            selectedCategory === key && isOpen
                                                ? 'open'
                                                : 'close'
                                        }
                                        variants={plusAnimation}
                                        key={item.key}
                                        alt="Train Type image"
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
                    key={nestedBlok._uid}
                />
            ))}
        </>
    );
};

export default HomeSolutionsSchienenfahrzeugeWrapper;
