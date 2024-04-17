'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';
import Text from '../typography/Text';

const QualityFeatureItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0">
                <img src={blok?.image.filename} />
            </div>
            <div className="text-white">
                <H4>{blok?.title}</H4>
                <div className="text-white mt-2 ">
                    <Text styles="">{blok?.text}</Text>
                </div>
            </div>
        </div>
    </div>
);

export default QualityFeatureItem;
