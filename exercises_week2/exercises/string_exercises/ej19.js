reverseBinaryString = function (n) {

	return parseInt(n.toString(2)//turns the binary representation of n
    .split('').reverse().join(''), 2);//reverses the binary string and converts it back to decimal
}
console.log(reverseBinaryString(100));
console.log(reverseBinaryString(1134));