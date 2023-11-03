interface H2Props {
  titleH2: string;
  textColor?: string;
  styles?: string;
}
const H2: React.FC<H2Props> = ({ titleH2, textColor, styles }) => {
  const H2Styles = `text-${textColor} text-4xl font-bold sm:text-3xl lg:text-4xl ${styles}`;
  return <h2 className={H2Styles}>{titleH2}</h2>;
};

export default H2;
