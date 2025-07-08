function referenceErr() {
  try {
    //Attempt to log an undefined variable
    console.log(undefinedVariable);
  } catch (error) {
    // Check if the error is an instance of ReferenceError
    if (error instanceof ReferenceError) {
      console.log('ReferenceError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

referenceErr();// Attempt to access an undefined variable
