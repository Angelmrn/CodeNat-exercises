function cancelablePromise(executor) {
  let cancel; 

  const promise = new Promise((resolve, reject) => {
    cancel = () => reject(new Error('Promise cancelled')); 
    executor(resolve, reject); 
  });
  promise.cancel = cancel; // Attach cancel function to the promise
  return promise;
}

const cancellable = cancelablePromise((resolve) => {
  setTimeout(() => resolve('Operation completed!'), 5000); 
});

cancellable.then(console.log).catch(console.error); 

setTimeout(() => {
  cancellable.cancel(); 
}, 2000);