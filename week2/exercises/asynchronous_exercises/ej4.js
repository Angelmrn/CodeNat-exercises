function downloadContents(urls) {
  const promises = urls.map(url => {// Create a promise for each URL
    return new Promise((resolve, reject) => {
      fetch(url) // Download the content from the URL
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => resolve(data)) // Resolve the promise with the content
        .catch(error => reject(error));
    });
  });

  return Promise.all(promises);
}

// Usage example:
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

downloadContents(urls)
  .then(contents => {
    console.log('Downloaded contents:', contents);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });