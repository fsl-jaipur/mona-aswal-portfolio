import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import packagingMotion from "@/assets/portfolio/packaging-motion.gif.asset.json";
import packagingBrand from "@/assets/portfolio/packaging-brand.jpg.asset.json";
import ecommerceRetail from "@/assets/portfolio/ecommerce-retail.jpg.asset.json";
import ecommerceShowcase from "@/assets/portfolio/ecommerce-showcase.jpg.asset.json";
import campaignLifestyle from "@/assets/portfolio/campaign-lifestyle.jpg.asset.json";
import campaignStorytelling from "@/assets/portfolio/campaign-storytelling.jpg.asset.json";
import identitySystem from "@/assets/portfolio/identity-system.jpg.asset.json";
import identityElement from "@/assets/portfolio/identity-element.jpg.asset.json";

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
  { category: "Packaging", image: packagingMotion, ratio: "aspect-[4/5]" },
  { category: "E-commerce", image: ecommerceRetail, ratio: "aspect-square" },
  { category: "Brand identity", image: identitySystem, ratio: "aspect-[5/4]" },
  { category: "Campaigns", image: campaignLifestyle, ratio: "aspect-[3/4]" },
  { category: "Packaging systems", image: packagingBrand, ratio: "aspect-[4/3]" },
  { category: "E-commerce", image: ecommerceShowcase, ratio: "aspect-square" },
  { category: "Campaign imagery", image: campaignStorytelling, ratio: "aspect-square" },
  { category: "Identity systems", image: identityElement, ratio: "aspect-square" },
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
        <section className="paper-glass border border-paper/80 p-8 text-center sm:p-14"><p className="text-xs uppercase tracking-[0.25em] text-violet">More work is being prepared</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Want to see a project in the meantime?</h2><a href="mailto:monaaswal29@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.16em]"><Mail className="size-4" /> Ask Mona</a></section>
      </main>
    </div>
  );
}