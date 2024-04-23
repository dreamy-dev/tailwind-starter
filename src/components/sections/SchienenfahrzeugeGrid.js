'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const SchienenfahrzeugeGrid = ({ blok }) => {
    return (
        <section className="py-16 lg:py-24">
            <ContentWidth>
                <div className="col-span-12 lg:col-span-6 pb-12 text-white">
                    <H2>{blok?.title}</H2>
                    <div className="mt-4  text-white">
                        <Text>{blok?.text}</Text>
                    </div>
                </div>
                <div
                    {...storyblokEditable(blok)}
                    className="grid col-span-12 lg:grid-cols-4 lg:grid-rows gap-4"
                >
                    {blok.schienenfahrzeuge_card.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
};

export default SchienenfahrzeugeGrid;
