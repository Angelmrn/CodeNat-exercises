function fetchDataWithRetry(url, maxRetries) {
  return new Promise((resolve, reject) => {
    let tries = 0;// set the initial tries count to 0
    const fetchData = () => {
      fetch(url)// Use the Fetch API to get data from the URL
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => {
          tries++;
          //Verify if the number of tries is less than or equal to the maximum retries
          if (tries <= maxRetries) {
            console.log(`Request failed. Retrying (${tries}/${maxRetries})...`);
            fetchData();
          } else {
            // If the maximum retries have been reached, reject the promise with an error
            reject(new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`));
          }
        });
    };

    fetchData();
  });
}

// Usage example:
const apiUrl = 'https://jsonplaceholder.typicode.com/posts3';
//const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
console.log("URL-> ",apiUrl);
const maxRetries = 3;

fetchDataWithRetry(apiUrl, maxRetries)
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });