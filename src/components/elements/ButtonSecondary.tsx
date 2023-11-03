type ButtonProps = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  children: React.ReactNode;
};

export default function Button({
  backgroundColor,
  textColor,
  borderColor,
  children,
}: ButtonProps) {
  const secondaryButtonStyles = `bg-${backgroundColor} border-2 border-${borderColor} text-${textColor} text-sm px-2.5 py-2 hover:primary-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded`;
  return <button className={secondaryButtonStyles}>{children}</button>;
}
