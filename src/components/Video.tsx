import H2 from "./typography/H2";
import Button from "./elements/ButtonSecondary";
import Text from "./typography/Text";
export default function Video() {
  return (
    <div className=" bg-white flex flex-col py-24 lg:flex-row justify-between items-center">
      <div className="max-width: 945px; max-height: 540px; overflow: hidden;">
        <video
          className="width: 100%; height: 100%; object-fit: cover;"
          controls
          src={"/MovieStadler.mp4"}
        />
      </div>
      <div className="lg:px-20 ">
        <div className="">
          <H2 titleH2="Karriere bei Stadler"></H2>

          <Text styles="my-6">
            Wer alles für die besten Züge der Welt macht, braucht die besten
            Talente.
          </Text>
        </div>

        <div className="mt-8">
          <Button
            backgroundColorClass="bg-transparent"
            textColorClass="text-primary"
            borderColorClass="border-primary"
            position="left"
          >
            Jetzt bewerben
          </Button>
        </div>
      </div>
    </div>
  );
}
