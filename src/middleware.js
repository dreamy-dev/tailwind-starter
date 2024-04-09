import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextResponse } from 'next/server';

// Middleware used for i18n Routing
export function middleware(request) {
    const country = (request.geo && request.geo.country) || 'global';

    console.log(`Visitor from ${country}`);
    console.log(request.geo.country);

    return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};

// Geolocation

/* export default function middleware(request) {
    // Extract country. Default to US if not found.
    const country = (request.geo && request.geo.country) || 'US';

    console.log(`Visitor from ${country}`);

    // Specify the correct route based on the requests location
    if (country === BLOCKED_COUNTRY) {
        request.url.pathname = '/login';
    } else {
        request.url.pathname = `/secret-page`;
    }

    // Rewrite to URL
    return NextResponse.rewrite(request.url);
} */
