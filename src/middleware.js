import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextResponse } from 'next/server';

// Middleware used for i18n Routing
export function middleware(request) {
    //check if country is one of the defined countries or global
    const country = (request.geo && request.geo.country) || 'global';

    // Console Log values
    console.log(`Visitor from ${country}`);
    console.log(request.geo.country);
    console.log(request);
    console.log(`Pathname ${request.nextUrl.pathname}`);

    if (request.nextUrl.pathname == '/de/career') {
        switch (request.geo.country) {
            case 'CH':
                console.log('I was called');
                request.nextUrl.pathname = '/de/ch/career-ch-en';
                return NextResponse.rewrite(request.nextUrl);
            case 'DE':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'US':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'ES':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'PL':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'HU':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'BY':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'KZ':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'CZ':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'AT':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'GB':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'IT':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'NL':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'SE':
                // request.nextUrl.pathname = 'ch/...'
                break;
            case 'NO':
                // request.nextUrl.pathname = 'ch/...'
                break;
            default:
            // bring on global page
            // current understanding of logic is:
            // don't bring to the global folder, it would be easier to not do any redirect
            // and update this career page just in english and german
            // otherwise redirect here to global folder
        }
    } else {
        // nothing should happen really, right? not sure...
    }

    return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};
