"use client";

import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import Lead from "../typography/Lead";
import ButtonPrimary from "../elements/ButtonPrimary";
import Button from "../elements/ButtonSecondary";
import H4 from "../typography/H4";

interface ListItem {
  text: string;
}
interface TeaserProps {
  showList?: boolean;
  showButton?: boolean;
  listData: ListItem[];
}
interface TeaserDownloadProps extends TeaserProps {
  title?: string;
  leadText?: string;
  buttonLink?: string;
  buttonText?: string;
  listData: ListItem[];
}


const TeaserDownload: React.FC<TeaserDownloadProps> = ({
  title,
  leadText,
  buttonLink,
  buttonText,
  showList = true,
  listData,
  showButton = true,
}) => {
  return (
    <section className="bg-white pb-20">
      <ContentWidth>
        <div className="col-span-12 max-w-full flex flex-col justify-left">
          <H2>{title}</H2>
          <Lead>{leadText}</Lead>
          {showList && (
            <ul className="mb-8">
              {listData.map((item, index) => (
                <>
                  <li
                    className="mb-6 text-xl flex justify-between items-center"
                    key={index}
                  >
                    <p className="mr-10">{item.text}</p>
                    <Button
                      textColorClass="text-primary"
                      borderColorClass="border-primary"
                      styles="flex gap-2"
                    >
                      Zu Downloadcenter
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                          fill="#005893"
                        />
                      </svg>
                    </Button>
                  </li>
                  <div className="border-b mb-6"></div>
                </>
              ))}
            </ul>
          )}
          {showButton && (
            <ButtonPrimary position="left" href={buttonLink}>
              {buttonText}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5650_6261)">
                  <path
                    d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5650_6261">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.5 0.517578)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ButtonPrimary>
          )}
        </div>
      </ContentWidth>
    </section>
  );
};
export default TeaserDownload;