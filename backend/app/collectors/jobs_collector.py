from app.collectors.base import BaseCollector


class JobsCollector(BaseCollector):
    source_name = "jobs"

    def fetch(self) -> list[dict]:
        return [{"title": "AI Compliance Lead", "company": "FintechCo", "industry": "RegTech"}]
