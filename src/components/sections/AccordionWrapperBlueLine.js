'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const AccordionWrapperBlueLine = ({ blok }) => {
    return (
        <div className="col-span-12 max-w-full">
            <div
                className="my-6 border-b-2 border-primary"
                {...storyblokEditable(blok)}
            >
                <H4>{blok?.title}</H4>
            </div>

            {blok.accordion_item.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
            ))}
        </div>
    );
};

export default AccordionWrapperBlueLine;
