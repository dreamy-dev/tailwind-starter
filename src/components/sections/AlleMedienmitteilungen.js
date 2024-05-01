import ContentWidth from '../layouts/ContentWidth';
import {
    getStoryblokApi,
    storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H1 from '../typography/H1';
import DateFormatter from '../helpers/DateFormatter';
const filters = { country: '', category: '', product: '', year: '' };

function AlleMedienmitteilungen({ blok }) {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [search, setSearch] = useState('');
    const apiRequest = {
        version: 'published',
        starts_with: 'medien/medienmitteilungen/',
        is_startpage: false,
        resolve_relations: ['medienmitteilungen.categories'],
        sort_by: 'content.date:desc',
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
            <div className="col-span-12 w-full flex flex-col mb-8 items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
                <ul className="flex-wrap text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
                    <li className="mb-4 mr-2 lg:mr-4">
                        <select
                            className=" px-4 py-2 text-base border rounded block"
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
                    <li className="mb-4 mr-2 lg:mr-4">
                        <select
                            className=" px-4 py-2 text-base border rounded block"
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
                    <li className="mb-4 mr-2 lg:mr-4">
                        <select
                            className=" px-4 py-2 text-base border rounded block"
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
                    <li className="mb-4 mr-2 lg:mr-4">
                        <select
                            className=" px-4 py-2 text-base border rounded block"
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

                    <li className="mb-4 mr-2 lg:mr-4">
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
                                className="inline-block px-8 py-2 text-base rounded border hover:text-gray-900 hover:bg-gray-100"
                                placeholder={blok.text_search}
                                onChange={(e) => onSearchChange(e)}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 w-full pb-24 overflow-x-auto">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black whitespace-nowrap uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                {blok.table_date_title}
                            </th>
                            <th scope="col" className="px-6 py-3 w-7/12">
                                {blok.table_medienmitteilung_title}
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                {blok.table_category_title}
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                <div className="flex justify-end">
                                    {blok.table_documents_title}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {medienmitteilungen[0] &&
                            medienmitteilungen.map((medienmitteilung) => (
                                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                    >
                                        {DateFormatter(
                                            medienmitteilung.content.date
                                        )}
                                    </td>
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-black wordbreak-normal"
                                    >
                                        <a
                                            href={`/${medienmitteilung.full_slug}`}
                                        >
                                            {medienmitteilung.name}
                                        </a>
                                    </td>
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                    >
                                        {medienmitteilung.content.categories.map(
                                            (category, index) =>
                                                category.full_slug.includes(
                                                    '/medienmitteilungen/'
                                                ) && (
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
                                            {medienmitteilung.content.downloads_block?.map(
                                                (downloadBlock, index) =>
                                                    downloadBlock.download_grid?.map(
                                                        (
                                                            downloadGrid,
                                                            index
                                                        ) => (
                                                            <a
                                                                href={
                                                                    downloadGrid?.download_cta
                                                                        .url
                                                                }
                                                                key={index}
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
        </ContentWidth>
    );
}

export default AlleMedienmitteilungen;
