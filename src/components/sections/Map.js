import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import FullWidth from '../layouts/FullWidth';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';

export default function Map({ blok }) {
    return (
        <section {...storyblokEditable(blok)}>
            <FullWidth>
                <div className="col-span-12 w-full bg-white pb-5 lg:py-24">
                    <SmallWidth>
                        <div className="max-w-4xl mx-auto">
                            <H2
                                styles="text-center mb-2 text-4xl font-bold "
                                resetStyles={true}
                            >
                                {blok.title}
                            </H2>
                        </div>
                    </SmallWidth>
                    <div className="px-6 my-24 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-24 text-center lg:grid-cols-4">
                            {blok.facts_figures_block.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </dl>
                    </div>
                    <div className="relative">
                        <div className="pl-6 relative w-full">
                            <img
                                className="w-full h-auto"
                                src={blok.map.filename}
                                alt=""
                            />
                        </div>
                        <div className="pl-6 lg:pl-20 md:flex flex-column pt-8 static w-full">
                            <div className="md:w-1/3 w-full mb-8 flex-column justify-start items-start">
                                <div className="flex justify-start items-center">
                                    <div className="mr-3 w-3 h-3 bg-map-dark rounded-full"></div>
                                    <div>{blok.legend_text1}</div>
                                </div>
                                <div className="flex justify-start items-center">
                                    <div className="mr-3 w-3 h-3 bg-map-light rounded-full"></div>
                                    <div>{blok.legend_text2}</div>
                                </div>
                            </div>

                            <div className="md:w-1/3 w-full flex justify-center items-center">
                                <ButtonPrimary
                                    position="center"
                                    buttonText={blok.cta_title}
                                    href={blok.cta_link.url}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </FullWidth>
        </section>
    );
}
