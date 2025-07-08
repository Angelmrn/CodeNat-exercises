function sortarray(str){
    return str.split("").sort().join("");//sort(): put the characters in order alphabetically
}

console.log(sortarray("hello")); // Output: "ehllo"
console.log(sortarray("javascript")); // Output: "aacijprstv"
console.log(sortarray("sortthis")); // Output: "hiorsstt"
console.log(sortarray("Exercises")); // Output: "Ecegiinrss"