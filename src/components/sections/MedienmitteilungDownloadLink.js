import { storyblokEditable } from '@storyblok/react/rsc';

function MedienmitteilungDownloadLink({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="text-primary mr-4 w-6"
            href={blok?.download_link.url}
        >
            {blok?.download_title}
        </a>
    );
}

export default MedienmitteilungDownloadLink;
