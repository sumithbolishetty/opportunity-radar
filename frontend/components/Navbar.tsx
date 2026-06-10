import { Radar } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/trends", label: "Trends" },
  { href: "/ai-cofounder", label: "AI Co-Founder" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/20 text-accent">
            <Radar size={20} />
          </span>
          Opportunity Radar
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
