import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Mona Aswal" },
      { name: "description", content: "A visual archive of FMCG packaging, e-commerce, branding, campaign, and print design by Mona Aswal." },
      { property: "og:title", content: "Selected Work — Mona Aswal" },
      { property: "og:description", content: "Explore Mona Aswal’s visual design archive across packaging, branding, campaigns, and e-commerce." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const archive = [
  ["Packaging", "bg-coral", "aspect-[4/5]"],
  ["E-commerce", "bg-violet", "aspect-square"],
  ["Brand identity", "bg-raspberry", "aspect-[5/4]"],
  ["Campaigns", "bg-plum", "aspect-[3/4]"],
  ["Print", "bg-violet", "aspect-[4/3]"],
  ["Packaging systems", "bg-coral", "aspect-square"],
];

function WorkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden px-5 pb-20 text-ink sm:px-8 lg:px-14">
      <header className="mx-auto flex max-w-[1500px] items-center justify-between py-6 text-[10px] font-semibold uppercase tracking-[0.2em]">
        <Link to="/" className="group flex items-center gap-2 text-ink/65"><ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" /> Back to Mona</Link>
        <a href="mailto:monaaswal29@gmail.com" className="text-plum">Start a project</a>
      </header>
      <main className="mx-auto max-w-[1500px]">
        <section className="grid grid-cols-12 items-end gap-6 border-b border-ink/15 pb-16 pt-10 sm:pt-16">
          <div className="col-span-12 md:col-span-8"><p className="text-xs uppercase tracking-[0.28em] text-violet">The broadside / Work archive</p><h1 className="mt-4 font-display text-[22vw] leading-[0.78] sm:text-[16vw] md:text-[10vw] lg:text-[9rem]">Selected<br /><span className="italic text-plum">work.</span></h1></div>
          <p className="col-span-10 text-lg leading-relaxed text-ink/65 md:col-span-4">Packaging, campaigns, identities, and e-commerce artwork—arranged like print proofs on a studio wall.</p>
        </section>
        <section className="columns-1 gap-6 py-16 sm:columns-2 lg:columns-3">
          {archive.map(([category, tone, ratio], index) => (
            <article key={category} className="mb-9 break-inside-avoid">
              <div className={`proof-clip relative overflow-hidden ${tone} ${ratio} text-paper`}>
                <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_1px,transparent_18px)]" />
                <span className="absolute left-5 top-4 font-display text-7xl opacity-20">0{index + 1}</span>
                <span className="absolute bottom-9 left-5 max-w-[22ch] text-xs uppercase tracking-[0.18em]">Artwork reserved for Mona’s project archive</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 border-b border-ink/15 pb-3"><h2 className="font-display text-2xl">{category}</h2><span className="text-[10px] uppercase tracking-[0.18em] text-ink/45">Archive proof</span></div>
            </article>
          ))}
        </section>
        <section className="paper-glass border border-paper/80 p-8 text-center sm:p-14"><p className="text-xs uppercase tracking-[0.25em] text-violet">More work is being prepared</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Want to see a project in the meantime?</h2><a href="mailto:monaaswal29@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.16em]"><Mail className="size-4" /> Ask Mona</a></section>
      </main>
    </div>
  );
}