type Props = {
  children?: any;
};

export default function H1({ children }: Props) {
  return <h1 className="text-black text-5xl font-bold pt-3">{children}</h1>;
}
