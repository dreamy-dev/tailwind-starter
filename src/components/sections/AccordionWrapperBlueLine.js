'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const AccordionWrapperBlueLine = ({ blok }) => {
    return (
        <div className="max-w-full col-span-12">
            <div
                className=" border-b-2 border-primary my-6"
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
