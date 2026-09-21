import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Mona Aswal" },
      { name: "description", content: "Approved client and collaborator testimonials for designer and brand lead Mona Aswal." },
      { property: "og:title", content: "Testimonials — Mona Aswal" },
      { property: "og:description", content: "Words from the people who have worked with Mona Aswal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-14">
        <section className="grid min-h-[72svh] grid-cols-12 items-center gap-7 py-16 sm:py-24">
          <div className="col-span-12 md:col-span-8"><p className="text-xs uppercase tracking-[0.28em] text-violet">Testimonials / In their words</p><h1 className="mt-5 font-display text-[18vw] leading-[0.82] sm:text-[13vw] md:text-[9vw] lg:text-[8rem]">Kind words,<br /><span className="italic text-plum">carefully credited.</span></h1></div>
          <div className="paper-glass animate-proof col-span-11 col-start-2 border border-paper/80 p-8 shadow-[14px_16px_0_var(--plum)] md:col-span-4 md:col-start-auto md:p-10"><Quote className="size-10 text-coral" /><p className="mt-8 font-display text-3xl leading-tight">Approved client notes are being assembled.</p><p className="mt-5 leading-relaxed text-ink/60">Every recommendation published here will carry the real words and attribution of the person who shared it.</p></div>
        </section>
        <section className="border-t border-ink/15 pt-10"><Link to="/contact" className="group flex items-center justify-between gap-6 font-display text-3xl sm:text-5xl">Start a conversation with Mona <ArrowRight className="size-8 shrink-0 transition-transform group-hover:translate-x-2" /></Link></section>
      </main>
    </div>
  );
}