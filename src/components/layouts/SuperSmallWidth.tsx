import ContentWidth from "./ContentWidth";

type Props = {
  children?: any;
};

export default function SuperSmallWidth({ children }: Props) {
  return (
    <ContentWidth>
      <div className="col-span-8 lg:col-start-3 lg:col-span-8">{children}</div>
    </ContentWidth>
  );
}
