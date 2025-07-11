function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 1');
      resolve(); // Resolve the promise after 1 second
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 2');
      resolve(); // Resolve the promise after 2 seconds
    }, 2000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 3');
      resolve(); // Resolve the promise after 1.5 seconds
    }, 1500);
  });
}

async function performOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    console.log('All operations completed');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

performOperations();