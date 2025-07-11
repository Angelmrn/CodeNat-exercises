// Define a function to convert Celsius to Fahrenheit
function CeltoFahr(celsius) {
  var cTemp = celsius;  // Store the input Celsius temperature in a variable

  var cToFahr = cTemp * 9 / 5 + 32;// Calculate the equivalent Fahrenheit temperature
 
  var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.'; // message describing the conversion result

  console.log(message);
}

// Define a function to convert Fahrenheit to Celsius
function FahrToCel(fahrenheit) {
  
  var fTemp = fahrenheit;// Store the input Fahrenheit temperature in a variable

  var fToCel = (fTemp - 32) * 5 / 9;// Calculate the equivalent Celsius temperature

  var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.'; //message describing the conversion result

  console.log(message);
}

CeltoFahr(60);

FahrToCel(45); 