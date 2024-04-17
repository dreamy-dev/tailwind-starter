"use client"
import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';
import Button from '../elements/ButtonSecondary';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';




const  Footer = async ({ blok })  => {

    
        // const legalLinks = (
        //     <ul
        //         role="list"
        //         className="gap-6 gap-y-4 flex-wrap flex flex-row lg:gap-8"
        //     >
        //         <li>
        //             <a
        //                 href={blok.link_1_url.url}
        //                 className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
        //             >
        //                 {blok.link_1_text}
        //             </a>
        //         </li>
        //         <li>
        //             <a
        //                 href={blok.link_2_url.url}
        //                 className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
        //             >
        //                 {blok.link_2_text}
        //             </a>
        //         </li>
        //         <li>
        //             <a
        //                 href={blok.link_3_url.url}
        //                 className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
        //             >
        //                 {blok.link_3_text}
        //             </a>
        //         </li>
        //         <li>
        //             <a
        //                 href={blok.link_4_url.url}
        //                 className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
        //             >
        //                 {blok.link_4_text}
        //             </a>
        //         </li>
        //         <li>
        //             <a
        //                 href={blok.link_5_url.url}
        //                 className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
        //             >
        //                 {blok.link_5_text}
        //             </a>
        //         </li>
        //     </ul>
        // );
    
// const socialLinks = (
//     <div className="flex space-x-4">
//         <Link
//             href={blok.social_media_link_2_url}
//             className="text-gray-500 hover:text-gray-400"
//         >
//             <span className="sr-only">LinkedIn</span>
//             <img src="/icons/linkedin.svg" className="h-6 w-6" alt="LinkedIn" />
//         </Link>
//         <Link
//             href={blok.social_media_link_3_url}
//             className="text-gray-500 hover:text-gray-400"
//         >
//             <span className="sr-only">YouTube</span>
//             <img src="/icons/youtube.svg" className="h-6 w-6" alt="YouTube" />
//         </Link>
//         <Link
//             href={blok.social_media_link_4_url}
//             className="text-gray-500 hover:text-gray-400"
//         >
//             <span className="sr-only">Facebook</span>
//             <img src="/icons/facebook.svg" className="h-6 w-6" alt="Facebook" />
//         </Link>
//         <Link
//             href={blok.social_media_link_1_url}
//             className="text-gray-500 hover:text-gray-400"
//         >
//             <span className="sr-only">Xing</span>
//             <img src="/icons/xing.svg" className="h-6 w-6" alt="Xing" />
//         </Link>
//     </div>
// );
 
    return (
        <footer
            {...storyblokEditable(blok)}
            className="bg-blueDark mt-auto"
            aria-labelledby="footer-heading"
        >
            <ContentWidth>
                <div className="col-span-12 py-8 mx-auto w-full  lg:py-10">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <img
                            className="h-6"
                            // src={blok.filename.Logo}
                            alt="Company name"
                        />
                        <div className="sm:mt-0 lg:flex lg:items-center lg:justify-between">
                            <div className=" mb-6 mt-12 lg:mt-0 lg:mb-0 lg:mr-14 ">
                                <Button
                                    backgroundColorClass="bg-transparent"
                                    textColorClass="text-white"
                                    borderColorClass="border-white"
                                    position="left"
                                    // href={blok.button.url}
                                >
                                    {/* {blok.button_text} */}
                                </Button>
                            </div>
                            <div className="flex space-x-4">
                                {/* {socialLinks} */}
                                {/* {navigation.social.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-500 hover:text-gray-400"
                                    >
                                        <span className="sr-only">
                                            {item.name}
                                        </span>
                                        <item.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                ))} */}
                            </div>
                        </div>
                    </div>

                    <div className=" lg:pt-8 flex-wrap flex-row  lg:flex xl:flex-row md:flex-col md:justify-start md:items-start xl:items-center xl:justify-between">
                        <div className="mt-16 lg:mt-0">
                            {/* {legalLinks} */}
                            {/* <ul
                                role="list"
                                className=" gap-6 gap-y-4 flex-wrap flex flex-row lg:gap-8"
                            >
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                        <p className="mt-16 md:mt-16 lg:mt-16 xl:mt-0 sm:mt-12 text-base leading-5 text-primarySolid-400">
                            {/* {blok.copyright_text} */}
                        </p>
                    </div>
                </div>
            </ContentWidth>
        </footer>
    );
 }

export default Footer;
