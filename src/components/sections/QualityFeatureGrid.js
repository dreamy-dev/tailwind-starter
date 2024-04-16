'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const QualityFeatureGrid = ({ blok }) => {
    return (
        <section className="py-16 lg:py-24 bg-stadlergradient">
            <ContentWidth>
                <div className="col-span-12 max-w-full">
                    <div className="text-white item-start">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mt-8 lg:mt-16">
                        <div
                            className="grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24"
                            {...storyblokEditable(blok)}
                        >
                            {blok.feature_item.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default QualityFeatureGrid;
