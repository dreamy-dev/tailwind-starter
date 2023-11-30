type Props = {
  children?: any;
};

export default function ContentWidth({ children }: Props) {
  return (
    <div className="mx-20 grid grid-cols-12 gap-6 2xl:max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
}
