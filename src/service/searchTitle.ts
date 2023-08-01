import { ResultResponse } from "../models/results";

export async function searchTitle(title: string): Promise<ResultResponse> {
  const url = `${import.meta.env.VITE_API_URL}/title?title=${title}&country=ar&show_type=all&output_language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Something failed");
  }

  return await response.json();
}
