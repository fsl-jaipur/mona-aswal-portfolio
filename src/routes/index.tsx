import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import portraitAsset from "@/assets/mona-caricature.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mona Aswal — Graphic Designer & Brand Lead" },
      { name: "description", content: "Portfolio of Mona Aswal, a graphic designer with eight years of FMCG, packaging, branding, and e-commerce experience." },
      { property: "og:title", content: "Mona Aswal — Graphic Designer & Brand Lead" },
      { property: "og:description", content: "Brand, packaging, and e-commerce design shaped across eight years in the consumer industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["Packaging & Dielines", "FMCG shelf systems"],
  ["E-commerce Design", "Storefronts & campaigns"],
  ["Brand Systems", "Identity, type & colour"],
  ["Campaign Design", "Launches that stop the scroll"],
];

const career = [
  ["2018—19", "Graphic Designer", "Kangaro Industries Pvt. Ltd."],
  ["2019—21", "Graphic Designer", "Elofic Industries Pvt. Ltd."],
  ["2021—22", "Graphic Designer", "Revlon"],
  ["2022—23", "Senior Graphic Designer", "Honasa Consumer Pvt. Ltd."],
  ["2023—Now", "Assistant Manager, Design & Brand Lead", "Esme Consumer Pvt. Ltd."],
];

function Header() {
  return (
    <header className="relative z-30 flex items-center justify-between px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/65 sm:px-8 lg:px-14">
      <Link to="/" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet">Mona Aswal — Folio 08</Link>
      <span className="hidden md:block">FMCG · E-commerce · Branding</span>
      <Link to="/work" className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet">View work <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
    </header>
  );
}

function Proof({ tone, index }: { tone: "coral" | "violet" | "raspberry" | "plum"; index: string }) {
  const tones = { coral: "bg-coral", violet: "bg-violet", raspberry: "bg-raspberry", plum: "bg-plum" };
  return (
    <div className={`proof-clip relative overflow-hidden ${tones[tone]} aspect-[4/3] text-paper`}>
      <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_1px,transparent_16px)]" />
      <span className="absolute left-5 top-5 font-display text-7xl opacity-25">{index}</span>
      <div className="absolute bottom-8 left-5 right-5 border-t border-paper/50 pt-3 text-xs uppercase tracking-[0.2em]">Project archive · artwork coming soon</div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <Header />
      <main>
        <section className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1600px] grid-cols-12 items-end gap-4 px-5 pb-16 pt-8 sm:px-8 lg:gap-8 lg:px-14 lg:pb-24">
          <div aria-hidden="true" className="paper-glass animate-paper absolute -left-24 top-24 h-[28rem] w-56 border border-paper/80" />
          <div aria-hidden="true" className="paper-glass animate-paper absolute -right-20 top-52 h-[30rem] w-60 border border-paper/80 [animation-delay:-3s]" />
          <div className="relative z-10 col-span-12 pb-8 md:col-span-7 md:pb-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-violet sm:text-xs">The working folio — layered & alive</p>
            <h1 className="font-display leading-[0.78] text-ink">
              <span className="block text-[29vw] sm:text-[24vw] md:text-[13vw] lg:text-[11rem]">
                {"Mona".split("").map((letter, index) => <span key={letter + index} className="animate-letter inline-block" style={{ animationDelay: `${index * 90}ms` }}>{letter}</span>)}
              </span>
              <span className="block text-[20vw] italic text-plum sm:text-[17vw] md:text-[9vw] lg:text-[8rem]">Aswal</span>
            </h1>
            <p className="mt-8 max-w-[43ch] text-lg leading-relaxed text-ink/72 sm:text-xl">Eight years building FMCG and e-commerce brands that feel confident, considered, and alive on the shelf and screen.</p>
            <div className="mt-7 flex max-w-xl items-start gap-3 border-t border-ink/15 pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/60 sm:text-sm">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-coral" />
              Graphic Designer · Design & Brand Lead
            </div>
          </div>
          <div className="animate-proof relative z-10 col-span-10 col-start-2 md:col-span-5 md:col-start-auto">
            <div className="proof-clip relative aspect-[4/5] overflow-hidden bg-paper shadow-[18px_24px_0_var(--plum)]">
              <img src={portraitAsset.url} alt="Illustrated portrait of graphic designer Mona Aswal" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink/20 to-transparent" />
            </div>
            <div className="ink-slab absolute -bottom-5 -left-4 -rotate-3 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper sm:text-xs">Portfolio / 2018—Now</div>
            <p className="mt-12 text-[10px] uppercase tracking-[0.24em] text-ink/45">Crop · Ink · Proof</p>
          </div>
          <ArrowDownRight aria-hidden="true" className="absolute bottom-5 right-6 size-9 text-plum lg:right-14" />
        </section>

        <section className="border-y border-ink/12 px-5 py-20 sm:px-8 lg:px-14" aria-labelledby="services-heading">
          <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4"><p className="text-xs uppercase tracking-[0.28em] text-violet">Services / 01</p><h2 id="services-heading" className="mt-3 font-display text-5xl leading-none sm:text-6xl">What I build</h2></div>
            <ul className="col-span-12 mt-6 divide-y divide-ink/15 md:col-span-8 md:mt-0">
              {services.map(([name, detail], index) => <li key={name} className="group flex items-baseline gap-5 py-5"><span className="w-6 text-xs text-ink/35">0{index + 1}</span><span className="font-display text-2xl transition-colors group-hover:text-raspberry sm:text-3xl">{name}</span><span className="ml-auto hidden text-sm text-ink/45 sm:block">{detail}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-14">
          <div className="paper-glass -rotate-1 border border-paper/70 p-7 shadow-[12px_14px_0_color-mix(in_oklab,var(--violet)_18%,transparent)] sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-violet">Tools / Typographic inventory</p>
            <p className="mt-5 font-display text-3xl leading-[1.18] sm:text-5xl">Illustrator <span className="text-plum">/</span> Photoshop <span className="text-plum">/</span> InDesign <span className="text-plum">/</span> Figma <span className="text-plum">/</span> After Effects <span className="text-plum">/</span> CorelDRAW</p>
          </div>

          <div className="mb-10 mt-28 flex items-end justify-between gap-5">
            <div><p className="text-xs uppercase tracking-[0.28em] text-violet">Selected work / 02</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">Shelf to screen</h2></div>
            <Link to="/work" className="group hidden items-center gap-2 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.16em] sm:flex">Open archive <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid grid-cols-12 items-start gap-5 sm:gap-7">
            <div className="animate-proof col-span-12 md:col-span-7"><Proof tone="coral" index="01" /></div>
            <div className="animate-proof col-span-10 col-start-3 md:col-span-5 md:col-start-auto md:mt-16 [animation-delay:120ms]"><Proof tone="violet" index="02" /></div>
            <div className="animate-proof col-span-9 md:col-span-5 md:-mt-12 [animation-delay:240ms]"><Proof tone="raspberry" index="03" /></div>
            <div className="animate-proof col-span-12 md:col-span-7 md:mt-6 [animation-delay:360ms]"><Proof tone="plum" index="04" /></div>
          </div>
          <Link to="/work" className="mt-8 flex items-center justify-between border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.16em] sm:hidden">Open the full archive <ArrowUpRight className="size-4" /></Link>
        </section>

        <section className="border-t border-ink/12 px-5 py-24 sm:px-8 lg:px-14" aria-labelledby="career-heading">
          <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4"><p className="text-xs uppercase tracking-[0.28em] text-violet">Career / 03</p><h2 id="career-heading" className="mt-3 font-display text-5xl sm:text-6xl">The line</h2></div>
            <ol className="relative col-span-12 ml-2 border-l border-plum/40 pl-7 md:col-span-8 md:ml-0 md:pl-10">
              {career.map(([year, role, company], index) => <li key={year} className="relative pb-10 last:pb-0"><span className={`absolute -left-[2.17rem] top-1 size-3 rounded-full border-2 border-paper sm:-left-[2.95rem] ${index === career.length - 1 ? "bg-coral" : "bg-plum"}`} /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">{year}</span><h3 className="mt-1 font-display text-2xl sm:text-3xl">{role}</h3><p className="mt-1 text-sm text-ink/58 sm:text-base">{company}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="ink-slab -rotate-1 px-5 py-20 text-paper sm:px-8 lg:px-14">
          <div className="mx-auto max-w-[1500px]"><p className="text-xs uppercase tracking-[0.28em] text-paper/65">Have a brief worth unfolding?</p><h2 className="mt-4 max-w-4xl font-display text-5xl leading-none sm:text-7xl lg:text-8xl">Let’s make it impossible to ignore.</h2><a href="mailto:monaaswal29@gmail.com" className="mt-9 inline-flex items-center gap-3 border-b border-paper/60 pb-2 text-sm font-semibold uppercase tracking-[0.16em] hover:border-paper"><Mail className="size-4" /> monaaswal29@gmail.com</a></div>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-ink/48 sm:px-8 lg:px-14"><span>Mona Aswal — Folio 08</span><span>Designed with intent · 2026</span></footer>
    </div>
  );
}
