
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
import { useState, useEffect } from "react";

import SuperSmallWidth from "../layouts/SuperSmallWidth";
import ArticleHero from "./ArticleHero";

function MedienmitteilungenBody({blok}) {
    
  return (
    <section {...storyblokEditable(blok)} className="mb-32">
      <ArticleHero block={blok} />
     
      <SuperSmallWidth>
      <div className="col-span-12 w-full">
        <div className="text-md richtext">
          {render(blok.text)}
        </div>
      </div>
    </SuperSmallWidth>
    </section>
  );
}

export default MedienmitteilungenBody;
