interface H3Props {
  children?: any;
  styles?: string;
  resetStyles?: boolean;
  onClick?: () => void;
}

const H3: React.FC<H3Props> = ({ styles, children, resetStyles, onClick }) => {
 
  const defaultStyles = "text-2xl mb-6 font-bold";
  const H3Styles = resetStyles
    ? defaultStyles
    : `${defaultStyles} ${styles || ""}`;
  return (
    <h3 className={H3Styles} onClick={onClick}>
      {children}
    </h3>
  );
};

export default H3;
