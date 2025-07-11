repeat = function (str, times) {
    if(typeof(times) == "undefined") {//Set default times to 1
    times =1;
  }
  return times < 1 ? '' : new Array(times + 1).join(str);//if times is less than 1, return empty string, otherwise create an array of size times and join it with the string
    }

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));