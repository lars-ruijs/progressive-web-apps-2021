import fetch from 'node-fetch';

// Constant API settings (API base URL and API key)
const apiBase = "https://api.nasa.gov/";
const key = "O0U6zcZfaAGpJjFRQ8kcpVdts9kgWlh7PnjXiQaK";

// Fetch API data (based on a slug and optional query)
export function getData(slug, query) {
  const data = fetch(
    `${apiBase}${slug}?api_key=${key}${query ? "&" + query : ""}`
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error with fetch", error));
  return data;
}