export type SearchTerm =
  | 'Neighbors'
  | 'Cleanliness'
  | 'Communication'
  | 'Back Yard'
  | 'Safety'
  | 'Pricing'
  | 'As Described'
  | 'Rules'
  | 'Groups'
  | 'Parking'
  | 'Checkin'
  | 'Noise';

export const searchTerms: SearchTerm[] = [
  'Neighbors',
  'Cleanliness',
  'Communication',
  'Back Yard',
  'Safety',
  'Pricing',
  'As Described',
  'Rules',
  'Groups',
  'Parking',
  'Checkin',
  'Noise',
];

export type SearchTermValues = Record<SearchTerm, boolean>;

export const searchTermValues: SearchTermValues = {
  Neighbors: false,
  Cleanliness: false,
  Communication: false,
  'Back Yard': false,
  Safety: false,
  Pricing: false,
  'As Described': false,
  Rules: false,
  Groups: false,
  Parking: false,
  Noise: false,
  Checkin: false,
};

export type SearchTermToggleHandler = (
  searchTerm: SearchTerm,
  checked: boolean
) => void;
