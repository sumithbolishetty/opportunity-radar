from app.collectors import GithubCollector, GovernmentCollector, JobsCollector, NewsCollector, ResearchCollector, StartupCollector
from app.services.celery_app import celery_app


@celery_app.task(name="app.services.tasks.run_collectors")
def run_collectors() -> list[dict]:
    collectors = [
        JobsCollector(),
        ResearchCollector(),
        StartupCollector(),
        GithubCollector(),
        NewsCollector(),
        GovernmentCollector(),
    ]
    return [collector.run() for collector in collectors]
