
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

import SuperSmallWidth from "../layouts/SuperSmallWidth";
import H1 from "../typography/H1";
import Text from "../typography/Text";
import Breadcrumbs from "./Breadcrumbs";

function NewsBody({blok}) {
  console.log("block", blok)
  return (
    <section {...storyblokEditable(blok)}>
      <SuperSmallWidth>
      <div className="mt-20 flex font-normal text-gray-600">
        <Breadcrumbs />
      </div>
      <H1 styles="mb-8">{blok.title}</H1>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-6">
        {JSON.stringify(blok?.categories)}
          {/* {tags?.map((tag, index) => (
            <span
              key={index}
              className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
            >
              {tag.text}
            </span>
          ))} */}
        </div>
        <div className="col-span-6 align-right text-right">
          <Text styles="text-md">{blok.date}</Text>
        </div>
      </div>
      {/* <Text styles="text-lg mt-12">{leadText}</Text> */}
    </SuperSmallWidth>
      <SuperSmallWidth>
      <div className="col-span-12 w-full">
        <img src={blok?.image[0].filename} className="my-8" alt="full service" />
        <Text>
          {render(blok.text)}
        </Text>
      </div>
    </SuperSmallWidth>
    </section>
  );
}

export default NewsBody;
