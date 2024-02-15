import { ISbStoriesParams, getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'
import Footer from '@/src/components/sections/Footer'
import Header from '@/src/components/sections/Header'
const isDev = 'development'
export const revalidate = isDev ? 0 : 3600

async function fetchData(slug) {
 
  const sbParams = {
    resolve_links: 'url',
    version: 'published',
  
  }

  const storyblokApi = getStoryblokApi()

  return storyblokApi.get(`cdn/stories/${slug}`, sbParams)
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const storyblokApi = getStoryblokApi()
//   const { data } = await storyblokApi.get('cdn/links/', {
//     version: 'published',
//   })

//   const paths = slug
//   // create a route for every link
//   Object.keys(data.links).forEach(linkKey => {
//     // do not create a route for folders and home
//     if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'blok-tests') {
//       return
//     }

//     // get array for slug because of catch all
//     const slug = data.links[linkKey].slug
//     let splittedSlug = slug.split('/')

//     // creates all the routes
//     paths.push({ slug: splittedSlug })
//   })

//   return paths
// }




export default async function Home({ params }) {
  const slug = params?.slug ? params.slug.join("/") : "blok-tests";
  console.log("slug ", slug);
  const { data } = await fetchData(slug)
  console.log("data", data)
  return (
    <>
  

      <StoryblokStory story={data.story} />

    </>
  )
}
