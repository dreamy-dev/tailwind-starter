type TextProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function Text({ children, styles }: TextProps) {
  return (
    <>
      <p className={`font-normal ${styles ? styles : "text-xl"}`}>{children}</p>
    </>
  );
}
