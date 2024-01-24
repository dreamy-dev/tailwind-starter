import H3 from "@/components/typography/H3";
import ContentWidth from "../layouts/ContentWidth";

interface FeatureItemProps {
  imageSrc?: string;
  title?: string;
  linkText?: string;
  href?: string;
}

interface FeaturesProps {
  featuresData: FeatureItemProps[];
  mainTitle?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imageSrc,
  title,
  href,
}) => {
  return (
    <li className="w-full md:w-1/2 sm:w-full lg:w-1/2">
      <img src={imageSrc} alt="Image" />
      <a
        href={href}
        className="flex items-center gap-2 text-2xl font-bold mt-4"
      >
        {title}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
            fill="#005893"
          />
        </svg>
      </a>
    </li>
  );
};

const Features: React.FC<FeaturesProps> = ({ featuresData, mainTitle }) => {
  return (
    <section className="bg-white py-5 lg:py-24">
      <ContentWidth>
        <div className="col-span-12  max-w-full mx-auto bg-white">
          <div className="mb-10 tracking-tight dark:text-white ">
            <H3>{mainTitle}</H3>
          </div>
          <ul className="flex items-center justify-center flex-col gap-8 sm:gap-12 md:gap-16 md:flex-row">
            {featuresData.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
};

export default Features;
