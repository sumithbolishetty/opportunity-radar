# Opportunity Radar Architecture

Opportunity Radar is organized as a monorepo with a Next.js frontend and a FastAPI backend.

## Frontend

- Next.js app router
- Tailwind CSS design system
- Framer Motion for page-level animation
- Lucide Icons for interface controls
- Recharts for dashboards and trend exploration

## Backend

- FastAPI application under `backend/app`
- SQLAlchemy models for users, opportunities, trends, and reports
- Pydantic schemas for API contracts
- Redis and Celery for background collectors
- Separate AI modules for trend detection, gap analysis, startup generation, market analysis, and AI co-founder output

## Data Flow

1. Collectors fetch raw signals from jobs, research, startup launches, GitHub, news, and government sources.
2. Cleaning normalizes source records into analysis-ready rows.
3. AI modules score demand, competition, feasibility, revenue, and growth.
4. Opportunities and reports are exposed through the API.
5. The frontend renders dashboards, feeds, details, and generated startup plans.
