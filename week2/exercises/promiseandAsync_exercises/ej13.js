function debouncedFunction(func, delay) {
  let timeout;

  return function (...args) {
    return new Promise((resolve) => {

      clearTimeout(timeout);// Clear the previous timeout if it exists
      timeout = setTimeout(() => {
        resolve(func(...args))
      }, delay);
    });
  };
}

const debouncedLog = debouncedFunction((message) => {
  console.log(message); 
  return "Message logged";
}, 1000);

debouncedLog("Hello, World!").then(console.log);
debouncedLog("Hello, JavaScript!").then(console.log);