function repeat_Function(funct, interval) {
  funct();
  const intervalId = setInterval(funct, interval);
  return function stopExecution() {
    clearInterval(intervalId);
    console.log('Execution stopped.');
  };
}
const intervalMs = 1000; // 1 second
function printMessage() {// Define the function to be repeated

  console.log('Executing the function...');
}
// Start the repeated execution
const stopExecution = repeat_Function(printMessage, intervalMs);
// Stop the execution after 4 seconds
setTimeout(() => {
  stopExecution();
}, 5000);
