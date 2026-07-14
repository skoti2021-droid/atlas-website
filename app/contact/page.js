import { site } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact — Talk to the Engineering Team",
  description:
    "Contact Southern Coastal Machinery / PMI America in Hoschton, Georgia, USA. Phone, email and address for machinery enquiries, service and support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="CON">Contact</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Talk to engineering.
            </h1>
            <p className="lead">
              Machinery enquiries, installed-line support, spare parts, or a
              process question — reach the team directly.
            </p>
          </div>
          <div className="grid c3">
            <div className="card">
              <span className="code">TEL</span>
              <span className="h3">Phone</span>
              <p>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} style={{ textDecoration: "none", fontWeight: 600 }}>
                  {site.phone}
                </a>
              </p>
            </div>
            <div className="card">
              <span className="code">EML</span>
              <span className="h3">Email</span>
              <p>
                <a href={`mailto:${site.email}`} style={{ textDecoration: "none", fontWeight: 600 }}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="card">
              <span className="code">LOC</span>
              <span className="h3">Works &amp; office</span>
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
                <br />
                {site.address.country}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to specify a machine?"
        text="The quote form gives engineering everything needed for a precise first response."
      />
    </>
  );
}
