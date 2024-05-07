import { storyblokEditable } from '@storyblok/react/rsc';
import CountUp from 'react-countup';


const FactsAndFiguresItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <div className="flex flex-col gap-y-2 col-span-1 mx-auto max-w-[400px]">
                <dt className="text-base lg:text-xl leading-7 text-black">
                    {blok?.text}
                </dt>
                <dd className="order-first text-3xl lg:text-6xl font-bold tracking-tight text-primary sm:text-5xl">
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
                    ></CountUp>
                </dd>
            </div>
        </div>
    );
};

export default FactsAndFiguresItem;
