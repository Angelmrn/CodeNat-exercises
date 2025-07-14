function fetchDataFromAPI(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function fetchMultipleAPIs(apiUrls) {
  const promises = apiUrls.map(url => fetchDataFromAPI(url));// Create a promise for each API URL
  return Promise.all(promises);// Wait for all promises to resolve
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {// Handle the results of all API calls
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });