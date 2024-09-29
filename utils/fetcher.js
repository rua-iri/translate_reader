const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;


export async function fetchWordMeanings(word) {
  const response = await fetch(`${BASE_API_URL}/word/${word}`);
  return await response.json();
}
