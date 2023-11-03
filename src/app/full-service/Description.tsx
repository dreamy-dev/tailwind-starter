import H2 from "@/components/typography/H2";

export default function Description() {
  return (
    <section className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full" src="/card-1.jpg" alt="full service" />
        <div className="mt-4 md:mt-0">
          <H2
            textColor="black"
            titleH2="Beschreibung der Dienstleistung und dem Nutzen für den Kunden"
            styles="font-extrabold mb-8"
          />
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <p className="font-light text-gray-500 md:text-lg">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
        </div>
      </div>
    </section>
  );
}
