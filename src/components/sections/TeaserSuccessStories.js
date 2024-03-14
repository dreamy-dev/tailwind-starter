import SmallWidth from "../layouts/SmallWidth";
import H2 from "../typography/H2";
import H4 from "../typography/H4";
import Text from "../typography/Text";

const TeaserSuccessStories = ({blok}) => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <SmallWidth>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <H2>{blok?.title}</H2>
            <Text>{blok?.text}</Text>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-3">


          {blok?.employee_items.map((item) => (
            <a href={item.link.url} className="group relative overflow-hidden">
            <img
              className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
              src={item.image.filename}
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center text-white">
                <H4>{item?.name}</H4>
                <p className="text-base font-medium text-gray-300">
                  30 Jahre bei Stadler
                </p>
              </div>
            </div>
          </a>
          ))}
          </div>
        </div>
      </SmallWidth>
    </section>
  );
}

export default TeaserSuccessStories;
