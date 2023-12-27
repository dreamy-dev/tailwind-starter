import ButtonPrimary from "../elements/ButtonPrimary";
import H2 from "../typography/H2";
import Text from "../typography/Text";
import SmallWidth from "../layouts/SmallWidth";

interface TeaserImageLeftProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  listItems?: string[];
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundColor?: string;
}

const TeaserImageRight: React.FC<TeaserImageLeftProps> = ({
  imageSrc,
  title,
  description,
  listItems,
  text,
  buttonText,
  buttonHref,
  backgroundColor,
}) => {
  return (
    <section className={`bg-${backgroundColor} antialiased py-20`}>
      <SmallWidth>
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div>
            <div id="deviceTabContent" className="mt-8">
              <div className="">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div>
                    <H2>{title}</H2>
                    <Text styles="mt-4 text-xl font-normal text-gray-800">
                      {description}
                    </Text>
                  </div>

                  <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                    <ul className="space-y-4">
                      {listItems && listItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2.5">
                          <div
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-${backgroundColor}-100 text-${backgroundColor}-600 shrink-0 dark:bg-${backgroundColor}-900 dark:text-${backgroundColor}-500`}
                          >
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-base font-medium text-gray-900 dark:text-white">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Text styles="mt-6 text-xl font-normal text-gray-800">
                      {text}
                    </Text>
                  </div>

                  <ButtonPrimary
                    position="left"
                    buttonText={buttonText}
                    href={buttonHref}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={imageSrc}
              className="dark:hidden object-cover object-left h-[572px]"
              alt=""
            />
          </div>
        </div>
      </SmallWidth>
    </section>
  );
};

export default TeaserImageRight
