'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function CertificateItem({ blok }) {
    console.log('button_link', blok?.button_link)
    return (
        <a
            tabIndex="1"
            {...storyblokEditable(blok)}
            className="ml-4 text-primary"
            href={ButtonUrlRenderer(blok?.button_link)}
        >
            {blok?.button_text}
        </a>
    );
}

export default CertificateItem;
