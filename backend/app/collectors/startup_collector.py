from app.collectors.base import BaseCollector


class StartupCollector(BaseCollector):
    source_name = "startup_launches"

    def fetch(self) -> list[dict]:
        return [{"name": "PermitFlow AI", "category": "Climate"}]
