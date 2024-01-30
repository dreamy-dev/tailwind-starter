import CardSimple from "../elements/CardSimple";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";

const news = [
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Ad-Hoc", "Corporate"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Corporate"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Ad-Hoc"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Ad-Hoc", "KISS"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Corporate"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Ad-Hoc", "Corporate"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Ad-Hoc"],
    link: "/newsSingle",
  },
  {
    title: "Next Generation bei Stadler",
    lead:
      "Informationsnachmittage für eine zukunftsorientierte Lehre Stadler öffnet seine Türe für interessierte Schüle",
    date: "19.01.2024",
    image: "/news-1-1.jpg",
    tags: ["Corporate", "TANGO"],
    link: "/newsSingle",
  },
];
export default function NewsSection() {
  return (
    <ContentWidth>
      <div className="col-span-12 w-full">
        {/* <div className="">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, index) => (
            <article className="max-w-xs">
              <a href={item.link}>
                <img src={item.image} className="mb-4" alt="Image 1" />
              </a>
              <div className="mb-3">
                {item.tags.map((tag, index) => (
                  <a className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0">
                    {tag}
                  </a>
                ))}
              </div>
              <Text styles="text-sm mb-1 text-gray-500 dark:text-gray-400">
                {item.date}
              </Text>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href={item.link}>{item.title}</a>
              </h2>
              <Text styles="texl-lg mb-3 text-gray-500 dark:text-gray-400">
                {item.lead}
              </Text>

              {/* <a
                href={item.link}
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4995_6662)">
                    <path
                      d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                      fill="#005893"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4995_6662">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </ContentWidth>
  );
}
