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
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

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
                    <ul className="hidden lg:grid grid-cols-12 gap-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-primarySolid-50 dark:bg-gray-700">
                        <li className="col-span-1 px-6 py-3 text-xs font-bold text-black uppercase">
                            {blok.table_date_title}
                        </li>
                        <li className="col-span-5 px-6 py-3 text-xs font-bold text-black uppercase">
                            {blok.table_medienmitteilungen_title}
                        </li>
                        <li className="col-span-3 px-6 py-3 text-xs font-bold text-black uppercase">
                            {blok.table_category_title}
                        </li>
                        <li className="col-span-3 px-6 py-3 text-xs font-bold text-black uppercase flex justify-end">
                            {blok.table_documents_title}
                        </li>
                    </ul>
                    <div className="w-full blok lg:hidden  mb-4 border-b dark:border-gray-700"></div>
                    <div className="grid grid-cols-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        {medienmitteilungen[0] &&
                            medienmitteilungen.map((item) => (
                                <div
                                    key={item.uuid}
                                    className="col-span-12 bg-white dark:bg-black dark:border-gray-700 border-b"
                                >
                                    <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                                        <div className="bg-primarySolid-50 lg:bg-white col-span-1 lg:col-span-1 px-6 py-4 font-medium text-black whitespace-nowrap">
                                            {DateFormatter(item.content.date)}
                                        </div>
                                        <div className="col-span-1 lg:col-span-5 px-6 py-4 font-medium text-black">
                                            <a href={`/${item.full_slug}`}>
                                                {item.content.title}
                                            </a>
                                        </div>
                                        <div className="bg-primarySolid-50 lg:bg-white col-span-1 lg:col-span-3 px-6 py-4 font-medium text-black">
                                            {item.content.categories.map(
                                                (category, index) => (
                                                    <span
                                                        key={index}
                                                        className=" inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0 lg:whitespace-nowrap"
                                                    >
                                                        {
                                                            category.content
                                                                .category
                                                        }
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        {/* <div className="px-6 py-4 text-primary"> */}
                                        <div className="col-span-1 lg:col-span-3 px-6 py-4 text-primary items-center flex justify-start lg:justify-end">
                                            {item.content.downloads_block?.map(
                                                (downloadBlock, index) =>
                                                    downloadBlock.download_grid?.map(
                                                        (
                                                            downloadGrid,
                                                            index
                                                        ) => (
                                                            downloadGrid.download_list?.map((item, index) => (
                                                                <a
                                                                    href={
                                                                        ButtonUrlRenderer(item?.cta_asset)
                                                                    }
                                                                    key={index}
                                                                    className="ml-3 pt-2 pb-2 inline-flex"
                                                                >
                                                                    {
                                                                        item?.cta_text
                                                                    }
                                                                </a>
                                                            ))
                                                        )
                                                    )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                // </div>
                            ))}
                    </div>

                    <div className="pt-16">
                        <ButtonPrimary
                            position="left"
                            href={ButtonUrlRenderer(blok?.CTA_Show_All)}
                            buttonText={blok?.ctag_all_news}
                        />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};
export default MedienMedienmitteilungenTeaser;
