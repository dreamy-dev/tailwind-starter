import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <script src="../../node_modules/flowbite/dist/flowbite.min.js" async />
      </body>
    </html>
  );
}
