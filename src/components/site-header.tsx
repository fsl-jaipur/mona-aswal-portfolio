import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-ink/10 px-5 sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5">
        <Link to="/" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet">
          Mona Aswal — Folio 08
        </Link>
        <nav aria-label="Primary navigation" className="order-3 flex w-full gap-5 overflow-x-auto pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55 md:order-none md:w-auto md:pb-0">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "text-plum" }} className="shrink-0 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-plum">
          Start a project <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}