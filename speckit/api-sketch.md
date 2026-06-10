# API Sketch

This API sketch is implementation-agnostic and can be adapted to REST, GraphQL, or server actions.

## Opportunities

### List Opportunities

`GET /api/opportunities`

Query parameters:

- `q`
- `category`
- `type`
- `location`
- `remote`
- `deadline_before`
- `deadline_after`
- `tags`
- `sort`
- `page`
- `limit`

### Get Opportunity

`GET /api/opportunities/{id}`

### Create Opportunity

`POST /api/opportunities`

Admin-only.

### Update Opportunity

`PATCH /api/opportunities/{id}`

Admin-only.

### Archive Opportunity

`POST /api/opportunities/{id}/archive`

Admin-only.

## Saved Opportunities

### List Saved Opportunities

`GET /api/me/saved-opportunities`

### Save Opportunity

`POST /api/me/saved-opportunities`

Body:

```json
{
  "opportunity_id": "opp_123",
  "tracking_status": "interested"
}
```

### Update Saved Opportunity

`PATCH /api/me/saved-opportunities/{id}`

Body:

```json
{
  "tracking_status": "applying",
  "notes": "Need transcript before applying.",
  "remind_at": "2026-07-01T09:00:00+05:30"
}
```

### Remove Saved Opportunity

`DELETE /api/me/saved-opportunities/{id}`
