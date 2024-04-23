import React, { useState, useEffect, useRef } from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import { SearchIcon } from '../icons/SearchIcon';

const ModalSearch = ({ isModalOpen, closeModal }) => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const inputRef = useRef(null);

    const apiRequest = {
        version: 'published',
        resolve_links: 'url',
    };

    const onSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);

        const filterSearchParameters = {};

        if (inputValue.length > 0) {
            filterSearchParameters['search_term'] = inputValue.toLowerCase();
            getArticles(filterSearchParameters);
        } else {
            // If the input is empty, set articles to an empty array
            setArticles([]);
        }
    };

    const getArticles = async (filterSearchRequest = {}) => {
        const slug = '/';
        const storyblokApi = getStoryblokApi();

        // Only fetch articles if there is a search term
        if (search.length > 0) {
            const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
                ...apiRequest,
                ...filterSearchRequest,
            });
            console.log(data, 'data');

            const filteredArticles = data.stories.filter((article) => {
                // Exclude if 'full_slug' starts with "categories/" or contains "/categories/"
                return (
                    !article.full_slug.startsWith('categories/') &&
                    !article.full_slug.includes('/categories/')
                );
            });

            console.log(filteredArticles, 'filteredArticles');
            const prioritySlugs = [
                'schienenfahrzeuge',
                'rollingstock',
                'signalling',
                'service',
            ];
            // Sort articles with solutions in slug to be prioritized
            const sortedArticles = filteredArticles.sort((a, b) => {
                const aPriority = prioritySlugs.some((slug) =>
                    a.full_slug.includes(slug)
                );
                const bPriority = prioritySlugs.some((slug) =>
                    b.full_slug.includes(slug)
                );

                if (aPriority && !bPriority) {
                    return -1;
                } else if (!aPriority && bPriority) {
                    return 1;
                } else {
                    // If both have or don't have priority slugs, sort by other criteria (e.g., published date)
                    return new Date(b.published_at) - new Date(a.published_at);
                }
            });

            setArticles((prev) =>
                sortedArticles.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        } else {
            // If there is no search term, set articles to an empty array
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
            // Check if the modal is open and the click is outside the modal and its content
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
                                    {article.name}
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
