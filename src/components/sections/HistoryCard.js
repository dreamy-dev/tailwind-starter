import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

export default function HistoryCard({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm
      bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
                alt="Meaningful alt text for an image that is not purely decorative"
                src={blok?.image.filename}
            />
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {blok?.text}
                </p>
            </div>
        </div>
    );
}
