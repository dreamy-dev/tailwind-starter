'use client';

import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const Jobs = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto lg:px-6 py-16 lg:py-24">
                <div className="flex flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row xl:items-start">
                    <div>
                        <H2>{blok?.title}</H2>
                        <Text>{blok?.text}</Text>
                        <div className="mt-8">
                            <ButtonPrimary
                                href={blok?.link_URL.url}
                                position="left"
                                buttonText={blok?.link_CTA}
                            />
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 xl:max-w-3xl shrink-0 sm:grid-cols-2 md:grid-cols-3">
                        {blok?.career_open_positions_items.map((item) => (
                            <a
                                key={item.title}
                                src={item.link.url}
                                className="relative overflow-hidden group"
                            >
                                <img
                                    className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                    src={item.image.filename}
                                    alt=""
                                />
                                <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                    <div className="text-center">
                                        <p className="text-xl font-bold text-white">
                                            {item?.title}
                                        </p>
                                        <p className="text-base font-medium text-gray-300">
                                            {item?.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
