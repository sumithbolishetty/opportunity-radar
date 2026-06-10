from app.schemas.ai import StartupPlan


def generate_startup_plan(idea: str) -> StartupPlan:
    focus = idea.strip() or "a high-signal startup idea"
    return StartupPlan(
        startup_name="SignalForge",
        elevator_pitch=f"SignalForge converts {focus.lower()} into a validated, investor-ready startup plan.",
        business_model="B2B SaaS with usage-based intelligence and enterprise workflow integrations.",
        revenue_streams=["Team subscriptions", "Premium report exports", "Enterprise connectors", "Advisory onboarding"],
        mvp_features=["Signal ingestion", "Opportunity scoring", "Business plan generator", "Saved opportunities", "Report exports"],
        marketing_strategy=["Founder-led reports", "Design partner interviews", "Niche benchmark pages", "Partner webinars"],
        funding_roadmap=["Validate with 5 design partners", "Raise pre-seed after paid pilots", "Raise seed after repeatable acquisition"],
        tech_stack=["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "LLM provider abstraction"],
    )


def generate_pitch_deck(idea: str) -> dict:
    return {
        "slides": [
            "Problem",
            "Market",
            "Solution",
            "Product",
            "Business Model",
            "Go-To-Market",
            "Competition",
            "Team",
            "Ask",
        ],
        "idea": idea,
    }
