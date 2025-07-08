function expressionErr(exp) {
 
  try {
    // Evaluate the expression using the eval function
    const result = eval(exp);
    
    console.log('Result:', result);
  } catch (error) {
    // Check if the error is an instance of EvalError
    if (error instanceof EvalError) {
      console.log('EvalError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}


expressionErr('30 + 30'); // Valid expression
expressionErr('3 +'); // Invalid expression
expressionErr('3 + 5'); // Valid expression
expressionErr('3 + 5 +'); // Invalid expression