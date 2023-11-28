type Props = {
  children?: any;
  styles?: any;
  resetStyles?: boolean;
};

export default function H1({ children, styles, resetStyles }: Props) {
  const defaultStyles = "";
  const H1Styles = `text-black font-bold pt-3 mb-12 text-5xl ${
    resetStyles ? defaultStyles : ""
  } ${styles || ""}`;
  return <h1 className={H1Styles}>{children}</h1>;
}
