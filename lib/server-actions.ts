"use server";

import { DreamFormData } from "@/types/dto";
import { CreateMemoryResponse } from "@/types/dto";

export async function createMemory(data: DreamFormData): Promise<CreateMemoryResponse> {
  const response = await fetch(
    "https://3qmxki06bl.execute-api.us-west-2.amazonaws.com/default/post/form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getMCQs(dreamId: string) {
  // add delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    success: true,
    data: [
      {
        question: "How did you feel in this dream?",
        emoji: "🤔",
        options: ["Happy", "Scared", "Confused", "Peaceful"]
      },

      {
        question: "What was the overall atmosphere?", 
        emoji: "🌟",
        options: ["Mysterious", "Threatening", "Joyful", "Surreal"]
      },
      {
        question: "Did you recognize anyone in the dream?",
        emoji: "👥",
        options: ["Family member", "Friend", "Stranger", "No one"]
      }
    ],
    errorMessage: null
  };
  // const response = await fetch(
  //   `https://29pghtak5f.execute-api.us-west-2.amazonaws.com/default/api/get/mcqs?dreamId=${dreamId}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  // return response.json();
}