'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const SolutionsGridItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-fit border border-greySolid-100 bg-white shadow dark:border-greySolid-600 dark:bg-greySolid-800"
        >
            <Link href={ButtonUrlRenderer(blok?.link)}>
                <img
                    className="w-full"
                    src={blok?.image.filename}
                    alt={`Image for ${blok?.title}`}
                />

                <div className="p-4 lg:p-5">
                    <div className="hyphens-auto text-wrap break-words">
                        <H3 styles="!mb-0 hyphens-auto">{blok?.title}</H3>
                    </div>
                    {blok?.text ? <p>{blok?.text}</p> : ''}
                </div>
            </Link>
        </div>
    );
};

export default SolutionsGridItem;
