def generate_opportunities() -> list[dict]:
    return [
        {
            "title": "AI Policy Change Monitor",
            "industry": "RegTech",
            "description": "Tracks policy changes and maps them to operational startup workflows.",
            "revenue_model": "Subscription with premium alerts and audit exports.",
        },
        {
            "title": "Research-to-MVP Scout",
            "industry": "AI Tools",
            "description": "Turns fast-growing research clusters into validated product briefs.",
            "revenue_model": "Usage-based SaaS for founders and venture studios.",
        },
    ]


def generate_business_ideas(context: str) -> list[str]:
    return [
        f"Vertical workflow software for {context}",
        f"Signal intelligence dashboard for {context}",
        f"Compliance and reporting automation for {context}",
    ]


def generate_revenue_models(industry: str) -> list[str]:
    return [
        f"{industry} team subscription",
        "Usage-based AI analysis credits",
        "Enterprise integration and compliance package",
    ]
