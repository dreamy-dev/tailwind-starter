import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';

import { useState, useEffect } from 'react';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import H4 from '../typography/H4';
const filters = { country: '', category: '', product: '', year: '' };

function AllNews({ blok }) {
    const [articles, setArticles] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(filters);

    const [search, setSearch] = useState('');

    const apiRequest = {
        version: 'published',
        starts_with: 'medien/news/',
        is_startpage: false,
        resolve_relations: 'news.categories',
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
            getArticles(filterSearchParameters);
        } else {
            getArticles(filterSearchParameters);
        }
    };
    const getArticles = async (filterSearchRequest = {}) => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
            ...apiRequest,
            ...filterSearchRequest,
        });

        setArticles((prev) =>
            data.stories.map((article) => {
                article.content.slug = article.slug;
                return article;
            })
        );
    };
    useEffect(() => {
        getArticles();
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

        getArticles(filterSearchParameters);
    };

    return (
        <section className="py-16 lg:py-24">
            <ContentWidth {...storyblokEditable(blok)}>
                <div className="col-span-12 w-full">
                    <H2>{blok.title}</H2>
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
                                {blok.filter_newscategories.map(
                                    (category, index) => (
                                        <option
                                            key={index}
                                            value={category.uuid}
                                        >
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
                                className="w-full px-4 py-2 text-base border-primary focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100  block"
                                onChange={(e) => filterArticles(e, 'year')}
                            >
                                <option value="">
                                    {blok.filter_years_title}
                                </option>
                                {blok.filter_years.map((year, index) => (
                                    <option key={index} value={year.uuid}>
                                        {year.name}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="lg:col-span-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                                    className="w-full pl-8 pr-4 py-2 text-base border-primary block focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100"
                                    placeholder={blok.text_search}
                                    onChange={onSearchChange}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 w-full">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {articles[0] &&
                            articles.map((article) => (
                                <a
                                    href={`/${article.full_slug}`}
                                    className="group mb-6 transition-all"
                                    key={article.uuid}
                                >
                                    <div className="overflow-hidden h-52">
                                        <img
                                            src={article.content.image.filename}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-all"
                                            alt="Image 1"
                                        />
                                    </div>
                                    <div className="mb-1 mt-4 flex flex-wrap">
                                        {article.content.categories.map(
                                            (category, index) =>
                                                category.full_slug.includes(
                                                    '/news/'
                                                ) && (
                                                    <span
                                                        key={index}
                                                        className="whitespace-nowrap mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                                                    >
                                                        {
                                                            category.content
                                                                .category
                                                        }
                                                    </span>
                                                )
                                        )}
                                    </div>
                                    <div className="text-sm mb-1 text-gray-500">
                                        <Text>
                                            {DateFormatter(
                                                article.content.date
                                            )}
                                        </Text>
                                    </div>
                                    <div className="group-hover:text-primary transition-all"></div>
                                    <H4>{article.name}</H4>
                                    <div className="texl-lg mb-3 text-gray-500"></div>
                                    <Text>
                                        {TrimText(article.content.lead)}
                                    </Text>
                                </a>
                            ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

export default AllNews;
