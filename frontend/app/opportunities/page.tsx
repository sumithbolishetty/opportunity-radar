import { Filters } from "@/components/Filters";
import { OpportunityCard } from "@/components/OpportunityCard";
import { opportunities } from "@/services/mockData";

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-accent">Opportunity feed</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">AI-Detected Startup Opportunities</h1>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          Ranked by demand signal, competitive whitespace, feasibility, revenue potential, and freshness.
        </p>
      </div>
      <Filters />
      <div className="mt-6 grid gap-5">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </main>
  );
}
