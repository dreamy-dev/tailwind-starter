'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const DownloadSecondaryItem = ({ blok }) => {
    return (
        <>
            <li
                {...storyblokEditable(blok)}
                className="mb-4 flex flex-col align-middle text-xl md:flex-row md:justify-between"
            >
                <Text
                    className="text-wrap mr-0 w-8/12 md:mr-10 md:w-auto"
                    styles="w-9/12"
                >
                    {blok.title}
                </Text>
                <div className="flex w-3/12 items-center justify-end">
                    {blok?.download_list?.map(
                        (item, i) =>
                            item?.cta_text && (
                                <a
                                    tabIndex="1"
                                    key={i}
                                    className="ml-4 inline-flex pb-2 pt-2 text-base text-primary"
                                    href={ButtonUrlRenderer(item?.cta_asset)}
                                >
                                    {item?.cta_text}
                                </a>
                            )
                    )}
                </div>
            </li>
            <div className="mb-4 border-b"></div>
        </>
    );
};
export default DownloadSecondaryItem;
