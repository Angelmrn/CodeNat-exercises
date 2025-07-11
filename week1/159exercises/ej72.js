function firstlastsame(arr){
 
  return arr[0] ==  arr[arr.length - 1];// Check if the first or last element are the same
}


console.log(firstlastsame([10, 20, 30])); 
console.log(firstlastsame([10, 20, 30, 10])); 
console.log(firstlastsame([20, 20, 20])); 