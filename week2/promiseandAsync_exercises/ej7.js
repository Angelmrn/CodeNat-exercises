const asyncTask = (taskName, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} completed`);
      resolve(taskName);
    }, time);
  });
};

const executeTasks = async () => {// Define an async function to execute tasks sequentially
  const task1 = await asyncTask("Task 1", 1000);
  console.log("waiting for Task 2 to complete...");

  const task2 = await asyncTask("Task 2", 2000);
  console.log("waiting for Task 3 to complete...");

  const task3 = await asyncTask("Task 3", 1500);
  console.log("All tasks completed sequentially");
};

executeTasks();