'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ContentWidth from '../layouts/ContentWidth';

export default function SocialMediaFeedTwitter({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-16 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 w-full lg:col-span-10">
                    <H2>Beiträge aus X</H2>
                </div>
            </ContentWidth>
            <ContentWidth>
                <div className="col-span-12 grid grid-cols-2 gap-2 lg:col-span-10">
                    <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">
                            At dawn from the gateway to Mars, the launch of
                            Starship’s second flight test
                            <a href="https://t.co/ffKnsVKwG4">
                                pic.twitter.com/ffKnsVKwG4
                            </a>
                        </p>
                        &mdash; SpaceX (@SpaceX)
                        <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">
                            December 7, 2023
                        </a>
                    </blockquote>
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charset="utf-8"
                    ></script>
                </div>
            </ContentWidth>
        </section>
    );
}
