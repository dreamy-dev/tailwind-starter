'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';

export default function Quote({blok}) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white pb-5 lg:py-24"
        >
            <SmallWidth>
                <figure className="max-w-screen-lg mx-auto">
                    <img
                        className="h-12 w-8 text-center mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        src={blok?.image.filename}
                        alt="Icon Quote"
                    />
                    <blockquote>
                        <p className="text-3xl leading-relaxed font-medium text-gray-900 text-center dark:text-white">
                            <q>{blok?.text}</q>
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-8 space-x-3">
                        <img
                            className="w-20 h-20 rounded-full object-cover"
                            src="markus-bernsteiner.jpg"
                            alt="profile picture"
                        />
                        <div className="flex flex-col">
                            <div className="font-medium text-gray-900 dark:text-white">
                                {blok?.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {blok?.name_function}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </SmallWidth>
        </section>
    );
}
