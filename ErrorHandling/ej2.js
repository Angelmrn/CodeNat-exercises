try {
  const undefinedObject = undefined;// Simulating an undefined object
  console.log(undefinedObject.property);// Trying to access a property of an undefined object
} 

catch (error) {
    // Check if the error is a TypeError
  if (error instanceof TypeError) {
    console.log('Error: Property access to undefined object');
  }else {
    throw error; // Rethrow the error if it's not a TypeError
  }
}