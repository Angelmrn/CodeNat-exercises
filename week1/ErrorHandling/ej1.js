function validateInteger(num) {
  
  if (!Number.isInteger(num)){
    throw new Error('Invalid number. Please input an integer.');
  }else{
    console.log('Number is valid:', num);
  }
}

try {
  
    validateInteger(12); 
    validateInteger(0);
    validateInteger(2.12);
} catch (error) {
  console.log('Error:', error.message);
}