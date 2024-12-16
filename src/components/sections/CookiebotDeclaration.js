'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import FullWidth from '../layouts/FullWidth';

export default function CookiebotDeclaration({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="px-4 py-0 lg:px-0 lg:py-24"
        >
            <FullWidth>
                <div className="col-span-12">
                    <script
                        id="CookieDeclaration"
                        src="https://consent.cookiebot.com/cedf775e-624e-499c-a386-4629e677f18e/cd.js"
                        type="text/javascript"
                        async
                    ></script>
                </div>
            </FullWidth>
        </section>
    );
}
