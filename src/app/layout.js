import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import { Montserrat } from "next/font/google";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import "./globals.css";

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

const fontFamily = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={fontFamily.className}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
