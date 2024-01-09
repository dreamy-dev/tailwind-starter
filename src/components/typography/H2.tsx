interface H2Props {
  children?: any;
  styles?: string;
  resetStyles?: boolean;
}
const H2: React.FC<H2Props> = ({ children, styles, resetStyles }) => {
  const defaultStyles = "";
  const H2Styles = ` ${
    resetStyles ? defaultStyles : "text-4xl font-bold mb-8"
  } ${styles || ""}`;
  return (
    <h2 lang="de" className={H2Styles}>
      {children}
    </h2>
  );
};

export default H2;
