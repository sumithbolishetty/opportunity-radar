from celery import Celery

from app.core.config import settings

celery_app = Celery("opportunity_radar", broker=settings.redis_url, backend=settings.redis_url)
celery_app.conf.task_routes = {"app.services.tasks.*": {"queue": "opportunity-radar"}}
