"use server";

import { signIn } from "@/auth";
import { DreamFormData } from "@/types/dto";
import { CreateMemoryResponse } from "@/types/dto";

export async function createMemory(data: { userId: string; dreamData: DreamFormData }): Promise<CreateMemoryResponse> {
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
  
  const response = await fetch(
    `https://3qmxki06bl.execute-api.us-west-2.amazonaws.com/default/get/mcq?dreamId=${dreamId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function login() {
  await signIn("github")
}