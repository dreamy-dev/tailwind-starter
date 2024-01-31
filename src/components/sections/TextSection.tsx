import SmallWidth from "@/components/layouts/SmallWidth";
import Text from "../typography/Text";

export default function TextSection(props?: any, children?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 pb-5 lg:pb-24">
      <SmallWidth>
        <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </SmallWidth>
    </section>
  );
}
