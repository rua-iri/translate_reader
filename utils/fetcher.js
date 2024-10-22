const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export async function fetchWordMeanings(word) {
  try {
    const response = await fetch(`${BASE_API_URL}/word/${word}`);
    const data = await response.json();

    if (!data.data) {
      return [];
    }

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
