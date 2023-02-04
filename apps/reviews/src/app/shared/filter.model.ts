export type SearchTerm =
  | 'Neighbors'
  | 'Cleanliness'
  | 'Communication'
  | 'Back Yard'
  | 'Safety'
  | 'Fees';

export const searchTerms: SearchTerm[] = [
  'Neighbors',
  'Cleanliness',
  'Communication',
  'Back Yard',
  'Safety',
  'Fees',
];

export type SearchTermValues = Record<SearchTerm, boolean>;

export const searchTermValues: SearchTermValues = {
  Neighbors: false,
  Cleanliness: false,
  Communication: false,
  'Back Yard': false,
  Safety: false,
  Fees: false,
};

export type SearchTermToggleHandler = (
  searchTerm: SearchTerm,
  checked: boolean
) => void;
