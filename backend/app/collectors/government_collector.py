from app.collectors.base import BaseCollector


class GovernmentCollector(BaseCollector):
    source_name = "government"

    def fetch(self) -> list[dict]:
        return [{"policy": "AI advertising disclosure rule", "region": "US"}]
