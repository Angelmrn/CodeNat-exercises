const promiseRejection = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred!"); // Reject the Promise with an error message
  }, 1000); 
});

promiseRejection
  .then((result) => {
    console.log("This will not be logged:", result); 
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });