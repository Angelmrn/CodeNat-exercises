const textInput = document.getElementById('textInput');// Get the text input element
    textInput.addEventListener('keydown', (event) => {// Add an event listener for the keydown event
      if (event.key === 'Enter') {//when the Enter key is pressed
        console.log('Enter key pressed!');
        alert('Enter key pressed!');
        // Perform desired actions here
      }
    });