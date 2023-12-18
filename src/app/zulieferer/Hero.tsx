import HeroText from "@/components/sections/HeroText";

export default function LieferantenHero(props?: any) {
  return (
    <div className="mb-20">
      <HeroText
        withCTA
        category="Lieferanten"
        leadText="Stadler sucht Zulieferer, die mit Innovationskraft, Zuverlässigkeit und hohem Qualitätsanspruch die Schienenmobilität der Zukunft mitgestalten."
        buttonText="Login Lieferantenportal"
        title={
          <p>
            Unsere Lieferanten:
            <br />
            Ein exzellentes Netzwerk
          </p>
        }
      />
    </div>
  );
}
