const RequestThrottle = (id, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Request ${id} completed in ${time}ms`);
    }, time);
  });
};

const throttledAPI = (requests, maxConcurrent) => {// Function to handle throttling of API requests
  const results = [];
  let running = 0;
  let currentIndex = 0;

  return new Promise((resolve) => {
    // Function to process the next request
    const nextPromise = () => {
      if (currentIndex >= requests.length && running === 0) {
        resolve(results); // Resolve when all requests are processed
        return;
      }
      if (running < maxConcurrent && currentIndex < requests.length) {
        running++; 
        const index = currentIndex;
        const request = requests[currentIndex];
        currentIndex++; // Move to the next request

        request().then((result) => {
          results[index] = result; // Store the result
          running--;
          nextPromise(); // Trigger the next request
        });
      }
    };

    for (let i = 0; i < maxConcurrent; i++) {// Start the initial concurrent requests
        nextPromise();
    }
  });
};

const requests = [
  () => RequestThrottle(1, 1000),
  () => RequestThrottle(2, 500),
  () => RequestThrottle(3, 1500),
  () => RequestThrottle(4, 100),
  () => RequestThrottle(5, 2000),
];

throttledAPI(requests, 2).then((results) => {
  console.log("Results:", results); 
});