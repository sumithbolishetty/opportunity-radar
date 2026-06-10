def analyze_trends() -> list[dict]:
    return [
        {"category": "AI compliance", "score": 94, "growth_rate": 42},
        {"category": "Climate permitting", "score": 88, "growth_rate": 31},
        {"category": "Synthetic data governance", "score": 83, "growth_rate": 27},
    ]


def detect_industry_growth(signals: list[dict]) -> dict:
    return {"growth_rate": min(100, len(signals) * 8), "confidence": 0.78}


def detect_hiring_spikes(job_posts: list[dict]) -> dict:
    return {"spike_score": min(100, len(job_posts) * 6), "roles_analyzed": len(job_posts)}


def detect_research_spikes(papers: list[dict]) -> dict:
    return {"research_score": min(100, len(papers) * 5), "papers_analyzed": len(papers)}
