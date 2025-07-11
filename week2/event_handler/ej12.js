// Select the form element
const form = document.querySelector('form');

// Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values and log them
  const formData = new FormData(form); // Create a FormData object
  for (let [key, value] of formData.entries()) {// Iterate over the entries in the FormData object
    console.log(`${key}: ${value}`); // Log each key-value pair 
  }
});