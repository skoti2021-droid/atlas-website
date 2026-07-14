import { Eyebrow } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/cookies" }, title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Cookies" }]} />
        <div className="section-head" style={{ marginTop: "1.5rem" }}>
          <Eyebrow sht="LEGAL">Cookie Policy</Eyebrow>
          <h1 className="h2">How this site uses cookies</h1>
        </div>
        <div className="prose">
          <p>
            This page is a placeholder. The current build sets no analytics or
            marketing cookies. Update this policy when analytics (e.g. GA4) or
            other cookie-setting tools are added, per the pre-launch checklist
            in the project README.
          </p>
        </div>
      </div>
    </section>
  );
}
