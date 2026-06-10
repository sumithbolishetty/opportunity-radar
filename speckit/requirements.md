# Requirements

## Functional Requirements

### Opportunity Discovery

- Users can view a list of opportunities.
- Users can search opportunities by keyword.
- Users can filter by category, deadline, eligibility, location, and opportunity type.
- Users can sort by deadline, newest, relevance, and recently updated.
- Users can open a detail page for each opportunity.

### Opportunity Details

Each opportunity should include:

- Title
- Organization
- Description
- Category
- Opportunity type
- Location or remote status
- Eligibility criteria
- Benefits or compensation
- Application deadline
- Source URL
- Tags
- Verification or freshness status

### Saving And Tracking

- Users can save opportunities.
- Users can mark saved opportunities as interested, applying, applied, won, rejected, or archived.
- Users can add private notes to saved opportunities.
- Users can see upcoming deadlines for saved opportunities.

### Administration

- Admins can create, update, and archive opportunities.
- Admins can mark opportunities as verified.
- Admins can flag listings that are expired, duplicated, or low quality.

## Non-Functional Requirements

- Search and filtering should feel fast for common list sizes.
- The UI should be responsive on mobile and desktop.
- Opportunity data should preserve original source links.
- Date handling should be explicit and timezone-aware.
- The system should support future import pipelines without redesigning core entities.

## Acceptance Criteria

- A user can find a relevant opportunity within three interactions from the main listing screen.
- A user can save an opportunity and later see it in a dedicated saved view.
- An admin can add a new opportunity with all required fields.
- Expired opportunities are visually distinct from active opportunities.
- Opportunities missing deadlines can still be listed, but they are clearly labeled.
