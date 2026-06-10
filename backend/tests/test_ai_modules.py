from app.ai.ai_cofounder import generate_startup_plan
from app.ai.market_analyzer import score_opportunity


def test_score_opportunity_returns_weighted_score() -> None:
    score = score_opportunity("AI compliance for marketing")
    assert score.opportunity_score > 0
    assert score.demand_score >= 55


def test_ai_cofounder_generates_plan() -> None:
    plan = generate_startup_plan("Climate permit intelligence")
    assert plan.startup_name
    assert "Next.js" in plan.tech_stack
