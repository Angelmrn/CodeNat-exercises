function asyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Async operation completed!'), 3000); 
  });
}
async function simulateLoadingSpinner() {
  console.log('Loading...');
  const result = await asyncOperation();
  console.log(result);
}

simulateLoadingSpinner();