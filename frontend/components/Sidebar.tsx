import { BrainCircuit, LayoutDashboard, LineChart, Radar } from "lucide-react";
import Link from "next/link";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/opportunities", label: "Opportunities", icon: Radar },
  { href: "/trends", label: "Trends", icon: LineChart },
  { href: "/ai-cofounder", label: "AI Co-Founder", icon: BrainCircuit }
];

export function Sidebar() {
  return (
    <aside className="glass hidden w-64 shrink-0 rounded-lg p-3 lg:block">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" href={item.href} key={item.href}>
            <item.icon size={17} />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
