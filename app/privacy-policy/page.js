import { site } from "@/lib/data";
import { Eyebrow } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/privacy-policy" }, title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="section-head" style={{ marginTop: "1.5rem" }}>
          <Eyebrow sht="LEGAL">Privacy Policy</Eyebrow>
          <h1 className="h2">How we handle your information</h1>
        </div>
        <div className="prose">
          <p>
            This page is a placeholder and must be replaced with a legal privacy
            policy reviewed by counsel before launch. At minimum it should cover:
            what data the quote and contact forms collect, how it is stored and
            used, third-party services (analytics, email), data retention, and
            visitor rights under applicable law (e.g. GDPR, CCPA depending on
            markets served).
          </p>
          <p>
            Contact {site.email} with any privacy questions in the meantime.
          </p>
        </div>
      </div>
    </section>
  );
}
