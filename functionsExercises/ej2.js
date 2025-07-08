function Palindrome(str){

    var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');// Remove all non-alphanumeric characters and convert to lowercase
	var count = 0;

	if(newStr === "") {
		console.log("String is empty.");
		return false;
	}
	if ((newStr.length) % 2 === 0) {
		count = (newStr.length) / 2;//compare half the string
	} else {
		if (newStr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
            //if the string is odd and has more than one character, we ignore the middle character
			count = (newStr.length - 1) / 2;
		}
	}
	for (var x = 0; x < count; x++) {
		if (newStr[x] != newStr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
Palindrome('madam');
Palindrome('nursesrun');
Palindrome('fox');
Palindrome('racecar');