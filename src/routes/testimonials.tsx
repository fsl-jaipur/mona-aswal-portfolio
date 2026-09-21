import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import shikhaPhoto from "@/assets/testimonials/shikha-singh.jpg.asset.json";
import rituPhoto from "@/assets/testimonials/ritu-ankit-jain.jpg.asset.json";
import abhishekPhoto from "@/assets/testimonials/abhishek-singh.jpg.asset.json";
import vikramPhoto from "@/assets/testimonials/vikram-singh-chauhan.jpg.asset.json";

const testimonials = [
  {
    name: "Shikha Singh",
    role: "Senior Product Marketing Manager",
    company: "Times Internet",
    image: shikhaPhoto.url,
    delay: "delay-0",
    quote: "A great peer to work with that’s how I define Mona. She has deep understanding of graphic designing and user experience and have worked as an asset to the company. I wish her all the best for her future projects.",
  },
  {
    name: "Ritu Ankit Jain",
    role: "Freelance Writer",
    company: "Ritu Writes",
    image: rituPhoto.url,
    delay: "delay-100",
    quote: "I have worked with Mona for a brief period and I must say that she has a very creative bend of mind and is a very quick and fast learner. She understands her clients requirements and this makes her stand out from the crowd. I would highly recommend Mona as a graphic designer as she is highly professional when it comes to work. Keep on going and touching new life heights.",
  },
  {
    name: "Abhishek Singh",
    role: "Entrepreneur",
    company: "",
    image: abhishekPhoto.url,
    delay: "delay-200",
    quote: "Mona worked at too many project as a graphic designer. Her work was used for internal projects and deliverables alike. she has always demonstrated a professional competency & diligent work efforts. She would serve as a great addition to any organization.",
  },
  {
    name: "Vikram Singh Chauhan",
    role: "Founder",
    company: "Om Vortex",
    image: vikramPhoto.url,
    delay: "delay-300",
    quote: "Mona gives thoughtful feedback on design, encourages others to do their best, and has highly creative vision. Her creative design is always top notch and with the quickest possible turnaround.",
  },
];

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
        <section className="grid grid-cols-12 items-end gap-7 py-16 sm:py-24">
          <div className="col-span-12 md:col-span-9"><p className="text-xs uppercase tracking-[0.28em] text-violet">Testimonials / In their words</p><h1 className="mt-5 font-display text-[18vw] leading-[0.82] sm:text-[13vw] md:text-[9vw] lg:text-[8rem]">Kind words,<br /><span className="italic text-plum">carefully credited.</span></h1></div>
          <p className="col-span-10 col-start-3 max-w-sm pb-2 text-base leading-relaxed text-ink/65 md:col-span-3 md:col-start-auto">Recommendations from people who have worked alongside Mona.</p>
        </section>

        <section aria-label="Recommendations" className="grid grid-cols-12 gap-x-6 gap-y-14 border-t border-ink/15 py-16 sm:gap-y-20 sm:py-24">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`paper-glass animate-proof relative col-span-12 border border-paper/80 p-7 shadow-[10px_12px_0_var(--plum)] sm:p-9 md:col-span-6 ${testimonial.delay} ${index % 2 === 1 ? "md:translate-y-14" : ""}`}
            >
              <Quote aria-hidden="true" className="size-9 text-coral" />
              <blockquote className="mt-6 font-display text-2xl leading-snug sm:text-3xl">“{testimonial.quote}”</blockquote>
              <footer className="mt-8 flex items-center gap-4 border-t border-ink/15 pt-6">
                <img src={testimonial.image} alt="" className="size-14 shrink-0 rounded-full object-cover grayscale transition duration-500 hover:grayscale-0" />
                <div>
                  <cite className="not-italic font-semibold">{testimonial.name}</cite>
                  <p className="mt-1 text-sm text-ink/60">{testimonial.role}{testimonial.company ? ` · ${testimonial.company}` : ""}</p>
                </div>
              </footer>
            </article>
          ))}
        </section>
        <section className="border-t border-ink/15 pt-10"><Link to="/contact" className="group flex items-center justify-between gap-6 font-display text-3xl sm:text-5xl">Start a conversation with Mona <ArrowRight className="size-8 shrink-0 transition-transform group-hover:translate-x-2" /></Link></section>
      </main>
    </div>
  );
}