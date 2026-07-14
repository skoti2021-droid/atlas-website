import { Eyebrow } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/terms" }, title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Terms" }]} />
        <div className="section-head" style={{ marginTop: "1.5rem" }}>
          <Eyebrow sht="LEGAL">Terms of Use</Eyebrow>
          <h1 className="h2">Website terms</h1>
        </div>
        <div className="prose">
          <p>
            This page is a placeholder and must be replaced with reviewed terms
            of use before launch, covering acceptable use of this website,
            intellectual property in published content and machine
            specifications, and disclaimers around quotations provided through
            the site (which are indicative pending formal engineering review).
          </p>
        </div>
      </div>
    </section>
  );
}
