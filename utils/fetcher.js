const BASE_API_URL = "http://192.168.3.35:3031";

export async function fetchWordMeanings(word) {
  const response = await fetch(`${BASE_API_URL}/word/${word}`);
  return await response.json();
}
