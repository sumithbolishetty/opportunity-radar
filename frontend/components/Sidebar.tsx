"use client";

import { BrainCircuit, LayoutDashboard, LineChart, Radar } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const items = [
  { href: "/dashboard", label: "nav.dashboard", icon: LayoutDashboard },
  { href: "/opportunities", label: "nav.opportunities", icon: Radar },
  { href: "/trends", label: "nav.trends", icon: LineChart },
  { href: "/ai-cofounder", label: "nav.aiCofounder", icon: BrainCircuit }
];

export function Sidebar() {
  const { t } = useI18n();

  return (
    <aside className="glass hidden w-64 shrink-0 rounded-lg p-3 lg:block">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" href={item.href} key={item.href}>
            <item.icon size={17} />
            {t(item.label)}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
