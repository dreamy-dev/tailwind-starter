interface H3Props {
  titleH3?: string;
  children?: string | number;
}

const H3: React.FC<H3Props> = ({ children }) => {
  return <h3 className="text-black text-2xl mb-6 font-bold">{children}</h3>;
};

export default H3;
