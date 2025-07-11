function LongestName(arrNames) {

  return arrNames.reduce(function(longerName, country) {// Compare the lengths of the current longest name and the current country name
    return longerName.length > country.length ? longerName : country;// If the current longest name is longer, keep it; otherwise, update it with the current country name
  }, "");//start with an empty string as the initial longest name, then iterate through the array of country names to find the longest one
}

console.log(LongestName(["Australia", "Germany", "United States of America"]));
