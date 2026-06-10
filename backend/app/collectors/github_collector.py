from app.collectors.base import BaseCollector


class GithubCollector(BaseCollector):
    source_name = "github"

    def fetch(self) -> list[dict]:
        return [{"repo": "agent-workflow-auditor", "stars": 1280}]
