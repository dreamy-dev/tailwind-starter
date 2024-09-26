'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const CorporateGovernanceTeaser = ({ blok }) => {
    return (
        <a
            className="w-full xl:w-auto"
            href={ButtonUrlRenderer(blok?.page_link)}
            {...storyblokEditable(blok)}
        >
            <article className="flex h-full flex-col justify-between border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div>
                    <H3>{blok?.title}</H3>
                    <p className="mb-4 font-normal text-black dark:text-gray-400">
                        {blok?.text}
                    </p>
                </div>
                <img
                    className="w-5"
                    src="/icons/arrow-blue.svg"
                    alt="arrow icon"
                />
            </article>
        </a>
    );
};
export default CorporateGovernanceTeaser;
