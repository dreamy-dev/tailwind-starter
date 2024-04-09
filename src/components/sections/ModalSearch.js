import { useState, useEffect, useRef } from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const ModalSearch = ({ isModalOpen, closeModal }) => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');
    const modalRef = useRef(null);
    const contentRef = useRef(null);

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

            // Sort articles with solutions in slug to be prioritized
            const sortedArticles = data.stories.sort((a, b) => {
                const aIsSolution = a.full_slug.includes('loesungen/solutions');
                const bIsSolution = b.full_slug.includes('loesungen/solutions');

                if (aIsSolution && !bIsSolution) {
                    return -1;
                } else if (!aIsSolution && bIsSolution) {
                    return 1;
                } else {
                    return 0;
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
        const handleOutsideClick = (event) => {
            // Check if the modal is open and the click is outside the modal and its content
            if (
                isModalOpen &&
                contentRef.current &&
                !contentRef.current.contains(event.target)
            ) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen, closeModal]);

    return (
        <div
            ref={modalRef}
            className={`col-span-12 z-20 shadow-md absolute top-[100%] right-0  w-[100%] sm:w-[450px] md:w-[710px] transition-transform duration-500 ${
                isModalOpen
                    ? 'transform opacity-100 ease-in-out'
                    : 'transform opacity-0 ease-in-out'
            }`}
        >
            <div
                ref={contentRef}
                className="relative bg-white shadow dark:bg-gray-700 h-full"
            >
                <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                    <div className="pr-2">
                        <img
                            className="w-5 h-5"
                            src="/ohne-box/search_FILL0_wght400_GRAD0_opsz24_blue.svg"
                            alt=""
                        />
                    </div>
                    <label htmlFor="search" className="w-full">
                        <input
                            placeholder="Enter your search term..."
                            name="search"
                            onChange={onSearchChange}
                            value={search}
                            type="search"
                            style={{
                                WebkitAppearance: 'none',
                                appearance: 'none',
                            }}
                            className="p-2 w-full border-primary focus:border-primary appearance-none"
                        />
                    </label>
                    <button
                        onClick={closeModal}
                        type="button"
                        className="text-primary bg-transparent text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#005893"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="p-2 md:p-3 overflow-y-scroll h-[385px]">
                    <div className="flex flex-col">
                        {articles[0] &&
                            articles.map((article) => (
                                <a
                                    href={`/${article.full_slug}`}
                                    className="group mb-6 transition-all"
                                    key={article.uuid}
                                >
                                    <h2 className="mb-1 text-base font-normal leading-tight text-gray-900 group-hover:text-primary transition-all">
                                        {article.name}
                                    </h2>
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;
