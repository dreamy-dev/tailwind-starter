import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

function NewsTeaser({ blok }) {
    const [articlesCategory, setArticlesCategory] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    useEffect(() => {
        const getArticles = async () => {
            const categories = blok.categories.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'medien/news/',
                is_startpage: false,
                resolve_relations: 'news.categories',
                'filter_query[categories][any_in_array]': categories,
                sort_by: 'content.date:desc',
                per_page: 4,
                language: currentLocale,
            });

            setArticlesCategory(() =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        };
        getArticles();
    }, []);

    return (
        <section {...storyblokEditable(blok)} className="py-16 lg:py-24">
            <ContentWidth>
                <div className="col-span-12 w-full">
                    <H2>{blok.title}</H2>
                </div>
                <div className="col-span-12 w-full">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {articlesCategory[0] &&
                            articlesCategory.map((article) => (
                                <a
                                    href={`/${article.full_slug}`}
                                    className="group mb-6 transition-all"
                                    key={article.uuid}
                                >
                                    <div className="overflow-hidden h-52">
                                        <img
                                            src={article.content.image.filename}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-all"
                                            alt="NewsTeaser image"
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
                                    <div className="text-sm mb-1">
                                        <Text>
                                            {DateFormatter(
                                                article.content.date
                                            )}
                                        </Text>
                                    </div>
                                    <div className="text-sm mb-1 group-hover:text-primary transition-all">
                                        <H3>{article.content.title}</H3>
                                    </div>
                                    <div className="texl-lg mb-3">
                                        <Text>
                                            {TrimText(article.content.lead)}
                                        </Text>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
                <div className="col-span-12 w-full">
                    <ButtonPrimary
                        buttonText={blok?.ctag_all_news}
                        href={ButtonUrlRenderer(blok?.CTA_Show_All)}
                    ></ButtonPrimary>
                </div>
            </ContentWidth>
        </section>
    );
}

export default NewsTeaser;
