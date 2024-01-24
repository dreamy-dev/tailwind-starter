import ButtonPrimary from "../../components/elements/ButtonPrimary";
import H2 from "../../components/typography/H2";

export default function TeasersSolution() {
  return (
    <section className="bg-primaryTrans-50 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 mb-8 lg:mb-20 lg:gap-16 lg:grid-cols-2">
          <div className="hidden lg:block">
            <img
              src="news-1.jpg"
              className="dark:hidden object-cover object-right  h-[572px]"
              alt=""
            />
            <img
              className="hidden object-cover w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
              alt="Feature illustration"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="mt-6">
              <H2>Schienenfahrzeuge</H2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <ButtonPrimary position="left" buttonText="Mehr efahren" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div>
            <div id="deviceTabContent" className="mt-8">
              <div className="">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div>
                    <H2>Signalling</H2>
                    <p className="mt-4 text-base font-normal text-gray-800 dark:text-gray-400 sm:text-xl">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>

                  <ButtonPrimary position="left" buttonText="Mehr efahren" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="Referenzen_TSSSA_Bild-VR.jpg"
              className="dark:hidden object-cover object-left  h-[572px]"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
          <div className="hidden lg:block">
            <img
              src="news-1.jpg"
              className="dark:hidden object-cover object-right  h-[572px]"
              alt=""
            />
            <img
              className="hidden object-cover w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
              alt="Feature illustration"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="mt-6">
              <H2>Service</H2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <ButtonPrimary position="left" buttonText="Mehr efahren" />
          </div>
        </div>
      </div>
    </section>
  );
}
