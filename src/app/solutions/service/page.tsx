"use client";

import FactsAndFigures from "@/components/FactsAndFigures";
import ContentWidth from "@/components/layouts/ContentWidth";
import HeroText from "@/components/sections/HeroText";
import Link from "@/components/typography/Link";

export default function Service() {
  return (
    <>
    <section>
      <ContentWidth>
        <div className="col-span-6" style={{ height: "80px", padding: "20px" }}>
          <Link href="/solutions/service/full-service">
            <p>Full service page</p>
          </Link>
        </div>
      </ContentWidth>
    </section>
    <HeroText solution category="Service" leadText="Für Stadler endet Kundennähe nicht mit der Auslieferung der Züge. Unsere Mitarbeitenden stehen unseren Kunden als Servicepartner rund um die Uhr mit Rat und Tat zur Seite, um höchste Qualität zu garantieren. Dadurch gewährleisten wir die Zuverlässigkeit und Verfügbarkeit unserer Schienenfahrzeuge über die gesamte Lebensdauer." />
    <FactsAndFigures />
     {/* Service Teasers  */}
    </>
  );
}
