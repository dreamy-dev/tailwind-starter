import H2 from "../../components/typography/H2";
import ContentWidth from "../../components/layouts/ContentWidth";
import ButtonPrimary from "../../components/elements/ButtonPrimary";

export default function CooperationBecome() {
  return (
    <>
      <ContentWidth>
        <div className="py-8  mx-auto col-span-12 lg:py-16">
          <div className=" sm:text-lg dark:text-gray-400">
            <H2>First Steps</H2>
            <p className="mb-4 font-light text-gray-500">
              Proin in ex dapibus, condimentum metus vel, sodales quam. Donec
              scelerisque mi lacinia volutpat hendrerit. Donec posuere
              ullamcorper lorem a volutpat. Mauris sit amet justo auctor dolor
              ornare condimentum. Etiam eu faucibus neque, a congue elit. Nam
              dolor nibh, porttitor eu pellentesque sit amet, volutpat id augue.
            </p>
            <p className="mb-4 font-medium text-gray-500">
              Vestibulum et nibh vitae purus auctor facilisis vel quis elit.
              Praesent turpis elit, vehicula ut cursus at, consectetur non
              tortor. Nullam fringilla vel est vitae tincidunt.
            </p>

            <ButtonPrimary position="left" buttonText="Mehr anzeigen" />
          </div>
        </div>
      </ContentWidth>
      <ContentWidth>
        <div className="gap-8 py-8 mx-auto col-span-12 lg:py-16 xl:grid">
          <div className="col-span-12">
            <H2>Registration details</H2>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Mauris semper eros sem, eu interdum tortor fermentum quis. Mauris
              sed laoreet felis. Suspendisse quis erat varius, vulputate enim
              ac, lacinia tellus. Nam maximus, urna quis sollicitudin blandit,
              tellus diam finibus erat, sed vulputate tortor nisi ac tortor.
              Curabitur tristique dui a velit pellentesque posuere.
            </p>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Nullam ac augue dui. In hac habitasse platea dictumst. Curabitur
              vel est massa. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Quisque auctor nec est
              quis aliquet.
            </p>
            <div className="gap-16 items-start sm:flex">
              <div className="w-1/2 mb-8 text-gray-500 sm:mb-0 dark:text-gray-400">
                <svg
                  className="mb-3 w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Registration
                </h2>
                <p className="mb-4 font-light">
                  Phasellus rutrum tempor commodo. Ut pharetra ultrices quam,
                  vel suscipit lorem molestie vitae. Vestibulum lobortis, libero
                  vel interdum facilisis, augue lacus facilisis urna, at
                  vulputate purus felis sed lacus. Maecenas nec pretium lacus.
                </p>
              </div>
              <div className="w-1/2 text-gray-500 dark:text-gray-400">
                <svg
                  className="mb-3 w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Confirmation
                </h2>
                <p className="mb-4 font-light">
                  Nullam in est rutrum, efficitur libero a, porttitor odio.
                  Curabitur convallis eros sed consequat condimentum. Vivamus
                  blandit vel libero nec lacinia. Proin vehicula purus pulvinar
                  luctus molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
      <ContentWidth>
        <div className="col-span-12 py-8 mx-auto lg:py-16">
          <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-12 text-center sm:mb-6 lg:text-left lg:mb-0">
              <H2>How to become a supplier</H2>
              <p className="mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                justo tellus, faucibus ac diam viverra, volutpat dictum ante.
                Duis mollis turpis ligula. Suspendisse sagittis eleifend
                interdum. Nunc pharetra nisl nec tortor mollis tincidunt.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="flex justify-center">
              <svg
                className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                  Step 1
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Host code that you don't want to share with the world in
                  private.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                  Step 2
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Host code that you don't want to share with the world in
                  private.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                  Step 3
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Host code that you don't want to share with the world in
                  private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </>
  );
}
