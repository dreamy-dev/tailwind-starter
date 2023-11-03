import H3 from "./typography/H3";
import Button from "./elements/ButtonSecondary";
export default function Video() {
  return (
    <div className=" bg-white flex flex-col pr:0 py-24 lg:flex-row items-center lg:pr-20">
      <div className="h-full w-full overflow-hidden md:left-0 md:h-full  lg:w-9/12">
        <iframe
          width="100%"
          height="540"
          src="https://www.youtube.com/embed/zuCsts82_y8"
          title="YouTube video"
        />
      </div>
      <div className="lg:w-3/12 pl-6 lg:pl-20 w-full">
        <div className="w-full md:w-1/2 mt-10 lg:w-full">
          <H3 titleH3="Karriere bei Stadler"></H3>
          <p className="mt-2 text-xl tracking-tight text-black sm:text-xl">
            Wer alles für die besten Züge der Welt macht, braucht die besten
            Talente.
          </p>
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
    </div>
  );
}
