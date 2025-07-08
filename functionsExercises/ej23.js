function firstUniqueChar(str) {

  str.split('');
  var result = '';
  var counter = 0;
 
    for (var i = 0; i < str.length; i++) {
        counter = 0;
        for (var y = 0; y < str.length; y++) {
            if (str[i] === str[y]) {
                counter += 1;
            }
        }
        if (counter < 2) {
        result = str[i];
        break;
        }
  }
    return result;
}

console.log(firstUniqueChar('abacddbec')); 
console.log(firstUniqueChar('aabbcc'));