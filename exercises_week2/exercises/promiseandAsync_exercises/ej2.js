function promiseChain(taskName, delay) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${taskName} completed`);
    }, delay); // get the delay from the parameter
  });
}

promiseChain("Task 1", 1000) 
  .then((Task1) => {
    console.log(Task1);
    return promiseChain("Task 2", 2000); // start the next task
  })
  .then((Task2) => {
    console.log(Task2); 
    return promiseChain("Task 3", 1500);
  })
  .then((Task3) => {
    console.log(Task3);
    console.log("All tasks completed!");
  });