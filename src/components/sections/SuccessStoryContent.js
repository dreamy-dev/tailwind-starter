'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';
import ContentWidth from '../layouts/ContentWidth';
import H1 from '../typography/H1';
import { render } from 'storyblok-rich-text-react-renderer';
import HeroText from './HeroText';
import SmallWidth from '../layouts/SmallWidth';
import Lead from '../typography/Lead';
import TextSection from './TextSection';

const SuccessStoryContent = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <section className="bg-white dark:bg-gray-900 py-24">
                <SmallWidth>
                    <H1>{blok?.title}</H1>
                    <Lead className="richtext">{blok?.teaser}</Lead>
                </SmallWidth>
            </section>
            <section className="min-w-[100%] relative lg:min-w-[43%] md:flex-row">
                <ContentWidth>
                    <div className="col-span-12">
                        <img
                            className="object-right max-w-full w-full h-auto"
                            src={blok?.image.filename}
                            alt=""
                        />
                    </div>
                </ContentWidth>
            </section>
            <TextSection blok={blok} />
        </div>
    );
};

export default SuccessStoryContent;
