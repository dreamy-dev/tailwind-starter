'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';

export default function SocialMediaFeedLinkedIn({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-16 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 w-full lg:col-span-10">
                    <H2>LinkedIn Beiträge</H2>
                </div>
            </ContentWidth>
            <ContentWidth>
                <div className="col-span-12 grid grid-cols-2 gap-2 lg:col-span-10">
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7244669377843798017"
                        height="771"
                        width="504"
                        frameborder="0"
                        allowfullscreen=""
                        title="Eingebetteter Beitrag"
                    ></iframe>
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7244732338692136960"
                        height="750"
                        width="504"
                        frameborder="0"
                        allowfullscreen=""
                        title="Eingebetteter Beitrag"
                    ></iframe>
                </div>
            </ContentWidth>
        </section>
    );
}
