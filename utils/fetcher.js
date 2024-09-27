const BASE_API_URL = "";

export async function fetchWordMeanings(word) {
  // const response = await fetch(`${BASE_API_URL}/word`, {
  //   body: {
  //     word: word,
  //   },
  // });

  const response = await fetch(`/sample.json`);

  return await response.json();
}
