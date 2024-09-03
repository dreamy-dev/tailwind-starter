'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import Text from '../typography/Text';
import FullWidth from '../layouts/FullWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Video({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="bg-white py-16 lg:py-24 2xl:max-w-[1760px] 2xl:mx-auto"
        >
            <FullWidth>
                <div className="col-span-12 flex flex-col lg:flex-row justify-between items-center">
                    <div className="overflow-hidden w-full lg:w-2/3 ">
                        <video
                            loading="lazy"
                            className="-mt-[1%] -mb-[1%]"
                            controls={false}
                            autoPlay={true}
                            muted={true}
                            src={blok.video.filename}
                            loop={true}
                        />
                    </div>
                    <div className="w-[90%] m-auto lg:px-4 xl:px-20 lg:w-1/3">
                        <div className="mt-10 lg:mt-0">
                            <div className="text-4xl font-bold mb-6">
                                <H2>{blok?.title}</H2>
                            </div>
                            <div className="text-xl">
                                <Text>{blok?.text}</Text>
                            </div>
                        </div>

                        <div className="mt-6">
                            <ButtonPrimary
                                href={ButtonUrlRenderer(blok?.cta_link)}
                                buttonText={blok?.cta_text}
                                position="left"
                            />
                        </div>
                    </div>
                </div>
            </FullWidth>
        </div>
    );
}
