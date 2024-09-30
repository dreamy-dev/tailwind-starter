'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function CertificateItem({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="ml-4 text-primary"
            href={ButtonUrlRenderer(blok?.button_link)}
        >
            {blok?.button_text}
        </a>
    );
}

export default CertificateItem;
