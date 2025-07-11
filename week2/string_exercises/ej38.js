insensitiveSearch = function (str, target){

    var result= str.search(new RegExp(target, "i"));// Create a regular expression to search for the target string in a case-insensitive manner
  
    if (result>0){
        return 'Matched';
    }else{
        return 'Not Matched';
    }
}

console.log(insensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(insensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(insensitiveSearch('JavaScript Exercises', 'Exercisess'));