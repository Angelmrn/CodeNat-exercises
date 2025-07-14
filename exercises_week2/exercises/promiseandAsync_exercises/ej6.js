const asyncTask = (taskName, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} completed`);
      resolve(taskName);
    }, time);
  });
};

const tasks = [
  () => asyncTask("Task 1", 1000),
  () => asyncTask("Task 2", 2000),
  () => asyncTask("Task 3", 1500),
];

const processTasksSequentially = (tasks) => {
  let promise = Promise.resolve(); // Start with a resolved promise
  tasks.forEach((task) => {
    promise = promise.then(() => task()); // Chain the next task to the previous promise
  });

  return promise;
};

// Execute the tasks
processTasksSequentially(tasks).then(() => {
  console.log("All tasks completed sequentially");
});