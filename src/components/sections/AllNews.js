
import ContentWidth from "../layouts/ContentWidth";
import { getStoryblokApi, storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import DateFormatter from "../helpers/DateFormatter";
import TrimText from "../helpers/TrimText";

import { useState, useEffect } from "react";
import H1 from "../typography/H1";
import Text from "../typography/Text";


function AllNews({ blok }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: 'medien/news/',
        is_startpage: false,
        resolve_relations: "news.categories",
        "sort_by": "content.date:desc"
      });

      setArticles((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
  }, []);

  return (
    <ContentWidth {...storyblokEditable(blok)}>
      <div className="col-span-12 w-full">
        <H1>{blok.title}</H1>
      </div>
      <div className="col-span-12 w-full flex flex-col mb-8 items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
        <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded  block">
              <option disabled value="">
                {blok.filter_country_title}
              </option>
              {blok.filter_country.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded  block">
              <option disabled value="">
                {blok.filter_category_title}
              </option>
              {blok.filter_newscategories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.content.category}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded block">
              <option disabled value="">
                {blok.filter_products_title}
              </option>
              {blok.filter_products.map((product, index) => (
                <option key={index} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded block">
              <option disabled value="">
                {blok.filter_years_title}
              </option>
              {blok.filter_years.map((year, index) => (
                <option key={index} value={year.name}>
                  {year.name}
                </option>
              ))}
            </select>
          </li>

          <li className="mb-4 mr-2 lg:mr-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                className="inline-block px-8 py-2 text-base rounded border hover:text-gray-900 hover:bg-gray-100"
                placeholder={blok.text_search}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-12 w-full">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles[0] && articles.map((article) => (
            <a
              href={`news/${article.slug}`}
              className="group mb-6 transition-all"
              key={article.uuid}
            >
              <div className="overflow-hidden h-52">
                <img
                  src={article.content.image.filename}
                  className="object-cover w-full h-full group-hover:scale-110 transition-all"
                  alt="Image 1"
                />
              </div>
              <div className="mb-1 mt-4 flex flex-wrap">
                {article.content.categories.map((category, index) =>
                  category.full_slug.includes("/news/") &&
                  <span
                    key={index}
                    className="whitespace-nowrap mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                  >
                    {category.content.category}
                  </span>

                )}
              </div>
              <Text styles="text-sm mb-1 text-gray-500">{DateFormatter(article.content.date)}</Text>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-all">
                {article.name}
              </h2>
              <Text styles="texl-lg mb-3 text-gray-500">{TrimText(article.content.lead)}</Text>
            </a>
          ))}
        </div>
      </div>
    </ContentWidth>
  );
}

export default AllNews;