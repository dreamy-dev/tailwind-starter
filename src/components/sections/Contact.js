import { storyblokEditable } from "@storyblok/react/rsc";
import SmallWidth from "../layouts/SmallWidth";
import H2 from "../typography/H2";
import H4 from "../typography/H4";
import Text from "../typography/Text";

export default function Contact({blok}) {
  return (
    <section
      className="py-5 lg:py-24 bg-stadlergradient"
      {...storyblokEditable(blok)}
    >
      <SmallWidth>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:gap-20 xl:grid-cols-12 items-center">
          <div className="w-full xl:col-span-4">
            <img
              className="object-cover object-right max-w-full w-full h-auto xl:w-[320px] xl:h-[369px] xl:max-w-[320px]"
              src={blok?.glogal.image.filename}
              alt="contact"
            />
          </div>
          <div className="w-full xl:col-span-8">
            <div className=" tracking-tight">
              <H2 styles="mb-8 text-white">{blok?.global.Title ?? "Ihr Kontakt"}</H2>
            </div>
            <div className="mb-8 font-light md:text-lg text-white">
              <Text>
                {blok?.text ??
                  "Wo andere Probleme sehen, schaffen wir für Sie Lösungen, die ökologisch und wirtschaftlich begeistern. Bei uns stehen Zuverlässigkeit und höchste Qualität an erster Stelle. Und wir denken langfristig. In enger Zusammenarbeit begleiten wir Sie mit viel Ambition, damit Sie Ihre hochgesteckten Ziele im Bereich Bahn und Mobilität erreichen."}
              </Text>
            </div>
            <ul className="flex-col text-white">
              <li>
                <H4 textColor="white" styles="mb-4">
                  { blok?.global.content.content.text ?? "Kontakt Verkauf Schweiz"}
                </H4>
              </li>
              <li className="mb-4 flex items-center">
                <svg
                  className="mr-2 w-5 h-5"
                  width="20"
                  height="20"
                  viewBox="0 0 20 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89428 15.1532L4.87717 15.1343L4.85822 15.1172C2.8576 13.3124 1.40699 10.9804 0.672787 8.38916C0.393951 7.13918 0.453421 5.83745 0.845201 4.61793C1.23834 3.39417 1.95181 2.2977 2.91172 1.44215L2.93102 1.42495L2.94845 1.40585C3.21315 1.11566 3.53757 0.886116 3.89945 0.733001C4.25814 0.581239 4.64519 0.508126 5.0345 0.518556C5.74684 0.572817 6.41323 0.89128 6.90267 1.4115L6.90795 1.41712L6.9134 1.42256L8.4692 2.97734C8.46932 2.97746 8.46944 2.97758 8.46956 2.97769C8.99635 3.50578 9.2921 4.22096 9.2921 4.9665C9.2921 5.71214 8.99626 6.42743 8.46932 6.95554C8.46928 6.95558 8.46924 6.95562 8.4692 6.95566L7.69154 7.7328L7.69089 7.73346C7.39322 8.03203 7.22603 8.43639 7.22603 8.85799C7.22603 9.2796 7.39322 9.68396 7.69089 9.98253L7.69154 9.98319L10.026 12.3161L10.0271 12.3172C10.3262 12.6142 10.7306 12.7808 11.152 12.7808C11.5735 12.7808 11.9779 12.6142 12.2769 12.3172L12.278 12.3161L13.0558 11.5389C13.0559 11.5388 13.056 11.5387 13.0561 11.5386C13.5846 11.0118 14.3006 10.7159 15.0472 10.7159C15.7939 10.7159 16.5101 11.0119 17.0386 11.5389L18.5945 13.0937L18.6 13.0992L18.6057 13.1045C19.1262 13.5933 19.4447 14.2587 19.499 14.97C19.5096 15.359 19.4365 15.7459 19.2847 16.1044C19.1315 16.4661 18.9018 16.7905 18.6112 17.0551L18.594 17.0708L18.5783 17.0881C17.8996 17.8334 17.0764 18.4331 16.1587 18.8507C15.243 19.2675 14.2522 19.4943 13.2463 19.5176C12.7012 19.5149 12.158 19.4537 11.626 19.3349C9.03341 18.6011 6.70025 17.1518 4.89428 15.1532ZM5.02062 1.75473L4.94486 1.73811L4.86763 1.74523C4.45191 1.78352 4.06717 1.97945 3.79197 2.29192C2.98189 3.00158 2.37601 3.91482 2.03733 4.93736C1.69469 5.97184 1.63829 7.07967 1.87412 8.14357L1.8779 8.16062L1.88286 8.17736C2.57947 10.5293 3.91655 12.6412 5.7445 14.2774C7.38173 16.1042 9.495 17.4403 11.8484 18.1364L11.8654 18.1414L11.8827 18.1452C12.9478 18.3797 14.0566 18.3226 15.0919 17.9797C16.1149 17.6409 17.0287 17.0356 17.7393 16.2264C17.896 16.09 18.0248 15.9243 18.1184 15.7385C18.2188 15.5392 18.2765 15.3212 18.2879 15.0983L18.2903 15.0514L18.2839 15.0049C18.2286 14.6026 18.0323 14.2333 17.7303 13.9624L16.1843 12.4175L16.1832 12.4164C15.8842 12.1194 15.4798 11.9528 15.0583 11.9528C14.6369 11.9528 14.2325 12.1194 13.9334 12.4164L13.9323 12.4175L13.1548 13.1945C13.1547 13.1946 13.1545 13.1947 13.1544 13.1949C12.6256 13.7212 11.9096 14.0168 11.1631 14.0168C10.4167 14.0168 9.70065 13.7212 9.17186 13.1949C9.17173 13.1947 9.17161 13.1946 9.17148 13.1945L6.83831 10.8629C6.83823 10.8628 6.83815 10.8627 6.83807 10.8626C6.31132 10.3342 6.01562 9.61875 6.01562 8.87299C6.01562 8.12735 6.31123 7.41202 6.83784 6.88361C6.838 6.88344 6.83815 6.88328 6.83831 6.88312L7.61582 6.10613L7.61637 6.10558C7.91403 5.80719 8.08124 5.40297 8.08124 4.9815C8.08124 4.56002 7.91403 4.1558 7.61637 3.85741L7.61582 3.85686L6.06973 2.31179C5.80341 2.01576 5.44273 1.82116 5.04917 1.76099L5.02062 1.75473Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
                {blok?.phone ?? "+41 71 626 21 20"}
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 w-5 h-5"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0887 2.62691L17.1739 1.7398H15.7722H4.07778H2.65212L3.76547 2.63027L9.67659 7.35805L9.99233 7.61058L10.3054 7.35469L16.0887 2.62691ZM1.72222 11.1787V11.6787H2.22222H17.7778H18.2778V11.1787V3.47313V2.41838L17.4613 3.08607L10.0021 9.1856L2.5346 3.2105L1.72222 2.56048V3.60091V11.1787ZM0.5 12.9009V0.517578H19.5V12.9009H0.5Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
                {blok?.email ?? "ir@stadlerrail.com"}
              </li>
            </ul>
          </div>
        </div>
      </SmallWidth>
    </section>
  );
}
