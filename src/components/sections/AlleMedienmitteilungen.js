import ContentWidth from '../layouts/ContentWidth';
import React from 'react';
import {
    getStoryblokApi,
    storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H1 from '../typography/H1';
import DateFormatter from '../helpers/DateFormatter';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
const filters = { country: '', category: '', product: '', year: '' };

function AlleMedienmitteilungen({ blok }) {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [search, setSearch] = useState('');

    const currentLocale = useCurrentLocale(i18nConfig) || 'en';
    const apiRequest = {
        version: 'published',
        starts_with: 'medien/medienmitteilungen/',
        is_startpage: false,
        resolve_relations: ['medienmitteilungen.categories'],
        sort_by: 'content.date:desc',
        language: currentLocale
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        const categories = [];
        Object.values(selectedOptions).forEach((value) => {
            value.length && categories.push(value);
        });
        const filterSearchParameters = {};
        if (categories.length > 0) {
            filterSearchParameters['filter_query[categories][any_in_array]'] =
                categories.join(',');
        }
        if (e.target.value.length > 2) {
            filterSearchParameters['search_term'] = e.target.value;
            getMedienmitteilungen(filterSearchParameters);
        } else {
            getMedienmitteilungen(filterSearchParameters);
        }
    };
    const getMedienmitteilungen = async (filterSearchRequest = {}) => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
            ...apiRequest,
            ...filterSearchRequest,
        });

        setMedienmitteilungen((prev) =>
            data.stories.map((article) => {
                article.content.slug = article.slug;
                return article;
            })
        );
    };
    useEffect(() => {
        getMedienmitteilungen();
    }, []);

    const filterArticles = (e, typeFilter) => {
        const newSelectedOptions = { ...selectedOptions };
        newSelectedOptions[typeFilter] = e.target.value;
        setSelectedOptions(newSelectedOptions);
        const categories = [];
        Object.values(newSelectedOptions).forEach((value) => {
            value.length && categories.push(value);
        });

        const filterSearchParameters = {};
        if (categories.length > 0) {
            filterSearchParameters['filter_query[categories][any_in_array]'] =
                categories.join(',');
        }
        if (search.length > 2) {
            filterSearchParameters['search_term'] = search;
        }

        getMedienmitteilungen(filterSearchParameters);
    };

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 w-full">
                <H1>{blok.title}</H1>
            </div>
            <div className="col-span-12 mb-8">
                <ul className="grid gap-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 md:grid-cols-2 lg:grid-cols-12">
                    <li className="lg:col-span-2">
                        <select
                            className="w-full px-4 py-2 text-base border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100  block"
                            onChange={(e) => filterArticles(e, 'country')}
                        >
                            <option value="">
                                {blok.filter_country_title}
                            </option>
                            {blok.filter_country.map((country, index) => (
                                <option key={index} value={country.uuid}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li className="lg:col-span-2">
                        <select
                            className="w-full px-4 py-2 text-base border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100  block"
                            onChange={(e) => filterArticles(e, 'category')}
                        >
                            <option value="">
                                {blok.filter_category_title}
                            </option>
                            {blok.filter_medienmitteilungencategories.map(
                                (category, index) => (
                                    <option key={index} value={category.uuid}>
                                        {category.content.category}
                                    </option>
                                )
                            )}
                        </select>
                    </li>
                    <li className="lg:col-span-2">
                        <select
                            className="w-full px-4 py-2 text-base border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100  block"
                            onChange={(e) => filterArticles(e, 'product')}
                        >
                            <option value="">
                                {blok.filter_products_title}
                            </option>
                            {blok.filter_products.map((product, index) => (
                                <option key={index} value={product.uuid}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li className="lg:col-span-2">
                        <select
                            className="w-full px-4 py-2 text-base border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100 block"
                            onChange={(e) => filterArticles(e, 'year')}
                        >
                            <option value="">{blok.filter_years_title}</option>
                            {blok.filter_years.map((year, index) => (
                                <option key={index} value={year.uuid}>
                                    {year.name}
                                </option>
                            ))}
                        </select>
                    </li>

                    <li className="lg:col-span-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                className="w-full inline-block px-8 py-2 text-base  border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100"
                                placeholder={blok.text_search}
                                onChange={(e) => onSearchChange(e)}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 w-full pb-24 ">
                <ul className="hidden lg:grid grid-cols-12 gap-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-primarySolid-50 dark:bg-gray-700">
                    {/* Header */}
                    <li className="col-span-1 px-6 py-3 text-xs font-bold text-black uppercase">
                        {blok.table_date_title}
                    </li>
                    <li className="col-span-5 px-6 py-3 text-xs font-bold text-black uppercase">
                        {blok.table_medienmitteilung_title}
                    </li>
                    <li className="col-span-3 px-6 py-3 text-xs font-bold text-black uppercase">
                        {blok.table_category_title}
                    </li>
                    <li className="col-span-3 px-6 py-3 text-xs font-bold text-black uppercase flex justify-end">
                        {blok.table_documents_title}
                    </li>
                </ul>
                {/* Data Rows */}
                <div className="w-full blok lg:hidden  mb-4 border-b dark:border-gray-700"></div>
                <div className="grid grid-cols-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {medienmitteilungen[0] &&
                        medienmitteilungen.map((medienmitteilung, idx) => (
                            <div
                                key={idx}
                                className="col-span-12 bg-white dark:bg-black dark:border-gray-700 border-b mb-4 last:mb-0 lg:mb-0 lg:last:mb-0 "
                            >
                                <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                                    <div className=" bg-primarySolid-50 lg:bg-white col-span-1 lg:col-span-1 px-6 py-4 font-medium text-black whitespace-nowrap">
                                        {medienmitteilung.content?.date &&
                                            DateFormatter(
                                                medienmitteilung.content.date
                                            )}
                                    </div>
                                    <div className="col-span-1 lg:col-span-5 px-6 py-4 font-medium text-primary">
                                        <a
                                            className="inline-block"
                                            href={`/${medienmitteilung.full_slug}`}
                                        >
                                            {medienmitteilung.content.title}
                                        </a>
                                        <a
                                            className=" block mt-4 lg:hidden"
                                            href={`/${medienmitteilung.full_slug}`}
                                        >
                                            <img
                                                width="20"
                                                height="20"
                                                src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                            />
                                        </a>
                                    </div>
                                    <div className="bg-primarySolid-50 lg:bg-white col-span-1 lg:col-span-3 px-6 py-4 font-medium text-black">
                                        {medienmitteilung.content.categories.map(
                                            (category, index) => (
                                                <span
                                                    key={index}
                                                    className="mb-1 inline-flex flex-wrap text-gray-700 px-2 py-1  lg:whitespace-nowrap mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                                                >
                                                    {category.content.category}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <div className="col-span-1 lg:col-span-3 px-6 py-4 text-primary items-center flex justify-start lg:justify-end">
                                        {medienmitteilung.content.downloads_block?.map(
                                            (downloadBlock, index) =>
                                                downloadBlock.download_grid?.map(
                                                    (downloadGrid, idx) =>
                                                        downloadGrid.download_list?.map(
                                                            (item, index) => (
                                                                <a
                                                                    href={ButtonUrlRenderer(
                                                                        item?.cta_asset
                                                                    )}
                                                                    key={index}
                                                                    className="first-of-type:ml-0 ml-3 inline-flex"
                                                                >
                                                                    {
                                                                        item?.cta_text
                                                                    }
                                                                </a>
                                                            )
                                                        )
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </ContentWidth>
    );
}

export default AlleMedienmitteilungen;
