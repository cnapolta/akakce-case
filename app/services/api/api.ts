import axios, { isAxiosError } from "axios";
import { ApiError } from "~/utils/error";

export async function fetchWithErrorHandling<T>(url: string): Promise<T> {
  try {
    const { data } = await axios.get<T>(url);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new ApiError(
        error.response?.status || 500,
        error.response?.statusText || error.message
      );
    }

    throw new ApiError(
      500,
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
}
