type Props = {
  children?: any;
};

export default function ContentWidth({ children }: Props) {
  return (
    <div className="px-4 lg:px-20 2xl:px-0 grid grid-cols-12 gap-6 2xl:max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
}
