'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import SmallWidth from '../../components/layouts/SmallWidth';
import H1 from '../../components/typography/H1';
import Lead from '../../components/typography/Lead';
import Breadcrumbs from './Breadcrumbs';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const HeroText = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900 py-16 lg:py-24"
        >
            <SmallWidth>
                <Breadcrumbs />
                <H1>{blok?.title}</H1>
                <Lead className="richtext">{blok?.lead}</Lead>
                {blok?.showbutton ? (
                    <div className='mb-8 lg:mb-12'>
                        <ButtonPrimary
                            position="left"
                            buttonText={blok?.buttontext}
                            href={ButtonUrlRenderer(blok?.buttonlink)}
                        />
                    </div>
                ) : (
                    ''
                )}
            </SmallWidth>
        </section>
    );
};

export default HeroText;
