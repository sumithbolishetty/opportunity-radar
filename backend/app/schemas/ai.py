from pydantic import BaseModel


class StartupIdeaRequest(BaseModel):
    idea: str


class StartupPlan(BaseModel):
    startup_name: str
    elevator_pitch: str
    business_model: str
    revenue_streams: list[str]
    mvp_features: list[str]
    marketing_strategy: list[str]
    funding_roadmap: list[str]
    tech_stack: list[str]


class OpportunityScore(BaseModel):
    demand_score: float
    competition_score: float
    feasibility_score: float
    revenue_score: float
    opportunity_score: float
