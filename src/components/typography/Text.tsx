type TextProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function Text({ children, styles }: TextProps) {
  return (
    <>
      <p className={`text-xl text-black font-normal ${styles}`}>{children}</p>
    </>
  );
}
