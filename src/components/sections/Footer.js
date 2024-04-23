
import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';
import Button from '../elements/ButtonSecondary';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';

const Footer = ({ blok }) => {

    const legalLinks = (
        <ul
            role="list"
            className="gap-6 gap-y-4 flex-wrap flex flex-row lg:gap-8"
        >
            <li>
                <a
                    href={`/${blok.link_1_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_1_text}
                </a>
            </li>
            <li>
                <a
                    href={`/${blok.link_2_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_2_text}
                </a>
            </li>
            <li>
                <a
                    href={`/${blok.link_3_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_3_text}
                </a>
            </li>
            <li>
                <a
                    href={`/${blok.link_4_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_4_text}
                </a>
            </li>
            <li>
                <a
                    href={`/${blok.link_5_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_5_text}
                </a>
            </li>
        </ul>
    );

    const socialLinks = (
        <div className="flex space-x-4">
            <Link
                href={blok.social_media_link_2.url}
                className="text-gray-500 hover:text-gray-400"
            >
                <span className="sr-only">LinkedIn</span>
                <img src="/LinkedIn.svg" className="h-6 w-6" alt="LinkedIn" />
            </Link>
            <Link
                href={blok.social_media_link_3.url}
                className="text-gray-500 hover:text-gray-400"
            >
                <span className="sr-only">YouTube</span>
                <img src="/youtube.svg" className="h-6 w-6" alt="YouTube" />
            </Link>
            <Link
                href={blok.social_media_link_4.url}
                className="text-gray-500 hover:text-gray-400"
            >
                <span className="sr-only">Facebook</span>
                <img src="/facebook.svg" className="h-6 w-6" alt="Facebook" />
            </Link>
            <Link
                href={blok.social_media_link_1.url}
                className="text-gray-500 hover:text-gray-400"
            >
                <span className="sr-only">Xing</span>
                <img src="/xing-icon.svg" className="h-6 w-6" alt="Xing" />
            </Link>
        </div>
    );

    return (
        <footer
            className="bg-blueDark mt-auto"
            aria-labelledby="footer-heading"
        >
            {JSON.stringify(blok)}
            <ContentWidth>
                <div className="col-span-12 py-8 mx-auto w-full  lg:py-10">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <img
                            className="h-6"
                            src={blok.Logo.filename}
                            alt="Company name"
                        />
                        <div className="sm:mt-0 lg:flex lg:items-center lg:justify-between">
                            <div className=" mb-6 mt-12 lg:mt-0 lg:mb-0 lg:mr-14 ">
                                <Button
                                    backgroundColorClass="bg-transparent"
                                    textColorClass="text-white"
                                    borderColorClass="border-white"
                                    position="left"
                                    href={`/${blok.button.story.url}`}
                                >
                                    {blok.button_text}
                                </Button>
                            </div>
                            <div className="flex space-x-4">{socialLinks}</div>
                        </div>
                    </div>

                    <div className=" lg:pt-8 flex-wrap flex-row  lg:flex xl:flex-row md:flex-col md:justify-start md:items-start xl:items-center xl:justify-between">
                        <div className="mt-16 lg:mt-0">{legalLinks}</div>

                        <p className="mt-16 md:mt-16 lg:mt-16 xl:mt-0 sm:mt-12 text-base leading-5 text-primarySolid-400">
                            {blok.copyright_text}
                        </p>
                    </div>
                </div>
            </ContentWidth>
        </footer>
    );
}

export default Footer;
