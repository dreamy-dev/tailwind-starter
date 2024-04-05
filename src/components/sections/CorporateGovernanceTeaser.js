import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

const CorporateGorvernanceTeaser = ({ blok }) => {
    return (
        <a
            className="w-full xl:w-auto"
            href={blok?.page_link.url}
            {...storyblokEditable(blok)}
        >
            <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <H3>{blok?.title}</H3>
                <p className="mb-4 font-normal text-black dark:text-gray-400">
                    {blok?.text}
                </p>
                <img className="w-5" src="/icons/arrow-blue.svg" alt="" />
            </article>
        </a>
    );
};
export default CorporateGorvernanceTeaser;
