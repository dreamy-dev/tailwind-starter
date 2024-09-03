'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function DownloadElementLanguage({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="text-primary mr-4"
            href={ButtonUrlRenderer(blok?.buttonLink)}
        >
            {blok?.buttonText}
        </a>
    );
}

export default DownloadElementLanguage;
