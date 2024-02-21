import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import StoryblokProvider from '../components/StoryblokProvider'
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import "./globals.css";

const fontFamily = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});


export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
  
   
        <body className={fontFamily.className}>
          <Header />
          <main>{children}</main>
          <Footer />
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
