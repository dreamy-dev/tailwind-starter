'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function DownloadElementLanguage({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="mr-4 font-medium text-primary"
            href={ButtonUrlRenderer(blok?.buttonLink)}
        >
            {blok?.buttonText}
        </a>
    );
}

export default DownloadElementLanguage;
