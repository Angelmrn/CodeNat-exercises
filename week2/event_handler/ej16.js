// Initialize the counter from localStorage or set it to 0 if not found
let counter = parseInt(localStorage.getItem('counter')) || 0;

// Create a display element to show the counter value
const counterDisplay = document.createElement('p');// Create a paragraph element for the counter display
counterDisplay.id = 'counterDisplay';
counterDisplay.textContent = `Counter: ${counter}`;
document.body.appendChild(counterDisplay); // Add the display to the DOM

// Create an increment button
const incrementButton = document.createElement('button');
incrementButton.textContent = 'Increment';
document.body.appendChild(incrementButton); // Add the button to the DOM

// Add click event to the increment button
incrementButton.addEventListener('click', () => {
  counter++; // Increment the counter
  localStorage.setItem('counter', counter); // Save the counter value to localStorage
  counterDisplay.textContent = `Counter: ${counter}`; // Update the display
});