function allcomb(str) {

  var arr = [];

  for (var x = 0, y = 1; x < str.length; x++, y++) {// Create substrings of length 1 to n
    arr[x] = str.substring(x, y);
  }
  var combi = [];
  var temp = "";
  
  var totComb = Math.pow(2, arr.length);// Total combinations = 2^n
  // Generate all combinations using bit manipulation
  for (var i = 0; i < totComb; i++) {
    temp = "";

    for (var j = 0; j < arr.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += arr[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}

allcomb("dog"); 
allcomb("cat");
