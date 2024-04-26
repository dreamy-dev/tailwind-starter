'use client';
import ContentWidth from '../layouts/ContentWidth';
import ButtonPrimary from '../elements/ButtonPrimary';
import Text from '../typography/Text';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const DownloadItem = ({ blok }) => {

    return (
        <section
            id={blok.anchor}
            {...storyblokEditable(blok)}
            className="py-16 lg:py-24"
        >

            <ContentWidth>
                <div className="col-span-12 flex flex-col lg:flex-row justify-between align-baseline">
                    <Text>{blok?.Text}</Text>
                    <ButtonPrimary
                        position="right"
                        buttonText={blok?.CTA_text}
                        href={ButtonUrlRenderer(blok?.CTA_link)}
                    />
                </div>
            </ContentWidth>
        </section>
    );
};

export default DownloadItem;
