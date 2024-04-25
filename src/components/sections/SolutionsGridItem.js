'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

const SolutionsGridItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 max-w-fit"
        >
            <a href={blok.link.url}>
                <img className="w-full" src={blok?.image.filename} alt="" />

                <div className="p-4 lg:p-5">
                    <div className="text-wrap hyphens-auto break-words">
                        <H3 styles="!mb-0 hyphens-auto">{blok?.title}</H3>
                    </div>
                    {blok?.text ? <p>{blok?.text}</p> : ''}
                </div>
            </a>
        </div>
    );
};

export default SolutionsGridItem;
