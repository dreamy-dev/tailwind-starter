import HeroText from "@/components/sections/HeroText";

export default function InvestorHero() {
  return (
    <section>
      <HeroText
        category="Investor Relations"
        title={<>Halbjahresbericht 2023</>}
        leadText="Hier kommen Zahlen zum Zug. Erfahren Sie zeitnah und transparent alles Wissenswerte über Stadlers Businessaktivitäten."
        withCTA
        buttonText="Download"
      />
    </section>
  );
}
