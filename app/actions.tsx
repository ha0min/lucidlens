"use server";

import { DreamFormData } from "@/models/dto";

export async function createMemory(formData: DreamFormData) {
  console.log(formData);
  return { success: true };
}
