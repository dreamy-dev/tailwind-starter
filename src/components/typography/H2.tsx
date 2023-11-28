interface H2Props {
  children?: any;
  textColor?: string;
  styles?: string;
  resetStyles?: boolean;
}
const H2: React.FC<H2Props> = ({
  children,
  textColor,
  styles,
  resetStyles,
}) => {
  const defaultStyles = "";
  const H2Styles = ` ${
    resetStyles ? defaultStyles : "text-4xl font-bold pt-2 mb-8"
  } ${styles || ""}`;
  return <h2 className={H2Styles}>{children}</h2>;
};

export default H2;
