import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

interface H2Props {
  titleH2: string;
  textColor: string;
}
const H2: React.FC<H2Props> = ({ titleH2, textColor }) => {
  const H2Styles = `text-${textColor} text-4xl font-bold sm:text-3xl lg:text-4xl break-words`;
  return <h2 className={H2Styles}>{titleH2}</h2>;
};

export default H2;
