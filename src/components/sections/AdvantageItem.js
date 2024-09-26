'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const AdvantageItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primaryTrans-100 lg:h-12 lg:w-12">
            {blok?.icon.filename}
        </div>
        <H4>{blok?.Title}</H4>
        <p className="text-gray-500 dark:text-gray-400">{blok?.Text}</p>
    </div>
);

export default AdvantageItem;
