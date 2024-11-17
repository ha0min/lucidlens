"use server";

import { signIn } from "@/auth";
import { DreamFormData } from "@/types/dto";
import { CreateMemoryResponse } from "@/types/dto";
import { SubmitMCQAnswersResponse, SubmitMCQsRequest } from "@/types/dto";
import { GetDreamImageResponse } from "@/types/dto";
import { GetUserDreamsResponse } from "@/types/dto";

export async function createMemory(data: { userId: string; dreamData: DreamFormData }): Promise<CreateMemoryResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/form`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/get/mcq?dreamId=${dreamId}`,
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

export async function submitMCQAnswers(data: SubmitMCQsRequest): Promise<SubmitMCQAnswersResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/mcq`,
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

export async function getDreamImage(dreamId: string, userId: string): Promise<GetDreamImageResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/image?userId=${userId}&dreamId=${dreamId}`,
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

export async function getUserDreams(userId: string): Promise<GetUserDreamsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/gallery?userId=${userId}`,
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