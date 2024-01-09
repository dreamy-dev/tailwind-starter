import ButtonPrimary from "@/components/elements/ButtonPrimary";
import SmallWidth from "@/components/layouts/SmallWidth";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";
import { ReactNode } from "react";

type Breadcrumb = {
  text: string;
  link?: string;

};

type HeroTextProps = {
  breadcrumbs?: Breadcrumb[];
  title?: string | ReactNode;
  leadText?: string;
  withCTA?: boolean;
  buttonText?: string;
};

export default function HeroText({
  breadcrumbs = [],
  title = "Lorem ipsum dolor sit amet",
  leadText,
  withCTA,
  buttonText,
}: HeroTextProps) {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <SmallWidth>
        <div className="mt-24 flex font-normal text-gray-600">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index}>
              {index !== breadcrumbs.length - 1 ? (
                <>
                  <a href={breadcrumb.link}>{breadcrumb.text}</a>
                  <span className="px-3">|</span>
                </>
              ) : (
                <>{breadcrumb.text}</>
              )}
            </div>
          ))}
        </div>
        <H1>{title}</H1>
        <Lead>{leadText}</Lead>
        {withCTA ? (
          <ButtonPrimary position="left" buttonText={buttonText} />
        ) : (
          ""
        )}
      </SmallWidth>
    </section>
  );
}

// export default function HeroText(props?: any) {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <SmallWidth>
//         <div className="mt-24 flex font-normal text-gray-600">
//           {props.solution ? (
//             <><p>Lösungen</p><span className="px-3">|</span></>
//           ) : ''}
//           <p>{props.category}</p>
//         </div>
//         <H1>{props.title ?? 'Lorem ipsum dolor sit amet'}</H1>
//         <Lead>{props.leadText}</Lead>
//         {props.withCTA ? <ButtonPrimary position="left" buttonText={props.buttonText} /> : ""}
//       </SmallWidth>
//     </section>
//   );
// }
