interface H3Props {
  titleH3: string;
}

const H3: React.FC<H3Props> = ({ titleH3 }) => {
  return <h3 className="text-black text-2xl font-bold">{titleH3}</h3>;
};

export default H3;
