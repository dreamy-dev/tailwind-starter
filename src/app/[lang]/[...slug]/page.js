import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import Layout from '@/src/components/sections/Layout';

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
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    let config_footer = await storyblokApi.get(
        'cdn/stories/config-footer-new',
        sbParams
    );
    let config_header = await storyblokApi.get(
        'cdn/stories/config-header-new',
        sbParams
    );

    return {
        story: data.story,
        config_footer: config_footer.data.story,
        config_header: config_header.data.story
    };
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

    return paths;
}

export async function generateMetadata({ params }) {
  const slug = params?.slug ? params.slug.join('/') : 'home'
  const { story } = await fetchData(slug, params.lang);

  if (!story) {
    return {}
  }

  const title = story.metatags.title
    const description = story.metatags.description
    const url = story.slug
    console.log(title, "title");
    console.log(description, 'description');
    console.log(url, 'url');
  return {
      metadataBase: url,
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

generateMetadata({ params: { slug: "home", lang: 'en' } })
    .then((metadata) => console.log(metadata))
    .catch((error) => console.error(error));

export default async function Detailpage({ params, lang }) {
    const slug = params?.slug ? params.slug.join('/') : 'home';
    const { story, config_footer, config_header} = await fetchData(slug, params.lang);


    if (!story) {
        return notFound();
    }

    return (
        <>
            <Layout lang={ lang} config_footer={config_footer} config_header={config_header}>
                <StoryblokStory story={story} />
            </Layout>
        </>
    );
}
