    const form = document.getElementById('Form');
    const errorMessages = document.getElementById('errorMessages');
    form.addEventListener('submit', (event) => {//Execute when the form is submitted
      event.preventDefault();// Prevent the default form submission behavior
      errorMessages.innerHTML = '';// Clear previous error messages
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach((field) => {// Check each required field
        if (field.value.trim() === '') {
          const fieldName = field.getAttribute('name');
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `${fieldName} is required.`;
          errorMessages.appendChild(errorMessage);
        }
      });
    });