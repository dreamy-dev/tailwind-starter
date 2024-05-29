'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import FullWidth from '../layouts/FullWidth';

export default function ImageFullWidth({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="py-0 lg:py-24 px-4 lg:px-0"
        >
            <FullWidth>
                <div className="col-span-12">
                    <img
                        className="lg:aspect-[2/1] object-cover"
                        width={'100%'}
                        src={blok?.image.filename}
                        alt="Hero product image"
                    />
                </div>
            </FullWidth>
        </section>
    );
}
