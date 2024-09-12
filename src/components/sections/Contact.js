'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Contact = ({ blok }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section
            className="py-16 lg:py-24 bg-stadlergradient"
            {...storyblokEditable(blok)}
            ref={ref}
        >
            <SmallWidth>
                <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:gap-20 xl:grid-cols-12 items-center">
                    <div className="w-full xl:col-span-4">
                        <img
                            className="object-cover object-right max-w-full w-full h-auto xl:w-[320px] xl:h-[369px] xl:max-w-[320px]"
                            src={blok?.image.filename}
                            alt="Contact image"
                        />
                    </div>
                    <div className="w-full xl:col-span-8">
                        <div
                            style={{
                                transform: isInView
                                    ? 'none'
                                    : 'translateY(10px)',
                                opacity: isInView ? 1 : 0,
                                transition:
                                    'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                            }}
                            className=" tracking-tight text-white"
                        >
                            <H2>{blok?.Title}</H2>
                        </div>
                        <div className="mb-8 font-light md:text-lg text-white">
                            <Text>{blok?.text}</Text>
                        </div>
                        <div className="flex-col text-white">
                            <div className="mb-4">
                                <H4>{blok?.subtitle}</H4>
                            </div>
                            <div className="mb-2 flex items-center">
                                <PhoneIcon
                                    color="#fff"
                                    className="fill-white w-4 h-4"
                                />
                                <span className="py-2 px-3">
                                    {blok?.phonenumber}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <MailIcon
                                    color="#fff"
                                    className="fill-white w-4 h-4"
                                />
                                <a
                                    type="email"
                                    className="bg-transparent border-none"
                                    href={'mailto:' + blok?.email_link?.email}
                                >
                                    {blok?.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default Contact;
