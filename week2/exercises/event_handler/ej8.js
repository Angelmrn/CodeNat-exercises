// Function to update the progress bar
    function updateProgress(progressPercentage) {
      const progressBarFill = document.getElementById('progress');// Get the fill element of the progress bar
      progressBarFill.style.width = `${progressPercentage}%`;// Update the width of the fill element
    }
    updateProgress(45);