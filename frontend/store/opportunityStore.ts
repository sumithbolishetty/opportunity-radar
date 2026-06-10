export type OpportunityFilters = {
  industry?: string;
  competitionLevel?: string;
  demandLevel?: string;
  country?: string;
  timeRange?: string;
};

export const defaultOpportunityFilters: OpportunityFilters = {
  timeRange: "30d"
};
