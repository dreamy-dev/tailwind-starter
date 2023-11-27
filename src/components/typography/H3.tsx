interface H3Props {
  children?: string | number;
  styles?: string;
  resetStyles?: boolean;
}

const H3: React.FC<H3Props> = ({ styles, children, resetStyles }) => {
  const defaultStyles = "text-2xl mb-6 font-bold";
  const H3Styles = resetStyles
    ? defaultStyles
    : `${defaultStyles} ${styles || ""}`;
  return <h3 className={H3Styles}>{children}</h3>;
};

export default H3;
