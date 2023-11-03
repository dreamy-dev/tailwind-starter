interface H4Props {
  titleH4: string;
  textColor: string;
}
const H4: React.FC<H4Props> = ({ titleH4, textColor }) => {
  const H4Styles = `text-${textColor} text-xl font-bold break-words`;
  return <h4 className={H4Styles}>{titleH4}</h4>;
};

export default H4;
