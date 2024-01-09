"use client";

import Button from "@/components/elements/ButtonSecondary";
import ContentWidth from "@/components/layouts/ContentWidth";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";

interface ServiceItem {
  label?: string;
  description?: string;
  img?: string;
  href?: string;
}

interface ServiceTeasersProps {
  services: ServiceItem[];
  mainTitle?: string;
  text?: string;
}

const ServiceTeasers: React.FC<ServiceTeasersProps> = ({ services, mainTitle, text }) => {
 

  return (
    <section className="bg-white dark:bg-gray-900 antialiased my-20">
      <ContentWidth>
        <div className="col-span-12">
          <H2>{mainTitle }</H2>
          <Text>{text}
           
          </Text>
        </div>
      </ContentWidth>
      <ContentWidth>
        {services.map((item) => (
          <div
            className="col-span-4 max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.label}
          >
            <a href={item.href}>
              <img className="w-24 pl-5 pt-5" src={item.img} alt="" />
            </a>
            <div className="p-5">
              <a href={item.href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.label}
                </h5>
                <p>{item.description}</p>
              </a>
            </div>
          </div>
        ))}
      </ContentWidth>
    </section>
  );
};

export default ServiceTeasers;
