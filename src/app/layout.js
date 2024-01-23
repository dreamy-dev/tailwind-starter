import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
 import Header from "@/components/sections/Header";
 import Footer from "../components/sections/Footer";

import "./globals.css";

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Header />
           <main>{children}</main>
           <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}

// "use client";

// import "./globals.css";

// //import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
// import NavBar from "../components/sections/NavBar";
// import Header from "@/components/sections/Header";
// import Footer from "../components/sections/Footer";
// import StoryblokProvider from "../components/StoryblokProvider";

// import { storyblokInit, apiPlugin } from "@storyblok/react";

// storyblokInit({
//   accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
//   use: [apiPlugin],
//   apiOptions: {
//     region: "eu",
//   },

// });

// const fontFamily = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// // export const metadata: Metadata = {
// //   title: "Stadler Website Prototype",
// //   description: "Technical analysis phase",
// // };

// export default function RootLayout({
//   children,
// }) {
//   return (
//     <StoryblokProvider>
//       <html lang="en">
//         <body className={fontFamily.className}>
//           <Header />
//           <main>{children}</main>
//           <Footer />
//           <script
//             src="../../node_modules/flowbite/dist/flowbite.min.js"
//             async
//           />
//         </body>
//       </html>
//     </StoryblokProvider>
//   );
// }
