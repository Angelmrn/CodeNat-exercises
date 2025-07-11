const promise1 = Promise.resolve("Resolved from promise1");
const promise2 = Promise.reject("Error from promise2");
const promise3 = Promise.resolve("Resolved from promise3");

Promise.allSettled([promise1, promise2, promise3])// Execute all promises and wait for all to settle
  .then((results) => {// Handle the results of all promises
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Fulfilled:", result.value);
      } else if (result.status === "rejected") {
        console.log("Rejected:", result.reason);
      }
    });
  });