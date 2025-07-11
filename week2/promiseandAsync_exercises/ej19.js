async function fetchInParallel(urls) {
  const startTime = performance.now(); // Start timing the fetch operation

  const results = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));// Fetch all URLs in parallel

  const endTime = performance.now(); // End timing the fetch operation

  console.log(`Parallel fetch completed in ${(endTime - startTime).toFixed(2)} ms`);
  return results; // Return the results of all fetch operations
}

// Example usage for parallel fetch
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

fetchInParallel(urls).then((results) => console.log('Parallel Results:', results));