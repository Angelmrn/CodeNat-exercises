async function loadAndExecute() {
  const module = await import('./mathOperations.mjs'); // importing the module
  const result = await module.fetchData();// calling the async function
  console.log(result); 
}

loadAndExecute();