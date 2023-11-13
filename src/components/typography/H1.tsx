type Props = {
  children?: any;
  styles?: any;
};

export default function H1({ children, styles }: Props) {
  const H1Styles = `text-black font-bold pt-3 ${styles ? styles : "text-5xl"}`;
  return <h1 className={H1Styles}>{children}</h1>;
}
