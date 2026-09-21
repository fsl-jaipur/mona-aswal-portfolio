import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mona Aswal — Start a Design Project" },
      { name: "description", content: "Contact Mona Aswal for branding, packaging, FMCG, campaign, and e-commerce design enquiries." },
      { property: "og:title", content: "Contact Mona Aswal — Start a Design Project" },
      { property: "og:description", content: "Share your brief with designer and brand lead Mona Aswal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [opened, setOpened] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "Not provided");
    const project = String(form.get("project") ?? "Design enquiry");
    const budget = String(form.get("budget") ?? "Not provided");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry — ${project} — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone / company: ${phone}\nProject type: ${project}\nBudget / timeline: ${budget}\n\nBrief:\n${message}`);
    setOpened(true);
    window.location.href = `mailto:monaaswal29@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-14">
        <section className="grid grid-cols-12 gap-8 py-16 sm:py-24">
          <div className="col-span-12 lg:col-span-5"><p className="text-xs uppercase tracking-[0.28em] text-violet">Contact / New business</p><h1 className="mt-5 font-display text-[20vw] leading-[0.8] sm:text-[14vw] lg:text-[7rem]">Let’s make<br /><span className="italic text-plum">something bold.</span></h1><p className="mt-7 max-w-md text-lg leading-relaxed text-ink/65">Share the shape of your project, from a new product launch to a complete brand system.</p>
            <address className="mt-12 not-italic"><a href="tel:+919599828836" className="flex items-center gap-3 border-t border-ink/15 py-5 text-lg hover:text-plum"><Phone className="size-5" /> +91 95998 28836</a><a href="mailto:monaaswal29@gmail.com" className="flex items-center gap-3 border-t border-ink/15 py-5 text-lg hover:text-plum"><Mail className="size-5" /> monaaswal29@gmail.com</a><a href="https://www.behance.net/monaaswal" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 border-y border-ink/15 py-5 text-lg hover:text-plum">Behance / monaaswal <ArrowUpRight className="size-5" /></a></address>
          </div>
          <div className="paper-glass col-span-12 border border-paper/80 p-6 shadow-[14px_16px_0_color-mix(in_oklab,var(--violet)_22%,transparent)] sm:p-9 lg:col-span-7">
            <form onSubmit={submitEnquiry} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Name" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Phone or company" name="phone" placeholder="Optional" />
              <Field label="Project type" name="project" required placeholder="Packaging, identity, campaign…" />
              <div className="sm:col-span-2"><Field label="Budget and timeline" name="budget" placeholder="A helpful range and target date" /></div>
              <label className="sm:col-span-2"><span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/65">Tell me about the brief</span><Textarea name="message" required minLength={20} rows={7} placeholder="What are you building, and what does success look like?" className="min-h-44 rounded-none border-ink/20 bg-paper/50 text-base focus-visible:ring-violet" /></label>
              <div className="sm:col-span-2"><Button type="submit" className="h-12 rounded-none bg-ink px-6 text-paper hover:bg-plum"><Send className="size-4" /> Open enquiry in email</Button><p className="mt-3 text-sm text-ink/52" aria-live="polite">{opened ? "Your email app should now open with the brief prepared." : "Until direct delivery is activated, submitting prepares the enquiry in your email app."}</p></div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label><span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/65">{label}</span><Input name={name} type={type} required={required} placeholder={placeholder} className="h-12 rounded-none border-ink/20 bg-paper/50 text-base focus-visible:ring-violet" /></label>;
}