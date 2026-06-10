import { Opportunity } from "@/types/opportunity";

export const opportunities: Opportunity[] = [
  {
    id: "compliance-copilot",
    title: "Compliance Copilot for AI-Generated Marketing",
    description: "Regulated teams need automated review for AI-created claims across ads, landing pages, and sales collateral.",
    industry: "RegTech",
    country: "United States",
    demandScore: 92,
    competitionScore: 38,
    feasibilityScore: 82,
    revenueScore: 88,
    dateDetected: "2026-06-08",
    problem: "Marketing teams are adopting generative AI faster than compliance teams can review content.",
    whyItExists: "AI content volume is rising, but review workflows still depend on manual policy interpretation.",
    potentialUsers: ["Fintech marketers", "Healthcare growth teams", "Legal reviewers", "Agency operators"],
    competitors: ["Manual legal review", "Generic brand governance tools", "Enterprise GRC suites"],
    revenueModel: "Seat-based SaaS with usage tiers for scanned assets and premium audit exports.",
    risks: ["Regulatory nuance by geography", "False positives that slow creative teams", "Enterprise procurement cycles"],
    aiInsights: ["Hiring for AI policy roles rose sharply.", "Product review data shows frustration with slow approval loops."],
    marketSizeEstimate: "$1.8B serviceable market across regulated content operations.",
    growthForecast: "High growth for 24 months as AI content governance budgets mature."
  },
  {
    id: "climate-permit-radar",
    title: "Climate Permit Radar for Infrastructure Builders",
    description: "A permitting intelligence layer for climate hardware, charging networks, and grid projects.",
    industry: "Climate",
    country: "Global",
    demandScore: 87,
    competitionScore: 41,
    feasibilityScore: 76,
    revenueScore: 91,
    dateDetected: "2026-06-07",
    problem: "Infrastructure teams lose months navigating fragmented permitting and policy changes.",
    whyItExists: "Government incentives and local rules change faster than project planning cycles.",
    potentialUsers: ["EV charging operators", "Solar developers", "Battery storage teams", "Municipal consultants"],
    competitors: ["Policy newsletters", "Consultants", "Local government portals"],
    revenueModel: "Annual platform subscription plus premium jurisdiction monitoring.",
    risks: ["Data freshness", "Local rule complexity", "Need for policy-domain expertise"],
    aiInsights: ["Government policy updates cluster around grid modernization.", "Funding announcements imply near-term procurement demand."],
    marketSizeEstimate: "$2.4B in workflow and intelligence spend for climate infrastructure.",
    growthForecast: "Strong growth tied to public funding cycles and grid investment."
  },
  {
    id: "developer-toil-scanner",
    title: "Developer Toil Scanner for Internal Tools",
    description: "Analyze tickets, repos, and chat to identify repeated engineering toil worth automating.",
    industry: "Developer Tools",
    country: "Remote",
    demandScore: 84,
    competitionScore: 52,
    feasibilityScore: 89,
    revenueScore: 79,
    dateDetected: "2026-06-06",
    problem: "Engineering teams waste time on repeated internal workflows that never become roadmap priorities.",
    whyItExists: "Toil is spread across tickets, chat, runbooks, and code comments, making it hard to quantify.",
    potentialUsers: ["Platform teams", "Engineering managers", "DevOps leads", "Internal tools teams"],
    competitors: ["Observability tools", "Project management dashboards", "Manual retrospectives"],
    revenueModel: "Per-engineer SaaS pricing with enterprise connectors.",
    risks: ["Sensitive source data", "Connector maintenance", "Crowded developer productivity market"],
    aiInsights: ["GitHub trends show growth in internal developer platform tooling.", "Job posts mention platform engineering more frequently."],
    marketSizeEstimate: "$3.1B across developer productivity and platform engineering tooling.",
    growthForecast: "Moderate to high growth as engineering efficiency remains board-level."
  }
];

export const growthData = [
  { month: "Jan", opportunities: 18, demand: 48 },
  { month: "Feb", opportunities: 24, demand: 55 },
  { month: "Mar", opportunities: 35, demand: 62 },
  { month: "Apr", opportunities: 47, demand: 70 },
  { month: "May", opportunities: 61, demand: 78 },
  { month: "Jun", opportunities: 79, demand: 86 }
];

export const industryData = [
  { name: "AI Ops", score: 91 },
  { name: "Climate", score: 87 },
  { name: "RegTech", score: 85 },
  { name: "Health", score: 78 },
  { name: "DevTools", score: 74 }
];

export const trendRows = [
  { label: "Agentic workflow audits", category: "AI", growth: "+42%", signal: 94 },
  { label: "Grid interconnection software", category: "Climate", growth: "+31%", signal: 88 },
  { label: "Synthetic data governance", category: "RegTech", growth: "+27%", signal: 83 },
  { label: "Research ops automation", category: "Health", growth: "+22%", signal: 77 }
];
