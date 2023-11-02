import ContentWidth from "./ContentWidth";

type Props = {
  children?: any;
};

export default function SmallWidth({ children }: Props) {
  return (
    <ContentWidth>
      <div className="col-start-2 col-span-10">{children}</div>
    </ContentWidth>
  );
}
