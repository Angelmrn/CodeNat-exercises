function findPerfectNum(num) {

  var temp = 0;
  // Iterate through numbers from 1 to half of the input number
  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;// If the number is a factor, add it to temp
    }
  }
  if (temp === num && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}

findPerfectNum(6);
findPerfectNum(12);
findPerfectNum(496);