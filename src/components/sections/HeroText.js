import { storyblokEditable } from "@storyblok/react/rsc";
import ButtonPrimary from "../../components/elements/ButtonPrimary";
import SmallWidth from "../../components/layouts/SmallWidth";
import H1 from "../../components/typography/H1";
import Lead from "../../components/typography/Lead";


const HeroText = ({
  breadcrumbs = [],
  title = blok.title ?? "Lorem Ipsum",
  leadText,
  withCTA,
  buttonText,
  blok,
}) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white dark:bg-gray-900 py-24"
    >
      <SmallWidth>
        <div className="flex font-normal text-gray-600 pb-3">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index}>
              {index !== breadcrumbs.length - 1 ? (
                <>
                  <a href={breadcrumb.link}>{breadcrumb.text}</a>
                  <span className="px-3">|</span>
                </>
              ) : (
                <a href={breadcrumb.link}>{breadcrumb.text}</a>
              )}
            </div>
          ))}
        </div>
        <H1>{blok.title ?? "Lorem Ipsum"}</H1>
        <Lead>{blok.lead}</Lead>
        {withCTA ? (
          <ButtonPrimary position="left" buttonText={buttonText} />
        ) : (
          ""
        )}
      </SmallWidth>
    </section>
  );
};

export default HeroText;