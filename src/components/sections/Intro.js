import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

export default function Intro({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="bg-white">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="max-w-screen-xl items-center gap-16 py-8 lg:grid lg:grid-cols-2 lg:py-16">
                        <div className="font-normal sm:text-lg">
                            <H2>{blok?.title}</H2>
                            <p className="richtext mb-4 mt-6">{blok?.text}</p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <img
                                className="h-96 scale-100 object-cover object-left"
                                src={blok?.image?.filename}
                                alt={
                                    blok?.image?.filename?.alt ??
                                    `Office content for ${blok?.title}`
                                }
                            />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
