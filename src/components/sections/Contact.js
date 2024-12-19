'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';

const Contact = ({ blok }) => {
    return (
        <section
            className="bg-stadlergradient py-16 lg:py-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 xl:grid-cols-12 xl:gap-20">
                    <div className="w-full xl:col-span-4">
                        <img
                            className="h-auto w-full max-w-full object-cover object-right xl:h-[369px] xl:w-[320px] xl:max-w-[320px]"
                            src={blok?.image?.filename}
                            alt={blok?.image?.filename.alt ?? 'Contact image'}
                        />
                    </div>
                    <div className="w-full xl:col-span-8">
                        <div className="tracking-tight text-white">
                            <H2>{blok?.Title}</H2>
                        </div>
                        <div className="mb-8 font-light text-white md:text-lg">
                            <Text>{blok?.text}</Text>
                        </div>
                        <div className="flex-col text-white">
                            <div className="mb-4">
                                <H4>{blok?.subtitle}</H4>
                            </div>
                            <div className="mb-2 flex items-center">
                                <PhoneIcon
                                    color="#fff"
                                    className="h-4 w-4 fill-white"
                                />
                                <span className="px-3 py-2">
                                    {blok?.phonenumber}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <MailIcon
                                    color="#fff"
                                    className="h-4 w-4 fill-white"
                                />
                                <a
                                    tabIndex="1"
                                    type="email"
                                    className="border-none bg-transparent"
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
