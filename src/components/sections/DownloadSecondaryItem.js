'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import Button from '../elements/ButtonSecondary';
import Text from '../typography/Text';
import { DownloadIcon } from '../icons/DownloadIcon';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const DownloadSecondaryItem = ({ blok }) => {
    return (
        <>
            <li
                {...storyblokEditable(blok)}
                className="mb-4 text-xl flex-col md:flex-row flex align-middle md:justify-between"
            >
                <Text className="w-full md:w-auto mr-0 md:mr-10 text-wrap">
                    {blok.title}
                </Text>
                <div className="flex justify-start items-center">
                    {blok?.download_list?.map(
                        (item) =>
                            item?.cta_text && (
                                <a
                                    className="ml-4 pt-2 pb-2 text-base text-primary inline-flex"
                                    href={ButtonUrlRenderer(item?.cta_asset)}
                                >
                                    {item?.cta_text}
                                </a>
                            )
                    )}
                </div>
            </li>
            <div className="border-b mb-4"></div>
        </>
    );
};
export default DownloadSecondaryItem;
