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
    <section className="bg-white dark:bg-gray-900 py-24">
      <SmallWidth>
        <div className="mt-4 flex font-normal text-gray-600">
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
        <Lead>{leadText ?? 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'}</Lead>
        {withCTA ? (
          <ButtonPrimary position="left" buttonText={buttonText} />
        ) : (
          ""
        )}
      </SmallWidth>
    </section>
  );
}

