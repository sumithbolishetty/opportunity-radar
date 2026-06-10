from datetime import datetime

from pydantic import BaseModel, Field


class OpportunityBase(BaseModel):
    title: str
    description: str
    industry: str
    demand_score: float = Field(ge=0, le=100)
    competition_score: float = Field(ge=0, le=100)
    feasibility_score: float = Field(ge=0, le=100)
    revenue_score: float = Field(ge=0, le=100)


class OpportunityCreate(OpportunityBase):
    pass


class OpportunityRead(OpportunityBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class TrendRead(BaseModel):
    id: int
    category: str
    score: float
    growth_rate: float

    class Config:
        from_attributes = True


class ReportRead(BaseModel):
    id: int
    opportunity_id: int
    report_type: str
    generated_content: str

    class Config:
        from_attributes = True
