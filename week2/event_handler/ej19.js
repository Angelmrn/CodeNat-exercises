function getLocation() {
  const output = document.getElementById('output'); // Element to display location info

  // Check if the browser supports Geolocation
  if (!navigator.geolocation) {
    output.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  // Request the user's location
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Success callback: Display the coordinates
      const latitude = position.coords.latitude; // Extract latitude
      const longitude = position.coords.longitude; // Extract longitude
      output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    },
    (error) => {
      // Error callback: Display an error message
      output.textContent = `Error: Unable to retrieve your location (${error.message})`;
    }
  );
}

const locationButton = document.createElement('button');// Create a button to trigger the location request
locationButton.textContent = 'Get Location'; // Button text
locationButton.onclick = getLocation; // Set click event to trigger getLocation
document.body.appendChild(locationButton); // Add button to the DOM

// Create an element to display the location output
const output = document.createElement('p');
output.id = 'output'; // Set ID for reference
document.body.appendChild(output); // Add output element to the DOM
  
  
  