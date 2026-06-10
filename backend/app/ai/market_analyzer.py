from app.schemas.ai import OpportunityScore


def score_opportunity(idea: str) -> OpportunityScore:
    base = min(95, max(55, len(idea) * 1.6))
    demand = round(base, 2)
    competition = round(max(25, 88 - len(idea) * 0.7), 2)
    feasibility = round(min(90, 58 + len(idea) * 0.6), 2)
    revenue = round(min(92, 62 + len(idea) * 0.55), 2)
    opportunity = round((demand * 0.35) + ((100 - competition) * 0.25) + (feasibility * 0.2) + (revenue * 0.2), 2)
    return OpportunityScore(
        demand_score=demand,
        competition_score=competition,
        feasibility_score=feasibility,
        revenue_score=revenue,
        opportunity_score=opportunity,
    )


def estimate_market_size(industry: str) -> dict:
    return {"industry": industry, "tam": "$8.5B", "sam": "$1.9B", "som": "$140M"}


def estimate_growth(category: str) -> dict:
    return {"category": category, "forecast": "high", "twelve_month_growth": 0.34}
