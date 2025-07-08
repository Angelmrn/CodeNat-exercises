function parse_JSON(jsonStr) {
 
  try {
    // Attempt to parse the JSON string and store the parsed data
    const parsedData = JSON.parse(jsonStr);//Convert JSON string to JavaScript object
    console.log('Parsed data:', parsedData);
  } catch (error) {
    // Check if the error is an instance of SyntaxError
    if (error instanceof SyntaxError) {
      console.log('SyntaxError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}


parse_JSON('{"name": "Rowan Octave", "age": 30}'); // Valid JSON
parse_JSON('{"name": "Rowan Octave", "age": 30,}'); // Invalid JSON
parse_JSON('{"name": "Rowan Octave", "age": 30, "city": "New York"}'); // Valid JSON
parse_JSON('{"name": "Rowan Octave", "age: 30, "city": "New York"}'); // Invalid JSON