'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import TeaserMobilitySolutions from './TeaserMobilitySolutions';

const TrainCarousel = ({ blok }) => {
    return (
        <section className="bg-stadlergradient" {...storyblokEditable(blok)}>
            <TeaserMobilitySolutions blok={blok}></TeaserMobilitySolutions>
            {blok.solutions_grid.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
            ))}
            {blok.doublepageteaser_blok.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
            ))}
        </section>
    );
};

export default TrainCarousel;
