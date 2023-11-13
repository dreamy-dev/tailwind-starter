"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Link from "@/components/typography/Link";

export default function Service() {
  return (
    <section>
      <ContentWidth>
        <div className="col-span-6" style={{ height: "80px", padding: "20px" }}>
          <Link href="/solutions/service/full-service">
            <p>Full service page</p>
          </Link>
        </div>
      </ContentWidth>
    </section>
  );
}
