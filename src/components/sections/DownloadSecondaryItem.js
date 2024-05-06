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
                className="mb-6 text-xl flex-col md:flex-row flex align-middle md:justify-between"
            >
                <Text className="w-full md:w-auto mr-0 md:mr-10 text-wrap">
                    {blok.title}
                </Text>
                <div className="flex justify-start">
                    {blok?.download_list.map((item) => (
                        item?.cta_text && <Button
                            textColorClass="text-primary"
                            borderColorClass="border-primary"

                            styles="flex gap-2 ml-4"
                            href={ButtonUrlRenderer(item?.cta_asset)}
                            iconAfter={
                                <DownloadIcon styles="w-3.5 h-3.5 fill-primary" />
                            }
                        >
                            {item?.cta_text}
                        </Button>
                    ))}
                </div>
            </li>
            <div className="border-b mb-6"></div>
        </>
    );
};
export default DownloadSecondaryItem;
