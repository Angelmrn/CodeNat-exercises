function promiseWrapper(delay) {

  return new Promise((resolve, reject) => {

    const isSuccess = Math.random() > 0.5;// Randomly determine success or failure

    setTimeout(() => {
      if (isSuccess) {
        resolve(`Operation succeeded after ${delay}ms`);
      } else {
        reject(new Error(`Operation failed after ${delay}ms`));
      }
    }, delay);
  });
}

promiseWrapper(1000)
  .then((result) => console.log(result)) 
  .catch((error) => console.error(error)); 