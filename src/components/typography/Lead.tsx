type LeadProps = {
  children: React.ReactNode;
  textSize?: string;
};

export default function Lead({ children, textSize }: LeadProps) {
  const secondaryButtonStyles = `text-black font-normal ${textSize} leading-10 py-12`;
  return <p className={secondaryButtonStyles}>{children}</p>;
}
