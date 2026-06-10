from fastapi import APIRouter, Query

from app.ai.gap_detector import detect_gap
from app.ai.startup_generator import generate_opportunities
from app.schemas.opportunity import OpportunityCreate, OpportunityRead

router = APIRouter()

SEED_OPPORTUNITIES = [
    {
        "id": 1,
        "title": "Compliance Copilot for AI-Generated Marketing",
        "description": "Automated review for AI-created claims across regulated marketing teams.",
        "industry": "RegTech",
        "demand_score": 92,
        "competition_score": 38,
        "feasibility_score": 82,
        "revenue_score": 88,
        "created_at": "2026-06-08T09:00:00Z",
    },
    {
        "id": 2,
        "title": "Climate Permit Radar",
        "description": "Permitting intelligence for climate infrastructure builders.",
        "industry": "Climate",
        "demand_score": 87,
        "competition_score": 41,
        "feasibility_score": 76,
        "revenue_score": 91,
        "created_at": "2026-06-07T09:00:00Z",
    },
]


@router.get("", response_model=list[OpportunityRead])
def list_opportunities(industry: str | None = None, q: str | None = Query(default=None)) -> list[dict]:
    results = SEED_OPPORTUNITIES
    if industry:
        results = [item for item in results if item["industry"].lower() == industry.lower()]
    if q:
        results = [item for item in results if q.lower() in item["title"].lower() or q.lower() in item["description"].lower()]
    return results


@router.post("", response_model=OpportunityRead)
def create_opportunity(payload: OpportunityCreate) -> dict:
    return {"id": 999, "created_at": "2026-06-09T09:00:00Z", **payload.model_dump()}


@router.get("/generated")
def generated_opportunities() -> list[dict]:
    return generate_opportunities()


@router.get("/{opportunity_id}/gap")
def opportunity_gap(opportunity_id: int) -> dict:
    return detect_gap(opportunity_id)
