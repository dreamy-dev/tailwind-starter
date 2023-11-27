interface H4Props {
  children?: string;
  textColor?: string;
  styles?: string;
  resetStyles?: boolean;
}
const H4: React.FC<H4Props> = ({
  children,
  textColor,
  styles,
  resetStyles,
}) => {
  const defaultStyles = "text-xl font-bold break-words";
  const H4Styles = resetStyles
    ? defaultStyles
    : `${defaultStyles} text-${textColor || "black"} ${styles || ""}`;
  return <h4 className={H4Styles}>{children}</h4>;
};

export default H4;
