'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

export default function HistoryCard({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm border border-greySolid-100 bg-white shadow dark:border-greySolid-600 dark:bg-greySolid-800"
        >
            <img
                className="h-auto w-full"
                alt={`History image ${blok?.title}`}
                loading="lazy"
                src={blok?.image.filename}
            />
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <p className="font-normal text-greySolid-600 dark:text-greySolid-400">
                    {blok?.text}
                </p>
            </div>
        </div>
    );
}
