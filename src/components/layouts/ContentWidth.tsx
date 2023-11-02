type Props = {
  children?: any;
};

export default function ContentWidth({ children }: Props) {
  return <div className="mx-20 grid grid-cols-12 gap-6">{children}</div>;
}
