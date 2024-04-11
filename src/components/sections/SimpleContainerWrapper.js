import { useState } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import AccordionYearWrapper from './AccordionYearWrapper';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const SimpleContainerWrapper = ({ blok }) => {
    return (
        <section className="py-16 lg:py-24">
            <ContentWidth>
                <div
                    className="max-w-full col-span-12 "
                    {...storyblokEditable(blok)}
                >
                  <H2>{blok?.title}</H2> 

                    <div>
                        {blok.container.map((nestedBlok, index) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok._uid}
                            />
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SimpleContainerWrapper;
