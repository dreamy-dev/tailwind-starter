'use client';
import { storyblokEditable } from '@storyblok/react/rsc';

function DownloadElementLanguage({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="text-primary mr-4 w-6"
            href={blok?.buttonLink.url}
        >
            {blok?.buttonText}
        </a>
    );
}

export default DownloadElementLanguage;
