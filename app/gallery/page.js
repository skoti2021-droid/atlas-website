import { machines } from "@/lib/data";
import { machineMedia } from "@/lib/assets";
import { Eyebrow, CtaBand, MediaHero, MachineVideo, Gallery as GalleryGrid } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/gallery" },
  title: "Gallery — Authentic Machine Photography & Video",
  description:
    "Authentic photography and video from installed PMI America / Southern Coastal Machinery production lines — no stock imagery, every photo and video verified from real machines.",
};

export default function GalleryPage() {
  const sections = machines
    .map((m) => ({ m, mm: machineMedia(m.code) }))
    .filter(({ mm }) => mm && (mm.hero || mm.video || mm.gallery || mm.products));

  const totalPhotos = sections.reduce(
    (n, { mm }) => n + (mm.hero ? 1 : 0) + (mm.gallery?.length || 0) + (mm.products?.length || 0),
    0
  );
  const totalVideos = sections.reduce((n, { mm }) => n + (mm.video ? 1 : 0), 0);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
      </div>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="MEDIA">Authentic media</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
              Gallery
            </h1>
            <p className="lead">
              Every photo and video below is authentic — shot on installed
              production lines. No stock photography, no AI-generated
              machinery, anywhere on this site.
            </p>
          </div>
          <div className="chip-row">
            <span className="chip">{totalPhotos} photos</span>
            <span className="chip">{totalVideos} videos</span>
            <span className="chip">{sections.length} of {machines.length} machines documented</span>
          </div>
        </div>
      </section>

      {sections.map(({ m, mm }, i) => (
        <section className={`section ${i % 2 === 1 ? "alt" : ""}`} key={m.code}>
          <div className="wrap">
            <div className="section-head">
              <Eyebrow sht={m.sheet}>{m.series}</Eyebrow>
              <h2 className="h2">{m.name}</h2>
            </div>
            <div style={{ display: "grid", gap: "2rem" }}>
              {mm.hero && <MediaHero img={mm.hero} />}
              {mm.video && <MachineVideo video={mm.video} />}
              <GalleryGrid images={mm.gallery} label={mm.gallery ? "Installed machines & equipment" : undefined} />
              <GalleryGrid images={mm.products} label={mm.products ? "Products made on this platform" : undefined} />
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap">
          <div className="card" style={{ maxWidth: "40rem" }}>
            <span className="code">STILL BUILDING</span>
            <span className="h3">BCFW, Nylon &amp; String Wound</span>
            <p>
              Authentic photography for these three platforms hasn&rsquo;t been
              verified yet. When available, it will appear here — never
              substituted with stock or generated imagery.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see a specific machine in action?"
        text="Ask engineering — a video call or site visit can cover what photos can't."
      />
    </>
  );
}
