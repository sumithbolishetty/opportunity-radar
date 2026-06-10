"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

export default function AiCofounderPage() {
  const [idea, setIdea] = useState("AI tool that finds compliance risks in generated marketing copy");
  const generated = useMemo(() => buildPlan(idea), [idea]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="text-sm text-accent">AI Co-Founder</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Generate a startup plan from a raw idea</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="glass rounded-lg p-5">
          <label className="text-sm font-medium text-slate-200" htmlFor="idea">Startup Idea</label>
          <textarea
            className="mt-3 min-h-52 w-full rounded-md border border-white/10 bg-black/20 p-4 text-sm text-white outline-none transition focus:border-accent"
            id="idea"
            onChange={(event) => setIdea(event.target.value)}
            value={idea}
          />
          <div className="mt-4">
            <Button>Generate Plan</Button>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          {generated.map((item) => (
            <article className="glass rounded-lg p-5" key={item.title}>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function buildPlan(idea: string) {
  const focus = idea.trim() || "an emerging startup concept";
  return [
    { title: "Startup Name", body: "SignalForge" },
    { title: "Elevator Pitch", body: `SignalForge turns ${focus.toLowerCase()} into an operational product with clear positioning and buyer value.` },
    { title: "Business Model", body: "B2B SaaS with team seats, usage-based AI analysis, and enterprise governance features." },
    { title: "Revenue Streams", body: "Monthly subscriptions, premium exports, enterprise integrations, and advisory onboarding." },
    { title: "MVP Features", body: "Signal ingestion, scoring dashboard, recommendation engine, report export, and saved workflows." },
    { title: "Marketing Strategy", body: "Founder-led content, expert interviews, benchmark reports, partner webinars, and targeted outbound." },
    { title: "Funding Roadmap", body: "Bootstrap validation, pre-seed after 5 design partners, seed after repeatable paid conversion." },
    { title: "Tech Stack", body: "Next.js, FastAPI, PostgreSQL, Redis, Celery, vector search, and model provider abstractions." }
  ];
}
