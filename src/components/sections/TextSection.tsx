import SmallWidth from "@/components/layouts/SmallWidth";
import Text from "../typography/Text";

export default function TextSection(props?: any, children?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <SmallWidth>
        <Text>{children}</Text>
      </SmallWidth>
    </section>
  );
}
