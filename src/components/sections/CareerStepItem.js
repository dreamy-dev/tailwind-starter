'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';
import Text from '../typography/Text';

function CareerStepItem({ blok }) {
    return (
        <li
            className="mr-8 flex items-center space-x-2.5 text-gray-500 rtl:space-x-reverse dark:text-gray-400"
            {...storyblokEditable(blok)}
        >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xl">
                {blok?.step_number}
            </span>
            <span>
                <H4>{blok?.step_title}</H4>
                <Text>{blok?.step_text}</Text>
            </span>
        </li>
    );
}

export default CareerStepItem;
