import type { CandidateListResponse } from '@components/candidate-card/types/candidate-list-response.type';

import csikLajos from './csik-lajos.json';

export const candidateDataResponses: CandidateListResponse[] = [
  csikLajos as unknown as CandidateListResponse,
];
