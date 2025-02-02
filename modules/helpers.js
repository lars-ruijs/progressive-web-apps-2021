import fetch from 'node-fetch';

// Fetch API data (based on a slug and optional query)
export function getData(slug, query) {
  const data = fetch(
    `${process.env.API_BASE}${slug}?api_key=${process.env.API_KEY}${query ? "&" + query : ""}`
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error with fetch", error));
  return data;
}

// Generate a random number between 0 and a given maximum value
export function randomNum(max) {
    const random = Math.floor(Math.random() * +max);
    return random;
  }

// Function used to return a human readable date (in US format)
// Example input: "2020-11-06". Example output: "November 6, 2020"
export function getDate(date) {
    const dateObject = new Date(date);
    const day = dateObject.toLocaleString("en-US", { day: "numeric" });
    const month = dateObject.toLocaleString("en-US", { month: "long" });
    const year = dateObject.toLocaleString("en-US", { year: "numeric" });
    return `${month} ${day}, ${year}`;
}