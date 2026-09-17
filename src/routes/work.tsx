import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import gummiesPackaging from "@/assets/drive-portfolio/gummies-packaging.webp.asset.json";
import gummiesCampaign from "@/assets/drive-portfolio/gummies-campaign.webp.asset.json";
import perfume from "@/assets/drive-portfolio/perfume-him-1.webp.asset.json";
import revlonKajal from "@/assets/drive-portfolio/revlon-kajal.webp.asset.json";
import revlonLipstick from "@/assets/drive-portfolio/revlon-lipstick.webp.asset.json";
import hairSerum from "@/assets/drive-portfolio/hair-serum.webp.asset.json";
import bodyWash from "@/assets/drive-portfolio/drsheths-bodywash.webp.asset.json";
import professionalSkincare from "@/assets/drive-portfolio/professional-skincare.webp.asset.json";

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
  { category: "Gummies packaging", image: gummiesPackaging, ratio: "aspect-[4/3]" },
  { category: "Revlon kajal", image: revlonKajal, ratio: "aspect-square" },
  { category: "Hair serum", image: hairSerum, ratio: "aspect-[5/4]" },
  { category: "Professional skincare", image: professionalSkincare, ratio: "aspect-[3/4]" },
  { category: "Gummies campaign", image: gummiesCampaign, ratio: "aspect-video" },
  { category: "Revlon lipstick", image: revlonLipstick, ratio: "aspect-[3/2]" },
  { category: "Men’s fragrance", image: perfume, ratio: "aspect-video" },
  { category: "Dr. Sheth’s body wash", image: bodyWash, ratio: "aspect-square" },
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
          {archive.map(({ category, image, ratio }, index) => (
            <article key={`${category}-${index}`} className="mb-9 break-inside-avoid">
              <div className={`proof-clip group relative overflow-hidden bg-ink ${ratio}`}>
                <img src={image.url} alt={`${category} design by Mona Aswal`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 border-b border-ink/15 pb-3"><h2 className="font-display text-2xl">{category}</h2><span className="text-[10px] uppercase tracking-[0.18em] text-ink/45">0{index + 1}</span></div>
            </article>
          ))}
        </section>
        <section className="paper-glass border border-paper/80 p-8 text-center sm:p-14"><p className="text-xs uppercase tracking-[0.25em] text-violet">Explore the complete archive</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">See more of Mona’s work on Behance.</h2><div className="mt-8 flex flex-wrap items-center justify-center gap-8"><a href="https://www.behance.net/monaaswal" target="_blank" rel="noreferrer" className="border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.16em]">Open Behance</a><a href="mailto:monaaswal29@gmail.com" className="inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.16em]"><Mail className="size-4" /> Ask Mona</a></div></section>
      </main>
    </div>
  );
}