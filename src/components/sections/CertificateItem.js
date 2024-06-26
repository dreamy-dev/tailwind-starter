'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function CertificateItem({ blok }) {
    return (
        <a
            {...storyblokEditable(blok)}
            className="text-primary ml-4"
            href={ButtonUrlRenderer(blok?.button_link)}
        >
            {blok?.button_text}
        </a>
    );
}

export default CertificateItem;
