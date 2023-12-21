import H2 from "../../components/typography/H2";
import H3 from "../../components/typography/H3";
import Text from "../../components/typography/Text";
import ButtonPrimary from "../../components/elements/ButtonPrimary";
import ContentWidth from "../../components/layouts/ContentWidth";

export default function CooperationBecome() {
  return (
    <>
      <ContentWidth>
        <div className="col-span-12 py-8 mx-auto sm:py-16 lg:py-24">
          <div className="text-left">
            <H2>Sind sie bereits Zulieferer von Stadler</H2>
            <Text styles="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Vestibulum et nibh vitae purus auctor facilisis vel quis elit.
              Praesent turpis elit, vehicula ut cursus at, consectetur non
              tortor. Nullam fringilla vel est vitae tincidunt. Praesent turpis
              elit, vehicula ut cursus at, consectetur non tortor.
            </Text>
          </div>
          <div className="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primaryTrans-100 dark:bg-primary-900">
                <svg
                  className="mx-auto w-16 h-16 text-primary dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold dark:text-white">
                Zeitfensterbuchung
              </h3>
              <Text styles="mb-4 text-gray-500">
                Wenn Sie Waren an den Standorten der Stadler Bussnang AG
                anliefern oder abholen sollen, fragen Sie hier ein Zeitfenster
                an. Eine Anleitung dafür befindet sich unter «Allgemeine
                Downloads».
              </Text>
              <ButtonPrimary position="left" buttonText="Mehr anzeigen" />
            </div>
            <div>
              <div className="inline-flex justify-center items-center mb-6 w-24 h-24 bg-primaryTrans-100 rounded-lg dark:bg-purple-900">
                <svg
                  className="mx-auto w-16 h-16 text-primary dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold dark:text-white">
                Transportanmeldung
              </h3>
              <Text styles="mb-4 text-gray-500 dark:text-gray-400">
                Wenn Sie auf Ihrer Bestellung die Aufforderung zur
                Transportanmeldung mit unserem Transport-Management-System
                haben, klicken Sie bitte hier.
              </Text>
              <ButtonPrimary position="left" buttonText="Mehr anzeigen" />
            </div>
          </div>
        </div>
      </ContentWidth>
      <ContentWidth>
        <div className="w-full col-span-12 py-8 mx-auto lg:py-16">
          <div className="text-left">
            <H3>Anlieferadressen der Stadler Bussnang AG</H3>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Stadler Bussnang AG
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Ernst-Stadler-Strasse 4
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-9565 Bussnang
              </Text>
            </div>
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Zentrallager
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Fohlenweide 3/5
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-8570 Weinfelden
              </Text>
            </div>
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Alu-Lager Steinach
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Schöntalstrasse 10
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-9323 Steinach
              </Text>
            </div>
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Lager Sulgen
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Bühlstrasse 73
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-8583 Sulgen
              </Text>
            </div>
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                c/o Schönholzer Transport AG
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Amlikonerstrasse 1
              </Text>

              <Text styles="text-base font-normal text-gray-500">
                CH-8560 Märstetten
              </Text>
            </div>
          </div>
          <div className="text-left">
            <H3>Anlieferadressen der Stadler Rheintal AG</H3>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Stadler Rheintal AG
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Neudorfstrasse 8
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-9430 St. Margrethen
              </Text>
            </div>
            <div className="w-full items-center p-8 bg-gray-50 shadow">
              <Text styles="text-base font-semibold text-gray-500">
                Stadler Rheintal AG
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                Industrie- und Gewerbepark
              </Text>
              <Text styles="text-base font-normal text-gray-500">
                CH-9423 Altenrhein
              </Text>
            </div>
          </div>
          <div className="text-left mb-6 lg:mb-16 ">
            <H3>Anlieferadresse Stadler Service AG</H3>
            <Text styles="text-base font-semibold text-gray-500">
              Stadler Service AG
            </Text>
            <Text styles="text-base font-normal text-gray-500">
              Fohlenweide 11
            </Text>
            <Text styles="text-base font-normal text-gray-500">
              CH-8570 Weinfelden
            </Text>
          </div>
          <div className="text-left mb-6 lg:mb-16 ">
            <H3>Zeiten für die Anlieferung Bussnang und Service:</H3>
            <Text styles="text-base font-normal text-gray-500">
              Montag bis Donnerstag 07:00 – 09:00 h, 09:15 – 12:00 h, 13:00 –
              16:00 h
            </Text>
            <Text styles="text-base font-normal text-gray-500">
              Freitag 07:00 – 09:00 h, 09:15 – 12:00 h, 13:00 – 14:00 h
            </Text>
          </div>
          <div className="text-left mb-6 lg:mb-16 ">
            <H3>Zeiten für die Anlieferung St. Margrethen und Altenrhein:</H3>
            <Text styles="text-base font-normal text-gray-500">
              Montag bis Freitag 07:00 – 12:00 h, 13:00 – 16:00 h
            </Text>
          </div>
        </div>
      </ContentWidth>
    </>
  );
}
