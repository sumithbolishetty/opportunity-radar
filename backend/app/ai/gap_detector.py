def detect_gap(opportunity_id: int) -> dict:
    return {
        "opportunity_id": opportunity_id,
        "demand": "high",
        "competition": "moderate",
        "gap_score": 84,
        "reason": "Demand signals outpace direct product launches and review coverage.",
    }


def find_market_gaps(signals: list[dict]) -> list[dict]:
    gaps = []
    for signal in signals:
        demand = float(signal.get("demand_score", 0))
        competition = float(signal.get("competition_score", 100))
        if demand >= 75 and competition <= 55:
            gaps.append({**signal, "gap_score": round(demand - (competition * 0.45), 2)})
    return gaps
