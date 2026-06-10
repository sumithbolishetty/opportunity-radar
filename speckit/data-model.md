# Data Model

## Entities

### Opportunity

- `id`
- `title`
- `organization`
- `description`
- `category`
- `type`
- `location`
- `is_remote`
- `eligibility`
- `benefits`
- `deadline_at`
- `source_url`
- `tags`
- `status`
- `verification_status`
- `created_at`
- `updated_at`
- `published_at`

### User

- `id`
- `name`
- `email`
- `role`
- `created_at`
- `updated_at`

### SavedOpportunity

- `id`
- `user_id`
- `opportunity_id`
- `tracking_status`
- `notes`
- `remind_at`
- `created_at`
- `updated_at`

### OpportunitySource

- `id`
- `name`
- `url`
- `source_type`
- `last_checked_at`
- `trust_level`

## Relationships

- A user can save many opportunities.
- An opportunity can be saved by many users.
- An opportunity can optionally belong to a source.
- Admin users can create and update opportunities.

## Status Values

### Opportunity Status

- `draft`
- `published`
- `expired`
- `archived`

### Verification Status

- `unverified`
- `verified`
- `needs_review`

### Tracking Status

- `interested`
- `applying`
- `applied`
- `won`
- `rejected`
- `archived`
