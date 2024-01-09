type LeadProps = {
  children: React.ReactNode;
};

export default function Lead({ children }: LeadProps) {
  return (
    <p lang="de" className="text-black font-normal text-3xl leading-10 mb-12">
      {children}
    </p>
  );
}
