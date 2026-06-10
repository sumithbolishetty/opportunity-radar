from fastapi import APIRouter

from app.ai.trend_engine import analyze_trends

router = APIRouter()


@router.get("")
def list_trends() -> list[dict]:
    return analyze_trends()
