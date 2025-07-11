function debounce(callback, delay) {
  let timer; 

  return function (...args) {
    clearTimeout(timer); // Clear the previous timeout
    timer = setTimeout(() => callback(...args), delay); // Set a new timeout
  };
}

// Input event callback
function handleInput(event) {
  console.log('API call for:', event.target.value); // Simulate API call
  alert('API call for: ' + event.target.value); // Alert the input value
}

// Attach the debounced input event listener
const inputBox = document.createElement('input'); // Create a text box
inputBox.type = 'text';
inputBox.placeholder = 'Type something...'; // Add a placeholder
document.body.appendChild(inputBox); // Add the text box to the DOM

inputBox.addEventListener('input', debounce(handleInput, 300)); // Debounce input with 300ms delay