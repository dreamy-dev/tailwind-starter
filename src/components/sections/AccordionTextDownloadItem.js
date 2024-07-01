'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const AccordionTextDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <ul>
                <div>
                    <li className=" my-4 text-xl flex justify-between items-center">
                        <p className="w-5/12 pr-4">{blok?.text_location}</p>
                        <p className="w-5/12 pr-4">{blok?.text_certifications}</p>

                        <div className="w-2/12 flex-wrap flex justify-end items-center">
                            {blok?.certificate_download?.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                    </li>
                    {/* <div className="border-b mb-6"></div> */}
                </div>
            </ul>
        </div>
    );
};

export default AccordionTextDownloadItem;
