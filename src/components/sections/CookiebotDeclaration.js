'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import FullWidth from '../layouts/FullWidth';
import { useEffect } from 'react';

export default function CookiebotDeclaration({ blok }) {
    useEffect(() => {
        const cookieBotWrapper = document.getElementById(
            'CookiebotDeclaration'
        );
        if (cookieBotWrapper) {
            const script = document.createElement('script');
            script.id = 'CookieDeclaration';
            script.type = 'text/javascript';
            script.async = true;
            script.src = `https://consent.cookiebot.com/cedf775e-624e-499c-a386-4629e677f18e/cd.js`;

            cookieBotWrapper.appendChild(script);
        }
    }, []);
    return (
        <section
            {...storyblokEditable(blok)}
            className="px-4 py-0 lg:px-0 lg:py-24"
        >
            <FullWidth>
                <div className="col-span-12">
                    <div id="CookiebotDeclaration" />
                </div>
            </FullWidth>
        </section>
    );
}
