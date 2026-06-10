import { IndustryChart } from "@/components/Charts";
import { trendRows } from "@/services/mockData";

export default function TrendsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="text-sm text-accent">Trend explorer</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Emerging markets and research momentum</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <IndustryChart />
        <section className="glass rounded-lg p-5">
          <h2 className="text-lg font-semibold">Trending Signals</h2>
          <div className="mt-4 space-y-3">
            {trendRows.map((row) => (
              <div className="rounded-md border border-white/10 bg-white/5 p-4" key={row.label}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">{row.label}</p>
                    <p className="text-sm text-slate-400">{row.category} growth {row.growth}</p>
                  </div>
                  <span className="text-accent">{row.signal}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {["Trending Technologies", "Trending Industries", "Emerging Markets", "Research Growth"].map((label) => (
          <div className="glass rounded-lg p-5" key={label}>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-semibold">{Math.floor(72 + label.length)}%</p>
          </div>
        ))}
      </section>
    </main>
  );
}
