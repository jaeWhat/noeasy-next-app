import axios from "axios";

export function handleError(error: unknown, context: string) {
  console.log("handleError error", error);
  if (axios.isAxiosError(error)) {
    console.error(`${context} 실패:`, error.response?.data || error.message);
  } else {
    console.error(`${context} 실패:`, error);
  }
}