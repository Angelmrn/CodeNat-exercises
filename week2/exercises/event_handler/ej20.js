const textBox = document.createElement('input');  // Create input box for text
textBox.type = 'text'; // Set the input type to text
textBox.placeholder = 'Type something to copy'; // Add a placeholder
document.body.appendChild(textBox); // Add the text box to the DOM

// Create button for copying text
const copyButton = document.createElement('button'); 
copyButton.textContent = 'Copy Text'; // Set button label
document.body.appendChild(copyButton); // Add the button to the DOM

// Add click event to the button to copy text
copyButton.addEventListener('click', () => {
  const text = textBox.value; // Get the value of the text box
  if (text) { // Ensure there's text to copy
    navigator.clipboard
      .writeText(text) // Copy text to the clipboard
      .then(() => {
        alert('Text copied to clipboard!'); // Show success message
      })
      .catch((err) => {
        console.error('Failed to copy text:', err); // Log any errors
      });
  } else {
    alert('Please enter some text to copy.'); // Alert if no text is entered
  }
});