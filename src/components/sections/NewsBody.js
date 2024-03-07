import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";

function NewsBody({blok}) {
  console.log("block", blok)
  return (
    <section {...storyblokEditable(blok)}>
      <ContentWidth>
      <div className="col-span-12 w-full">
      <Text styles="text-md mb-4">
            Die EURO9000 ist eine interoperable Lokomotive, die speziell für den
            Einsatz auf internationalen Strecken entlang der wichtigsten
            europäischen Bahnkorridore konzipiert wurde. Mit bereits bestehenden
            Zulassungen in Deutschland, Österreich und der Schweiz hat die
            Lokomotive nun auch die Zulassung für den Betrieb in Belgien und den
            Niederlanden erhalten.
          </Text>
      </div>
    </ContentWidth>
    </section>
  );
}

export default NewsBody;
