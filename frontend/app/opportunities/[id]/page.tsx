import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { opportunities } from "@/services/mockData";

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ id: opportunity.id }));
}

export default function OpportunityDetailsPage({ params }: { params: { id: string } }) {
  const opportunity = opportunities.find((item) => item.id === params.id);

  if (!opportunity) {
    notFound();
  }

  const sections = [
    ["Problem", opportunity.problem],
    ["Why It Exists", opportunity.whyItExists],
    ["Market Demand", `Demand score is ${opportunity.demandScore}, driven by hiring, funding, and source activity.`],
    ["Revenue Model", opportunity.revenueModel],
    ["Market Size Estimate", opportunity.marketSizeEstimate],
    ["Growth Forecast", opportunity.growthForecast],
    ["Startup Recommendation", "Start with a focused wedge, validate demand through expert interviews, then ship a narrow workflow product."]
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section>
          <p className="text-sm text-accent">{opportunity.industry}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{opportunity.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{opportunity.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sections.map(([title, body]) => (
              <article className="glass rounded-lg p-5" key={title}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <List title="Potential Users" items={opportunity.potentialUsers} />
            <List title="Competitors" items={opportunity.competitors} />
            <List title="Risks" items={opportunity.risks} />
          </div>
        </section>
        <aside className="glass h-fit rounded-lg p-5">
          <h2 className="text-lg font-semibold">AI Insights</h2>
          <div className="mt-4 space-y-3">
            {opportunity.aiInsights.map((insight) => (
              <p className="rounded-md bg-white/5 p-3 text-sm leading-6 text-slate-300" key={insight}>{insight}</p>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            <Button>Generate Business Plan</Button>
            <Button variant="ghost">Generate MVP</Button>
            <Button variant="ghost">Generate Pitch Deck</Button>
          </div>
        </aside>
      </div>
    </main>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="glass rounded-lg p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
