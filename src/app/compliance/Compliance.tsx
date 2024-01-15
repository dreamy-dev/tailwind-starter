import H1 from "@/components/typography/H1";
import Text from "@/components/typography/Text";
import ContentWidth from "@/components/layouts/ContentWidth";

export default function Compliance() {
  return (
    <ContentWidth>
      <div className="col-span-12 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-5 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
        <div className="col-span-3">
          <H1>Compliance</H1>
          <Text styles="text-xl mb-4">
            Der Erfolg und der gute Ruf unseres Unternehmens basieren auf dem
            Vertrauen, das Aktionäre, Mitarbeitende, beziehungsweise die mit
            ihnen in Geschäftsbeziehungen stehenden Personen.
          </Text>
          <Text styles="text-xl mb-4">
            Dazu gehört auch das Vertrauen in unser Compliance Programm.
          </Text>
          <Text styles="text-xl mb-4">
            Mit dem Stadler Compliance-Programm möchten wir vorbeugend und aktiv
            sicherstellen, dass unsere Geschäftspraktiken und diejenigen unserer
            Dienstleister stets mit den geltenden Gesetzen sowie unseren
            internen Weisungen in Einklang stehen.
          </Text>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-1 md:gap-12 md:space-y-0">
          <div>
            <img
              className="mr-4 w-auto md:h-auto"
              src="/signature-spuhler.jpg"
              alt="office image"
            />
            <Text styles="text-xl font-semibold">Peter Spuhler</Text>
            <Text styles="mb-4">Verwaltungsratspräsident</Text>
          </div>
          <div>
            <img
              className="mr-4 w-42 md:h-auto"
              src="/signature-krapf.jpg"
              alt="office image"
            />
            <Text styles="text-xl font-semibold">Maja Krapf</Text>
            <Text styles="mb-4">Chief Compliance Officer</Text>
          </div>
        </div>
      </div>
    </ContentWidth>
  );
}
