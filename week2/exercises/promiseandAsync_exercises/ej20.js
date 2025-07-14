async function retryWithDelay(asyncFunction, retries, delay) {

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await asyncFunction(); 
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message); // Log the error message 

      if (attempt === retries) {
        throw new Error('All retries failed'); 
      }
      await new Promise((resolve) => setTimeout(resolve, delay * attempt)); // Wait for the specified delay before the next attempt
    }
  }
}

const simulateAsyncTask = async () => {
  if (Math.random() > 0.7) { // Simulate a 30% chance of success
    return 'Success!';
  } else {
    throw new Error('Random failure');
  }
};

retryWithDelay(simulateAsyncTask, 5, 1000)

  .then((result) => console.log('Operation succeeded:', result))
  .catch((error) => console.error('Operation failed:', error.message));