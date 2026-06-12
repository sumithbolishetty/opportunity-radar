"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { useI18n } from "@/lib/i18n";

export default function AiCofounderPage() {
  const { t } = useI18n();
  const [idea, setIdea] = useState(t("ai.defaultIdea"));
  const generated = useMemo(() => buildPlan(idea, t), [idea, t]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="text-sm text-accent">{t("ai.eyebrow")}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t("ai.title")}</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="glass rounded-lg p-5">
          <label className="text-sm font-medium text-slate-200" htmlFor="idea">{t("ai.label")}</label>
          <textarea
            className="mt-3 min-h-52 w-full rounded-md border border-white/10 bg-black/20 p-4 text-sm text-white outline-none transition focus:border-accent"
            id="idea"
            onChange={(event) => setIdea(event.target.value)}
            value={idea}
          />
          <div className="mt-4">
            <Button>{t("ai.generate")}</Button>
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

function buildPlan(idea: string, t: (key: string) => string) {
  const focus = idea.trim() || t("ai.emptyIdea");
  return [
    { title: t("ai.name"), body: "SignalForge" },
    { title: t("ai.pitch"), body: t("ai.pitchBody").replace("{idea}", focus.toLowerCase()) },
    { title: t("ai.business"), body: t("ai.businessBody") },
    { title: t("ai.revenue"), body: t("ai.revenueBody") },
    { title: t("ai.mvp"), body: t("ai.mvpBody") },
    { title: t("ai.marketing"), body: t("ai.marketingBody") },
    { title: t("ai.funding"), body: t("ai.fundingBody") },
    { title: t("ai.stack"), body: t("ai.stackBody") }
  ];
}
