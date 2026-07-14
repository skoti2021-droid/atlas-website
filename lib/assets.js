// ============================================================
// AUTHENTIC MEDIA LIBRARY
// Every URL below was verified on southerncoastalmachinery.com.
// No stock imagery. No AI-generated machinery. Per Part 5 rules.
//
// NOTE: Images currently load from the live SCM WordPress site.
// Before final launch, run scripts/fetch-media.sh locally to
// download all assets into /public/media and set LOCAL = true.
// ============================================================

const CDN = "https://southerncoastalmachinery.com/wp-content/uploads";

export const media = {
  CCFW: {
    hero: {
      src: `${CDN}/2025/12/CCFW-min.png-2-1024x768.webp`,
      alt: "CCFW continuous cartridge filter winder machine — Southern Coastal Machinery",
      caption: "CCFW Series continuous cartridge filter winder",
      quality: "high", // clean 1024x768 product photo
    },
    video: {
      src: `${CDN}/2026/01/IMG_1158.mp4`,
      title: "CCFW 40 in operation",
      caption: "CCFW 40 continuous cartridge filter winder — installed for a customer in the Middle East",
      quality: "medium", // phone-shot factory footage, orientation unknown
    },
  },
  CLIMB: {
    hero: {
      src: `${CDN}/2025/11/high-speed-filter-cartridge.jpg.webp`,
      alt: "CLIMB carbon layer infused meltblown filter cartridge",
      caption: "CLIMB™ carbon-infused meltblown cartridge",
      quality: "high", // clean product close-up
    },
  },
  WEB: {
    video: {
      src: `${CDN}/2026/01/IMG_3243.m4v`,
      title: "Meltblown web line in operation",
      caption: "SCM meltblown web machine producing nonwoven media",
      quality: "medium", // phone-shot factory footage, orientation unknown
    },
    gallery: [
      { src: `${CDN}/2021/09/LoneStar-Machine-1.jpeg`, alt: "LoneStar meltblown web machine", caption: "LoneStar meltblown line", quality: "medium" },
      { src: `${CDN}/2021/09/LoneStar-Machine-2.jpeg`, alt: "LoneStar meltblown web machine — line view", caption: "LoneStar meltblown line", quality: "medium" },
      { src: `${CDN}/2021/10/Twin-Beam-Melt-Blown-Line-Color-scaled-1.jpg`, alt: "Twin Beam dual-die meltblown line", caption: "Twin Beam meltblown line", quality: "medium" },
      { src: `${CDN}/2021/10/Twin-Beam-Melt-Blown-Line-BW-2-scaled-1.jpg`, alt: "Twin Beam meltblown line — process section", caption: "Twin Beam line — process section", quality: "medium" },
      { src: `${CDN}/2021/10/Twin-Beam-Melt-Blown-Line-BW-3-scaled-1.jpg`, alt: "Twin Beam meltblown line — winding end", caption: "Twin Beam line — winding end", quality: "medium" },
      { src: `${CDN}/2021/09/650mm-Melt-Blown-Line-Ohio-1.jpeg`, alt: "650mm meltblown line installed in Ohio", caption: "650mm line — Ohio installation", quality: "medium" },
      { src: `${CDN}/2021/09/650mm-Melt-Blown-Line-Ohio-2.jpeg`, alt: "650mm meltblown line — extrusion section", caption: "650mm line — Ohio installation", quality: "medium" },
      { src: `${CDN}/2021/09/650mm-Melt-Blown-Line-Ohio-3.jpeg`, alt: "650mm meltblown line — collector section", caption: "650mm line — Ohio installation", quality: "medium" },
      { src: `${CDN}/2021/09/78in-w-Rotating-Collector-Table-1.jpeg`, alt: "78 inch rotating collector table", caption: "78\" rotating collector table", quality: "medium" },
      { src: `${CDN}/2021/09/78in-w-Rotating-Collector-Table-2.jpeg`, alt: "78 inch rotating collector table — side view", caption: "78\" rotating collector table", quality: "medium" },
      { src: `${CDN}/2021/09/Slitter-LoneStar-4-Knives-1.jpeg`, alt: "Four-knife slitter for meltblown web", caption: "4-knife slitting system", quality: "medium" },
      { src: `${CDN}/2021/09/Slitter-LoneStar-4-Knives-3.jpeg`, alt: "Slitter with LoneStar line, four knives", caption: "4-knife slitting system", quality: "medium" },
      { src: `${CDN}/2021/09/Melt-Blown-Machine-1.jpeg`, alt: "Meltblown web machine", caption: "Meltblown web machine", quality: "medium" },
      { src: `${CDN}/2021/09/Melt-Blown-Machine-3.jpeg`, alt: "Meltblown web machine — die section", caption: "Meltblown web machine", quality: "medium" },
      { src: `${CDN}/2026/01/Dual-Drum-Photo.jpeg`, alt: "Dual drum meltblown collector", caption: "Dual-drum collector", quality: "medium" },
    ],
    products: [
      { src: `${CDN}/2021/10/Face-mask-scaled.jpeg`, alt: "Face mask produced with SCM meltblown media", caption: "Mask media application", quality: "medium" },
      { src: `${CDN}/2021/10/Face-Wipes-scaled.jpeg`, alt: "Wipes produced from meltblown nonwoven", caption: "Wipes application", quality: "medium" },
    ],
  },
  // BCFW / NYLON / SWFW: hero images exist on the legacy sites but
  // could not be verified by URL from here — run scripts/fetch-media.sh
  // (or send the URLs) and add them in this file. Do NOT substitute
  // stock or AI imagery.
};

export function machineMedia(code) {
  return media[code] || null;
}
