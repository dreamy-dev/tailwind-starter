import SuperSmallWidth from "@/components/layouts/SuperSmallWidth";
import H1 from "@/components/typography/H1";
import Text from "@/components/typography/Text";
import { ReactNode } from "react";

interface Tags {
  text: string;
  link: string;
}

type ArticleHeroProps = {
  title?: string | ReactNode;
  leadText?: string;
  date?: string;
  tags?: Tags[];
};

export default function ArticleHero({
  title = "Lorem ipsum dolor sit amet",
  leadText,
  date,
  tags,
}: ArticleHeroProps) {
  return (
    <SuperSmallWidth>
      <H1 styles="mt-20">{title}</H1>
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-6">
          {tags?.map((tag, index) => (
            <a
              key={index}
              href={tag.link}
              className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
            >
              {tag.text}
            </a>
          ))}
        </div>
        <div className="col-span-6 align-right text-right">
          <Text styles="text-md">{date}</Text>
        </div>
      </div>
      <Text styles="text-lg">{leadText}</Text>
    </SuperSmallWidth>
  );
}
