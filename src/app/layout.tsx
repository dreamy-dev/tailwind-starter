import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "../components/sections/NavBar";
import Header from "@/components/sections/Header";
import Footer from "../components/sections/Footer";

const fontFamily = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
    <html lang="en">
      <body className={fontFamily.className + ' ' + 'overflow-x-hidden flex flex-col min-h-screen'}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="../../node_modules/flowbite/dist/flowbite.min.js" async />
      </body>
    </html>
  );
}
