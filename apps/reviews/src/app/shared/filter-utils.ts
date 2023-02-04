import { SearchTerm, SearchTermValues } from './filter.model';

// TODO: fine tune filters and their regexps
const allSearchTermRegexps: Record<SearchTerm, RegExp> = {
  Neighbors: /neighbor|location|block|town|city|lancaster/i,
  Cleanliness: /clean|spot|dirty/i,
  Communication: /communication|communicate/i,
  'Back Yard': /yard|deck|grill|patio/i,
  Safety: /safe/i,
  Pricing: /fee|money|expensive|deposit|\$|afford/i,
  'As Described': /describe|descrip|listing|accurate|photo|picture/i,
  Rules: /rule|strict/i,
  Groups: /group/i,
  Parking: /park/i,
  Checkin: /check/i,
  Noise: /noise|loud|quiet/i,
};

export function getEnabledSearchExp(
  searchTermValues: SearchTermValues
): RegExp[] {
  return Object.entries(allSearchTermRegexps)
    .filter(([key]) => searchTermValues[key as SearchTerm])
    .map(([_, value]) => value);
}
