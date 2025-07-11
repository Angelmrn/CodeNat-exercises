function firstlast1(arr){
 
  return arr[0] == 1 || arr[arr.length - 1] == 1;// Check if the first or last element is 1
}


console.log(firstlast1([1, 3, 5]));
console.log(firstlast1([1, 3, 5, 1]));
console.log(firstlast1([2, 4, 6]));