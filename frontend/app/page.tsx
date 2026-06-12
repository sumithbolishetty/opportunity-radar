"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, LineChart, Radar, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { useI18n } from "@/lib/i18n";

const features = [
  { icon: Radar, title: "landing.feature1.title", copy: "landing.feature1.copy" },
  { icon: LineChart, title: "landing.feature2.title", copy: "landing.feature2.copy" },
  { icon: Sparkles, title: "landing.feature3.title", copy: "landing.feature3.copy" },
  { icon: BrainCircuit, title: "landing.feature4.title", copy: "landing.feature4.copy" }
];

export default function LandingPage() {
  const { t } = useI18n();
  const scanItems = ["landing.signal1", "landing.signal2", "landing.signal3"];

  return (
    <main>
      <section className="soft-grid relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:min-h-[calc(100vh-73px)] lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 inline-flex rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
              {t("landing.badge")}
            </p>
            <h1 className="max-w-4xl text-[clamp(2.85rem,5.1vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              {t("landing.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t("landing.subtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/opportunities">
                {t("landing.explore")} <ArrowRight size={18} />
              </Button>
              <Button href="/dashboard" variant="ghost">
                {t("landing.demo")}
              </Button>
            </div>
          </motion.div>

          <motion.div className="glass rounded-lg p-4 sm:p-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-primary/30 via-panel to-accent/20 p-4 sm:p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>{t("landing.scan")}</span>
                <span className="text-emerald-300">{t("landing.active")}</span>
              </div>
              {scanItems.map((item, index) => (
                <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-4 lg:p-3 xl:p-4" key={item}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium sm:text-base lg:text-sm xl:text-base">{t(item)}</span>
                    <span className="text-accent">{92 - index * 5}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-accent" style={{ width: `${92 - index * 7}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div className="glass rounded-lg p-5" key={feature.title}>
              <feature.icon className="text-accent" size={24} />
              <h3 className="mt-5 text-lg font-semibold">{t(feature.title)}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{t(feature.copy)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="glass rounded-lg p-6">
          <p className="text-sm text-accent">{t("landing.customerSignal")}</p>
          <p className="mt-4 text-2xl font-semibold">{t("landing.quote")}</p>
          <p className="mt-4 text-sm text-slate-400">{t("landing.person")}</p>
        </div>
        <div className="glass rounded-lg p-6">
          <p className="text-sm text-accent">{t("landing.pricing")}</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold">$49</span>
            <span className="pb-1 text-slate-400">{t("landing.perMonth")}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{t("landing.pricingCopy")}</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
        {t("landing.footer")}
      </footer>
    </main>
  );
}
