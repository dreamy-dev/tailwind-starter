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
                className="mb-6 text-xl flex-col md:flex-row flex justify-start md:justify-between"
            >
                <Text className="w-full md:w-auto mr-0 md:mr-10">
                    {blok.title}
                </Text>
                <div className="w-full md:w-auto min-w-[14rem]">
                    <Button
                        textColorClass="text-primary"
                        borderColorClass="border-primary"
                        styles="flex gap-2"
                        href={ButtonUrlRenderer(blok?.download_cta)}
                        iconAfter={
                            <DownloadIcon styles="w-3.5 h-3.5 fill-primary" />
                        }
                    >
                        {blok?.download_cta_text}
                    </Button>
                </div>
            </li>
            <div className="border-b mb-6"></div>
        </>
    );
};
export default DownloadSecondaryItem;
