'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import SmallWidth from '../layouts/SmallWidth';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const TeaserImageLeft = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)} className="py-16 lg:py-24">
            <SmallWidth>
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 items-center">
                    <img
                        src={blok?.image.filename}
                        className="object-cover object-center w-full"
                        alt={blok?.title}
                    />

                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <H2>{blok?.title}</H2>
                        <div className="mt-4 text-xl">
                            <Text>{blok?.text}</Text>
                        </div>
                        <ButtonPrimary
                            position="left"
                            buttonText={blok?.cta_button_text}
                            href={ButtonUrlRenderer(blok?.cta_button_link)}
                        />
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default TeaserImageLeft;
