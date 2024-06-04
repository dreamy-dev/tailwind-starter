import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokProvider from '@/src/components/StoryblokProvider';
import Head from 'next/head';
import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';

const fontStadler = localFont({
    src: [
        {
            path: '../../../public/fonts/StadlerType_W_Th.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_ThIt.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XLt.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XLtIt.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Lt.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_LtIt.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Rg.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_It.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Md.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_MdIt.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_SBd.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_SBdIt.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Bd.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_BdIt.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XBd.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XBdIt.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Blk.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_BlkIt.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-stadler',
});

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

export default function RootLayout({ children, params: { lang } }) {
    return (
        <StoryblokProvider>
            <html lang={lang}>
                <Head>
                    {/* <Script
                    
                        id="Cookiebot"
                        src="
https://consent.cookiebot.com/uc.js"
                        data-cbid="cedf775e-624e-499c-a386-4629e677f18e"
                        data-blockingmode="auto"
                        type="text/javascript"
                    ></Script>
                    <Script
                        id="CookieDeclaration"
                        src="
https://consent.cookiebot.com/cedf775e-624e-499c-a386-4629e677f18e/cd.js"
                        type="text/javascript"
                        async
                    ></Script> */}
                </Head>
                <body
                    className={
                        fontStadler.className +
                        ' overflow-x-hidden flex flex-col min-h-screen'
                    }
                >
                    <Script async>
                        {`
                        console.log("Matomo test works")
                            var _mtm = window._mtm = window._mtm || [];
                            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
                            (function() {
                                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                                g.async=true; g.src='https://cdn.matomo.cloud/etkstadlerrailcom.matomo.cloud/container_PFGEOIW5.js'; s.parentNode.insertBefore(g,s);
                            })();
                        `}
                    </Script>
                    <Script async>
                        {`
                            const curUrl = window.location.href
                            const linksForMatomo = document.querySelectorAll("a")
                            if (curUrl.includes("/investor-relations")) {
                                linksForMatomo.forEach(item => {
                                    item?.addEventListener('click', () => {
                                        var _paq = (window._paq = window._paq || []);
                                        _paq.push([
                                            'trackEvent',
                                            'Investor Relations - Events on the Page',
                                            item.getAttribute("href"),
                                        ]);
                                    })
                                })
                            }
                        `}
                    </Script>
                    <main>{children}</main>
                </body>
            </html>
        </StoryblokProvider>
    );

    // <Script
    //   src="https://app.storyblok.com/f/storyblok-latest.js?t=OzCkp5jSdfLeMLs4g0rshAtt"
    //   type="text/javascript"
    // ></Script>;

    // data - blok - c;
    // data - blok - uid;
}
