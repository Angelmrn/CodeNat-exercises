function promiseSetTimeout(timeout) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${timeout} milliseconds`);
    }, timeout);
  });
}

promiseSetTimeout(2000).then((message) => console.log(message));