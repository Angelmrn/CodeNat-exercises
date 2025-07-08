// Define a function to multiply two numbers and display the result
function multiplyBy() {
    // Get the values of the input 
    num1 = document.getElementById("firstNumber").value;//id "firstNumber"
    num2 = document.getElementById("secondNumber").value;//id "secondNumber"

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
}

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input 
    num1 = document.getElementById("firstNumber").value;//id "firstNumber"
    num2 = document.getElementById("secondNumber").value;//id "secondNumber"

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
} 