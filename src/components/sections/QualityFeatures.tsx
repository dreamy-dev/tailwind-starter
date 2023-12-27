import H2 from "@/components/typography/H2";
import H4 from "@/components/typography/H4";
import Text from "../typography/Text";
import ContentWidth from "../layouts/ContentWidth";



interface Feature {
  title: string;
  text: string;
  svg: React.ReactNode; 
}

interface QualityFeaturesProps {
  features: Feature[];
  mainTitle: string;
}

const QualityFeatures: React.FC<QualityFeaturesProps> = ({ features, mainTitle }) => {
  return (
    <>
      <section className="py-24 bg-stadlergradient">
        <ContentWidth>
          <div className="col-span-12 max-w-full mx-auto">
            <H2 styles="text-white">{ mainTitle}</H2>
            <div className="mt-8 lg:mt-16">
              <div className="grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row"
                  >
                    <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0">
                      {feature.svg}
                    </div>
                    <div>
                      <H4 textColor="white">{feature.title}</H4>
                      <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                        {feature.text}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentWidth>
      </section>
    </>
  );
};

export default QualityFeatures;
