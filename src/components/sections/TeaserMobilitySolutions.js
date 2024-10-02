'use client';
import H2 from '../../components/typography/H2';
import Text from '../../components/typography/Text';
import ContentWidth from '../layouts/ContentWidth';
import Button from '../elements/ButtonSecondary';
import { ArrowForward } from '../icons/ArrowForward';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function TeaserMobilitySolutions({ blok }) {
    return (
        <section className="pb-12 pt-16 dark:bg-greySolid-800 lg:pt-24">
            <ContentWidth>
                <div className="col-span-12 max-w-4xl lg:mx-auto">
                    <div className="break-words text-center leading-tight text-white">
                        <H2>{blok.title}</H2>
                    </div>
                    <div className="my-8 break-words text-center text-xl text-white">
                        <Text>{blok.lead}</Text>
                    </div>
                    <Button
                        position="center"
                        textColorClass="text-white"
                        href={ButtonUrlRenderer(blok?.cta_link)}
                        styles="mb-8 lg:mb-12"
                        iconAfter={<ArrowForward styles="w-4 h-4 fill-white" />}
                    >
                        {blok.cta_text}
                    </Button>
                </div>
                <div className="col-span-12 border border-solid border-greyBrighten-300 tracking-tight dark:text-white"></div>
            </ContentWidth>
        </section>
    );
}
