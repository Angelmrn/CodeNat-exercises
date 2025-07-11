function syncTask() { // no delay
  return "Synchronous result";
}

function asyncTask() { // delayed execution
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Asynchronous result");
    }, 2000);
  });
}

Promise.all([syncTask(), asyncTask()])
  .then((results) => {
    console.log("Results:", results); 
  })
  .catch((error) => {
    console.error("Error:", error); r
  });