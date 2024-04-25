import { useState, useEffect } from 'react';
import {
    getStoryblokApi,
    storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import DateFormatter from '../helpers/DateFormatter';

const MedienMedienmitteilungenTeaser = ({ blok }) => {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);

    useEffect(() => {
        const getMedienmitteilungen = async () => {
            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'medien/medienmitteilungen/',
                is_startpage: false,
                resolve_relations: 'medienmitteilungen.categories',
                sort_by: 'content.date:desc',
                per_page: 5,
            });

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
                <div className="col-span-12 max-w-full  pb-24">
                    <H2>{blok?.title}</H2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs whitespace-nowrap text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 w-1/12"
                                    >
                                        {blok.table_date_title}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 w-7/12"
                                    >
                                        {blok.table_medienmitteilungen_title}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 w-2/12"
                                    >
                                        {blok.table_category_title}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 w-2/12"
                                    >
                                        <div className="flex justify-end">
                                            {blok.table_documents_title}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {medienmitteilungen[0] &&
                                    medienmitteilungen.map((item) => (
                                        <tr
                                            key={item.uuid}
                                            className="bg-white border-b dark:bg-black dark:border-gray-700"
                                        >
                                            <td
                                                scope="row"
                                                className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                            >
                                                {DateFormatter(
                                                    item.content.date
                                                )}
                                            </td>
                                            <td
                                                scope="row"
                                                className="px-6 py-4  font-medium text-black"
                                            >
                                                <a href={`/${item.full_slug}`}>
                                                    {item.name}
                                                </a>
                                            </td>
                                            <td
                                                scope="row"
                                                className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                            >
                                                {item.content.categories.map(
                                                    (category, index) => (
                                                        <span
                                                            key={index}
                                                            className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                                                        >
                                                            {
                                                                category.content
                                                                    .category
                                                            }
                                                        </span>
                                                    )
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-primary">
                                                <div className="flex justify-end">
                                                    {item.content.downloads_block?.forEach(
                                                        (
                                                            downloadBlock,
                                                            index
                                                        ) =>
                                                            downloadBlock.download_grid?.map(
                                                                (
                                                                    downloadGrid,
                                                                    index
                                                                ) => (
                                                                    <a
                                                                        href={
                                                                            downloadGrid?.download_cta.url
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="ml-3 pt-2 pb-2 inline-flex"
                                                                    >
                                                                        {
                                                                            downloadGrid?.download_cta_text
                                                                        }
                                                                    </a>
                                                                )
                                                            )
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-16">
                        <ButtonPrimary
                            position="left"
                            href={blok?.CTA_Show_All.url}
                            buttonText={blok?.ctag_all_news}
                        />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};
export default MedienMedienmitteilungenTeaser;
