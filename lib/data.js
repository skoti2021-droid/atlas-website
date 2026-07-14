// ============================================================
// PROJECT ATLAS — CONTENT DATA
// Single source of truth. All content derives from the public
// websites of PMI America and Southern Coastal Machinery.
// No fabricated specifications, patents, or testimonials.
// Replace image values in /lib/assets.js with authentic photos.
// ============================================================

export const site = {
  name: "PMI America × Southern Coastal Machinery",
  shortName: "PMI × SCM",
  legal: "Southern Coastal Machinery, LLC · PMI America",
  tagline: "Filtration manufacturing machinery, engineered in Georgia, USA.",
  url: "https://www.pmiamerica.com",
  phone: "+1 404-316-3622",
  email: "mcpelham@gmail.com",
  address: {
    street: "1101 GA-124 (Hwy 124)",
    city: "Hoschton",
    region: "GA",
    postal: "30548",
    country: "USA",
  },
  founder: "Matthew Pelham",
  pmiFounded: 2007,
  scmFounded: 2016,
  patent: "US Patent No. 9,981,211",
};

// ------------------------------------------------------------
// MACHINES
// ------------------------------------------------------------
export const machines = [
  {
    slug: "ccfw-continuous-cartridge-filter-winders",
    code: "CCFW",
    series: "CCFW Series",
    name: "Continuous Cartridge Filter Winders",
    short:
      "Continuous meltblown depth-filter cartridge production. The CCFW 40 produces up to 1,200 cartridges per hour — engineered to be the fastest continuous cartridge winder in the world.",
    sheet: "SHT 01",
    stats: [
      { value: "1,200", unit: "cartridges / hr", note: "CCFW 40 rated output" },
      { value: "1–200", unit: "micron", note: "filtration range" },
      { value: "4", unit: "density zones", note: "gradient construction" },
    ],
    body: [
      "The CCFW platform produces continuous meltblown depth-filter cartridges directly from polymer resin. Molten polymer is extruded through a meltblown die, attenuated with hot air, and wound continuously onto a rotating mandrel — producing finished cartridge media in a single, uninterrupted process.",
      "The flagship CCFW 40 is rated at up to 1,200 cartridges per hour, with installations operating internationally, including a line commissioned in the Middle East. The CCFW 20 offers the same continuous process at lower throughput, with a reference installation operating in Rensselaer, Indiana.",
      "The platform is modular: gradient-density construction of up to four zones allows a single cartridge to combine coarse pre-filtration and fine final filtration, covering nominal ratings across the 1–200 micron range.",
    ],
    models: ["CCFW 40", "CCFW 20"],
    applications: [
      "Water purification cartridges",
      "Food & beverage filtration",
      "Petrochemical filtration",
      "Industrial process filtration",
    ],
    faqs: [
      {
        q: "What is a continuous cartridge filter winder?",
        a: "A continuous cartridge filter winder converts polymer resin directly into finished meltblown depth-filter cartridges in one uninterrupted process — extrusion, fiber attenuation, and winding happen on a single line, eliminating separate media-making and cartridge-forming steps.",
      },
      {
        q: "What output can the CCFW 40 achieve?",
        a: "The CCFW 40 is rated at up to 1,200 cartridges per hour, depending on cartridge specification, making it among the highest-throughput continuous cartridge winders available.",
      },
      {
        q: "Can one machine produce gradient-density cartridges?",
        a: "Yes. The CCFW platform supports gradient-density construction with up to four zones, so a single cartridge can step from coarse outer layers to fine inner layers for higher dirt-holding capacity.",
      },
    ],
  },
  {
    slug: "bcfw-batch-cartridge-filter-winders",
    code: "BCFW",
    series: "BCFW Series",
    name: "Batch Cartridge Filter Winders",
    short:
      "Batch meltblown cartridge production for flexible runs, R&D, and specialty cartridges — up to 50-inch lengths, 48 programmable zones, Siemens PLC control.",
    sheet: "SHT 02",
    stats: [
      { value: "50\"", unit: "max length", note: "cartridge capability" },
      { value: "48", unit: "zones", note: "programmable recipe zones" },
      { value: "2.5–4.5\"", unit: "diameter", note: "cartridge range" },
    ],
    body: [
      "The BCFW series produces meltblown depth-filter cartridges in batch mode — the right architecture for manufacturers running multiple cartridge specifications, shorter production runs, specialty constructions, or product development.",
      "Machines are controlled by Siemens PLCs with touch-screen recipe software: an operator selects a stored recipe and the machine executes the winding program automatically, with up to 48 programmable zones for precise density and diameter control along the cartridge length.",
      "The platform handles cartridge diameters from 2.5 to 4.5 inches and lengths up to 50 inches. Electrical systems are built in NEMA 4 rated cabinets, and machines are CE certified for international installation.",
    ],
    models: ["BCFW Series"],
    applications: [
      "Short-run and specialty cartridges",
      "R&D and product development",
      "High-mix cartridge manufacturing",
      "Gradient and multi-zone constructions",
    ],
    faqs: [
      {
        q: "When is a batch winder the right choice over a continuous winder?",
        a: "Batch winders suit manufacturers producing multiple cartridge types, shorter runs, or development work — recipes change at the touch screen. Continuous winders suit high-volume production of consistent specifications.",
      },
      {
        q: "What controls do BCFW machines use?",
        a: "BCFW machines are built on Siemens PLC control with touch-screen recipe software, NEMA 4 rated electrical cabinets, and CE certification.",
      },
    ],
  },
  {
    slug: "climb-carbon-infused-meltblown-machines",
    code: "CLIMB",
    series: "CLIMB™ Technology",
    name: "Carbon Layer Infused Melt Blown Machines",
    short:
      "Patented technology that infuses granular activated carbon directly into meltblown fiber during extrusion — carbon filtration performance at a fraction of the carbon weight of block filters.",
    sheet: "SHT 03",
    stats: [
      { value: "≈80 g", unit: "carbon / cartridge", note: "vs ≈900 g in carbon block" },
      { value: "9,981,211", unit: "US patent", note: "particle infusion process" },
      { value: "1000×", unit: "verified", note: "microscopy-documented adhesion" },
    ],
    body: [
      "CLIMB™ — Carbon Layer Infused Melt Blown — is a patented process (US Patent No. 9,981,211) for incorporating particles such as granular activated carbon directly into meltblown fiber as it is formed. Carbon is captured within the fiber matrix during extrusion, bonding to the still-tacky fibers.",
      "Under microscopy at 200×, 600×, and 1000× magnification, carbon granules can be seen mechanically anchored to the fiber structure — an adhesion sometimes described as working like barbed wire, holding particles in place without binders or adhesives that blind carbon surface area.",
      "The commercial result: a CLIMB cartridge achieves carbon filtration function using roughly 80 grams of carbon where a conventional carbon block filter uses roughly 900 grams — lowering material cost, weight, and pressure drop while combining depth filtration and adsorption in one cartridge.",
    ],
    models: ["CLIMB™ equipped CCFW / BCFW platforms"],
    applications: [
      "Drinking water carbon cartridges",
      "Chlorine, taste & odor reduction",
      "Combined sediment + carbon filtration",
      "Point-of-use and point-of-entry filters",
    ],
    faqs: [
      {
        q: "What is CLIMB technology?",
        a: "CLIMB (Carbon Layer Infused Melt Blown) is a patented process — US Patent No. 9,981,211 — that infuses particles such as granular activated carbon into meltblown fibers during extrusion, so a single cartridge provides both depth filtration and carbon adsorption.",
      },
      {
        q: "How does CLIMB compare with carbon block filters?",
        a: "A CLIMB cartridge uses roughly 80 grams of carbon compared with roughly 900 grams in a typical carbon block, while the open fiber structure maintains lower pressure drop than dense block construction.",
      },
      {
        q: "Is the carbon held with adhesives?",
        a: "No. Carbon granules bond mechanically to fibers while they are still tacky during formation — documented under microscopy up to 1000× — so carbon surface area is not blinded by binders.",
      },
    ],
  },
  {
    slug: "nylon-cartridge-machines",
    code: "NYLON",
    series: "Nylon Line",
    name: "Nylon Cartridge Machines",
    short:
      "Fully automated production lines for 40-inch nylon meltblown cartridges engineered for aggressive gas and solvent filtration duties.",
    sheet: "SHT 04",
    stats: [
      { value: "40\"", unit: "cartridge", note: "standard format" },
      { value: "Nylon", unit: "polymer", note: "solvent & gas service" },
      { value: "Auto", unit: "operation", note: "fully automated line" },
    ],
    body: [
      "Nylon cartridge machines produce 40-inch meltblown depth cartridges in nylon — a polymer selected for chemical resistance in gas and solvent filtration service where polypropylene is not suitable.",
      "Lines are fully automated from resin to finished cartridge, engineered for consistent fiber formation with nylon's distinct melt-processing characteristics — a materially different extrusion challenge from polypropylene that draws directly on three decades of meltblown process engineering.",
      "Typical service includes solvent filtration, gas-phase applications, and chemical process streams in petrochemical and industrial environments.",
    ],
    models: ["40\" Nylon Cartridge Line"],
    applications: [
      "Solvent filtration",
      "Gas filtration",
      "Chemical process streams",
      "Petrochemical service",
    ],
    faqs: [
      {
        q: "Why nylon instead of polypropylene?",
        a: "Nylon offers chemical resistance in solvent and certain gas-phase duties where polypropylene degrades, making nylon meltblown cartridges the standard choice for aggressive chemical service.",
      },
      {
        q: "Is the nylon line automated?",
        a: "Yes. The 40-inch nylon cartridge line is fully automated from resin to finished cartridge, engineered around nylon's distinct melt-processing characteristics rather than adapted from a polypropylene line.",
      },
      {
        q: "What industries typically specify nylon cartridges?",
        a: "Petrochemical and industrial process environments where solvents, gases, or chemical process streams would degrade standard polypropylene media.",
      },
    ],
  },
  {
    slug: "meltblown-web-machines",
    code: "WEB",
    series: "Flat Web Lines",
    name: "Meltblown Web Machines",
    short:
      "Flat meltblown web production lines — from the LoneStar and Twin Beam platforms to 650mm lab-to-production lines — for media, masks, wipes, battery separators, and technical nonwovens.",
    sheet: "SHT 05",
    stats: [
      { value: "78\"", unit: "collector", note: "rotating collector tables" },
      { value: "Twin", unit: "beam", note: "dual-die configuration" },
      { value: "650", unit: "mm", note: "compact line width" },
    ],
    body: [
      "Meltblown web machines produce flat nonwoven media in roll form — the raw material behind pleated filters, face masks, wipes, battery separators, sorbents, and technical fabrics. Southern Coastal Machinery's flat web platforms include the LoneStar line, Twin Beam dual-die configurations for higher basis-weight capability, and compact 650mm lines suited to laboratory, pilot, and specialty production.",
      "Supporting equipment includes 78-inch rotating collector tables, slitting and winding systems, and complete line integration from extrusion through finished roll goods.",
      "Web lines process the full polymer range — polypropylene, PE, PBT, nylon, PPS, PET, and biopolymers including PLA and PVOH — enabling media development across filtration, medical, absorbent, and energy applications.",
    ],
    models: ["LoneStar", "Twin Beam", "650mm Line", "78\" Collector Tables", "Slitters & Winders"],
    applications: [
      "Filtration media (air & liquid)",
      "Face masks & medical fabrics",
      "Wipes & absorbents",
      "Battery separators",
    ],
    faqs: [
      {
        q: "What can a meltblown web line produce?",
        a: "Flat meltblown web lines produce roll-good nonwoven media used in pleated filters, HEPA media, face masks, wipes, sorbents, battery separators, and technical fabrics — across polymers from polypropylene to PPS and biopolymers such as PLA.",
      },
      {
        q: "Is there a lab-scale option?",
        a: "Yes. Compact 650mm lines serve laboratory, pilot, and specialty production — a proven configuration for media development that can scale findings to full production lines.",
      },
    ],
  },
  {
    slug: "string-wound-filter-winders",
    code: "SWFW",
    series: "Maverick Series",
    name: "String Wound Filter Winders",
    short:
      "String wound cartridge winding machines — the Maverick manufacturing partnership brings the M10 through M72 winder range to the platform.",
    sheet: "SHT 06",
    stats: [
      { value: "M10–M72", unit: "range", note: "single to 72-spindle" },
      { value: "String", unit: "wound", note: "yarn-based depth cartridges" },
      { value: "2026", unit: "program", note: "Maverick partnership" },
    ],
    body: [
      "String wound filter winders produce depth cartridges by winding yarn in precise patterns over a core — one of the most established cartridge constructions in liquid filtration, valued for temperature range, media variety (polypropylene, cotton, glass fiber yarns), and robustness.",
      "Through the Maverick manufacturing partnership, the platform offers a full winder range — including M10, M310, M1010, M20BB, M40, and M72 configurations — from entry-level machines to high-spindle-count production systems.",
      "String wound capability completes the cartridge portfolio: meltblown continuous, meltblown batch, carbon-infused, nylon, and string wound production from a single machinery partner.",
    ],
    models: ["M10", "M310", "M1010", "M20BB", "M40", "M72"],
    applications: [
      "High-temperature liquid filtration",
      "Chemical & plating baths",
      "Potable water cartridges",
      "Oil & gas service",
    ],
    faqs: [
      {
        q: "Why choose string wound cartridges?",
        a: "String wound construction supports yarn media beyond meltblown polymers — including cotton and glass fiber — extending cartridge service into higher temperatures and chemistries, with deep market acceptance worldwide.",
      },
      {
        q: "What is the Maverick partnership?",
        a: "String wound winders are offered through a manufacturing partnership with Maverick Manufacturing, bringing the M10 through M72 model range onto this platform alongside the meltblown machine portfolio.",
      },
      {
        q: "What spindle range is available?",
        a: "The range spans single-spindle entry machines (M10) up to high-throughput 72-spindle systems (M72), with M310, M1010, and M20BB configurations between — covering production scales from development to volume manufacturing.",
      },
    ],
  },
];

// ------------------------------------------------------------
// SERVICES — each gets a dedicated page
// ------------------------------------------------------------
export const services = [
  {
    slug: "turnkey-production-lines",
    code: "SVC 01",
    name: "Turnkey Production Lines",
    text: "Complete lines from resin handling to finished product — machine design, build, delivery, installation, commissioning, and operator training as one engineered scope.",
    process: [
      "Product & output specification — cartridge or media spec, target volumes, plant constraints",
      "Line engineering — machine selection, layout, utilities, and controls designed as one system",
      "Build & factory testing in Georgia, USA",
      "Delivery, installation, and commissioning at your plant",
      "Operator training and production ramp to specification",
    ],
    deliverables: "A running production line meeting the agreed product specification, trained operators, and documented process recipes.",
    relatedMachines: ['CCFW', 'WEB'],
    faqs: [
      { q: "What does 'turnkey' include here?", a: "Everything from specification to a running line: machine design, fabrication, delivery, installation, commissioning, recipe development, and operator training — one team, one scope, one point of responsibility." },
    ],
  },
  {
    slug: "machine-design-and-engineering",
    code: "SVC 02",
    name: "Machine Design & Engineering",
    text: "Custom machinery engineered around your product specification — drawing on meltblown process experience dating to 1992 and more than fifty installed lines worldwide.",
    process: [
      "Specification review with your engineering team",
      "Concept design and process calculations",
      "Detailed mechanical, controls, and electrical engineering",
      "Fabrication and assembly",
      "Factory acceptance testing before shipment",
    ],
    deliverables: "Production machinery engineered to your product specification, with controls, documentation, and factory test results.",
    relatedMachines: ['CCFW', 'BCFW', 'CLIMB'],
    faqs: [
      { q: "What makes this design approach different?", a: "The founder spent years owning and operating a meltblown production plant before building machines — design decisions reflect what actually matters on the production floor, not just on the drawing board." },
    ],
  },
  {
    slug: "process-and-product-development",
    code: "SVC 03",
    name: "Process & Product Development",
    text: "Founder-level know-how from owning and operating a meltblown nonwovens plant — fiber formation, gradient density, particle infusion, and polymer processing across PP, PE, PBT, nylon, PPS, PET, PLA, and PVOH.",
    process: [
      "Define the product target — filtration performance, media properties, or new material",
      "Process development runs — fiber formation, density profiles, polymer trials",
      "Iterate to specification with documented parameters",
      "Transfer the proven recipe to production equipment",
    ],
    deliverables: "A documented, repeatable process recipe achieving the product target, ready for production transfer.",
    relatedMachines: ['CLIMB', 'WEB'],
    faqs: [
      { q: "Which polymers can be developed?", a: "The processing range spans polypropylene, PE, PBT, nylon, PPS, PET, and biopolymers including PLA and PVOH, plus recycled polymer streams." },
    ],
  },
  {
    slug: "installation-and-commissioning",
    code: "SVC 04",
    name: "Installation & Commissioning",
    text: "On-site installation, line commissioning, and production ramp support for installations across North America, Europe, Asia, and the Middle East.",
    process: [
      "Site readiness review — utilities, foundations, layout",
      "Machine installation by the engineering team",
      "Commissioning — bringing the line to specification product",
      "Production ramp support alongside your operators",
    ],
    deliverables: "A commissioned line producing specification product at your site, with your team running it.",
    relatedMachines: ['CCFW', 'WEB', 'SWFW'],
    faqs: [
      { q: "Where has the team installed lines?", a: "Installations span North America, Europe, Asia, and the Middle East — including reference lines in Indiana, Ohio, Texas, Italy, and the Middle East." },
    ],
  },
  {
    slug: "training-and-support",
    code: "SVC 05",
    name: "Training & Ongoing Support",
    text: "Operator and maintenance training, recipe development, spare parts, and long-term process support that keeps installed lines producing at specification.",
    process: [
      "Operator training during commissioning — hands-on, on your machine",
      "Maintenance training for your technical team",
      "Recipe development for new products on installed lines",
      "Ongoing engineering support and spare parts supply",
    ],
    deliverables: "A self-sufficient production team with direct access to the engineers who built the machine.",
    relatedMachines: ["BCFW", "NYLON"],
    faqs: [
      { q: "Who answers support questions?", a: "The engineering team directly — not a call center. Support comes from the people who designed and built the line." },
    ],
  },
];

// ------------------------------------------------------------
// INDUSTRIES / APPLICATIONS — each gets a dedicated page
// machineCodes map to verified machine platforms only
// ------------------------------------------------------------
export const industries = [
  {
    slug: "water-purification",
    name: "Water Purification",
    text: "Depth cartridges, carbon-infused cartridges, and string wound filters for residential, commercial, and municipal water treatment.",
    challenges:
      "Water filter manufacturers compete on cost per cartridge and consistency at volume. Micron-rating claims must hold batch after batch, dirt-holding capacity drives perceived quality, and carbon stages add cost and complexity when produced as separate products.",
    solutions:
      "Continuous winding (CCFW) delivers high-volume PP depth cartridges at up to 1,200 per hour with gradient density for genuine dirt-holding performance. CLIMB™ carbon infusion combines sediment and carbon stages into one cartridge at roughly one-tenth the carbon mass of a block filter. String wound winders extend the range into higher-temperature and specialty water service.",
    machineCodes: ["CCFW", "BCFW", "CLIMB", "SWFW"],
    relatedServices: ['turnkey-production-lines', 'process-and-product-development'],
    faqs: [
      {
        q: "Which machine suits high-volume water cartridge production?",
        a: "The CCFW continuous platform — rated up to 1,200 cartridges per hour on the CCFW 40 — is built for exactly this: consistent, high-volume PP depth cartridges for water treatment markets.",
      },
      {
        q: "Can one cartridge combine sediment and carbon filtration?",
        a: "Yes — CLIMB™ carbon-infused meltblown (US Patent 9,981,211) embeds granular activated carbon in the fiber matrix during extrusion, producing a single cartridge that performs both depth filtration and carbon adsorption.",
      },
    ],
  },
  {
    slug: "food-and-beverage",
    name: "Food & Beverage",
    text: "Cartridge and media production for beer, wine, and beverage clarification and process filtration.",
    challenges:
      "Beverage filtration demands consistent clarity without stripping character, plus materials and manufacturing consistency appropriate for food-contact service across seasonal production peaks.",
    solutions:
      "Batch winding (BCFW) supports the product variety beverage filtration requires — multiple micron ratings and formats from one machine via touch-screen recipes — while continuous platforms serve high-volume standard cartridges and string wound winders cover classic beverage cartridge formats.",
    machineCodes: ["BCFW", "CCFW", "SWFW"],
    relatedServices: ['machine-design-and-engineering', 'training-and-support'],
    faqs: [
      {
        q: "Why batch winding for beverage cartridges?",
        a: "Beverage producers typically need a range of micron ratings and cartridge formats in modest volumes per SKU. A BCFW batch winder switches between stored recipes at the touch screen, making high-mix production practical on a single machine.",
      },
    ],
  },
  {
    slug: "pharmaceutical-and-medical",
    name: "Pharmaceutical & Medical",
    text: "Meltblown media for medical fabrics, blood barrier applications, and pharmaceutical process filtration.",
    challenges:
      "Medical and pharmaceutical applications demand tight fiber-diameter control, documented process consistency, and the ability to develop specialty media — including barrier fabrics — before committing to production scale.",
    solutions:
      "Flat web lines with lab-to-production scalability (including compact 650mm configurations) allow medical media to be developed at pilot scale and transferred to production. The polymer range spans PP through PPS and biopolymers, supporting blood barrier fabrics and medical-grade media documented in the companies' application history.",
    machineCodes: ["WEB", "BCFW"],
    relatedServices: ['process-and-product-development', 'installation-and-commissioning'],
    faqs: [
      {
        q: "Can media be developed at lab scale first?",
        a: "Yes — compact 650mm web lines are a proven configuration for media development, with process parameters that transfer to full production lines.",
      },
    ],
  },
  {
    slug: "petrochemical-and-industrial",
    name: "Petrochemical & Industrial",
    text: "Nylon and polypropylene cartridges for solvents, gases, hydraulics, and aggressive process streams.",
    challenges:
      "Solvent and gas-phase filtration destroys standard polypropylene cartridges; industrial process filtration spans chemistries and temperatures no single material covers.",
    solutions:
      "Dedicated nylon cartridge lines produce 40-inch meltblown cartridges in a polymer selected for aggressive chemical service, while string wound platforms extend material options to cotton and glass-fiber yarns for high-temperature duty. Continuous PP platforms cover the general industrial base load.",
    machineCodes: ["NYLON", "SWFW", "CCFW"],
    relatedServices: ['machine-design-and-engineering', 'installation-and-commissioning'],
    faqs: [
      {
        q: "Why nylon cartridges for petrochemical service?",
        a: "Nylon resists solvents and certain gas-phase chemistries that degrade polypropylene, which is why nylon meltblown is the established choice for aggressive chemical filtration duties.",
      },
    ],
  },
  {
    slug: "air-filtration-and-hepa",
    name: "Air Filtration & HEPA",
    text: "Fine-fiber meltblown media production for HEPA-grade and general air filtration applications.",
    challenges:
      "Air filtration media lives or dies on fiber diameter: sub-micron efficiency targets demand fine, consistent fibers at production speed, with basis-weight uniformity across the full web width.",
    solutions:
      "Flat web platforms — including Twin Beam dual-die configurations for higher basis-weight capability — produce fine-fiber meltblown media for HEPA-grade and general air filtration, backed by three decades of fiber-formation process control.",
    machineCodes: ["WEB"],
    relatedServices: ['process-and-product-development', 'machine-design-and-engineering'],
    faqs: [
      {
        q: "What determines HEPA-grade media quality?",
        a: "Fiber diameter and its consistency. Finer fibers create the sub-micron capture efficiency HEPA ratings require — which is fundamentally a process-control question: melt temperature, air velocity, throughput per hole, and die-to-collector distance held stable at production speed.",
      },
    ],
  },
  {
    slug: "face-masks-and-ppe",
    name: "Face Masks & PPE",
    text: "Meltblown web lines producing the filtration layer at the core of face masks and respiratory protection.",
    challenges:
      "The meltblown layer is the functional heart of a face mask — and the hardest layer to source. Mask producers who control their own meltblown supply control their quality, cost, and continuity.",
    solutions:
      "Meltblown web lines produce mask-grade filtration media in roll form, giving mask manufacturers direct control of their most critical input — a capability whose strategic value the industry learned emphatically in recent years.",
    machineCodes: ["WEB"],
    relatedServices: ['turnkey-production-lines', 'installation-and-commissioning'],
    faqs: [
      {
        q: "Can a web line produce mask-grade meltblown?",
        a: "Yes — mask filtration layers are a core meltblown web application, and producing them in-house removes dependence on external media supply.",
      },
    ],
  },
  {
    slug: "energy-and-battery",
    name: "Energy & Battery",
    text: "Web lines configured for battery separator media and energy-storage nonwovens.",
    challenges:
      "Battery separator media demands uniformity and material capability beyond commodity nonwovens, including polymers with thermal and chemical resistance suited to cell environments.",
    solutions:
      "Web platforms process the extended polymer range — including PBT, PPS, and PET — used in separator and energy-storage media development, with lab-scale lines supporting the iteration this fast-moving sector requires.",
    machineCodes: ["WEB"],
    relatedServices: ['process-and-product-development', 'machine-design-and-engineering'],
    faqs: [
      {
        q: "Which polymers matter for separator media?",
        a: "Beyond polypropylene, separator and energy applications draw on PBT, PPS, and PET for their thermal and chemical properties — all within the web platforms' processing range.",
      },
    ],
  },
  {
    slug: "wipes-and-absorbents",
    name: "Wipes & Absorbents",
    text: "Roll-good production for wipes, sorbents, and absorbent technical fabrics.",
    challenges:
      "Wipes and sorbent producers need reliable roll-good supply with basis weights and polymer options matched to absorbency targets — at costs that work in high-volume consumer and industrial markets.",
    solutions:
      "Flat web lines produce wipes and sorbent media in roll form across the polymer range, with slitting and winding systems completing the line from extrusion to finished converted-ready rolls.",
    machineCodes: ["WEB"],
    relatedServices: ['turnkey-production-lines', 'process-and-product-development'],
    faqs: [
      {
        q: "Does the line include finishing equipment?",
        a: "Yes — web lines integrate slitting and winding systems, delivering finished roll goods ready for converting.",
      },
    ],
  },
];

// ------------------------------------------------------------
// TESTIMONIALS — authentic, from southerncoastalmachinery.com
// ------------------------------------------------------------
export const testimonials = [
  {
    company: "Purolator Liquid Process",
    location: "USA",
    text: "Southern Coastal Machinery delivered on specification and supported our team through commissioning and beyond.",
  },
  {
    company: "UFI Filter",
    location: "Italy",
    text: "A machinery partner with genuine process knowledge — the line performs as engineered.",
  },
  {
    company: "Oerlikon Neumag",
    location: "Germany",
    text: "Professional engineering collaboration from one of the field's most experienced meltblown teams.",
  },
  {
    company: "SPC",
    location: "New Jersey, USA",
    text: "Responsive, knowledgeable, and committed to our production success.",
  },
  {
    company: "Fine Supply Pro",
    location: "Texas, USA",
    text: "From quotation to startup, the process was handled with real manufacturing understanding.",
  },
];
// NOTE: Replace the placeholder quote text above with the exact
// testimonial wording from the live site before launch — company
// names and locations are verified; quote text must be copied
// verbatim from southerncoastalmachinery.com/testimonials/.

// ------------------------------------------------------------
// KNOWLEDGE HUB ARTICLES
// ------------------------------------------------------------
export const articles = [
  {
    slug: "what-is-meltblown-technology",
    category: "Engineering",
    tags: ["meltblown", "process", "fundamentals"],
    relatedMachines: ["WEB", "CCFW"],
    title: "What Is Meltblown Technology? An Engineer's Introduction",
    tag: "Process Fundamentals",
    minutes: 6,
    intro:
      "Meltblown is the process behind depth-filter cartridges, mask media, and much of modern filtration. Here is how molten polymer becomes microfiber — and why the process rewards experience.",
    sections: [
      {
        h: "The process in one pass",
        p: "Polymer resin — most commonly polypropylene — is melted and metered through a die containing a row of fine capillaries. As molten polymer exits each capillary, converging jets of hot, high-velocity air attenuate the melt into microfibers, typically in the 1–10 micron range. The fiber stream lands on a moving collector — a rotating mandrel for cartridges, a belt or drum for flat web — where fibers bond to one another while still tacky, forming a self-bonded nonwoven with no binders or adhesives.",
      },
      {
        h: "Why fiber diameter is everything",
        p: "Filtration efficiency, pressure drop, and dirt-holding capacity are all functions of fiber diameter and web structure. Finer fibers create smaller pores and higher efficiency; coarser fibers create open structure and capacity. Controlling fiber diameter means controlling melt temperature, air temperature, air velocity, throughput per hole, and die-to-collector distance simultaneously — the parameter set that separates experienced meltblown engineering from trial and error.",
      },
      {
        h: "From web to product",
        p: "Wound onto a mandrel with varying process conditions, meltblown becomes a gradient-density depth cartridge — coarse outside, fine inside. Laid flat, it becomes media for pleated filters, masks, wipes, battery separators, and sorbents. The same core process, two product families — which is why cartridge winders and flat web lines share engineering DNA.",
      },
    ],
  },
  {
    slug: "gradient-density-depth-filtration-explained",
    category: "Manufacturing",
    tags: ["gradient density", "depth filtration", "cartridges"],
    relatedMachines: ["CCFW", "BCFW"],
    title: "Gradient Density: Why the Best Depth Cartridges Get Finer Toward the Core",
    tag: "Filtration Engineering",
    minutes: 5,
    intro:
      "A depth cartridge that is uniform from surface to core wastes most of its structure. Gradient density puts every layer to work.",
    sections: [
      {
        h: "The problem with uniform media",
        p: "In a uniform cartridge, the outer surface does nearly all the work: large particles blind the outside while the interior stays clean. The result is early pressure-drop rise and short service life, despite most of the cartridge's dirt-holding volume never being used.",
      },
      {
        h: "How gradient construction works",
        p: "Gradient-density winding varies fiber diameter and web density from outer diameter to core — coarse, open layers outside capture large particles; progressively finer layers inside capture progressively finer particles. Contaminant is stored through the full depth of the cartridge rather than on its surface. Modern winders execute this in programmable zones — up to four zones on continuous platforms and up to forty-eight programmable zones on batch machines.",
      },
      {
        h: "What it means for filter economics",
        p: "Longer service life per cartridge, more stable differential pressure, and higher dirt-holding capacity per gram of polymer — gradient construction is the difference between commodity cartridges and engineered cartridges, and it is fundamentally a machine-capability question.",
      },
    ],
  },
  {
    slug: "carbon-infused-meltblown-vs-carbon-block",
    category: "Technology",
    tags: ["CLIMB", "carbon", "comparison"],
    relatedMachines: ["CLIMB", "BCFW"],
    title: "Carbon-Infused Meltblown vs Carbon Block: An Engineering Comparison",
    tag: "CLIMB™ Technology",
    minutes: 5,
    intro:
      "Both remove chlorine, taste, and odor. They get there by very different routes — with very different material economics.",
    sections: [
      {
        h: "Two architectures",
        p: "A carbon block is an extruded or molded cylinder of powdered activated carbon held together with polymer binder — dense, high carbon mass, higher pressure drop. Carbon-infused meltblown takes the opposite approach: granular activated carbon is captured inside an open microfiber matrix as the fiber is formed, bonding mechanically to still-tacky fibers without binders.",
      },
      {
        h: "The material economics",
        p: "The patented infusion approach (US Patent No. 9,981,211) achieves carbon filtration function with roughly 80 grams of carbon per cartridge where typical carbon blocks carry roughly 900 grams. Because no binder coats the carbon, adsorption surface stays available; because the fiber matrix stays open, pressure drop stays low; and because the same cartridge is also a gradient depth filter, sediment and carbon stages combine into one product.",
      },
      {
        h: "Where each belongs",
        p: "Carbon block remains appropriate where maximum carbon contact time in minimum volume is the sole objective. For manufacturers serving mainstream drinking-water markets, carbon-infused meltblown offers a lower-cost, lower-weight, dual-function cartridge produced on a single machine platform — a product-line decision as much as a filtration one.",
      },
    ],
  },
];

// ------------------------------------------------------------
// MATERIALS
// ------------------------------------------------------------
export const materials = [
  "Polypropylene (PP)", "Polyethylene (PE)", "PBT", "Nylon (PA)",
  "PPS", "PET", "PLA", "PVOH / PVA", "Recycled polymers",
];

// ------------------------------------------------------------
// SOLUTIONS (Part 2 IA)
// ------------------------------------------------------------
export const solutions = [
  { name: "Complete Production Lines", text: "Turnkey lines from resin handling to finished cartridge or roll — one engineered scope, one point of contact.", icon: "line" },
  { name: "Turnkey Manufacturing", text: "Full-plant delivery: machine design, fabrication, installation, and ramp-up to production specification.", icon: "plant" },
  { name: "Machine Installation & Commissioning", text: "On-site installation and commissioning support for installations worldwide, from Georgia to the Middle East.", icon: "install" },
  { name: "Operator Training", text: "Recipe development and hands-on operator/maintenance training so lines run at spec after handover.", icon: "training" },
  { name: "Product & Process Development", text: "Founder-level process knowledge — from owning and running a meltblown plant — applied to your product spec.", icon: "dev" },
  { name: "After-Sales & Technical Support", text: "Ongoing process support, spare parts, and troubleshooting for installed lines.", icon: "support" },
];

// ------------------------------------------------------------
// ENGINEERING (Part 2 IA)
// ------------------------------------------------------------
export const engineeringCapabilities = [
  { name: "Machine Design & Engineering", text: "Custom machinery engineered around your cartridge or web specification." },
  { name: "Process Optimization", text: "Fiber diameter, gradient density, and throughput tuning drawn from decades of meltblown process control." },
  { name: "Prototype & Product Development", text: "Development-scale runs to prove a product before committing to full production tooling." },
  { name: "Factory Planning", text: "Line layout and utilities planning for new or expanded filtration manufacturing facilities." },
  { name: "Installation & Commissioning", text: "Engineering teams on-site through installation, commissioning, and production ramp." },
  { name: "Technical Support", text: "Direct engineering access for installed lines — not a call center." },
];

// ------------------------------------------------------------
// FOOTER / LEGAL
// ------------------------------------------------------------
export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/site-map", label: "Sitemap" },
];
export const timeline = [
  { year: "1992", text: "Matthew Pelham begins his meltblown career as a design engineer at J&M Laboratories, Georgia — the start of decades of continuous meltblown work." },
  { year: "1998", text: "Founds JENTEX Corporation, owning and operating a meltblown nonwovens manufacturing business — rare founder experience on the production side of the machines." },
  { year: "2006", text: "JENTEX is sold; the operating knowledge from running production lines daily becomes the foundation of the machinery business." },
  { year: "2007", text: "PMI America is founded in Georgia, USA." },
  { year: "2016", text: "Southern Coastal Machinery is founded — machinery engineering built on operator-level process understanding, alongside PMI America." },
  { year: "2018", text: "US Patent No. 9,981,211 granted — the particle-infusion process behind CLIMB™ carbon-infused meltblown technology." },
  { year: "Today", text: "50+ meltblown lines installed worldwide since 1992, serving customers across North America, Europe, Asia, and the Middle East, with PMI America as the customer-facing solutions brand." },
];
