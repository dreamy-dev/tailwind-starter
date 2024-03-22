import { useState, useEffect } from 'react';
import {
    getStoryblokApi, storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';

const MedienMedienmitteilungenTeaser = ({
    leadText,

    blok,
}) => {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);
    console.log("blok", blok)
    useEffect(() => {
        const getMedienmitteilungen = async () => {
            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'medien/medienmitteilungen/',
                is_startpage: false,
                resolve_relations: ['medienmitteilungen.categories'],
                sort_by: 'content.date:desc',
                per_page: 5,
            });
            console.log('data medienmitteilungen', data);
            setMedienmitteilungen((prev) =>
                data.stories.map((medienmitteilungen) => {
                    medienmitteilungen.content.slug = medienmitteilungen.slug;
                    return medienmitteilungen;
                })
            );
        };
        getMedienmitteilungen();
    }, []);
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-5 lg:py-12"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full flex flex-col justify-left">
                    <H2>{blok?.title}</H2>

                    <ul className="mb-8" >
                        {medienmitteilungen[0] &&
                            medienmitteilungen.map((item) => (
                                <li key={item.uuid}>
                                    <a
                                        className="group mb-6 text-xl md:flex-row flex justify-start md:justify-between items-center"
                                        href={`medienmitteilungen/${item.slug}`}
                                    >
                                        <div className="text-xl flex group-hover:text-primary justify-start md:justify-between items-center">
                                            <p className="w-28 group-hover:text-primary transition-all">
                                                {DateFormatter(
                                                    item.content.date
                                                )}
                                            </p>
                                            <p className="group-hover:text-primary transition-all px-4">
                                                {TrimText(item.content.lead)}
                                            </p>
                                        </div>

                                        <img
                                            className="w-5 h-5"
                                            src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                            alt="Icon arrow"
                                        />
                                    </a>
                                    <div className="border-b mb-6"></div>
                                </li>
                            ))}
                    </ul>
                    <ButtonPrimary
                        position="left"
                        // href={blok?.CTA_Show_ALL.url}
                        buttonText={blok?.ctag_all_news}
                    />
                </div>
            </ContentWidth>
        </section>
    );
};
export default MedienMedienmitteilungenTeaser;
