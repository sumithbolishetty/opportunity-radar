# Opportunity Radar

Opportunity Radar is an AI-powered startup opportunity discovery platform. It scans market signals, identifies gaps, scores demand and competition, and turns early signals into startup plans.

## What Is Included

- `frontend/`: Next.js, Tailwind CSS, Framer Motion, Lucide Icons, and Recharts UI.
- `backend/`: FastAPI, SQLAlchemy, JWT utilities, Redis/Celery task scaffolding, collectors, and AI modules.
- `speckit/`: Product specification kit.
- `docs/`: Architecture notes.
- `docker-compose.yml`: PostgreSQL and Redis for local development.

## Frontend Pages

- Landing page
- Dashboard
- Opportunity feed
- Opportunity details
- AI Co-Founder
- Trend explorer

## Backend Modules

- `trend_engine.py`
- `gap_detector.py`
- `startup_generator.py`
- `market_analyzer.py`
- `ai_cofounder.py`

Collectors are organized under `backend/app/collectors/` for jobs, research, startup launches, GitHub, news, and government sources.

## Local Development

Start infrastructure:

```powershell
docker compose up -d
```

Run the backend:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Run database migrations after PostgreSQL is available:

```powershell
cd backend
.\.venv\Scripts\python.exe -m alembic -c alembic.ini upgrade head
```

If you are using the included Compose file, start Docker Desktop first, then run:

```powershell
docker compose up -d
```

Run the frontend:

```powershell
cd frontend
npm install
npm run dev
```

Then open:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- API docs: `http://localhost:8000/docs`

## Environment

Copy `.env.example` into the environment you use for local development and update secrets before production deployment.

## Current Implementation Notes

The frontend uses seed data to provide a polished product experience immediately. The backend exposes deterministic AI and collector modules that are ready to be connected to real data sources and model providers.
