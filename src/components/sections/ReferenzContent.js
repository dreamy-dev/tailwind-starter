import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import Breadcrumbs from './Breadcrumbs';
import SmallWidth from '../layouts/SmallWidth';



function ReferenzContent({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="mb-24">
            <SuperSmallWidth>
                <div className="mt-20 flex font-normal text-gray-600">
                    <Breadcrumbs />
                </div>
                <H1 styles="mb-8">{blok?.title}</H1>
                <div className="grid grid-cols-12 gap-6 mb-6">
                    <div className="col-span-6">
                        {blok?.categories?.map((category, index) => (
                            <span
                                key={index}
                                className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0 whitespace-nowrap"
                            >
                                {category.content.category}
                            </span>
                        ))}
                    </div>
                </div>
            </SuperSmallWidth>
            <SmallWidth>
                <div className="px-8">
                    {blok.downloads.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                        />
                    ))}
                  
                </div>
            </SmallWidth>

            <SuperSmallWidth>
                <Text styles="text-lg mt-12">{blok?.lead}</Text>
                <img
                    src={blok?.image.filename}
                    className="w-full my-8"
                    alt="full service"
                />
            </SuperSmallWidth>
            <SuperSmallWidth>
                <div>
                    <div className="text-md richtext">{render(blok.text)}</div>
                </div>
            </SuperSmallWidth>
            {blok.news_blocks.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </section>
    );
}

export default ReferenzContent;
