'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function MedienmitteilungDownloadLink({ blok }) {
    return (
        <a
            tabIndex="1"
            {...storyblokEditable(blok)}
            className="mr-4 w-6 text-primary"
            href={ButtonUrlRenderer(blok?.download_link.url)}
        >
            {blok?.download_title}
        </a>
    );
}

export default MedienmitteilungDownloadLink;
