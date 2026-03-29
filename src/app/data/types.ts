// Death Claim types — no mock data

export interface DeathClaim {
  id: string;
  claimNumber: string;
  deceasedName: string;
  dateOfDeath: string;
  ageAtDeath: number;
  causeOfDeath: string;
  claimantName: string;
  relationship: string;
  claimantEmail: string;
  claimantPhone: string;
  dateOfClaim: string;
  policyNumber: string;
  amountClaimed: number;
  status: 'Pending' | 'Active' | 'In Review' | 'Approved' | 'Rejected' | 'Closed';
  description: string;
  documents: string[];
}

// The 9 sidebar tabs under Master Death Claim
export const MASTER_TABS = [
  { id: 'tab-1', label: 'Tab 1' },
  { id: 'tab-2', label: 'Tab 2' },
  { id: 'tab-3', label: 'Tab 3' },
  { id: 'tab-4', label: 'Tab 4' },
  { id: 'tab-5', label: 'Tab 5' },
  { id: 'tab-6', label: 'Tab 6' },
  { id: 'tab-7', label: 'Tab 7' },
  { id: 'tab-8', label: 'Tab 8' },
  { id: 'tab-9', label: 'Tab 9' },
] as const;

export type TabId = typeof MASTER_TABS[number]['id'];
