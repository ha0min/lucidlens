"use server";

import { DreamFormData } from "@/types/dto";

export async function createMemory(data: DreamFormData) {
  const response = await fetch(
    "https://29pghtak5f.execute-api.us-west-2.amazonaws.com/default/post/dreamForm",
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