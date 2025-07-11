var var_name = "abcd";//variable named var_name and assign it the string 'abcd'

var n = 120;//variable named n and assign it the number 120

this[var_name] = n;// Assign the value of n to the property named 'abcd' in the global object (this)

console.log(this[var_name]); // Output the value of 'abcd' property in the global object, which is 120