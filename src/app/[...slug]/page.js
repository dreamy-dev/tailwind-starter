import { ISbStoriesParams, getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'

const isDev = 'development'
export const revalidate = isDev ? 0 : 3600

async function fetchData(slug) {
 
  const sbParams = {
    resolve_links: 'url',
    version: 'draft',
  
  }

  const storyblokApi = getStoryblokApi()

  return storyblokApi.get(`cdn/stories/${slug}`, sbParams)
}






export default async function Home({ params }) {
  const slug = params?.slug ? params.slug.join("/") : "blok-tests";

  const { data } = await fetchData(slug)

  return (
    <>
  

      <StoryblokStory story={data.story} />

    </>
  )
}
