import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Opportunity } from "@/types/opportunity";
import { Button } from "./Button";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="glass rounded-lg p-5 transition hover:-translate-y-1 hover:border-accent/40">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
        <span className="rounded-md bg-primary/15 px-2 py-1 text-primary">{opportunity.industry}</span>
        <span>{opportunity.country}</span>
        <span>{opportunity.dateDetected}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{opportunity.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{opportunity.description}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
        <Score label="Demand" value={opportunity.demandScore} />
        <Score label="Competition" value={opportunity.competitionScore} inverse />
        <Score label="Feasibility" value={opportunity.feasibilityScore} />
        <Score label="Revenue" value={opportunity.revenueScore} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href={`/opportunities/${opportunity.id}`} variant="ghost">
          View Details <ArrowUpRight size={16} />
        </Button>
        <Button>
          Generate Startup Plan <Sparkles size={16} />
        </Button>
      </div>
    </article>
  );
}

function Score({ label, value, inverse = false }: { label: string; value: number; inverse?: boolean }) {
  const tone = inverse && value < 50 ? "text-emerald-300" : value > 80 ? "text-accent" : "text-slate-200";

  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${tone}`}>{value}</p>
    </div>
  );
}
