import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";



const AdvantageItemComponent = ({
  icon,
  title,
  text,
}) => (
  <div>
    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primaryTrans-100 lg:h-12 lg:w-12 dark:bg-primary-900">
      {icon}
    </div>
    <H4>{title}</H4>
    <p className="text-gray-500 dark:text-gray-400">{text}</p>
  </div>
);

const Advantages = ({ items }) => (
  <section className="bg-gray-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <H2>Die Vorteile auf einen Blick</H2>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {items.map((item, index) => (
          <AdvantageItemComponent key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;