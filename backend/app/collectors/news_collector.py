from app.collectors.base import BaseCollector


class NewsCollector(BaseCollector):
    source_name = "news"

    def fetch(self) -> list[dict]:
        return [{"headline": "New funding for grid modernization", "topic": "Climate"}]
