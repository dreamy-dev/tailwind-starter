'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';

import H3 from '../typography/H3';
import { ArrowForward } from '../icons/ArrowForward';

const ReportsItem = ({ blok }) => {
    const investorsReference = useRef();

    useEffect(() => {
        let investors = investorsReference.current;

        investors?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            _paq.push([
                'trackEvent',
                'Investor Relations Publication',
                `${blok?.cta_link.url} - ${blok?.title}`
            ]);
        });
    });
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-full lg:max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
                className="object-cover max-h-auto w-full aspect-[2/1.2]"
                src={blok?.image.filename}
                alt={blok?.title}
            />
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <a
                    ref={investorsReference}
                    href={blok?.cta_link.url ?? ''}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-center"
                >
                    <ArrowForward styles="h-5 w-5 fill-primary" />
                </a>
            </div>
        </div>
    );
};

export default ReportsItem;
