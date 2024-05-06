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
    console.log(request.headers.get('accept-language')?.split(',')?.[0]);
    console.log(`Pathname ${request.nextUrl.pathname}`);

    const userLocale = request.headers.get('accept-language')?.split(',')?.[0];

    if (request.nextUrl.pathname == '/en/career') {
        switch (request.geo.country) {
            case 'CH':
                console.log('I was called');
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/de/ch/career-ch-de';
                    //return NextResponse.rewrite(request.nextUrl);
                } else if (userLocale.includes('fr')) {
                    request.nextUrl.pathname = '/en/ch/career-ch-fr';
                    //return NextResponse.rewrite(request.nextUrl);
                } else {
                    request.nextUrl.pathname = '/en/ch/career-ch-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'DE':
                request.nextUrl.pathname = '/en/de/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'US':
                request.nextUrl.pathname = '/en/us/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'ES':
                request.nextUrl.pathname = '/es/us/career-es-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'PL':
                request.nextUrl.pathname = '/en/pl/career-pl-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'HU':
                request.nextUrl.pathname = '/en/hu/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'BY':
                request.nextUrl.pathname = '/en/by/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'KZ':
                request.nextUrl.pathname = '/en/kz/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'CZ':
                request.nextUrl.pathname = '/en/cz/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'AT':
                request.nextUrl.pathname = '/en/at/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'GB':
                request.nextUrl.pathname = '/en/gb/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'IT':
                request.nextUrl.pathname = '/en/it/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'NL':
                request.nextUrl.pathname = '/en/nl/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'SE':
                request.nextUrl.pathname = '/en/se/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            case 'NO':
                request.nextUrl.pathname = '/en/no/career-ch-en';
                //return NextResponse.rewrite(request.nextUrl);
                break;
            default:
            // bring on global page
            // current understanding of logic is:
            // don't bring to the global folder, it would be easier to not do any redirect
            // and update this career page just in english and german
            // otherwise redirect here to global folder
        }
    } else if (request.nextUrl.pathname == '/de/career') {
        switch (request.geo.country) {
            case 'CH':
                request.nextUrl.pathname = '/de/ch/career-ch-de';
                return NextResponse.rewrite(request.nextUrl);
            case 'DE':
                request.nextUrl.pathname = '/de/de/career-de-de';
                //return NextResponse.rewrite(request.nextUrl);
                break;
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
