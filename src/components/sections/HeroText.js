import { storyblokEditable } from "@storyblok/react/rsc";
import ButtonPrimary from "../../components/elements/ButtonPrimary";
import SmallWidth from "../../components/layouts/SmallWidth";
import H1 from "../../components/typography/H1";
import Lead from "../../components/typography/Lead";


const HeroText = ({
  breadcrumbs = [],
  props,
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
        <H1>Lorem ipsum</H1>
        <Lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Lead>
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