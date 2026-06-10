from fastapi import APIRouter

from app.ai.ai_cofounder import generate_startup_plan
from app.ai.market_analyzer import score_opportunity
from app.schemas.ai import OpportunityScore, StartupIdeaRequest, StartupPlan

router = APIRouter()


@router.post("/cofounder", response_model=StartupPlan)
def cofounder(payload: StartupIdeaRequest) -> StartupPlan:
    return generate_startup_plan(payload.idea)


@router.post("/score", response_model=OpportunityScore)
def score(payload: StartupIdeaRequest) -> OpportunityScore:
    return score_opportunity(payload.idea)
