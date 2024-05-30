'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../../components/typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import RichTextRenderer from '../helpers/RichTextRenderer';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

import ContentWidth from '../../components/layouts/ContentWidth';

const History = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased py-16 lg:py-24">
            <ContentWidth>
                <div className="col-span-12" {...storyblokEditable(blok)}>
                    <div className="max-w-3xl mx-auto space-y-4 text-center">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mb-4 text-left text-xl font-normal">
                        <RichTextRenderer text={blok.text} />
                    </div>
                    <div className="relative border-s border-gray-200 dark:border-gray-700">
                        {blok?.history_block.map((nestedBlok, index) => (
                            <StoryblokComponent
                                index={index}
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                    {blok?.show_button ? (
                        <ButtonPrimary
                            position="left"
                            href={ButtonUrlRenderer(blok?.cta_link)}
                            buttonText={blok?.cta_text}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </ContentWidth>
        </section>
    );
};

export default History;
