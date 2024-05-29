import ContentWidth from '../layouts/ContentWidth';
import {
    getStoryblokApi,
    storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import H4 from '../typography/H4';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

function AdHocMedienmitteilungen({ blok }) {
    const [articles, setArticles] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    useEffect(() => {
        const getArticles = async () => {
            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'medien/medienmitteilungen/',
                is_startpage: false,
                resolve_relations: 'medienmitteilungen.categories',
                sort_by: 'content.date:desc',
                per_page: 4,
                language: currentLocale,
            });

            setArticles((prev) =>
                data.stories.map((medienmitteilungen) => {
                    medienmitteilungen.content.slug = medienmitteilungen.slug;
                    return medienmitteilungen;
                })
            );
        };
        getArticles();
    }, []);

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 w-full mt-32">
                <H1>{blok.title}</H1>
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
                                        alt="Article Medienmitteilungen image"
                                    />
                                </div>
                                <div className="mb-1 mt-4 flex flex-wrap">
                                    {article.content.categories.map(
                                        (category, index) => (
                                            category.full_slug.includes("categories/medienmitteilungen") && <span
                                                key={index}
                                                className="whitespace-nowrap mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                                            >
                                                {category.content.category}
                                            </span>
                                        )
                                    )}
                                </div>
                                <div className="text-sm mb-1 text-gray-500">
                                    <Text>
                                        {DateFormatter(article.content.date)}
                                    </Text>
                                </div>
                                <div className="group-hover:text-primary transition-all">
                                    <H4>{article.content.title}</H4>
                                </div>
                                <div className="texl-lg mb-3 text-gray-500">
                                    <Text>
                                        {TrimText(article.content.lead)}
                                    </Text>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </ContentWidth>
    );
}

export default AdHocMedienmitteilungen;
