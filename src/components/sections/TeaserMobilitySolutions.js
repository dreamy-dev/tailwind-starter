'use client';
import H2 from '../../components/typography/H2';
import Text from '../../components/typography/Text';
import ContentWidth from '../layouts/ContentWidth';
import Button from '../elements/ButtonSecondary';
import { ArrowForward } from '../icons/ArrowForward';

export default function TeaserMobilitySolutions({ blok }) {
    return (
        <section className="pt-16 lg:pt-24 pb-12 dark:bg-gray-900 ">
            <ContentWidth>
                <div className="col-span-12 max-w-4xl lg:mx-auto">
                    <div className="text-center leading-tight text-white break-words">
                        <H2>{blok.title}</H2>
                    </div>
                    <div className="my-8 text-xl text-center text-white break-words">
                        <Text>{blok.lead}</Text>
                    </div>
                    <Button
                        position="center"
                        textColorClass="text-white"
                        href={blok.cta_link.href}
                        styles="mb-8 lg:mb-12"
                        iconAfter={<ArrowForward styles="w-4 h-4 fill-white" />}
                    >
                        {blok.cta_text}
                    </Button>
                </div>
                <div className="col-span-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
            </ContentWidth>
        </section>
    );
}
