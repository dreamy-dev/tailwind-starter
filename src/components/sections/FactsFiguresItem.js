'use client';
import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import CountUp from 'react-countup';

const FactsAndFiguresItem = ({ blok }) => {
    return (
        <dl {...storyblokEditable(blok)}>
            <div className="col-span-1 mx-auto flex max-w-[400px] flex-col gap-y-2">
                <dt className="text-base leading-7 text-black lg:text-xl">
                    {blok?.text}
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                    <CountUp
                        start={0}
                        end={blok?.factsandfigures_data}
                        suffix={blok?.suffix ?? ' '}
                        prefix={blok?.prefix ?? ' '}
                        duration={2}
                        separator="'"
                        decimals={blok?.decimals ?? 1}
                        decimal="."
                        enableScrollSpy
                    />
                </dd>
            </div>
        </dl>
    );
};

export default FactsAndFiguresItem;
