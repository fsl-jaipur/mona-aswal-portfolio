import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import portraitAsset from "@/assets/mona-caricature.png.asset.json";
import gummiesPackaging from "@/assets/drive-portfolio/gummies-packaging.webp.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mona Aswal — Designer & Brand Lead" },
      { name: "description", content: "Meet Mona Aswal, a designer and brand lead with 8+ years of experience across packaging, brand strategy, digital, and e-commerce." },
      { property: "og:title", content: "About Mona Aswal — Designer & Brand Lead" },
      { property: "og:description", content: "Design leadership, brand strategy, packaging, and e-commerce experience rooted in consumer insight." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const strengths = ["Creative leadership", "Brand strategy & positioning", "New product development", "Consumer & market insights", "Brand identity & visual systems", "Cross-functional collaboration"];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <SiteHeader />
      <main>
        <section className="relative mx-auto grid max-w-[1500px] grid-cols-12 items-center gap-7 px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-violet">About / Behind the work</p>
            <h1 className="mt-5 font-display text-[20vw] leading-[0.8] sm:text-[14vw] md:text-[9vw] lg:text-[8rem]">Design with<br /><span className="italic text-plum">purpose.</span></h1>
            <p className="mt-8 max-w-[55ch] text-lg leading-relaxed text-ink/72 sm:text-xl">I build brands that don’t just look good—they perform. With 8+ years across design, strategy, and storytelling, I turn business goals into bold, cohesive brand systems that drive engagement and growth.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/downloads/mona-aswal-cv.pdf" download className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-transform hover:-translate-y-1"><ArrowDownToLine className="size-4" /> Download CV</a>
              <Link to="/contact" className="inline-flex items-center gap-2 border-b border-ink px-1 py-3 text-xs font-semibold uppercase tracking-[0.16em]">Work with Mona <ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
          <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-auto">
            <div className="proof-clip relative aspect-[4/5] overflow-hidden bg-paper shadow-[18px_22px_0_var(--coral)]">
              <img src={portraitAsset.url} alt="Illustrated portrait of Mona Aswal" className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <section className="border-y border-ink/12 px-5 py-20 sm:px-8 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5"><img src={gummiesPackaging.url} alt="Gummies packaging design by Mona Aswal" className="proof-clip aspect-[4/3] h-full w-full object-cover" /></div>
            <div className="col-span-12 md:col-span-7 md:pl-8"><p className="text-xs uppercase tracking-[0.28em] text-violet">Approach / Strategy meets craft</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">From insight to the final production file.</h2><p className="mt-6 max-w-[58ch] leading-relaxed text-ink/68">My work spans brand identity, packaging, digital, and e-commerce. I partner closely with leadership and sales teams to shape new product development and brand amplification strategies rooted in real behaviour. Strategic, empathetic, and creatively fearless, I bridge design and business to create brands with purpose and impact.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-14">
          <p className="text-xs uppercase tracking-[0.28em] text-violet">Strengths / Working language</p>
          <ul className="mt-7 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">{strengths.map((strength, index) => <li key={strength} className="flex min-h-28 items-end justify-between gap-5 border-b border-r border-ink/15 p-5"><span className="font-display text-2xl">{strength}</span><span className="text-xs text-plum">0{index + 1}</span></li>)}</ul>
        </section>
      </main>
    </div>
  );
}