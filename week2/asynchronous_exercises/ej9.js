function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController(); // Create an AbortController to manage the request
  const { signal } = controller; // Get the signal from the controller to listen for abort events

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal }) // Use the Fetch API to get data from the URL
    .then(response => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out.');
      } else {
        throw error;
      }
    });
}
// Usage example:
const url = 'https://jsonplaceholder.typicode.com/posts/1';
//const timeoutMs = 5000;  
const timeoutMs = 50;  
console.log("Timeout milliseconds: "+timeoutMs)

fetchDataWithTimeout(url, timeoutMs)
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });