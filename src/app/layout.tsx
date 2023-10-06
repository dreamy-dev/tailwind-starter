"use client";

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import StoryblokProvider from "../components/StoryblockProvider";

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "i20Q9ZZcD1z1cvrWLgX1zgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stadler Website Prototype",
  description: "Technical analysis phase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <script
            src="../../node_modules/flowbite/dist/flowbite.min.js"
            async
          />
        </body>
      </html>
    </StoryblokProvider>
  );
}
