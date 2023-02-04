import { SearchTerm, SearchTermValues } from './filter.model';

// TODO: fine tune filters and their regexps
const allSearchTermRegexps: Record<SearchTerm, RegExp> = {
  Neighbors: /neighbor/i,
  Cleanliness: /clean/i,
  Communication: /communication/i,
  'Back Yard': /yard|deck|grill/i,
  Safety: /safe/i,
  Fees: /fee|money|expensive/i,
};

export function getEnabledSearchExp(
  searchTermValues: SearchTermValues
): RegExp[] {
  return Object.entries(allSearchTermRegexps)
    .filter(([key]) => searchTermValues[key as SearchTerm])
    .map(([_, value]) => value);
}
