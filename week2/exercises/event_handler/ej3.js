   // Function to change background color on mouse enter
    function changeBackgroundColor(elementId, color) {
      const element = document.getElementById(elementId);
      if (element) {// Check if the element exists
        element.addEventListener('mouseenter', () => {// Add event listener for mouse enter
          element.style.backgroundColor = color;
        });
      }
    }

    // Call the function with element ID and desired color
    changeBackgroundColor('myDiv', 'green');