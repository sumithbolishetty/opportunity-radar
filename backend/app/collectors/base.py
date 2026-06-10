from abc import ABC, abstractmethod


class BaseCollector(ABC):
    source_name: str

    @abstractmethod
    def fetch(self) -> list[dict]:
        raise NotImplementedError

    def clean(self, rows: list[dict]) -> list[dict]:
        return [{key: value for key, value in row.items() if value not in (None, "")} for row in rows]

    def store(self, rows: list[dict]) -> int:
        return len(rows)

    def analyze(self, rows: list[dict]) -> dict:
        return {"source": self.source_name, "records": len(rows), "signal_strength": min(100, len(rows) * 10)}

    def run(self) -> dict:
        fetched = self.fetch()
        cleaned = self.clean(fetched)
        stored = self.store(cleaned)
        analysis = self.analyze(cleaned)
        return {"stored": stored, **analysis}
