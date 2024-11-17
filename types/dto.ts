export interface Fragment {
  location: string;
  interaction: string;
  person: string;
  relation: string;
}

export interface DreamFormData {
  mood: string;
  protagonist: string;
  fragment: Fragment;
}

export interface CreateMemoryResponse {
  success: boolean;
  data: {
    dreamId: string;
  } | null;
  errorMessage: string | null;
}

export interface Question {
  question: string;
  emoji: string;
  options: string[];
}

export interface GetMCQsResponse {
  success: boolean;
  data: Question[] | null;
  errorMessage: string | null;
}