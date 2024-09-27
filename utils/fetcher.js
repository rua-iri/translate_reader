const BASE_API_URL = "";

export async function getWord(word) {
//   const response = await fetch(`${BASE_API_URL}/word`, {
  const response = await fetch(`/sample.json`, {
    body: {
      word: word,
    },
  });

  return await response.json();
}
