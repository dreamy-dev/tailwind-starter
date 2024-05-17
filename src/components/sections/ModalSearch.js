import React, { useState, useEffect, useRef } from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import { SearchIcon } from '../icons/SearchIcon';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

const ModalSearch = ({ isModalOpen, closeModal }) => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');

    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const inputRef = useRef(null);

    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    const apiRequest = {
        version: 'published',
        resolve_links: 'url',
        language: currentLocale,
    };

    const onSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);

        const filterSearchParameters = {};

        if (inputValue.length > 0) {
            filterSearchParameters['search_term'] = inputValue.toLowerCase();
            getArticles(filterSearchParameters);
        } else {
            setArticles([]);
        }
    };

    const determineTitle = (article) => {
        if (article.content.title && article.content.title.trim() !== '') {
            return article.content.title;
        } else if (article.content.body) {
            const heroSubpage = article.content.body.find(
                (item) => item.component === 'hero-subpage'
            );
            if (
                heroSubpage &&
                heroSubpage.title &&
                heroSubpage.title.trim() !== ''
            ) {
                return heroSubpage.title;
            }
        }
        return article.name;
    };

    const getArticles = async (filterSearchRequest = {}) => {
        const slug = '/';
        const storyblokApi = getStoryblokApi();

        if (search.length > 0) {
            const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
                ...apiRequest,
                ...filterSearchRequest,
            });

            const excludedKeywords = [
                'test',
                'template',
                'page',
                'header',
                'footer',
            ];
            const filteredArticles = data.stories.filter(
                (article) =>
                    !article.full_slug.startsWith('categories/') &&
                    !article.full_slug.includes('/categories/') &&
                    !article.full_slug.startsWith('global/') &&
                    !article.full_slug.includes('/global') &&
                    !excludedKeywords.some((keyword) =>
                        article.name.includes(keyword)
                    )
            );

            setArticles(
                filteredArticles.map((article) => ({
                    ...article,
                    displayTitle: determineTitle(article),
                }))
            );
        } else {
            setArticles([]);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        if (isModalOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isModalOpen]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                isModalOpen &&
                contentRef.current &&
                !contentRef.current.contains(event.target)
            ) {
                closeModal();
                setSearch('');
                setArticles([]);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen, closeModal]);

    const handleArticleClick = (article) => {
        window.location.href = `/${article.full_slug}`;
    };

    return (
        <div
            ref={modalRef}
            className={`col-span-12 shadow-md absolute top-10 right-0  w-[100%] sm:w-[450px] md:w-[710px] transition-transform duration-500 ${
                isModalOpen
                    ? 'transform opacity-100 ease-in-out z-20'
                    : 'transform opacity-0 ease-in-out max-h-0 overflow-hidden'
            }`}
        >
            <div
                ref={contentRef}
                className="relative bg-white shadow dark:bg-gray-700 h-full"
            >
                <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                    <div className="pr-2 w-7 h-5">
                        <SearchIcon
                            className="w-5 h-5 fill-primary"
                            color="#005893"
                        />
                    </div>
                    <label htmlFor="search" className="w-full">
                        <input
                            ref={inputRef}
                            placeholder="Enter your search term..."
                            name="search"
                            onChange={onSearchChange}
                            value={search}
                            type="search"
                            className="p-2 w-full border-primary focus:border-primary appearance-none"
                        />
                    </label>
                </div>

                <div className="overflow-y-scroll h-[385px]">
                    <div className="flex flex-col">
                        {articles.map((article) => (
                            <div
                                key={article.uuid}
                                onClick={() => handleArticleClick(article)}
                                className="group transition-all cursor-pointer hover:bg-gray-100"
                            >
                                <h2 className="p-4 text-base font-normal leading-tight text-gray-900 group-hover:text-primary transition-all">
                                    {article.displayTitle}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;
