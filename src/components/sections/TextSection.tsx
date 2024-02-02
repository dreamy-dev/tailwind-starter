import SmallWidth from "@/components/layouts/SmallWidth";
import Text from "../typography/Text";



interface TextSectionProps {
  text?: string;
  children?: React.ReactNode;

}

export default function TextSection({ text, ...props }: TextSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900 pb-5 lg:pb-24">
      <SmallWidth>
      
        <Text>
          {text || "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "}
        </Text>
      </SmallWidth>
    </section>
  );
}
