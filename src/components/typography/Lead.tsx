type LeadProps = {
  children: React.ReactNode;
};

export default function Lead({ children }: LeadProps) {
  return (
    <p className="text-black font-normal text-3xl leading-10 py-12">
      {children}
    </p>
  );
}
