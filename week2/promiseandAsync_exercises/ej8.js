const asyncTask = (taskName, time, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`Error in ${taskName}`);
      } else {
        resolve(`${taskName} completed`);
      }
    }, time);
  });
};

const executeTask = async () => {
  try {
    const result1 = await asyncTask("Task 1", 1000, false);
    console.log(result1);

    const result2 = await asyncTask("Task 2", 2000, true); 
    console.log(result2);

  } catch (error) {
    console.error("Caught an error:", error); // Handle the error

  } finally {
    console.log("Execution finished"); // Always executes
  }
};

executeTask();