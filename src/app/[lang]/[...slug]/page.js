import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import Layout from '@/src/components/sections/Layout';
import { redirect } from 'next/navigation';
 import { notFound } from 'next/navigation';



const isDev = 'development';
export const revalidate = isDev ? 0 : 3600;

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
            'all-locations.filter_business_area',
            'all-locations.filter_country',
            'single-location-wrapper.tag_division',
            'single-location-wrapper.tag_country',
            'single-location-wrapper.tag_business_area',
        ],
        language: lang,
    };

    const storyblokApi = getStoryblokApi();
   try {
       const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
       const config_footer = await storyblokApi.get(
           'cdn/stories/config-footer-new',
           sbParams
       );
       const config_header = await storyblokApi.get(
           'cdn/stories/config-header-new',
           sbParams
       );

       if (!data.story) return redirect("/not-found"); 

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

export async function generateStaticParams() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/links/', {
        version: 'published',
    });
    const paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (
            data.links[linkKey].is_folder ||
            data.links[linkKey].slug === 'home'
        ) {
            return;
        }

        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split('/');

        paths.push({ slug: splittedSlug });
    });

    return paths
       
    
}

export default async function Detailpage({ params, lang }) {
    const slug = params?.slug ? params.slug.join('/') : 'home';
    const { story, config_footer, config_header} = await fetchData(slug, params.lang);


    if (!story) {
        return redirect('/not-found');
    }

    return (
        <>
            <Layout lang={ lang} config_footer={config_footer} config_header={config_header}>
                <StoryblokStory story={story} />
            </Layout>
        </>
    );
}
