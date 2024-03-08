
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
import { useState, useEffect } from "react";

import SuperSmallWidth from "../layouts/SuperSmallWidth";
import H1 from "../typography/H1";
import Text from "../typography/Text";
import Breadcrumbs from "./Breadcrumbs";
import ArticleHero from "./ArticleHero";

function NewsBody({blok}) {
  // const [categories, setCategories] = useState([]);
  const uuids = blok.categories.join(",")

  // const callAPI = async () => {
	// 	try {
	// 		const res = await fetch(
	// 			`https://api.storyblok.com/v2/cdn/stories?version=public&token=${token}&by_uuids=${uuids}`
	// 		);
	// 		const data = await res.json();
  //     setCategories(data)
      
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
  
    // useEffect(() => {
    //   callAPI();
    // }, []);
    
  return (
    <section {...storyblokEditable(blok)} className="mb-32">
      <ArticleHero block={blok} />
     
      <SuperSmallWidth>
      <div className="col-span-12 w-full">
        <div className="text-md">
          {render(blok.text)}
        </div>
      </div>
    </SuperSmallWidth>
    </section>
  );
}

export default NewsBody;
