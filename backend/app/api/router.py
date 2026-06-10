from fastapi import APIRouter

from app.api.routes import ai, auth, opportunities, trends

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(opportunities.router, prefix="/opportunities", tags=["opportunities"])
api_router.include_router(trends.router, prefix="/trends", tags=["trends"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
