'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H1 from '../typography/H1';
import SmallWidth from '../layouts/SmallWidth';
import Lead from '../typography/Lead';
import TextSection from './TextSection';

const EmployeeContent = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <section className="bg-white py-16  lg:py-24">
                <SmallWidth>
                    <H1>{blok?.title}</H1>
                    <Lead className="richtext">{blok?.teaser}</Lead>
                </SmallWidth>
            </section>
            <section className="relative min-w-[100%] md:flex-row lg:min-w-[43%]">
                <ContentWidth>
                    <div className="col-span-12">
                        <img
                            className="h-auto w-full max-w-full object-right"
                            src={blok?.image.filename}
                            alt={`Image for ${blok?.title}`}
                        />
                    </div>
                </ContentWidth>
            </section>
            <TextSection blok={blok} />
            {blok.career_block.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default EmployeeContent;
