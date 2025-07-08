var num = Math.ceil(Math.random() * 10);//Random number between 1 and 10
console.log(num);

var guess = prompt('Guess the number between 1 and 10 inclusive');

var resultDiv = document.getElementById('result');//Get the result element

// Check if the guessed number matches the generated random number
if (guess == num) {
    console.log('Matched');
    resultDiv.innerHTML = 'MATCHED! The number was: ' + num;// show success message in HTML
} else {
    console.log('Not matched, the number was ' + num);
    resultDiv.innerHTML = 'Not matched, the number was: ' + num;// show failure message in HTML

} 