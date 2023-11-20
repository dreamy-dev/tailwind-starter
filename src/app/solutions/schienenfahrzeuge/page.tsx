"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Link from "@/components/typography/Link";
import ProductCarousel from "@/components/ProductCarousel";

export default function Schienenfahrzeuge() {
  return (
    <section>
      <ContentWidth>
        <div className="col-span-6" style={{ height: "80px", padding: "20px" }}>
          <Link href="/solutions/schienenfahrzeuge/product">
            <p>Product page</p>
          </Link>
        </div>
      </ContentWidth>
      <ProductCarousel />
    </section>
  );
}
