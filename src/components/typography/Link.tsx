type LinkProps = {
  children: React.ReactNode;
  styles?: string;
  href?: string;
};

export default function Link({ children, styles, href }: LinkProps) {
  return (
    <>
      <a
        href={href ?? "/#"}
        className={`inline-flex items-center font-medium underline underline-offset-4 text-gray-900 hover:no-underline ${styles}`}
      >
        {children}
      </a>
    </>
  );
}
