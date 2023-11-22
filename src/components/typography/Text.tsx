type TextProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function Text({ children, styles }: TextProps) {
  return (
    <>
      <p
        className={`text-black font-normal mb-8 ${styles ? styles : "text-xl"}`}
      >
        {children}
      </p>
    </>
  );
}
