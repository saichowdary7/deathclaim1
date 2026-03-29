// Death Claim type definitions — no mock data
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
