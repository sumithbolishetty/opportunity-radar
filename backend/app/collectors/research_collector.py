from app.collectors.base import BaseCollector


class ResearchCollector(BaseCollector):
    source_name = "research"

    def fetch(self) -> list[dict]:
        return [{"title": "Synthetic governance benchmark", "field": "AI safety"}]
