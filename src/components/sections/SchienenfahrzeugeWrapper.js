'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const SchienenfahrzeugeWrapper = ({ blok }) => {
    return (
        <section className="bg-stadlergradient">
            <div {...storyblokEditable(blok)}>
                {blok.schienenfahrzeuge_grid.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </section>
    );
};

export default SchienenfahrzeugeWrapper;
