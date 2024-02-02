import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import SmallWidth from "../layouts/SmallWidth";

interface MapProps {
  title?: string;
  props?: any;
}

const MapTextTitle: React.FC<MapProps> = (props, title) => {
  return (
    <section className="bg-white  dark:bg-gray-900 ">
      <SmallWidth>
        <div className="max-w-4xl mx-auto">
          <H2 styles="text-center mb-2 text-4xl font-bold " resetStyles={true}>
            {title}
          </H2>
        </div>
      </SmallWidth>
    </section>
  );
}

export default MapTextTitle; 
