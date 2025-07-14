function make_Get_Request(url) {
  return new Promise((resolve, reject) => {
    fetch(url) // Make a request to the URL
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data)) // Resolve the promise with the response data
      .catch(error => reject(error));
  });
}

make_Get_Request('https://dog.ceo/api/breeds/image/random')
  .then(data => {
    console.log('Response data: ' + data);
  })
  .catch(error => {
    console.log('Error: ' + error.message);
  });