import ContentWidth from "./ContentWidth";

type Props = {
  children?: any;
};

export default function SmallWidth({ children }: Props) {
  return (
    <ContentWidth>
      <div className="col-span-12 lg:col-start-2 lg:col-span-10">{children}</div>
    </ContentWidth>
  );
}
