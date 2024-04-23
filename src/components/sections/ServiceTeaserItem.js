'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

const ServiceTeaserItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
        >
            <a href={blok.link.url}>
                {blok?.Icon.filename ? (
                    <img
                        className="w-24 pl-5 pt-5"
                        src={blok?.Icon.filename}
                        alt=""
                    />
                ) : (
                    ''
                )}
                <div className="p-5">
                    <H3>{blok?.title}</H3>
                    <p>{blok?.text}</p>
                </div>
            </a>
        </div>
    );
};

export default ServiceTeaserItem;
