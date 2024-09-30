import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import Link from 'next/link';
import { MotionConfig, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H4 from '../typography/H4';
import { ChevronLeft } from '../icons/ChevronLeft';
import { ChevronRight } from '../icons/ChevronRight';
import RichTextRenderer from '../helpers/RichTextRenderer';

const TestimonialMotionDiv = motion.div;

const images = [
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Ein Hybrid-FLIRT baut die Pendlerstrecke vom Flughafen Dallas aus ',
        text: 'Im Juni 2019 orderte  Dallas Area Rapid Transit bei Stadler acht bi-modale Niederflurtriebzüge vom Modell FLIRT 160 für ihr Silverline-Projekt. Die Züge werden auf der Pendlerstrecke im Korridor zwischen Plano und dem nördlichen Teil des internationalen Flughafens Fort Worth in Dallas verkehren.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Der Weltrekord-Zug: FLIRT Akku',
        text: 'Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
];

const Pagination = ({ total, current }) => {
    return (
        <div className="flex justify-center text-sm font-medium text-greySolid-400">
            <p className="flex flex-row gap-2 text-sm font-medium">
                <span> {current + 1}</span>
                <span>|</span>
                <span>{total}</span>
            </p>
        </div>
    );
};

const TestimonialsCarousel = ({ blok }) => {
    const [current, setCurrent] = useState(0);
    const [showTrains, setShowTrains] = useState(false);
    const [highlightsCategory, setHighlightsCategory] = useState([]);
    const [reference, setReference] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const arrayHighlight = [];
            blok.highlight_reference.map((item) => {
                arrayHighlight.push(item.uuid);
            });

            const highlightReference = arrayHighlight.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'loesungen/',
                is_startpage: false,
                'filter_query[categories][any_in_array]': highlightReference,
                per_page: 5,
            });

            setHighlightsCategory(() =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;

                    return article;
                })
            );
        };
        getArticles();
    }, []);

    useEffect(() => {
        const getArticles = async () => {
            const arrayReference = [];
            blok.reference.map((item) => {
                arrayReference.push(item.uuid);
            });

            const references = arrayReference.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'loesungen/',
                is_startpage: false,
                'filter_query[categories][any_in_array]': references,
            });

            setReference(() =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        };
        getArticles();
    }, []);

    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const onNextClick = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1);
        }
    };

    const toggleTrainsVisibility = () => {
        setShowTrains(!showTrains);
    };

    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-primarySolid-50 py-16 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full 2xl:pl-0">
                    <div className="mb-4 flex items-center justify-center">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <MotionConfig
                            transition={{
                                duration: 0.7,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                        >
                            <div className="relative flex w-full max-w-[100%] items-center">
                                <motion.div className="flex max-w-[100%] flex-nowrap gap-6 lg:mx-[-10px] lg:my-[-10px] lg:px-[10px] lg:py-[10px]">
                                    {highlightsCategory[0] &&
                                        highlightsCategory.map(
                                            (article, idx) => (
                                                <TestimonialMotionDiv
                                                    key={article.uuid}
                                                    className="grid min-w-[100%] grid-cols-1 bg-white shadow lg:min-w-[90%] lg:grid-cols-2 lg:flex-row"
                                                    animate={{
                                                        translateX: `calc(-${current * 100}% - ${
                                                            current * 1.5
                                                        }rem)`,
                                                        opacity:
                                                            idx === current
                                                                ? 1
                                                                : 0.3,
                                                    }}
                                                >
                                                    <a
                                                        href={`/${article.full_slug}`}
                                                    >
                                                        <img
                                                            src={
                                                                article.content
                                                                    .image
                                                                    .filename
                                                            }
                                                            alt={`Image for ${blok?.title}`}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </a>
                                                    <div className="flex flex-col justify-between p-10 leading-normal">
                                                        <Text styles="mb-6 md:mb-10">
                                                            {article.name}
                                                        </Text>
                                                        <div className="">
                                                            <H3>
                                                                {
                                                                    article
                                                                        .content
                                                                        .title
                                                                }
                                                            </H3>
                                                            <RichTextRenderer
                                                                text={
                                                                    article
                                                                        .content
                                                                        .lead
                                                                }
                                                                styles="mb-6 mt-8 md:mb-10 mt-4 md:mt-8"
                                                            ></RichTextRenderer>
                                                        </div>
                                                        <Link
                                                            href={`/${article.full_slug}`}
                                                            className="inline-flex items-center py-2 text-center text-sm font-medium"
                                                        >
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clipPath="url(#clip0_4995_6662)">
                                                                    <path
                                                                        d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                                                        fill="#005893"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_4995_6662">
                                                                        <rect
                                                                            width="20"
                                                                            height="20"
                                                                            fill="white"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </TestimonialMotionDiv>
                                            )
                                        )}
                                </motion.div>
                            </div>
                        </MotionConfig>
                    </div>
                    <div className="justify-beetween relative col-span-12 mt-8 flex w-full flex-row items-center">
                        <button
                            type="button"
                            onClick={toggleTrainsVisibility}
                            className="flex w-1/2 flex-row items-center gap-2 whitespace-nowrap py-4 text-base text-primary"
                        >
                            {!showTrains ? (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_4995_6652)">
                                        <path
                                            d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                                            fill="#005893"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4995_6652">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="#005893"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 8.88892H11.1111H8.88889H0V11.1111H8.88889H11.1111H20V8.88892Z"
                                        fill="#005893"
                                    />
                                </svg>
                            )}
                            {blok?.collapse_text}
                        </button>

                        <div className="flex w-full flex-row items-center justify-end gap-4 py-4">
                            <Pagination
                                total={images.length}
                                current={current}
                            />
                            <motion.div
                                className="z-10 flex flex-row gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <button onClick={onPrevClick}>
                                    <ChevronLeft styles="w-5 h-5 fill-primary" />
                                </button>
                                <button onClick={onNextClick}>
                                    <ChevronRight styles="w-5 h-5 fill-primary" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-12 max-w-full">
                        {showTrains && (
                            <div className="mt-2 w-full grid-cols-1 gap-6 md:grid md:gap-10 lg:grid-cols-3 xl:gap-6">
                                {reference[0] &&
                                    reference.map((train, idx) => (
                                        <div
                                            key={idx}
                                            className="max-full relative mx-auto mb-8 flex flex-col items-stretch justify-between border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:mb-0 md:max-w-md"
                                        >
                                            <a href={`/${train.full_slug}`}>
                                                <img
                                                    className="aspect-[4/3] w-full"
                                                    src={
                                                        train.content.image
                                                            .filename
                                                    }
                                                    alt={`Image for ${train.content.title}`}
                                                />
                                            </a>
                                            <div className="flex h-full flex-col justify-between p-8">
                                                <H4 styles="mb-4">
                                                    {train.content.title}
                                                </H4>
                                                <Link
                                                    href={`/${train.full_slug}`}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_4995_6662)">
                                                            <path
                                                                d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                                                fill="#005893"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4995_6662">
                                                                <rect
                                                                    width="20"
                                                                    height="20"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default TestimonialsCarousel;
