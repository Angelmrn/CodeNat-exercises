const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 1 resolved!'), 3000); 
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 2 resolved!'), 2000); 
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 3 resolved!'), 1000);
});

Promise.race([promise1, promise2, promise3]).then((result) => { // Get the first resolved promise
  console.log(result);
});