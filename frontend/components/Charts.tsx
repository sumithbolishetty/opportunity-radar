"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { growthData, industryData } from "@/services/mockData";

export function GrowthChart() {
  return (
    <div className="glass h-80 rounded-lg p-5">
      <h3 className="text-lg font-semibold">Opportunity Growth</h3>
      <ResponsiveContainer height="85%" width="100%">
        <AreaChart data={growthData}>
          <defs>
            <linearGradient id="growth" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.75} />
              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.08} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="month" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip contentStyle={{ background: "#111827", border: "1px solid rgba(255,255,255,0.12)" }} />
          <Area dataKey="opportunities" fill="url(#growth)" stroke="#06B6D4" strokeWidth={2} type="monotone" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IndustryChart() {
  return (
    <div className="glass h-80 rounded-lg p-5">
      <h3 className="text-lg font-semibold">Industry Demand</h3>
      <ResponsiveContainer height="85%" width="100%">
        <BarChart data={industryData}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip contentStyle={{ background: "#111827", border: "1px solid rgba(255,255,255,0.12)" }} />
          <Bar dataKey="score" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
