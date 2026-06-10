"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, LineChart, Radar, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

const features = [
  { icon: Radar, title: "Opportunity Detection", copy: "Continuously scan hiring, funding, policy, review, research, and repository signals." },
  { icon: LineChart, title: "Market Gap Analysis", copy: "Score demand, competition, feasibility, and revenue potential before markets get crowded." },
  { icon: Sparkles, title: "Trend Forecasting", copy: "Surface weak signals and momentum shifts with explainable AI trend intelligence." },
  { icon: BrainCircuit, title: "AI Co-Founder", copy: "Turn signals into startup names, pitches, MVP plans, roadmaps, and decks." }
];

export default function LandingPage() {
  return (
    <main>
      <section className="soft-grid relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:min-h-[calc(100vh-73px)] lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 inline-flex rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
              AI-powered startup opportunity intelligence
            </p>
            <h1 className="max-w-4xl text-[clamp(2.85rem,5.1vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Discover Startup Opportunities Before Everyone Else
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              AI continuously scans the world for emerging opportunities, market gaps, and startup ideas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/opportunities">
                Explore Opportunities <ArrowRight size={18} />
              </Button>
              <Button href="/dashboard" variant="ghost">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div className="glass rounded-lg p-4 sm:p-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-primary/30 via-panel to-accent/20 p-4 sm:p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Live opportunity scan</span>
                <span className="text-emerald-300">Active</span>
              </div>
              {["Hiring spike in AI compliance", "Low competition in permit intelligence", "Research growth in synthetic governance"].map((item, index) => (
                <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-4 lg:p-3 xl:p-4" key={item}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium sm:text-base lg:text-sm xl:text-base">{item}</span>
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
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="glass rounded-lg p-6">
          <p className="text-sm text-accent">Customer signal</p>
          <p className="mt-4 text-2xl font-semibold">"Opportunity Radar compresses weeks of market research into a daily operating system for idea discovery."</p>
          <p className="mt-4 text-sm text-slate-400">Maya Chen, Venture Studio Partner</p>
        </div>
        <div className="glass rounded-lg p-6">
          <p className="text-sm text-accent">Pricing</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold">$49</span>
            <span className="pb-1 text-slate-400">per user/month</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">Includes live feeds, AI opportunity scoring, startup plan generation, saved opportunities, and export-ready reports.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
        Opportunity Radar. Built for founders, analysts, and venture teams.
      </footer>
    </main>
  );
}
