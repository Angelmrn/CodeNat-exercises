function accessElement(arr, index) {
  try {
    const element = arr[index];
    // Check if the index is out of bounds
    if (element === undefined) {
      throw new RangeError('Index out of bounds');
    }else{
        console.log('Accessed element:', element);
    }
    
  } catch (error) {
    // Check if the error is a RangeError
    if (error instanceof RangeError) {
      console.log('Error: Invalid index. Please provide a valid index within the array bounds.');
    } else {
      console.log('Error:', error.message);
    }
  }
}

accessElement([1, 2, 3, 4, 5], 1);
accessElement([1, 2, 3, 4, 5], 5);