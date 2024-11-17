import { useState } from "react";
import { createMemory } from "@/lib/server-actions";
import { CreateMemoryResponse, DreamFormData } from "@/types/dto";

export function useCreateMemory() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateMemoryResponse | null>(null);

  const mutate = async (formData: DreamFormData) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const enrichedData = {
        userId: "28",
        dreamData: formData
      };

      console.log(enrichedData);
      
      const result = await createMemory(enrichedData);
      
      setData(result);
      setIsSuccess(result.success);
      setIsError(!result.success);
      setError(result.errorMessage);

      return result;
    } catch (e) {
      setIsError(true);
      setError(e instanceof Error ? e.message : "An error occurred");
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
