import SuperSmallWidth from "@/components/layouts/SuperSmallWidth";
import H1 from "@/components/typography/H1";
import Text from "@/components/typography/Text";
import { ReactNode } from "react";

type Breadcrumb = {
  text: string;
  link?: string;
};

interface Tags {
  text: string;
  link: string;
}

type ArticleHeroProps = {
  breadcrumbs?: Breadcrumb[];
  title?: string | ReactNode;
  leadText?: string;
  date?: string;
  tags?: Tags[];
};

export default function ArticleHero({
  breadcrumbs = [],
  title = "Lorem ipsum dolor sit amet",
  leadText,
  date,
  tags,
}: ArticleHeroProps) {
  return (
    <SuperSmallWidth>
      <div className="mt-20 flex font-normal text-gray-600">
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
      <H1 styles="mb-8">{title}</H1>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-6">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
            >
              {tag.text}
            </span>
          ))}
        </div>
        <div className="col-span-6 align-right text-right">
          <Text styles="text-md">{date}</Text>
        </div>
      </div>
      <Text styles="text-lg mt-12">{leadText}</Text>
    </SuperSmallWidth>
  );
}
