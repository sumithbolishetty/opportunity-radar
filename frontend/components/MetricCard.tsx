import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
};

export function MetricCard({ icon: Icon, label, value, change }: Props) {
  return (
    <div className="glass rounded-lg p-5">
      <div className="flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-accent">
          <Icon size={20} />
        </div>
        <span className="text-xs font-medium text-emerald-300">{change}</span>
      </div>
      <p className="mt-5 text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
