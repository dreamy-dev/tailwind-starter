import ButtonPrimary from "../elements/ButtonPrimary";
import H2 from "../typography/H2";
import Text from "../typography/Text";
import SmallWidth from "../layouts/SmallWidth";

interface TeaserImageLeftProps {
  imageSrc?: string;
  children?: React.ReactNode;
 
}

const TeaserImageRight: React.FC<TeaserImageLeftProps> = ({
  imageSrc,
  children,

 
}) => {
  return (
    <section className="antialiased py-12">
      <SmallWidth>
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <div id="deviceTabContent" className="mt-8">
              <div className="">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {children}
                
                </div>
              </div>
            </div>
          </div>

          <img
            src={imageSrc}
            className="object-cover object-center w-full"
            alt=""
          />
        </div>
      </SmallWidth>
    </section>
  );
};

export default TeaserImageRight
