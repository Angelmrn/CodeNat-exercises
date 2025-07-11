function NestedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Promise((resolve) => { // Create a nested Promise
          setTimeout(() => resolve('Nested Promise Resolved!'), 1000);
        })
      );
    }, 1000);
  });
}

async function handleNestedPromise() {
  const firstLevel = await NestedPromise();
  const result = await firstLevel; 
  console.log(result); 
}

handleNestedPromise();
