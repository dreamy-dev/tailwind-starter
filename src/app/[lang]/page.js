import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import Layout from '@/src/components/sections/Layout';
import { notFound } from 'next/navigation';

const isDev = 'development';
export const revalidate = isDev ? 0 : 3600;

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'de' }];
}

async function fetchData(slug, lang) {
    const sbParams = {
        resolve_links: 'url',
        version: 'published',
        cv: isDev || isDraft ? Date.now() : undefined,
        resolve_relations: [
            'global_contact_reference.reference',
            'success-story-grid.success_stories',
            'news.categories',
            'medienmitteilungen.categories',
            'alle-medienmitteilungen.filter_years',
            'alle-medienmitteilungen.filter_country',
            'alle-medienmitteilungen.filter_medienmitteilungencategories',
            'alle-medienmitteilungen.filter_products',
            'all-news.filter_years',
            'all-news.filter_country',
            'all-news.filter_newscategories',
            'all-news.filter_products',
            'reference-grid.highlight_reference',
            'reference-grid.reference',
            'reference-page.categories',
            'medienmitteilungen_teaser.categories',
        ],
        language: lang,
    };

    const storyblokApi = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(
            `cdn/stories/${slug}`,
            sbParams
        );
        const config_footer = await storyblokApi.get(
            'cdn/stories/config-footer-new',
            sbParams
        );
        const config_header = await storyblokApi.get(
            'cdn/stories/config-header-new',
            sbParams
        );

        if (!data.story) return redirect('/not-found');

        return {
            story: data.story,
            config_footer: config_footer.data.story,
            config_header: config_header.data.story,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return redirect('/not-found');
    }
}

export async function generateMetadata({ params }) {
    const slug = params?.slug ? params.slug.join('/') : 'home';
    const { story } = await fetchData(slug, params.lang);

    if (!story) {
        return redirect('/not-found');
    }

    const title = story.content.metatags.title;
    const description = story.content.metatags.description;

    return {
        title: `${title} · Stadler`,
        description: description,
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            og_title: title,
            og_description: description,
            url: `/${story.slug}`,
        },
        twitter: {
            card: 'summary',
            twitter_title: title,
            twitter_description: description,
        },
    };
}

generateMetadata({ params: { slug: 'home', lang: 'en' } })
    .then((metadata) => console.log(metadata))
    .catch((error) => console.error(error));

export default async function Homepage({ params, lang }) {
    const slug = 'home';
    const { story, config_footer, config_header } = await fetchData(
        slug,
        params.lang
    );

    if (!story) {
        return redirect('/not-found');
    }

    return (
        <>
            <Layout config_footer={config_footer} config_header={config_header}>
                <StoryblokStory story={story} />
            </Layout>
        </>
    );
}
