'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import ContentWidth from '../layouts/ContentWidth';

const AddressGrid = ({ blok }) => (
    <section {...storyblokEditable(blok)}>
        <ContentWidth>
            <div className="w-full col-span-12 py-8 mx-auto lg:py-16">
                <div className="text-left">
                    <H2 styles="mb-2">{blok?.title}</H2>
                </div>
                {blok?.address_wrapper.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </ContentWidth>
    </section>
);

export default AddressGrid;
