import QuoteForm from "@/components/QuoteForm";
import { Eyebrow } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/request-quote" },
  title: "Request a Quote — Filtration Machinery & Turnkey Lines",
  description:
    "Request an engineered quotation for cartridge filter winders, meltblown web lines, CLIMB™ carbon-infused machines, nylon lines or string wound winders. Describe your product and volumes — get a technical response.",
};

export default function QuotePage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Request a Quote" }]} />
        <div className="section-head" style={{ marginTop: "1.2rem" }}>
          <Eyebrow sht="RFQ">Request a quote</Eyebrow>
          <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
            Tell us what you need to make.
          </h1>
          <p className="lead">
            The more your enquiry says about the product — cartridge size, media
            type, micron rating, target output — the more precise the first
            engineering response will be. Every enquiry is answered by the
            technical team.
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
