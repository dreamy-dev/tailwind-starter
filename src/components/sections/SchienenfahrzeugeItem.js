'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

const SchienenfahrzeugeItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="bg-white text-black flex flex-col"
        >
            <img className="w-full" src={blok?.image.filename} alt="Train" />
            <div className="p-4 lg:p-6 lg:pb-6">
                {blok.tag ? (
                    <small className="text-greySolid-600 flex mb-2">
                        {blok?.tag}
                    </small>
                ) : (
                    ''
                )}
                <div className="flex flex-row items-center justify-between">
                    <H3 styles="max-lg:mb-0 lg:mb-0.5">{blok?.title}</H3>
                    <a className="" href={blok?.link.url}>
                        <img src="/icons/arrow-blue.svg" alt="Arrow" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SchienenfahrzeugeItem;
