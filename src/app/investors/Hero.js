import HeroText from "../../components/sections/HeroText";

export default function InvestorHero() {
  return (
    <section>
      <HeroText
        title="Investor Relations"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed enim convallis, bibendum augue vel, mollis lacus. Curabitur non vulputate risus. Suspendisse tellus orci, laoreet ac venenatis vitae, lacinia rhoncus neque."
        withCTA={false}
      />
    </section>
  );
}
