export interface Fragment {
  location: string;
  interaction: string;
  entity: string;
  relation: string;
}

export interface DreamFormData {
  mood: string;
  protagonist: string;
  fragments: Fragment;
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

interface MCQ {
  question: string;
  emoji: string;
  options: string[];
}

export interface GetMCQsResponse {
  success: boolean;
  errorMessage: string;
  data: {
    dreamId: string;
    mcqs: MCQ[];
  };
}