async function fetchData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint
  const resultContainer = document.getElementById('result'); // Div to display results

  try {
    const response = await fetch(apiUrl); // Fetch data from the API

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 responses
    }

    const data = await response.json(); // Parse the response as JSON
    displayResults(data); // Call function to display the results
  } catch (error) {
    console.error('Fetch failed:', error); // Log errors to the console
    resultContainer.textContent = 'Error fetching data. Please try again later.'; // Show error message
  }
}

function displayResults(data) {
  const resultContainer = document.getElementById('result'); // Div to display results
  resultContainer.innerHTML = ''; // Clear previous content

  data.slice(0, 5).forEach((item) => {
    const p = document.createElement('p'); // Create a paragraph for each result
    p.textContent = `Post ${item.id}: ${item.title}`; // Add the title of each post
    resultContainer.appendChild(p); // Append the paragraph to the container
  });
}

const fetchButton = document.createElement('button');// Add a button to trigger data fetch
fetchButton.textContent = 'Fetch Data'; // Button text
fetchButton.onclick = fetchData; // Set click event to the function fetch data
document.body.appendChild(fetchButton); // Add button to the DOM

// Add a container to display results
const resultContainer = document.createElement('div');
resultContainer.id = 'result'; // Set ID for styling or reference
document.body.appendChild(resultContainer); // Add container to the DOM