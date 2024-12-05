import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';
import i18nConfig from '/i18nConfig';

// Middleware used for i18n Routing
export function middleware(request) {
    // INFO
    // Quite a few country logics are currently uncommented.
    // This is because the logic will be enabled later on so DO NOT DELETE

    // Console Log values used for Debugging
    /*  const country = (request.geo && request.geo.country) || 'global';
    console.log(`Visitor from ${country}`);
    console.log(request.geo.country);
    console.log(request);
    console.log(request.headers.get('accept-language')?.split(',')?.[0]);
    console.log(`Pathname ${request.nextUrl.pathname}`); */

    const userLocale = request.headers.get('accept-language')?.split(',')?.[0];

    if (request.nextUrl.pathname == '/en/career') {
        switch (request.geo.country) {
            case 'CH':
                if (userLocale.includes('fr')) {
                    request.nextUrl.pathname = '/en/ch/career-ch-fr';
                } else if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/ch/career-ch-it';
                } else {
                    request.nextUrl.pathname = '/en/ch/career-ch-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'DE':
                request.nextUrl.pathname = '/en/de-de/career-de-en';
                return NextResponse.rewrite(request.nextUrl);
            case 'US':
                //page only available in EN
                request.nextUrl.pathname = '/en/us-en/career-us-en';
                return NextResponse.rewrite(request.nextUrl);
            /* case 'ES':
                if (userLocale.includes('es')) {
                    request.nextUrl.pathname = '/en/es-es/career-es-es';
                } else {
                    request.nextUrl.pathname = '/en/es-es/career-es-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'PL':
                if (userLocale.includes('pl')) {
                    request.nextUrl.pathname = '/en/pl-pl/career-pl-pl';
                } else {
                    request.nextUrl.pathname = '/en/pl-pl/career-pl-en';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'HU':
                if (userLocale.includes('hu')) {
                    request.nextUrl.pathname = '/en/hu-hu/career-hu-hu';
                } else {
                    request.nextUrl.pathname = '/en/hu-hu/career-hu-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'BY':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/by-ru/career-by-by';
                } else {
                    request.nextUrl.pathname = '/en/by-ru/career-by-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'KZ':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/kz-ru/career-kz-kz';
                } else {
                    request.nextUrl.pathname = '/en/kz-ru/career-kz-en';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'CZ':
                if (userLocale.includes('cz')) {
                    request.nextUrl.pathname = '/en/cz-cz/career-cz-cz';
                } else {
                    request.nextUrl.pathname = '/en/cz-cz/career-cz-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'AT':
                //german page is handled by german logic
                request.nextUrl.pathname = '/en/at-de/career-at-en';
                return NextResponse.rewrite(request.nextUrl);
            case 'GB':
                //page only available in EN
                request.nextUrl.pathname = '/en/gb-en/career-ch-en';
                return NextResponse.rewrite(request.nextUrl); */
            case 'IT':
                if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/it-it/career-it-it';
                } else {
                    request.nextUrl.pathname = '/en/it-it/career-it-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'NL':
                if (userLocale.includes('nl')) {
                    request.nextUrl.pathname = '/en/nl-nl/career-nl-nl';
                } else {
                    request.nextUrl.pathname = '/en/nl-nl/career-nl-en';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'SE':
                if (userLocale.includes('se')) {
                    request.nextUrl.pathname = '/en/se-se/career-se-se';
                } else {
                    request.nextUrl.pathname = '/en/se-se/career-se-en';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'NO':
                if (userLocale.includes('no')) {
                    request.nextUrl.pathname = '/en/no-no/career-no-no';
                } else {
                    request.nextUrl.pathname = '/en/no-no/career-no-en';
                }
                return NextResponse.rewrite(request.nextUrl); */
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
                request.nextUrl.pathname = '/de/de-de/career-de-de';
                return NextResponse.rewrite(request.nextUrl);
            /* case 'AT':
                request.nextUrl.pathname = '/de/at-de/career-at-de';
                return NextResponse.rewrite(request.nextUrl); */
        }
    } else {
        // nothing should happen really, right? not sure...
    }

    // Geolocation logic for Offene Stellen page with Prospective integration

    if (request.nextUrl.pathname == '/en/career/offene-stellen') {
        switch (request.geo.country) {
            case 'CH':
                if (userLocale.includes('fr')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-fr';
                } else if (userLocale.includes('it')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-it';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'DE':
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/de/career/offene-stellen';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'ES':
                if (userLocale.includes('es')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-es';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'PL':
                if (userLocale.includes('pl')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-pl';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'HU':
                if (userLocale.includes('hu')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-hu';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'BY':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-ru';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            case 'KZ':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-ru';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'CZ':
                if (userLocale.includes('cz')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-cz';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'AT':
                //german page is handled by german logic
                request.nextUrl.pathname = '/en/career/offene-stellen';
                return NextResponse.rewrite(request.nextUrl);
            case 'GB':
                //page only available in EN
                request.nextUrl.pathname = '/en/career/offene-stellen';
                return NextResponse.rewrite(request.nextUrl); */
            case 'IT':
                if (userLocale.includes('it')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-it';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'NL':
                if (userLocale.includes('nl')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-nl';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl); */
            case 'SE':
                if (userLocale.includes('se')) {
                    request.nextUrl.pathname =
                        '/en/career/offene-stellen/offene-stellen-se';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl);
            /* case 'NO':
                if (userLocale.includes('no')) {
                    request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-no';
                } else {
                    request.nextUrl.pathname = '/en/career/offene-stellen';
                }
                return NextResponse.rewrite(request.nextUrl); */
            default:
        }
    } else if (request.nextUrl.pathname == '/de/career/offene-stellen') {
        // if user pathname refers to German page
        // but user locate includes English value
        // we sent the user to the English translation of the page
        if (userLocale.includes('en')) {
            request.nextUrl.pathname = '/en/career/offene-stellen';
        }
        return NextResponse.rewrite(request.nextUrl);
    }
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-current-url', request.url);

    NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders,
        },
    });

    return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};
